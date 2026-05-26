import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the threat model with the mouse, click "Copy as cameraTarget", paste here.
 */
export const upgradeConfig: ModelConfig = {
  id: "upgrade",
  label: "Upgrade",
  cameraTarget: {
    position: [-9.66, 6.07, -5.84],
    lookAt:   [1.49, 3.62, -3.8],
    duration: 1.5,
  },
};
