"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { LoopOnce } from "three";

import { SCENE_INTRO_CONFIG } from "./shared/scene-intro-config";

useGLTF.preload("/model5/base.glb");

type BaseProps = {
  /** When true, `opening_sequence` plays from frame 0 (call after loader hides). */
  startIntro?: boolean;
  /** Base GLB + clip are ready — safe to hide the loader. */
  onReady?: () => void;
  /** Fired once when `opening_sequence` has fully finished. */
  onOpeningComplete?: () => void;
};

export default function Base({
  startIntro = false,
  onReady,
  onOpeningComplete,
}: BaseProps) {
  const { scene, animations } = useGLTF("/model5/base.glb");
  const { actions, mixer } = useAnimations(animations, scene);
  const completedRef = useRef(false);
  const drivingRef = useRef(false);
  const readyCalledRef = useRef(false);
  const startTimeRef = useRef(0);
  const onCompleteRef = useRef(onOpeningComplete);
  const onReadyRef = useRef(onReady);

  onCompleteRef.current = onOpeningComplete;
  onReadyRef.current = onReady;

  const openingAction = actions.opening_sequence;
  const hasOpeningClip = animations.some(
    (clip) => clip.name === "opening_sequence",
  );

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    drivingRef.current = false;
    onCompleteRef.current?.();
  };

  useEffect(() => {
    if (readyCalledRef.current) return;

    if (openingAction) {
      readyCalledRef.current = true;
      onReadyRef.current?.();
      return;
    }

    if (animations.length > 0 && !hasOpeningClip) {
      readyCalledRef.current = true;
      onReadyRef.current?.();
    }
  }, [openingAction, animations.length, hasOpeningClip]);

  useEffect(() => {
    if (!startIntro || completedRef.current || drivingRef.current) return;

    if (!openingAction) {
      finish();
      return;
    }

    openingAction.stop();
    openingAction.reset();
    openingAction.time = 0;
    openingAction.setLoop(LoopOnce, 1);
    openingAction.clampWhenFinished = true;
    openingAction.setEffectiveTimeScale(SCENE_INTRO_CONFIG.openingPlaybackSpeed);
    openingAction.enabled = true;
    openingAction.play();
    openingAction.paused = true;

    drivingRef.current = true;
    startTimeRef.current = performance.now();
  }, [startIntro, openingAction]);

  useFrame(() => {
    if (!drivingRef.current || completedRef.current) return;

    const action = actions.opening_sequence;
    if (!action) return;

    const speed = SCENE_INTRO_CONFIG.openingPlaybackSpeed;
    const duration = action.getClip()?.duration ?? 3;
    const elapsed = (performance.now() - startTimeRef.current) / 1000;
    const time = Math.min(elapsed * speed, duration);

    action.time = time;
    mixer.update(0);

    if (time >= duration - 0.01) {
      finish();
    }
  });

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}
