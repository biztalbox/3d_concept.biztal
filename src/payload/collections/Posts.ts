import type { CollectionConfig } from "payload";
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
} from "@payloadcms/richtext-lexical";

import { isAdmin } from "../access/isAdmin";
import { isEditorOrAdmin } from "../access/isEditorOrAdmin";
import { publishedOrAdmin } from "../access/publishedOrAdmin";
import { slugField } from "../fields/slug";
import { revalidateDeletedPost, revalidatePost } from "../hooks/revalidatePost";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "publishedAt"],
    group: "Content",
    livePreview: {
      url: ({ data }) => `/blogs/${data?.slug || ""}`,
    },
  },
  versions: {
    drafts: {
      autosave: { interval: 800 },
      schedulePublish: true,
    },
    maxPerDoc: 25,
  },
  hooks: {
    afterChange: [revalidatePost],
    afterDelete: [revalidateDeletedPost],
  },
  access: {
    read: publishedOrAdmin,
    create: isEditorOrAdmin,
    update: isEditorOrAdmin,
    delete: isAdmin,
    readVersions: isEditorOrAdmin,
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
              name: "excerpt",
              type: "textarea",
              maxLength: 240,
              admin: {
                description: "Short summary shown on listing pages and SEO.",
              },
            },
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
            },
          ],
        },
        {
          label: "Meta",
          fields: [
            {
              name: "publishedAt",
              type: "date",
              admin: {
                position: "sidebar",
                date: { pickerAppearance: "dayAndTime" },
              },
            },
            {
              name: "tags",
              type: "array",
              admin: { position: "sidebar" },
              fields: [{ name: "tag", type: "text" }],
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
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
