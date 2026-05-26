import { lookAtModel } from "../../shared/camera-helpers";
import type { ModelConfig } from "../../shared/types";

/**
 * Static metadata for the "chat" interactive model.
 *
 * ─── 3 ways to set `cameraTarget` (pick whatever feels easiest) ────────
 *
 * 1. VISUAL TOOL (recommended) — Run `npm run dev`, click the chat model,
 *    then press Ctrl + Shift + D. A "Camera Debug" panel appears.
 *    Drag = orbit · Scroll = zoom · Right-click = pan. When the view
 *    looks right, click "Copy as cameraTarget" and paste below.
 *
 * 2. HELPER FUNCTION — Use `lookAtModel(modelPos, options)`. You only
 *    pick easy values: distance, height, angle, which side the content
 *    panel is on. The helper computes position+lookAt for you.
 *
 * 3. RAW COORDINATES — Set `position` and `lookAt` directly. Most
 *    flexible, but you need to "feel" 3D space.
 *
 * ─── Optional `waypoints` ──────────────────────────────────────────────
 * Add intermediate camera stops for a cinematic orbit-in:
 *
 *   waypoints: [
 *     lookAtModel([-3, 0, -5], { distance: 8, height: 6, azimuth: 45 }),
 *   ],
 *
 * Camera then flies: default → waypoint → cameraTarget, and reverses on exit.
 */
export const chatConfig: ModelConfig = {
  id: "chat",
  label: "Smart Chat Assistant",
  cameraTarget: {
    position: [-47.21, 10.7, 2.02],
    lookAt:   [-4.06, 1.17, 1.17],
    duration: 1.5,
  },
};
