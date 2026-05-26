"use client";

import { useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import type { ModelProps } from "../../shared/types";
import { useRouter } from "next/navigation";

useGLTF.preload("/model5/contact.glb");

export function ContactModel({ isHidden, onSelect }: ModelProps) {
  const { scene, animations } = useGLTF("/model5/contact.glb");
  useLoopAnimations(scene, animations, "contact_idle");
  const router = useRouter();

  return (
    <FadeGroup visible={!isHidden} fadeInDelay={0.3} fadeInDuration={0.9}>
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
          router.push("/contact")
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
