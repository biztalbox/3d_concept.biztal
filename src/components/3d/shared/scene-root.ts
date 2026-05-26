/**
 * Scene-root transform constants.
 *
 * The whole 3D world is rotated/offset by these values so the camera
 * looks at it from a flattering angle. Both the static `<Base>` group
 * AND all registry-rendered models live under this same transform in
 * `HomeScene`, so per-model `position` values are authored in a single
 * shared coordinate space.
 *
 * Tweak these to re-orient the whole scene at once.
 */
export const SCENE_ROOT = {
  rotation: [0, -0.9, 0] as [number, number, number],
  position: [1, 0, -5] as [number, number, number],
};

/**
 * Visual center of the scene in SCENE_ROOT-local space.
 *
 * Matches the "Center cube" pivot baked into `base.glb` from Blender.
 * `BlenderCameraSource` uses this when `lookAtMode="sceneCenter"` so
 * the idle camera always aims at the middle of the world — even when
 * `camera.glb` has no Target / LookAt empty.
 */
export const SCENE_CENTER_LOCAL: [number, number, number] = [0, 3, 0];
