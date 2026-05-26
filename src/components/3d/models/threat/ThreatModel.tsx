"use client";

import { useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import { useScreenFlicker } from "../../shared/useMaterialFlicker";
import type { ModelProps } from "../../shared/types";

useGLTF.preload("/model5/threat.glb");

/**
 * Screen uses material `Error red` (GLB).
 * White state comes from texture `error white` — there is no `Error white` material.
 */
const SCREEN_MATERIAL = "Error red";
const FLICKER_TEXTURES = ["Error red", "White error"] as const;

export function ThreatModel({ isSelected, isHidden, onSelect }: ModelProps) {
  const { scene, animations, materials } = useGLTF("/model5/threat.glb");
  useLoopAnimations(scene, animations, "typing");
  useLoopAnimations(scene, animations, "pc_fan_run");

  const { play: flickerAnim } = useScreenFlicker({
    scene,
    materials,
    materialName: SCREEN_MATERIAL,
    textureNames: [...FLICKER_TEXTURES],
    isSelected,
    intervalMs: 300,
  });
  const { play: flickerAnim2 } = useScreenFlicker({
    scene,
    materials,
    materialName: "Alert white",
    textureNames: ["Alert white", "Alert red"],
    isSelected,
    intervalMs: 300,
  });
  const { play: flickerAnim3 } = useScreenFlicker({
    scene,
    materials,
    materialName: "Alert red",
    textureNames: ["Alert white", "Alert red"],
    isSelected,
    intervalMs: 300,
  });
  const { play: flickerAnim4 } = useScreenFlicker({
    scene,
    materials,
    materialName: "White error",
    textureNames: ["Error red", "White error"],
    isSelected,
    intervalMs: 300,
  });

  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          flickerAnim();
          flickerAnim2();
          flickerAnim3();
          flickerAnim4();

        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <primitive object={scene} />
      </group>
    </FadeGroup>
  );
}
