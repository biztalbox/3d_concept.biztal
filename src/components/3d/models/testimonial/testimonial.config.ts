import type { ModelConfig } from "../../shared/types";

/**
 * TODO: Tune `cameraTarget` visually — press Ctrl+Shift+D in dev, frame
 * the testimonial model with the mouse, click "Copy as cameraTarget", paste here.
 */
export const testimonialConfig: ModelConfig = {
  id: "testimonial",
  label: "Customer Success Stories",
  cameraTarget: {
    position: [-28.81, 8.38, 24.52],
    lookAt:   [7.35, -1.45, -3.36],
    duration: 1.5,
  },
};
