function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

export type SupabaseStorageConfig = {
  supabaseUrl: string;
  serviceRoleKey: string;
  bucket: string;
};

/** Supabase Storage via service role (no S3 access keys required). */
export function getSupabaseStorageConfig(): SupabaseStorageConfig | null {
  const supabaseUrl = env("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey =
    env("SUPABASE_SERVICE_ROLE_KEY") || env("SUPABASE_SERVICE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return {
    supabaseUrl,
    serviceRoleKey,
    bucket: env("SUPABASE_STORAGE_BUCKET") || env("S3_BUCKET") || "media",
  };
}
