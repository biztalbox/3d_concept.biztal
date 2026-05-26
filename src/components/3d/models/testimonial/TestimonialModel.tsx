"use client";

import { useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import type { ModelProps } from "../../shared/types";

useGLTF.preload("/model5/testimonial.glb");

export function TestimonialModel({ isHidden, onSelect }: ModelProps) {
  const { scene, animations } = useGLTF("/model5/testimonial.glb");
  useLoopAnimations(scene, animations, "floating");

  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
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
