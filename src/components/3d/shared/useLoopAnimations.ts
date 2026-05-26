"use client";

import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import {
  LoopRepeat,
  type AnimationAction,
  type AnimationClip,
  type Object3D,
} from "three";

type AnimationActions = Record<string, AnimationAction | null | undefined>;

function resolveLoopActions(
  actions: AnimationActions,
  clips?: string | string[],
): AnimationAction[] {
  let list: (AnimationAction | null | undefined)[];
  if (typeof clips === "string") {
    list = [actions[clips]];
  } else if (Array.isArray(clips)) {
    list = clips.map((name) => actions[name]);
  } else {
    list = Object.values(actions);
  }

  return list.filter((action): action is AnimationAction => action != null);
}

/** Loop clips from an existing `useAnimations()` actions map — no second mixer. */
export function useLoopActions(
  actions: AnimationActions,
  clips?: string | string[],
) {
  useEffect(() => {
    const list = resolveLoopActions(actions, clips);

    list.forEach((action) => {
      action.reset();
      action.setLoop(LoopRepeat, Infinity);
      action.play();
    });

    return () => {
      list.forEach((action) => action.stop());
    };
  }, [actions, clips]);
}

/**
 * Plays GLB animations on loop. DRY helper for every interactive model.
 *
 * Usage:
 *   const { scene, animations } = useGLTF("/model5/healing.glb");
 *   useLoopAnimations(scene, animations);                     // play ALL
 *   useLoopAnimations(scene, animations, "standing_idle");    // play ONE by name
 *   useLoopAnimations(scene, animations, ["idleA", "idleB"]); // play multiple
 *
 * When you already call `useAnimations()` for other clips, prefer
 * `useLoopActions(actions, "idle")` so the scene only gets one mixer.
 *
 * Note: clips live on the `animations` array returned by `useGLTF`, NOT on
 * `scene` — logging `scene` in the console won't show them.
 *
 * If a named clip isn't present in the GLB, it's silently skipped — safe
 * to leave the prop in even after refactoring the source asset.
 *
 * Automatically stops/cleans up on unmount (per drei's `useAnimations` lifecycle).
 */
export function useLoopAnimations(
  scene: Object3D,
  animations: AnimationClip[],
  clips?: string | string[],
) {
  const { actions } = useAnimations(animations, scene);
  useLoopActions(actions, clips);
}
