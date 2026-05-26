"use client";

import { useThree } from "@react-three/fiber";
import { useCallback, useRef } from "react";
import gsap from "gsap";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import type { CameraTarget } from "../shared/types";

export type MoveCameraOptions = {
  /** Fires once the WHOLE sequence (every waypoint) is complete. */
  onComplete?: () => void;
};

/**
 * Reusable GSAP-based camera animation hook for R3F scenes.
 *
 * Accepts either a single `CameraTarget` or an array of `CameraTarget`
 * (waypoints, traversed sequentially via `gsap.timeline`).
 *
 * ─── Why we toggle `controls.enableDamping` ────────────────────────────
 * OrbitControls runs its own per-frame `update()` to apply damping
 * (smooth-easing of mouse input). When GSAP is tweening `camera.position`,
 * that internal smoothing kicks in IN PARALLEL and tries to ease the
 * camera toward its own internal spherical state — fighting GSAP and
 * producing visible jitter.
 *
 * Fix: snapshot the original `enableDamping` value once, force it OFF
 * for the duration of the tween, restore on completion + sync via a
 * final `update()`. With damping off, OrbitControls' `update()` becomes
 * a no-op (it recomputes spherical from current state and re-applies,
 * yielding the same position).
 */
export function useCameraMove() {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;

  // Snapshot of the user-intended damping setting (taken once, never
  // overwritten — survives rapid back-to-back moveCamera() calls).
  const originalDampingRef = useRef<boolean | null>(null);

  return useCallback(
    (
      targetOrTargets: CameraTarget | CameraTarget[],
      opts?: MoveCameraOptions,
    ) => {
      const targets = Array.isArray(targetOrTargets)
        ? targetOrTargets
        : [targetOrTargets];

      // Kill any in-flight camera tweens — prevents stacking on rapid clicks.
      gsap.killTweensOf(camera.position);
      if (controls) gsap.killTweensOf(controls.target);

      // Snapshot original damping ONCE (subsequent calls during an active
      // tween already have damping=false; we don't want to record that).
      if (controls && originalDampingRef.current === null) {
        originalDampingRef.current = controls.enableDamping;
      }
      // Suppress damping for the duration of the tween (see header comment).
      if (controls) controls.enableDamping = false;

      const tl = gsap.timeline({
        onComplete: () => {
          // Restore damping + a single update() to sync OrbitControls'
          // internal spherical to the final camera/target pose, so the
          // next user interaction (e.g. mouse parallax) doesn't snap.
          if (controls && originalDampingRef.current !== null) {
            controls.enableDamping = originalDampingRef.current;
            controls.update();
          }
          opts?.onComplete?.();
        },
      });

      targets.forEach((t) => {
        const duration = t.duration ?? 1.5;
        const ease = "power3.inOut";

        // Position tween — sequential (after previous step in the timeline).
        tl.to(camera.position, {
          x: t.position[0],
          y: t.position[1],
          z: t.position[2],
          duration,
          ease,
        });

        // LookAt/target tween — parallel ("<") to the position tween above.
        // No `onUpdate: controls.update()` needed: damping is off, so
        // OrbitControls won't try to smooth in parallel with GSAP.
        if (controls) {
          tl.to(
            controls.target,
            {
              x: t.lookAt[0],
              y: t.lookAt[1],
              z: t.lookAt[2],
              duration,
              ease,
            },
            "<",
          );
        }
      });

      return tl;
    },
    [camera, controls],
  );
}
