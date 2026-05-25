import { s3Storage } from "@payloadcms/storage-s3";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { getS3StorageConfig } from "./storage";

/**
 * Cloud storage plugins for media (required on serverless production).
 * Priority: Supabase S3 → Vercel Blob → none (local disk, dev only).
 */
export function getStoragePlugins() {
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
