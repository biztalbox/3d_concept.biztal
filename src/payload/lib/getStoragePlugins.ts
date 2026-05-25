import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import { s3Storage } from "@payloadcms/storage-s3";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import type { Plugin } from "payload";

import { createSupabaseAdapter } from "../storage/supabaseAdapter";
import { getS3StorageConfig } from "./storage";
import { getSupabaseStorageConfig } from "./supabaseStorage";

/**
 * Cloud storage plugins for media (required on serverless production).
 * Priority: Supabase service role → Supabase S3 keys → Vercel Blob → local disk (dev).
 */
export function getStoragePlugins(): Plugin[] {
  const supabase = getSupabaseStorageConfig();

  if (supabase) {
    return [
      cloudStoragePlugin({
        collections: {
          media: {
            adapter: createSupabaseAdapter({
              supabaseUrl: supabase.supabaseUrl,
              serviceRoleKey: supabase.serviceRoleKey,
              bucket: supabase.bucket,
            }),
            disablePayloadAccessControl: true,
            disableLocalStorage: true,
            prefix: "media",
          },
        },
      }),
    ];
  }

  const s3 = getS3StorageConfig();

  if (s3) {
    return [
      s3Storage({
        collections: {
          media: {
            prefix: "media",
            disablePayloadAccessControl: true,
          },
        },
        bucket: s3.bucket,
        acl: "public-read",
        config: {
          credentials: {
            accessKeyId: s3.accessKeyId,
            secretAccessKey: s3.secretAccessKey,
          },
          region: s3.region,
          endpoint: s3.endpoint,
          forcePathStyle: true,
        },
      }),
    ];
  }

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (blobToken) {
    return [
      vercelBlobStorage({
        collections: { media: true },
        token: blobToken,
      }),
    ];
  }

  return [];
}

export function hasCloudStorage(): boolean {
  return getStoragePlugins().length > 0;
}
