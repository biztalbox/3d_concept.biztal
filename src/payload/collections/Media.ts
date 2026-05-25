import path from "path";
import { fileURLToPath } from "url";

import type { CollectionConfig } from "payload";

import { anyone } from "../access/anyone";
import { isAdmin } from "../access/isAdmin";
import { isEditorOrAdmin } from "../access/isEditorOrAdmin";
import { useS3Storage } from "../lib/storage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Absolute path to the on-disk media folder.
 * Resolved from this collection file: `src/payload/collections/Media.ts`
 * → goes up three levels to project root, then into `./media/`.
 *
 * Using an absolute path is required so Payload's static-file endpoint
 * (`/api/media/file/[filename]`) reads from the same directory that
 * uploads are written to, regardless of CWD.
 */
const mediaDir = path.resolve(dirname, "../../../media");

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Admin",
  },
  access: {
    read: anyone,
    create: isEditorOrAdmin,
    update: isEditorOrAdmin,
    delete: isAdmin,
  },
  upload: {
    // Local folder for dev; Supabase S3 plugin replaces this on production.
    ...(!useS3Storage ? { staticDir: mediaDir } : {}),
    mimeTypes: ["image/*", "video/*", "application/pdf"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: undefined,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: undefined,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
      {
        name: "desktop",
        width: 1920,
        height: undefined,
        position: "centre",
      },
    ],
    focalPoint: true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description:
          "Required for accessibility. Describe what is shown in the image for screen readers and SEO.",
      },
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};
