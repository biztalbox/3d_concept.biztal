import type { Object3D } from "three";

function toNameList(names: string | string[]): string[] {
  return Array.isArray(names) ? names : [names];
}

/** Hide one or more meshes by name inside a GLB scene. */
export function hideMeshes(scene: Object3D, names: string | string[]): void {
  for (const name of toNameList(names)) {
    const mesh = scene.getObjectByName(name);
    if (mesh) mesh.visible = false;
  }
}

/** Show one or more meshes by name inside a GLB scene. */
export function showMeshes(scene: Object3D, names: string | string[]): void {
  for (const name of toNameList(names)) {
    const mesh = scene.getObjectByName(name);
    if (mesh) mesh.visible = true;
  }
}
