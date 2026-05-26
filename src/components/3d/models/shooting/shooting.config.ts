import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the shooting model with the mouse, click "Copy as cameraTarget", paste here.
 */
export const shootingConfig: ModelConfig = {
  id: "shooting",
  label: "Real-Time Threat Mitigation",
  cameraTarget: {
    position: [44.6, 7.18, 11.6],
    lookAt:   [0, -0.4, 0],
    duration: 1.5,
  },
};
