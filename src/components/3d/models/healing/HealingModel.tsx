"use client";

import { useAnimations, useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopActions } from "../../shared/useLoopAnimations";
import { useBaseLabelHover } from "../../shared/useBaseLabelHover";
import type { ModelProps } from "../../shared/types";
import { useHiddenMeshAnimations } from "../../shared/useHiddenMeshAnimations";

useGLTF.preload("/model5/healing.glb");

export function HealingModel({ isHidden, onSelect, isSelected }: ModelProps) {
  const { scene, animations } = useGLTF("/model5/healing.glb");
  const { actions } = useAnimations(animations, scene);
  const { hoverIn, hoverOut } = useBaseLabelHover("healing_grid","healing_text");
  useLoopActions(actions, "healing_idle");

  const { play: healingRepairAnim } = useHiddenMeshAnimations({
    scene,
    meshNames: ["body009", "Circle001_0"],
    actions,
    clipNames: ["healing_repair"],
    isSelected,
    playDelay: 1900,
  });


  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          healingRepairAnim()
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
