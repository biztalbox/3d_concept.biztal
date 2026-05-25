function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

/** Supabase S3-compatible endpoint derived from project URL when S3_ENDPOINT is omitted. */
export function getS3Endpoint(): string | undefined {
  const explicit = env("S3_ENDPOINT");
  if (explicit) return explicit;

  const supabaseUrl = env("NEXT_PUBLIC_SUPABASE_URL");
  if (!supabaseUrl) return undefined;

  return `${supabaseUrl.replace(/\/$/, "")}/storage/v1/s3`;
}

export type S3StorageConfig = {
  bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  endpoint: string;
};

/** Valid S3 credentials for Payload media uploads (Supabase Storage). */
export function getS3StorageConfig(): S3StorageConfig | null {
  const bucket = env("S3_BUCKET");
  const accessKeyId = env("S3_ACCESS_KEY_ID");
  const secretAccessKey = env("S3_SECRET_ACCESS_KEY");
  const endpoint = getS3Endpoint();

  if (!bucket || !accessKeyId || !secretAccessKey || !endpoint) {
    return null;
  }

  return {
    bucket,
    accessKeyId,
    secretAccessKey,
    region: env("S3_REGION") || "us-east-1",
    endpoint,
  };
}

/** True when Supabase/S3 media storage is fully configured. */
export const useS3Storage = getS3StorageConfig() !== null;
