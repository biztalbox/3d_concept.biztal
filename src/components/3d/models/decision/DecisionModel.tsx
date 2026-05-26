"use client";

import { useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import { useBaseLabelHover } from "../../shared/useBaseLabelHover";
import type { ModelProps } from "../../shared/types";
import { useScreenFlicker } from "../../shared/useMaterialFlicker";

// NOTE: GLB file is "business.glb" even though our model id is "decision".
useGLTF.preload("/model5/business.glb");

export function DecisionModel({ isSelected, isHidden, onSelect }: ModelProps) {
  const { scene, animations, materials } = useGLTF("/model5/business.glb");
  const { hoverIn, hoverOut } = useBaseLabelHover("business_grid", "business_text");

  useLoopAnimations(scene, animations, "standing_using_touchscreen");

  const { play: dashboardAnim } = useScreenFlicker({
    scene,
    materials,
    materialName: "dash up",
    textureNames: ["dash up", "dash low"],
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
          dashboardAnim();
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
