/**
 * Camera helpers — build a `CameraTarget` from intuitive params instead of
 * juggling raw `position` + `lookAt` coordinates yourself.
 *
 * If even THIS feels mathy, use the in-browser `CameraDebugger` overlay
 * (Ctrl+Shift+D) — drag the camera with your mouse and click "Copy".
 */

import type { CameraTarget } from "./types";

type Vec3 = [number, number, number];

/** Side of the viewport where the HTML content panel appears. */
export type PanelSide = "left" | "right" | "none";

export type LookAtModelOptions = {
  /**
   * How far back the camera should sit from the model (world units).
   * Bigger → more zoomed out. Default 4.
   */
  distance?: number;
  /**
   * Camera height ABOVE the model's pivot (world units).
   * Positive = looking down, negative = looking up. Default 2.
   */
  height?: number;
  /**
   * Horizontal angle around the model (degrees).
   *   0   = camera in FRONT  of the model  (looks back along -Z)
   *   90  = camera to the RIGHT of the model
   *   180 = camera BEHIND the model
   *   270 = camera to the LEFT  of the model
   * Default 0 (front view).
   */
  azimuth?: number;
  /**
   * Which side of the viewport your content panel sits on.
   * The lookAt is shifted in the OPPOSITE direction so the model
   * visually appears on the empty side.
   *   "left"  → model appears on the RIGHT half (panel covers left)
   *   "right" → model appears on the LEFT half  (panel covers right)
   *   "none"  → no shift, model centered
   * Default "left".
   */
  panelSide?: PanelSide;
  /**
   * How aggressively to shift the lookAt for `panelSide`.
   * Bigger = model pushed further from center. Default 2.
   */
  panelOffset?: number;
  /** Tween duration in seconds. Default 1.5. */
  duration?: number;
};

/**
 * Builds a `CameraTarget` aimed at a given model position.
 *
 * Example — chat model framed from front-right, model on RIGHT of viewport:
 *
 *   cameraTarget: lookAtModel([-3, 0, -5], {
 *     distance: 4,
 *     height: 2,
 *     azimuth: 30,
 *     panelSide: "left",
 *   })
 */
export function lookAtModel(
  modelPosition: Vec3,
  options: LookAtModelOptions = {},
): CameraTarget {
  const {
    distance = 4,
    height = 2,
    azimuth = 0,
    panelSide = "left",
    panelOffset = 2,
    duration = 1.5,
  } = options;

  const az = (azimuth * Math.PI) / 180;
  const [mx, my, mz] = modelPosition;

  // Standard orbital camera math:
  //   x = model.x + distance * sin(azimuth)
  //   z = model.z + distance * cos(azimuth)   (in front by default)
  // Note: Three.js uses -Z forward, so azimuth=0 puts camera at +Z (in front).
  const camX = mx + distance * Math.sin(az);
  const camY = my + height;
  const camZ = mz + distance * Math.cos(az);

  // Shift lookAt opposite to the panel so the model lands on the empty side.
  //   panel on left  → shift lookAt LEFT  (-x) → model appears RIGHT
  //   panel on right → shift lookAt RIGHT (+x) → model appears LEFT
  const shift =
    panelSide === "left" ? -panelOffset
    : panelSide === "right" ? panelOffset
    : 0;

  return {
    position: [camX, camY, camZ],
    lookAt: [mx + shift, my, mz],
    duration,
  };
}
