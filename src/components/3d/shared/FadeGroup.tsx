"use client";

import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useCallback, useRef, useState, type ReactNode } from "react";
import type { Group, Material, Mesh } from "three";

type FadeGroupProps = {
  /** Drives the animation: true → fade in, false → fade out. */
  visible: boolean;
  /** Seconds the fade-in takes. */
  fadeInDuration?: number;
  /** Seconds to wait BEFORE starting the fade-in (lets camera move first). */
  fadeInDelay?: number;
  /** Seconds the fade-out takes (typically faster than fade-in). */
  fadeOutDuration?: number;
  /**
   * Keep children mounted with opacity 0 instead of `visible={false}`.
   * Use for scene intro so GLB materials are ready before reveal.
   */
  preloadWhileHidden?: boolean;
  children: ReactNode;
};

function collectMaterials(root: Group): Material[] {
  const set = new Set<Material>();
  root.traverse((obj) => {
    const mesh = obj as Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((m) => m && set.add(m));
  });
  return Array.from(set);
}

/**
 * Smoothly fades a group of 3D children in and out by animating
 * `material.opacity` — instead of toggling `visible` (which is instant
 * and produces a visible "pop").
 */
export function FadeGroup({
  visible,
  fadeInDuration = 0.8,
  fadeInDelay = 0.3,
  fadeOutDuration = 0.4,
  preloadWhileHidden = false,
  children,
}: FadeGroupProps) {
  const groupRef = useRef<Group>(null);
  const [renderVisible, setRenderVisible] = useState(visible);
  const materialsRef = useRef<Material[]>([]);
  const isFirstRunRef = useRef(true);
  const pendingFadeInRef = useRef(false);
  const knownMaterialsRef = useRef(new Set<Material>());

  const refreshMaterials = useCallback(() => {
    if (!groupRef.current) return materialsRef.current;
    materialsRef.current = collectMaterials(groupRef.current);
    return materialsRef.current;
  }, []);

  const runFadeIn = useCallback(
    (materials: Material[], delay = fadeInDelay) => {
      setRenderVisible(true);
      if (fadeInDuration <= 0 && delay <= 0) {
        materials.forEach((m) => {
          m.transparent = false;
          m.opacity = 1;
          knownMaterialsRef.current.add(m);
        });
        return;
      }

      materials.forEach((m) => {
        m.transparent = true;
        m.opacity = 0;
        knownMaterialsRef.current.add(m);
      });
      gsap.to(materials, {
        opacity: 1,
        duration: fadeInDuration,
        delay,
        ease: "power2.out",
        onComplete: () => {
          materials.forEach((m) => {
            m.transparent = false;
            m.opacity = 1;
          });
        },
      });
    },
    [fadeInDelay, fadeInDuration],
  );

  const hideMaterials = useCallback((materials: Material[]) => {
    materials.forEach((m) => {
      m.transparent = true;
      m.opacity = 0;
    });
  }, []);

  const runFadeOut = useCallback(
    (materials: Material[]) => {
      materials.forEach((m) => {
        m.transparent = true;
      });
      gsap.to(materials, {
        opacity: 0,
        duration: fadeOutDuration,
        ease: "power2.in",
        onComplete: () => {
          setRenderVisible(false);
          materials.forEach((m) => {
            m.transparent = false;
            m.opacity = 1;
          });
        },
      });
    },
    [fadeOutDuration],
  );

  useGSAP(
    () => {
      const materials = refreshMaterials();

      if (isFirstRunRef.current) {
        isFirstRunRef.current = false;
        if (preloadWhileHidden && !visible) {
          setRenderVisible(true);
          if (materials.length > 0) hideMaterials(materials);
        } else {
          setRenderVisible(visible);
        }
        return;
      }

      if (materials.length === 0) {
        if (visible) {
          pendingFadeInRef.current = true;
          setRenderVisible(true);
        } else {
          pendingFadeInRef.current = false;
          setRenderVisible(false);
        }
        return;
      }

      pendingFadeInRef.current = false;
      gsap.killTweensOf(materials);

      if (visible) runFadeIn(materials);
      else runFadeOut(materials);
    },
    { dependencies: [visible, refreshMaterials, runFadeIn, runFadeOut, hideMaterials, preloadWhileHidden], scope: groupRef },
  );

  useFrame(() => {
    if (!preloadWhileHidden || visible || !groupRef.current) return;

    const materials = refreshMaterials();
    if (materials.length === 0) return;

    hideMaterials(materials);
  });

  useFrame(() => {
    if (!visible || !groupRef.current) return;

    const materials = refreshMaterials();
    const newlyLoaded = materials.filter(
      (material) => !knownMaterialsRef.current.has(material),
    );
    if (newlyLoaded.length === 0) return;

    gsap.killTweensOf(newlyLoaded);
    runFadeIn(newlyLoaded, 0);
  });

  useFrame(() => {
    if (!pendingFadeInRef.current || !groupRef.current) return;

    const materials = refreshMaterials();
    if (materials.length === 0) return;

    pendingFadeInRef.current = false;
    gsap.killTweensOf(materials);
    runFadeIn(materials);
  });

  return (
    <group ref={groupRef} visible={renderVisible}>
      {children}
    </group>
  );
}
