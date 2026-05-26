"use client";

import { useGLTF } from "@react-three/drei";

import { FadeGroup } from "../../shared/FadeGroup";
import { useLoopAnimations } from "../../shared/useLoopAnimations";
import type { ModelProps } from "../../shared/types";
import type { MeshStandardMaterial } from "three";

useGLTF.preload("/model5/chat.glb");

/**
 * Interactive 3D "chat" model — baseline template for all other model
 * components (see models/healing, models/decision, etc.).
 *
 * Structure (same for every model):
 *   <FadeGroup>             ← smooth opacity in/out when isHidden flips
 *     <group onClick onHover onPointerOut>
 *       <primitive object={scene} />
 *     </group>
 *   </FadeGroup>
 */
export function ChatModel({ isHidden, onSelect }: ModelProps) {
  const { scene, animations } = useGLTF("/model5/chat.glb");

  const { meshes } = useGLTF("/model5/base.glb")

  const hoverArea = meshes["chat_grid"];
  const text = meshes["chat_text"];

  const hoverAreaMat = Array.isArray(hoverArea.material)
    ? hoverArea.material[0]
    : hoverArea.material;
  const textMat = (
    Array.isArray(text.material) ? text.material[0] : text.material
  ) as MeshStandardMaterial;

  const hoverIn = () => {
    hoverAreaMat.opacity = 1;
    textMat.color.set(0x000000);
  };
  const hoverOut = () => {
    hoverAreaMat.opacity = 0;
    textMat.color.set(0x9ea0a7);
  };

  // Play the specific built-in clip this GLB ships with. If you omit the
  // clip name, all clips play in parallel — useful for models with a
  // single ambient animation.
  useLoopAnimations(scene, animations, "standing_using_touchscreen");

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
