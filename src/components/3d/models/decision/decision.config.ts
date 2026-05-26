import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the decision (business.glb) model with the mouse, click "Copy", paste here.
 */
export const decisionConfig: ModelConfig = {
  id: "decision",
  label: "Data to Business Decisions",
  cameraTarget: {
    position: [-10.27, 14.98, 8.87],
    lookAt:   [76.35, -32.06, -65.68],
    duration: 1.5,
  },
};
