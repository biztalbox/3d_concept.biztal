import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the threat model with the mouse, click "Copy as cameraTarget", paste here.
 */
export const upgradeConfig: ModelConfig = {
  id: "contact",
  label: "Contact",
  cameraTarget: {
    position: [1.24, 53.37, 104.67],
    lookAt:   [-0.08, 4.41, -2.02],
    duration: 1.5,
  },
};
