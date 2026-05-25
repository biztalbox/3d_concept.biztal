import type { Access, FieldAccess } from "payload";

function hasEditorOrAdminRole(
  user: { roles?: string[] | null } | null | undefined
) {
  if (!user) return false;

  // Match Users collection defaultValue for accounts missing roles in the DB.
  const roles = user.roles?.length ? user.roles : ["editor"];

  return roles.includes("admin") || roles.includes("editor");
}

/** Admins and editors can manage content. */
export const isEditorOrAdmin: Access = ({ req: { user } }) =>
  hasEditorOrAdminRole(user);

export const isEditorOrAdminField: FieldAccess = ({ req: { user } }) =>
  hasEditorOrAdminRole(user);
