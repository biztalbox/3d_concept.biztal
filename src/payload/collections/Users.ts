import type { CollectionConfig } from "payload";

import { isAdmin, isAdminField } from "../access/isAdmin";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "roles"],
    group: "Admin",
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7,
    maxLoginAttempts: 5,
    lockTime: 1000 * 60 * 10,
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: isAdmin,
    update: ({ req: { user }, id }) => {
      if (!user) return false;
      if (user.roles?.includes("admin")) return true;
      return user.id === id;
    },
    delete: isAdmin,
    admin: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      defaultValue: ["editor"],
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      access: {
        create: isAdminField,
        update: isAdminField,
      },
    },
  ],
};
