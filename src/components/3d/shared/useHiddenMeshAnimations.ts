"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  LoopOnce,
  LoopRepeat,
  type AnimationAction,
  type Object3D,
} from "three";

import { hideMeshes, showMeshes } from "./meshVisibility";

type AnimationActions = Record<string, AnimationAction | null | undefined>;

type UseHiddenMeshAnimationsOptions = {
  scene: Object3D;
  /** Mesh object names to hide until `play()` runs. */
  meshNames: string | string[];
  actions: AnimationActions;
  /** GLB clip names passed to `play()` / stopped on reset. */
  clipNames: string | string[];
  /** When false (exit / deselect), animations stop and meshes hide again. */
  isSelected: boolean;
  /** Delay in ms before revealing meshes and starting clips. Default 0. */
  playDelay?: number;
  loop?: typeof LoopOnce | typeof LoopRepeat;
  clampWhenFinished?: boolean;
};

function toNameList(names: string | string[]): string[] {
  return Array.isArray(names) ? names : [names];
}

function resolveActions(
  actions: AnimationActions,
  clipNames: string[],
): AnimationAction[] {
  return clipNames
    .map((name) => actions[name])
    .filter((action): action is AnimationAction => action != null);
}

/**
 * Hides named meshes by default, reveals them + plays clips on `play()`,
 * and resets (stop clips + hide meshes) when `isSelected` becomes false
 * — e.g. Exit button or ESC.
 *
 * Usage:
 *   const { actions } = useAnimations(animations, scene);
 *   const { play } = useHiddenMeshAnimations({
 *     scene,
 *     meshNames: ["Bug", "Virus"],
 *     actions,
 *     clipNames: ["bug", "virus"],
 *     isSelected,
 *     playDelay: 2000,
 *   });
 *
 *   onClick={() => { onSelect(); play(); }}
 */
export function useHiddenMeshAnimations({
  scene,
  meshNames,
  actions,
  clipNames,
  isSelected,
  playDelay = 0,
  loop = LoopRepeat,
  clampWhenFinished = true,
}: UseHiddenMeshAnimationsOptions) {
  const playTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const actionsRef = useRef(actions);
  const sceneRef = useRef(scene);
  const meshNamesRef = useRef(toNameList(meshNames));
  const clipNamesRef = useRef(toNameList(clipNames));
  const loopRef = useRef(loop);
  const clampRef = useRef(clampWhenFinished);

  actionsRef.current = actions;
  sceneRef.current = scene;
  meshNamesRef.current = toNameList(meshNames);
  clipNamesRef.current = toNameList(clipNames);
  loopRef.current = loop;
  clampRef.current = clampWhenFinished;

  const reset = useCallback(() => {
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = undefined;
    }

    for (const action of resolveActions(
      actionsRef.current,
      clipNamesRef.current,
    )) {
      action.stop();
      action.reset();
    }

    hideMeshes(sceneRef.current, meshNamesRef.current);
  }, []);

  useEffect(() => {
    hideMeshes(scene, meshNames);
  }, [scene, meshNames]);

  useEffect(() => {
    if (!isSelected) reset();
  }, [isSelected, reset]);

  useEffect(() => () => reset(), [reset]);

  const play = useCallback(() => {
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
    }

    playTimeoutRef.current = setTimeout(() => {
      showMeshes(sceneRef.current, meshNamesRef.current);

      for (const action of resolveActions(
        actionsRef.current,
        clipNamesRef.current,
      )) {
        action.reset();
        action.setLoop(loopRef.current, Infinity);
        action.clampWhenFinished = clampRef.current;
        action.play();
      }

      playTimeoutRef.current = undefined;
    }, playDelay);
  }, [playDelay]);

  return { play, reset };
}
