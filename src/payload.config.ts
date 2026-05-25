import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { getServerURL } from "./lib/getServerURL";
import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Pages } from "./payload/collections/Pages";
import { Posts } from "./payload/collections/Posts";
import { getAllowedOrigins } from "./payload/lib/getAllowedOrigins";
import { getStoragePlugins, hasCloudStorage } from "./payload/lib/getStoragePlugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const serverURL = getServerURL();
const allowedOrigins = getAllowedOrigins();

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — ZerofAI CMS",
    },
    components: {},
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  editor: lexicalEditor(),
  plugins: getStoragePlugins(),
  onInit: async (payload) => {
    if (process.env.NODE_ENV === "production" && !hasCloudStorage()) {
      payload.logger.error(
        "[media] Cloud storage is not configured. Set Supabase S3 keys (S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY) or BLOB_READ_WRITE_TOKEN. Uploads will fail with 500 on serverless hosts.",
      );
    }
    payload.logger.info(`[payload] serverURL=${serverURL}`);
  },
  collections: [Users, Media, Pages, Posts],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
      // Supabase / Neon / Vercel Postgres require SSL. rejectUnauthorized=false
      // is safe with managed providers that use a CA we don't bundle.
      ssl: { rejectUnauthorized: false },
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  sharp,
  graphQL: {
    schemaOutputFile: path.resolve(dirname, "payload-schema.graphql"),
  },
  upload: {
    limits: {
      fileSize: 20 * 1024 * 1024,
    },
  },
  cors: allowedOrigins,
  csrf: allowedOrigins,
});
