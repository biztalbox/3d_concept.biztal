"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

/**
 * Shape of the ref shared between CameraDebuggerScene (in-Canvas) and
 * CameraDebuggerOverlay (HTML). `position`/`lookAt` are written every
 * frame by the Scene. `moveAlongView` + `moveVertical` are wired by the
 * Scene's useEffect — the Overlay calls them on button clicks.
 */
export type DebugLiveState = {
  position: [number, number, number];
  lookAt: [number, number, number];
  /**
   * Step camera AND target along the camera's current view direction.
   * Positive = forward (deeper into the scene); negative = backward.
   * Essential for "fly-through" navigation: OrbitControls' built-in
   * scroll-dolly only moves camera RELATIVE to its target — it can't
   * fly the WHOLE viewpoint forward through a portal/gate.
   */
  moveAlongView: (distance: number) => void;
  /** Step both camera AND target vertically (world Y axis). */
  moveVertical: (distance: number) => void;
};

/**
 * Lives INSIDE <Canvas>. Writes live camera/target state into the shared
 * ref every frame, and wires up the action callbacks that the HTML overlay
 * invokes (Forward / Back / Up / Down buttons).
 *
 * Mounts a fully-interactive OrbitControls (orbit + dolly + pan + damping)
 * for manual framing.
 */
export function CameraDebuggerScene({
  liveStateRef,
}: {
  liveStateRef: React.MutableRefObject<DebugLiveState>;
}) {
  const camera = useThree((s) => s.camera);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Reusable scratch vector — avoids per-frame allocation.
  const dirVec = useRef(new Vector3());

  useFrame(() => {
    const controls = controlsRef.current;
    liveStateRef.current.position = [
      round(camera.position.x),
      round(camera.position.y),
      round(camera.position.z),
    ];
    liveStateRef.current.lookAt = controls
      ? [round(controls.target.x), round(controls.target.y), round(controls.target.z)]
      : [0, 0, 0];
  });

  /**
   * Translate BOTH camera position and OrbitControls target by the same
   * delta vector. Keeping their relative orientation fixed = the camera
   * keeps facing the same direction while flying forward (no spin).
   */
  const moveAlongView = useCallback(
    (distance: number) => {
      const dir = dirVec.current;
      camera.getWorldDirection(dir); // normalized forward vector
      dir.multiplyScalar(distance);
      camera.position.add(dir);
      const controls = controlsRef.current;
      if (controls) {
        controls.target.add(dir);
        controls.update();
      }
    },
    [camera],
  );

  const moveVertical = useCallback(
    (distance: number) => {
      camera.position.y += distance;
      const controls = controlsRef.current;
      if (controls) {
        controls.target.y += distance;
        controls.update();
      }
    },
    [camera],
  );

  // Wire callbacks into the shared ref so the HTML overlay can call them.
  useEffect(() => {
    liveStateRef.current.moveAlongView = moveAlongView;
    liveStateRef.current.moveVertical = moveVertical;
  }, [liveStateRef, moveAlongView, moveVertical]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableZoom
      enablePan
      enableRotate
      enableDamping
      dampingFactor={0.08}
    />
  );
}

/** Round to 2 decimals so copy-pasted configs stay readable. */
function round(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Fixed HTML overlay — outside <Canvas>. Shows live camera state, a
 * "Copy" button, and step-navigation buttons that fly the camera
 * forward/back/up/down (essential for fly-through framing).
 */
export function CameraDebuggerOverlay({
  liveStateRef,
  onClose,
}: {
  liveStateRef: React.MutableRefObject<DebugLiveState>;
  onClose: () => void;
}) {
  // Force re-render every frame so the live snippet stays current.
  const [, force] = useState(0);
  useRafLoop(() => force((n) => (n + 1) & 0xff));

  const { position, lookAt } = liveStateRef.current;
  const snippet = formatSnippet(position, lookAt);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      // ignore — clipboard may be blocked in some contexts
    }
  };

  const fwd = (d: number) => liveStateRef.current.moveAlongView?.(d);
  const vert = (d: number) => liveStateRef.current.moveVertical?.(d);

  return (
    <div className="fixed left-6 top-6 z-[100] w-80 rounded-xl border border-white/15 bg-black/70 p-4 font-mono text-xs text-white shadow-xl backdrop-blur-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-semibold uppercase tracking-wider text-primary">
          Camera Debug
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close camera debugger"
          className="text-white/60 hover:text-white"
        >
          ×
        </button>
      </div>

      <p className="mb-3 text-[10px] leading-relaxed text-white/60">
        Drag = orbit · Scroll = dolly · Right-click = pan
        <br />
        Step buttons below fly along the view direction (good for
        gate/portal fly-through).
      </p>

      {/* Step navigation grid */}
      <div className="mb-3 grid grid-cols-4 gap-1">
        <StepBtn label="↑ Up" onClick={() => vert(1)} />
        <StepBtn label="⬆ Fwd" onClick={() => fwd(2)} />
        <StepBtn label="⬇ Back" onClick={() => fwd(-2)} />
        <StepBtn label="↓ Dn" onClick={() => vert(-1)} />
      </div>

      <pre className="mb-3 overflow-x-auto rounded bg-white/5 p-2 text-[11px] leading-snug">
        {snippet}
      </pre>

      <button
        type="button"
        onClick={copy}
        className="w-full rounded bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary/80"
      >
        Copy as cameraTarget
      </button>
    </div>
  );
}

function StepBtn({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded border border-white/15 bg-white/5 px-2 py-1.5 text-[10px] font-semibold uppercase text-white/80 transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-white"
    >
      {label}
    </button>
  );
}

function formatSnippet(
  pos: [number, number, number],
  look: [number, number, number],
): string {
  return `cameraTarget: {
  position: [${pos[0]}, ${pos[1]}, ${pos[2]}],
  lookAt:   [${look[0]}, ${look[1]}, ${look[2]}],
  duration: 1.5,
},`;
}

/** Lightweight requestAnimationFrame loop hook (drives overlay re-renders). */
function useRafLoop(cb: () => void) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  useEffect(() => {
    let id = 0;
    const tick = () => {
      cbRef.current();
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
}
