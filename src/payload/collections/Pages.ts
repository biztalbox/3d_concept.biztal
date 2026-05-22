import type { CollectionConfig } from "payload";

import { isAdmin } from "../access/isAdmin";
import { publishedOrAdmin } from "../access/publishedOrAdmin";
import { slugField } from "../fields/slug";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    group: "Content",
    livePreview: {
      url: ({ data }) => {
        const slug = (data?.slug as string) || "";
        return slug === "home" ? "/" : `/${slug}`;
      },
    },
  },
  versions: {
    drafts: {
      autosave: { interval: 800 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  access: {
    read: publishedOrAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField("title"),
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              minRows: 0,
              blocks: [],
              admin: {
                description:
                  "Compose the page from blocks. Block schemas will be added in Phase 2.",
              },
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "meta",
              type: "group",
              fields: [
                { name: "title", type: "text" },
                { name: "description", type: "textarea" },
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
