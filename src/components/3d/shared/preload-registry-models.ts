import { useGLTF } from "@react-three/drei";

/** All interactive registry GLB paths — ~170 MB total. */
export const REGISTRY_GLB_URLS = [
  "/model5/chat.glb",
  "/model5/healing.glb",
  "/model5/business.glb",
  "/model5/shooting.glb",
  "/model5/testimonial.glb",
  "/model5/blog.glb",
  "/model5/threat.glb",
  "/model5/upgrade.glb",
  "/model5/contact.glb",
] as const;

/** Start downloading every registry GLB in parallel (call on page mount). */
export function preloadRegistryModels() {
  for (const url of REGISTRY_GLB_URLS) {
    useGLTF.preload(url);
  }
}
