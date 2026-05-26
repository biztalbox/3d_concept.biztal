/**
 * Scene intro timing — base `opening_sequence` → registry models fade-in.
 *
 * Tune here without touching component logic.
 */
export const SCENE_INTRO_CONFIG = {
  /**
   * `opening_sequence` playback speed.
   * 1 = normal GLB speed · 0.5 = half speed · 2 = double speed.
   */
  openingPlaybackSpeed: 1,

  /**
   * Extra wait AFTER `opening_sequence` finishes (ms).
   * 0 = models start fading in immediately on clip end.
   */
  modelsRevealDelayMs: 0,

  /** How long the models fade-in takes (seconds). */
  modelsFadeInDuration: 0.35,

  /** GSAP delay before fade-in starts (seconds). */
  modelsFadeInDelay: 0,

  /** Safety buffer on Base fallback timer if `finished` event is missed (ms). */
  openingFallbackBufferMs: 0,
} as const;
