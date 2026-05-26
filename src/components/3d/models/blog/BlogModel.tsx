"use client";

import { useAnimations, useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import { useBaseLabelHover } from "../../shared/useBaseLabelHover";
import type { ModelProps } from "../../shared/types";
import { LoopOnce } from "three";
import { useRouter } from "next/navigation";

useGLTF.preload("/model5/blog.glb");

export function BlogModel({ isHidden, onSelect }: ModelProps) {
  const { scene, animations } = useGLTF("/model5/blog.glb");
  const router = useRouter()
  const { actions } = useAnimations(animations, scene);
  const { hoverIn, hoverOut } = useBaseLabelHover("blog_grid", "blog_text");

  const doorAnim = () => {

    setTimeout(() => {
      const door = actions["door_open"];
      if (!door) return;
      door.reset();
      door.setLoop(LoopOnce, 1);
      door.clampWhenFinished = true;
      door.play();
    }, 500);

    setTimeout(()=>{
      router.push("/blogs");
    }, 1500)
  }

  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          doorAnim();
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
