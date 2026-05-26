import type { ModelConfig } from "../../shared/types";

/**
 * BLOG = fly-through gate.
 *
 * ─── The core trick ─────────────────────────────────────────────────────
 * For a "camera flies INTO and THROUGH a portal" feel, both `position`
 * AND `lookAt` must move ALONG THE SAME AXIS so the camera always faces
 * AHEAD (in the direction of travel). If lookAt stayed at one point,
 * the camera would visibly SPIN around as it passed that point.
 *
 *     ─ Frame 1 ──────────────────       ─ Frame 30 ─────────────────
 *
 *      [cam] → → → [GATE]   ◎          [GATE]   [cam] → → → ◎
 *        ↑           ↑                              ↑       ↑
 *      pos        lookAt                          pos    lookAt
 *
 *     Both pos and lookAt SHIFT FORWARD together → smooth fly-through.
 *
 * ─── How to find values (≈ 60 seconds) ─────────────────────────────────
 *   1. `npm run dev` → press Ctrl+Shift+D (debug overlay opens).
 *   2. Use mouse drag / scroll / right-click to find the blog gate.
 *   3. Use the new ⬆ Fwd / ⬇ Back buttons in the overlay to fly
 *      forward along the camera's view direction (2 units per click).
 *   4. Park the camera JUST IN FRONT of the gate, then click "Copy".
 *      → Paste into `waypoints[0]` below.
 *   5. Click ⬆ Fwd a few more times to fly THROUGH the gate.
 *   6. Click "Copy" again.
 *      → Paste into `cameraTarget` below.
 *
 * ─── Why a waypoint? ───────────────────────────────────────────────────
 * Without a waypoint, the camera takes a straight line from default
 * to the final position — which usually CUTS THROUGH the side of the
 * gate (looks broken). With a waypoint at the gate ENTRANCE, the path
 * becomes: default → entrance → through the gate. Much more cinematic.
 */
export const blogConfig: ModelConfig = {
  id: "blog",
  label: "Insights & Resources",

  // FINAL — camera is PAST the gate, looking even further forward.
  // lookAt is AHEAD of position along the travel axis (so camera faces forward).
  cameraTarget: {
    position: [2.93, 5.15, -10.48],
    lookAt:   [4.87, -7.58, -79.59],
    duration: 1.5,
  },

  // waypoints: [
  //   // FIRST stop — camera just in FRONT of the gate, looking THROUGH it.
  //   // lookAt should be INSIDE/PAST the gate so camera aims straight in.
  //   {
  //     position: [-10, 4, 6], //  TODO: replace with "in-front-of-gate" values
  //     lookAt: [-10, 4, 6], //  TODO: roughly the gate's center / interior
  //     duration: 1.2,
  //   },
  // ],
};
