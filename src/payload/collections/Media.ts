import path from "path";
import { fileURLToPath } from "url";

import type { CollectionConfig } from "payload";

import { getMediaUrl } from "@/lib/getMediaUrl";

import { anyone } from "../access/anyone";
import { isAdmin } from "../access/isAdmin";
import { isEditorOrAdmin } from "../access/isEditorOrAdmin";
import { hasCloudStorage } from "../lib/getStoragePlugins";

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
  hooks: {
    afterRead: [
      ({ doc }) => {
        if (doc?.url && typeof doc.url === "string") {
          const fixed = getMediaUrl(doc.url);
          if (fixed) doc.url = fixed;
        }
        if (doc?.sizes && typeof doc.sizes === "object") {
          for (const size of Object.values(doc.sizes)) {
            if (size && typeof size === "object" && "url" in size && size.url) {
              const fixed = getMediaUrl(size.url as string);
              if (fixed) size.url = fixed;
            }
          }
        }
        return doc;
      },
    ],
  },
  access: {
    read: anyone,
    create: isEditorOrAdmin,
    update: isEditorOrAdmin,
    delete: isAdmin,
  },
  upload: {
    // Local folder for dev only; cloud plugin handles production uploads.
    ...(!hasCloudStorage() ? { staticDir: mediaDir } : {}),
    mimeTypes: ["image/*", "video/*", "application/pdf"],
    imageSizes: [
      { name: "thumbnail", width: 400, height: undefined, position: "centre" },
      { name: "card", width: 768, height: undefined, position: "centre" },
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
