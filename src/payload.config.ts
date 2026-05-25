import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Pages } from "./payload/collections/Pages";
import { Posts } from "./payload/collections/Posts";
import { getAllowedOrigins } from "./payload/lib/getAllowedOrigins";
import { useS3Storage } from "./payload/lib/storage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
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
  plugins: [
    ...(useS3Storage
      ? [
          s3Storage({
            collections: {
              media: {
                prefix: "media",
                // Serve files directly from Supabase (public bucket) for site + admin previews.
                disablePayloadAccessControl: true,
              },
            },
            bucket: process.env.S3_BUCKET!,
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID!,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
              },
              region: process.env.S3_REGION || "us-east-1",
              endpoint: process.env.S3_ENDPOINT,
              forcePathStyle: true,
            },
          }),
        ]
      : []),
  ],
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
