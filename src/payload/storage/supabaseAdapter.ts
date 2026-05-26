import type { Adapter, GeneratedAdapter } from "@payloadcms/plugin-cloud-storage/types";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type SupabaseStorageOptions = {
  supabaseUrl: string;
  serviceRoleKey: string;
  bucket: string;
};

let client: SupabaseClient | null = null;

function getClient(options: SupabaseStorageOptions): SupabaseClient {
  if (!client) {
    client = createClient(options.supabaseUrl, options.serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

function buildPath(
  collectionPrefix: string,
  docPrefix: string | undefined,
  filename: string,
): string {
  const parts = [collectionPrefix, docPrefix, filename].filter(Boolean);
  return parts.join("/").replace(/\/+/g, "/");
}

export function createSupabaseAdapter(
  options: SupabaseStorageOptions,
): Adapter {
  return ({ prefix = "media" }): GeneratedAdapter => {
    const supabase = getClient(options);

    return {
      name: "supabase",
      generateURL: ({ filename, prefix: docPrefix = "" }) => {
        const path = buildPath(prefix, docPrefix, filename);
        const { data } = supabase.storage
          .from(options.bucket)
          .getPublicUrl(path);
        return data.publicUrl;
      },
      handleUpload: async ({ file, data }) => {
        const path = buildPath(prefix, data.prefix, file.filename);

        const { error } = await supabase.storage
          .from(options.bucket)
          .upload(path, file.buffer, {
            contentType: file.mimeType,
            upsert: true,
          });

        if (error) {
          throw new Error(`Supabase upload failed: ${error.message}`);
        }

        return data;
      },
      handleDelete: async ({ doc, filename }) => {
        const path = buildPath(prefix, doc.prefix, filename);
        await supabase.storage.from(options.bucket).remove([path]);
      },
      staticHandler: async (_req, { params }) => {
        const path = buildPath(prefix, params.prefix, params.filename);
        const { data } = supabase.storage
          .from(options.bucket)
          .getPublicUrl(path);
        return Response.redirect(data.publicUrl, 302);
      },
    };
  };
}
