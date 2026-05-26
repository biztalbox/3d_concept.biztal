"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  type Group,
  type Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector3,
} from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import type { CameraTarget } from "./types";

useGLTF.preload("/model5/camera.glb");

export type BlenderLookAtMode =
  /** Aim along the camera's exported forward direction (needs Target empty for accuracy). */
  | "forward"
  /** Force aim at `sceneCenterLocal` transformed to world space — best default. */
  | "sceneCenter"
  /** Use an explicit world-space point (via `lookAtPoint`). */
  | "fixed";

/**
 * Result extracted from a Blender-authored camera GLB.
 *
 * `cameraTarget.position` and `cameraTarget.lookAt` are in WORLD space —
 * meaning SCENE_ROOT's rotation/translation has already been baked in
 * (because this component is mounted UNDER the scene-root group). You
 * can plug the value straight into `useCameraMove` or use it as the
 * exit/idle target.
 */
export type BlenderCameraResult = {
  cameraTarget: CameraTarget;
  /** Vertical FOV (degrees), copied from Blender's camera. */
  fov: number;
};

type Props = {
  /** Path to the camera-only GLB (e.g. "/model5/camera.glb"). */
  url: string;
  /**
   * How far along the camera's forward direction to place the lookAt
   * point if the GLB does NOT include an explicit target Empty.
   * Bigger value → orbit pivot further from the camera. Default 8.
   */
  fallbackLookAtDistance?: number;
  /**
   * How to compute the OrbitControls lookAt / aim point.
   *
   *   sceneCenter — keep Blender camera position, aim at scene center
   *                 (recommended; fixes "camera pointing wrong way")
   *   forward     — step along exported camera forward (needs Target empty
   *                 in GLB for a precise pivot)
   *   fixed       — use `lookAtPoint` directly in world space
   */
  lookAtMode?: BlenderLookAtMode;
  /**
   * Scene-center pivot in SCENE_ROOT-local space. Only used when
   * `lookAtMode="sceneCenter"`. Defaults to origin; pass
   * `SCENE_CENTER_LOCAL` from `scene-root.ts` for the base.glb center.
   */
  sceneCenterLocal?: [number, number, number];
  /** World-space lookAt when `lookAtMode="fixed"`. */
  lookAtPoint?: [number, number, number];
  /**
   * Yaw the final pose around the world Y axis, pivoting on the lookAt
   * point. Most common fix when the imported camera "points the wrong
   * way" — usually because the parent group (e.g. SCENE_ROOT) has its
   * own Y rotation that you want to compensate for here.
   *
   *   +90  = camera moves clockwise (looking down) around the target
   *   -90  = counter-clockwise
   *   180  = look at target from the OPPOSITE side
   *
   * Default 0.
   */
  azimuthOffsetDeg?: number;
  /**
   * World-space offset added to the extracted camera position (after
   * azimuth). Use to nudge the eye up/down/left/right in tiny steps.
   */
  positionOffset?: [number, number, number];
  /**
   * World-space offset added to the extracted lookAt point (after
   * azimuth). Use to push the orbit pivot toward the model if the
   * fallback distance landed it slightly off.
   */
  lookAtOffset?: [number, number, number];
  /**
   * Override vertical FOV in degrees. Omit (or `null`) to keep the value
   * exported from Blender (~10.5° telephoto on the current camera.glb).
   *
   *   smaller = zoomed IN  (e.g. 8)
   *   larger  = zoomed OUT / wider (e.g. 35, 58)
   */
  fovDeg?: number | null;
  /**
   * Dolly the camera toward / away from the final lookAt point without
   * changing FOV. Multiplier on the eye-to-target distance:
   *
   *   1    = Blender-exported distance (default)
   *   0.85 = 15% closer  → zoom IN
   *   1.15 = 15% further → zoom OUT
   */
  dollyFactor?: number;
  onResolved: (result: BlenderCameraResult) => void;
  /**
   * If true (default), also synchronously snaps the live R3F camera to
   * the extracted pose AND sets OrbitControls.target to the lookAt —
   * so the very first rendered frame matches the Blender view (no
   * visible "fly-in from the fallback position").
   */
  applyImmediately?: boolean;
};

/**
 * Loads a Blender-exported `camera.glb`, extracts the first
 * `PerspectiveCamera` node + (optional) lookAt Empty, converts the
 * values into a `CameraTarget` in WORLD space, and (by default) snaps
 * the live R3F camera to that pose before the first frame renders.
 *
 * MUST be mounted under the same group that wraps your interactive
 * models (`SCENE_ROOT`) so the Blender-authored camera-relative-to-
 * models layout is preserved when SCENE_ROOT rotates/translates the
 * world.
 *
 * Conventions inside `camera.glb`:
 *   - First `PerspectiveCamera` node                     → camera position + FOV
 *   - First `Object3D` whose name matches /target|lookat/i → lookAt anchor
 *   - If no such Empty exists, lookAt is computed by stepping
 *     `fallbackLookAtDistance` units along the camera's forward direction.
 *
 * Re-export `camera.glb` from Blender any time you want to retune the
 * idle camera — no code changes needed here.
 */
export function BlenderCameraSource({
  url,
  fallbackLookAtDistance = 8,
  lookAtMode = "sceneCenter",
  sceneCenterLocal = [0, 0, 0],
  lookAtPoint,
  azimuthOffsetDeg = 0,
  positionOffset,
  lookAtOffset,
  fovDeg = null,
  dollyFactor = 1,
  onResolved,
  applyImmediately = true,
}: Props) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<Group>(null);

  const liveCamera = useThree((s) => s.camera);
  const liveControls = useThree(
    (s) => s.controls,
  ) as OrbitControlsImpl | null;

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    // OrbitControls (with `makeDefault`) registers itself in a useEffect
    // whose firing order vs ours isn't guaranteed. If we need to set
    // controls.target but they aren't ready yet, bail — the effect
    // will re-run once `liveControls` flips from null to non-null.
    if (applyImmediately && !liveControls) return;

    // Force matrix update so getWorldPosition() reflects SCENE_ROOT
    // transform (we just mounted under it this same render).
    group.updateWorldMatrix(true, true);

    const found = findBlenderCameraNodes(scene);

    if (!found.cam) {
      // eslint-disable-next-line no-console
      console.warn(
        `[BlenderCameraSource] No PerspectiveCamera found in ${url}. ` +
          `Make sure "Cameras" is checked under "Include" when exporting glTF.`,
      );
      return;
    }

    const blenderCam = found.cam;
    const lookAtNode = found.lookAtNode;

    const camPos = new Vector3();
    blenderCam.getWorldPosition(camPos);

    let lookAtPos: Vector3;
    if (lookAtMode === "fixed" && lookAtPoint) {
      lookAtPos = new Vector3(...lookAtPoint);
    } else if (lookAtMode === "sceneCenter") {
      lookAtPos = new Vector3(...sceneCenterLocal);
      const sceneRoot = group.parent;
      if (sceneRoot) sceneRoot.localToWorld(lookAtPos);
    } else if (lookAtNode) {
      lookAtPos = new Vector3();
      (lookAtNode as Object3D).getWorldPosition(lookAtPos);
    } else {
      const camQuat = new Quaternion();
      blenderCam.getWorldQuaternion(camQuat);
      const forward = new Vector3(0, 0, -1).applyQuaternion(camQuat);
      lookAtPos = camPos
        .clone()
        .add(forward.multiplyScalar(fallbackLookAtDistance));
    }

    // ─── Tuning passes ─────────────────────────────────────────────
    // Yaw camera around the lookAt point (orbit on world Y axis).
    // Useful for compensating SCENE_ROOT's Y rotation.
    if (azimuthOffsetDeg !== 0) {
      const rad = (azimuthOffsetDeg * Math.PI) / 180;
      const sin = Math.sin(rad);
      const cos = Math.cos(rad);
      const dx = camPos.x - lookAtPos.x;
      const dz = camPos.z - lookAtPos.z;
      camPos.x = lookAtPos.x + dx * cos - dz * sin;
      camPos.z = lookAtPos.z + dx * sin + dz * cos;
    }

    if (positionOffset) {
      camPos.x += positionOffset[0];
      camPos.y += positionOffset[1];
      camPos.z += positionOffset[2];
    }

    if (lookAtOffset) {
      lookAtPos.x += lookAtOffset[0];
      lookAtPos.y += lookAtOffset[1];
      lookAtPos.z += lookAtOffset[2];
    }

    if (dollyFactor !== 1) {
      camPos.sub(lookAtPos).multiplyScalar(dollyFactor).add(lookAtPos);
    }

    const resolvedFov = fovDeg ?? blenderCam.fov;

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info("[BlenderCameraSource] resolved pose", {
        lookAtMode,
        position: [camPos.x, camPos.y, camPos.z],
        lookAt: [lookAtPos.x, lookAtPos.y, lookAtPos.z],
        sceneCenterLocal,
        fovDeg: resolvedFov,
        dollyFactor,
      });
    }

    if (applyImmediately) {
      liveCamera.position.copy(camPos);
      if (liveCamera instanceof PerspectiveCamera) {
        liveCamera.fov = resolvedFov;
        liveCamera.updateProjectionMatrix();
      }
      if (liveControls) {
        liveControls.target.copy(lookAtPos);
        liveControls.update();
      }
    }

    onResolved({
      cameraTarget: {
        position: [camPos.x, camPos.y, camPos.z],
        lookAt: [lookAtPos.x, lookAtPos.y, lookAtPos.z],
        duration: 1.5,
      },
      fov: resolvedFov,
    });
  }, [
    scene,
    url,
    fallbackLookAtDistance,
    lookAtMode,
    sceneCenterLocal,
    lookAtPoint,
    azimuthOffsetDeg,
    positionOffset,
    lookAtOffset,
    fovDeg,
    dollyFactor,
    onResolved,
    applyImmediately,
    liveCamera,
    liveControls,
  ]);

  // Render the loaded scene invisibly so its world-matrix is computed
  // by three.js. We never want the Blender camera node to actually
  // render anything (it has no geometry anyway) but it MUST be in the
  // scene graph for getWorldPosition to work.
  return <primitive ref={groupRef} object={scene} visible={false} />;
}

function findBlenderCameraNodes(scene: Object3D): {
  cam: PerspectiveCamera | null;
  lookAtNode: Object3D | null;
} {
  let cam: PerspectiveCamera | null = null;
  let lookAtNode: Object3D | null = null;

  scene.traverse((obj) => {
    const asCam = obj as PerspectiveCamera;
    if (!cam && asCam.isPerspectiveCamera) {
      cam = asCam;
      return;
    }
    if (
      !lookAtNode &&
      !asCam.isCamera &&
      /target|lookat/i.test(obj.name)
    ) {
      lookAtNode = obj;
    }
  });

  return { cam, lookAtNode };
}
