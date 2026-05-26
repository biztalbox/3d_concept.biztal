/**
 * Shared TypeScript contracts for the interactive 3D scene.
 *
 * Every interactive model must:
 *   - Export a React component conforming to `ModelProps`
 *   - Export a config object conforming to `ModelConfig`
 *   - Export a content component (left-side panel) — no required props
 *
 * The orchestrator (`HomeScene`) iterates the registry and renders
 * each model based on the current `selectedId` state.
 */

import type { ComponentType } from "react";

/**
 * A single camera "stop" — where the eye sits AND what it aims at.
 *
 * Mental model:
 *
 *            position (the "eye"  )
 *                  \
 *                   \   ___
 *                    \ /   \
 *                     V     |   <── lookAt (what you're looking at)
 *                          / \
 *                         /___\
 *                        model
 *
 *  - `position` = where the camera IS in world space (the eyeball).
 *  - `lookAt`   = the point the camera POINTS at in world space.
 *
 * Easiest way to author these: don't. Use `lookAtModel(...)` from
 * `shared/camera-helpers.ts` OR press Ctrl+Shift+D in dev to grab
 * values visually with `CameraDebugger`.
 */
export type CameraTarget = {
  /** World-space camera position — the "eye". */
  position: [number, number, number];
  /** World-space point the camera should look at — the "aim". */
  lookAt: [number, number, number];
  /** Tween duration in seconds. Defaults to 1.5 in the hook. */
  duration?: number;
};

/** Static metadata about a model (camera target, label, etc.). */
export type ModelConfig = {
  /** Stable id used as registry key + React key. Must match folder name. */
  id: string;
  /** Human label (used for accessibility, future hover tooltips, analytics). */
  label: string;
  /** Final camera target when this model is selected (zoom-in). */
  cameraTarget: CameraTarget;
  /**
   * OPTIONAL intermediate camera positions traversed BEFORE reaching
   * `cameraTarget` on entry. On exit, these are traversed in REVERSE
   * (camera flies: final → waypoint_n → ... → waypoint_1 → default).
   *
   * Useful for models in awkward / center positions where a single
   * direct fly-to feels abrupt, and a cinematic orbit-in feels better.
   * Leave undefined for the default single-step behavior.
   *
   * Example:
   *   waypoints: [
   *     { position: [10, 8, 8], lookAt: [0, 0, 0], duration: 0.8 },
   *     { position: [4, 4, 5],  lookAt: [0, 0, 0], duration: 0.6 },
   *   ]
   */
  waypoints?: CameraTarget[];
};

/** Props every interactive `<Model>` component receives from the orchestrator. */
export type ModelProps = {
  /** True if this model is the currently selected one. */
  isSelected: boolean;
  /** True if a DIFFERENT model is selected and this one should hide. */
  isHidden: boolean;
  /** Click handler — orchestrator updates selection state. */
  onSelect: () => void;
};

/** Props every `<Content>` component receives (kept minimal; extend later if needed). */
export type ContentProps = Record<string, never>;

/** Shape of a single registry entry. */
export type RegistryEntry = {
  Model: ComponentType<ModelProps>;
  Content: ComponentType<ContentProps>;
  config: ModelConfig;
};
