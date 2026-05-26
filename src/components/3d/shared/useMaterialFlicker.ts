"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  type Material,
  type Mesh,
  type MeshStandardMaterial,
  type Object3D,
  type Texture,
} from "three";

type MaterialsMap = Record<string, Material | undefined>;

type UseScreenFlickerOptions = {
  scene: Object3D;
  /** `useGLTF()` materials map — used for name lookup. */
  materials?: MaterialsMap;
  /**
   * Material on the screen mesh to flicker — e.g. `"Error red"`.
   * Used to auto-find the mesh + material slot.
   */
  materialName: string;
  /**
   * Two or more texture/material labels to cycle.
   * Accepts GLB texture names (`error white`) or material names (`Error red`).
   */
  textureNames: string[];
  isSelected: boolean;
  intervalMs?: number;
  /** Optional — skip auto-detect and target this mesh directly. */
  meshName?: string;
};

type MaterialSlotTarget = {
  mesh: Mesh;
  materialIndex: number;
  material: Material;
};

type TextureSlotState = {
  map: Texture | null;
  emissiveMap: Texture | null;
};

function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

function asStandardMaterial(material: Material): MeshStandardMaterial | null {
  return "map" in material ? (material as MeshStandardMaterial) : null;
}

function getMeshMaterials(mesh: Mesh): Material[] {
  return Array.isArray(mesh.material) ? mesh.material : [mesh.material];
}

function collectTexturesByName(scene: Object3D): Map<string, Texture> {
  const textures = new Map<string, Texture>();

  scene.traverse((obj) => {
    if (!(obj as Mesh).isMesh) return;

    for (const material of getMeshMaterials(obj as Mesh)) {
      const standard = asStandardMaterial(material);
      if (!standard) continue;

      for (const texture of [standard.map, standard.emissiveMap]) {
        if (!texture?.name) continue;
        textures.set(texture.name, texture);
        textures.set(normalizeName(texture.name), texture);
      }
    }
  });

  return textures;
}

function collectMaterialsByName(
  scene: Object3D,
  materialsMap?: MaterialsMap,
): Map<string, Material> {
  const registry = new Map<string, Material>();

  if (materialsMap) {
    for (const [name, material] of Object.entries(materialsMap)) {
      if (!material) continue;
      registry.set(name, material);
      registry.set(normalizeName(name), material);
    }
  }

  scene.traverse((obj) => {
    if (!(obj as Mesh).isMesh) return;

    for (const material of getMeshMaterials(obj as Mesh)) {
      if (!material.name) continue;
      registry.set(material.name, material);
      registry.set(normalizeName(material.name), material);
    }
  });

  return registry;
}

function getPrimaryTexture(material: Material): Texture | null {
  const standard = asStandardMaterial(material);
  if (!standard) return null;
  return standard.map ?? standard.emissiveMap ?? null;
}

function resolveFlickerTexture(
  label: string,
  textureRegistry: Map<string, Texture>,
  materialRegistry: Map<string, Material>,
): Texture | null {
  const direct =
    textureRegistry.get(label) ?? textureRegistry.get(normalizeName(label));
  if (direct) return direct;

  const material =
    materialRegistry.get(label) ?? materialRegistry.get(normalizeName(label));
  if (!material) return null;

  return getPrimaryTexture(material);
}

function findMaterialSlot(
  scene: Object3D,
  materialName: string,
  meshName?: string,
): MaterialSlotTarget | null {
  const wanted = normalizeName(materialName);
  let target: MaterialSlotTarget | null = null;

  scene.traverse((obj) => {
    if (target || !(obj as Mesh).isMesh) return;

    const mesh = obj as Mesh;
    if (meshName && mesh.name !== meshName) return;

    getMeshMaterials(mesh).forEach((material, materialIndex) => {
      if (target) return;
      if (normalizeName(material.name) !== wanted) return;
      target = { mesh, materialIndex, material };
    });
  });

  return target;
}

function readTextureSlots(material: Material): TextureSlotState {
  const standard = asStandardMaterial(material);
  return {
    map: standard?.map ?? null,
    emissiveMap: standard?.emissiveMap ?? null,
  };
}

function applyTextureSlots(material: Material, texture: Texture) {
  const standard = asStandardMaterial(material);
  if (!standard) return;

  if (standard.map) standard.map = texture;
  if (standard.emissiveMap) standard.emissiveMap = texture;
  standard.needsUpdate = true;
}

function restoreTextureSlots(material: Material, original: TextureSlotState) {
  const standard = asStandardMaterial(material);
  if (!standard) return;

  if (original.map) standard.map = original.map;
  if (original.emissiveMap) standard.emissiveMap = original.emissiveMap;
  standard.needsUpdate = true;
}

/**
 * Screen flicker — swaps `map` + `emissiveMap` on a known screen material.
 *
 * Why this works better than auto-detect-by-texture-name:
 * - GLB may have texture names (`error white`) that differ from material names (`Error red`)
 * - Monitor meshes are often multi-material — we target one material slot explicitly
 *
 * Usage:
 *   const { scene, materials } = useGLTF("/model5/threat.glb");
 *   const { play } = useScreenFlicker({
 *     scene,
 *     materials,
 *     materialName: "Error red",
 *     textureNames: ["Error red", "Error white"],
 *     isSelected,
 *     intervalMs: 200,
 *   });
 */
export function useScreenFlicker({
  scene,
  materials: materialsMap,
  materialName,
  textureNames,
  isSelected,
  intervalMs = 200,
  meshName,
}: UseScreenFlickerOptions) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const indexRef = useRef(0);
  const targetRef = useRef<MaterialSlotTarget | null>(null);
  const originalTexturesRef = useRef<TextureSlotState | null>(null);
  const flickerTexturesRef = useRef<Texture[]>([]);

  const sceneRef = useRef(scene);
  const materialsMapRef = useRef(materialsMap);
  const materialNameRef = useRef(materialName);
  const textureNamesRef = useRef(textureNames);
  const meshNameRef = useRef(meshName);
  const intervalMsRef = useRef(intervalMs);

  sceneRef.current = scene;
  materialsMapRef.current = materialsMap;
  materialNameRef.current = materialName;
  textureNamesRef.current = textureNames;
  meshNameRef.current = meshName;
  intervalMsRef.current = intervalMs;

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }

    indexRef.current = 0;

    const target = targetRef.current;
    const original = originalTexturesRef.current;
    if (target && original) {
      restoreTextureSlots(target.material, original);
    }
  }, []);

  const applyAtIndex = useCallback((index: number) => {
    const target = targetRef.current;
    const texture = flickerTexturesRef.current[index];
    if (!target || !texture) return;
    applyTextureSlots(target.material, texture);
  }, []);

  const play = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const textureRegistry = collectTexturesByName(sceneRef.current);
    const materialRegistry = collectMaterialsByName(
      sceneRef.current,
      materialsMapRef.current,
    );

    const textures = textureNamesRef.current
      .map((name) =>
        resolveFlickerTexture(name, textureRegistry, materialRegistry),
      )
      .filter((texture): texture is Texture => texture != null);

    if (textures.length < 2) return;

    const target = findMaterialSlot(
      sceneRef.current,
      materialNameRef.current,
      meshNameRef.current,
    );
    if (!target) return;

    targetRef.current = target;
    flickerTexturesRef.current = textures;
    originalTexturesRef.current = readTextureSlots(target.material);

    indexRef.current = 0;
    applyAtIndex(0);

    intervalRef.current = setInterval(() => {
      const count = flickerTexturesRef.current.length;
      if (count === 0) return;
      indexRef.current = (indexRef.current + 1) % count;
      applyAtIndex(indexRef.current);
    }, intervalMsRef.current);
  }, [applyAtIndex]);

  useEffect(() => {
    if (!isSelected) reset();
  }, [isSelected, reset]);

  useEffect(() => () => reset(), [reset]);

  return { play, reset };
}

/** @deprecated Prefer `useScreenFlicker`. */
export function useTextureFlicker(options: {
  scene: Object3D;
  materials?: MaterialsMap;
  textureNames: string[];
  isSelected: boolean;
  intervalMs?: number;
  anchorName?: string;
  meshName?: string;
}) {
  return useScreenFlicker({
    scene: options.scene,
    materials: options.materials,
    materialName: options.anchorName ?? options.textureNames[0] ?? "Error red",
    textureNames: options.textureNames,
    isSelected: options.isSelected,
    intervalMs: options.intervalMs,
    meshName: options.meshName,
  });
}

export const useMaterialFlicker = useTextureFlicker;

export type { UseScreenFlickerOptions };
