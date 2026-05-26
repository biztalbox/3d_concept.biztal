import * as blog from "./models/blog";
import * as chat from "./models/chat";
import * as decision from "./models/decision";
import * as healing from "./models/healing";
import * as shooting from "./models/shooting";
import * as testimonial from "./models/testimonial";
import * as threat from "./models/threat";
import * as upgrade from "./models/upgrade";
import * as contact from "./models/contact";

import type { RegistryEntry } from "./shared/types";

/**
 * Single source of truth for all interactive 3D models.
 *
 * To add a new model:
 *   1. Create `src/components/3d/models/<id>/` with:
 *        <Id>Model.tsx        — 3D mesh + interactions
 *        <Id>Content.tsx      — left-panel content
 *        <id>.config.ts       — camera target, label
 *        index.ts             — barrel exporting { Model, Content, config }
 *   2. Add one line below.
 *
 * That's it — the orchestrator (HomeScene) picks it up automatically.
 */
export const MODEL_REGISTRY = {
  chat,
  healing,
  decision, // uses business.glb internally
  shooting,
  testimonial,
  blog,
  threat,
  upgrade,
  contact,
} as const satisfies Record<string, RegistryEntry>;

export type ModelId = keyof typeof MODEL_REGISTRY;

/** Helper — strongly typed iteration over the registry. */
export function getRegistryEntries(): Array<[ModelId, RegistryEntry]> {
  return Object.entries(MODEL_REGISTRY) as Array<[ModelId, RegistryEntry]>;
}
