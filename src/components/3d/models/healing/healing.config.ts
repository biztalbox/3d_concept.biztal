import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the healing model with the mouse, click "Copy as cameraTarget", paste here.
 */
export const healingConfig: ModelConfig = {
  id: "healing",
  label: "Self-Healing Digital Organism",
  cameraTarget: {
    position: [-4.07, 8.22, 18.1],
    lookAt:   [-5.5, 2.99, -0.63],
    duration: 1.5,
  },
};
