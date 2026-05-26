import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the threat model with the mouse, click "Copy as cameraTarget", paste here.
 */
export const threatConfig: ModelConfig = {
  id: "threat",
  label: "Preemptive Threat Hunting",
  cameraTarget: {
    position: [16.87, 8.59, 3.31],
    lookAt:   [-26.12, -4.47, -37.69],
    duration: 1.5,
  },
};
