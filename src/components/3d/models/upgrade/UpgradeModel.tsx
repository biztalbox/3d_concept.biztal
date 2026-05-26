"use client";

import { useAnimations, useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import type { ModelProps } from "../../shared/types";
import { useHiddenMeshAnimations } from "../../shared/useHiddenMeshAnimations";
import { useBaseLabelHover } from "../../shared/useBaseLabelHover";

useGLTF.preload("/model5/upgrade.glb");

export function UpgradeModel({ isHidden, onSelect, isSelected }: ModelProps) {
  const { scene, animations, } = useGLTF("/model5/upgrade.glb");
  const { hoverIn, hoverOut } = useBaseLabelHover("upgrade_grid", "upgrade_text");
  const { actions } = useAnimations(animations, scene);

  const { play: upgradeAnim } = useHiddenMeshAnimations({
    scene,
    meshNames: ["body007"],
    actions,
    clipNames: ["Scene"],
    isSelected,
    playDelay: 1900,
  });
  // useLoopAnimations(scene, scene.animations);

  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          upgradeAnim();
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
