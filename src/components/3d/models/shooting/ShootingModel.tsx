"use client";

import { useAnimations, useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useHiddenMeshAnimations } from "../../shared/useHiddenMeshAnimations";
import { useLoopActions } from "../../shared/useLoopAnimations";
import { useBaseLabelHover } from "../../shared/useBaseLabelHover";
import type { ModelProps } from "../../shared/types";

useGLTF.preload("/model5/shooting.glb");

/** Meshes hidden until `play()` runs — add/remove names as needed. */
const SHOOTING_MESHES = [
  "body004",
  "mixamorigHips_1",
  "Virus_bullet",
  "Bug_bullet",
  "Virus",
  "Bug",
] as const;

export function ShootingModel({ isSelected, isHidden, onSelect }: ModelProps) {
  const { scene, animations } = useGLTF("/model5/shooting.glb");
  const { actions } = useAnimations(animations, scene);
  const { hoverIn, hoverOut } = useBaseLabelHover("shooting_grid", "shooting_text");
  useLoopActions(actions, "typing");
  useLoopActions(actions, "pc_fan_run");

  const { play } = useHiddenMeshAnimations({
    scene,
    meshNames: [...SHOOTING_MESHES],
    actions,
    clipNames: ["bug", "virus"],
    isSelected,
    playDelay: 1800,
  });

  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          play();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          hoverIn();
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
          hoverOut();
        }}
      >
        <primitive object={scene} />
      </group>
    </FadeGroup>
  );
}
