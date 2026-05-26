"use client";

import { useGLTF } from "@react-three/drei";
import { useCallback } from "react";
import type { MeshStandardMaterial } from "three";

useGLTF.preload("/model5/base.glb");

function getMaterial(mesh: { material: unknown }) {
  return Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
}

/** Hover label on `base.glb` floor meshes — grid/chat area + text. */
export function useBaseLabelHover(gridMeshName: string, textMeshName: string) {
  const { meshes } = useGLTF("/model5/base.glb");

  const hoverArea = meshes[gridMeshName];
  const text = meshes[textMeshName];
  const hoverAreaMat = hoverArea ? getMaterial(hoverArea) : undefined;
  const textMat = text
    ? (getMaterial(text) as MeshStandardMaterial)
    : undefined;

  const hoverIn = useCallback(() => {
    if (!hoverAreaMat || !textMat) return;
    hoverAreaMat.opacity = 1;
    textMat.color.set(0x000000);
  }, [hoverAreaMat, textMat]);

  const hoverOut = useCallback(() => {
    if (!hoverAreaMat || !textMat) return;
    hoverAreaMat.opacity = 0;
    textMat.color.set(0x9ea0a7);
  }, [hoverAreaMat, textMat]);

  return { hoverIn, hoverOut };
}
