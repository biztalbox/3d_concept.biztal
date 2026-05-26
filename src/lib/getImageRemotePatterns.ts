import type { NextConfig } from "next";

import { getServerURL } from "./getServerURL";

type RemotePattern = NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
>[number];

/**
 * Hostnames allowed for next/image (Payload media + Supabase storage).
 */
export function getImageRemotePatterns(): RemotePattern[] {
  const patterns: RemotePattern[] = [
    { protocol: "https", hostname: "plus.unsplash.com" },
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "media.istockphoto.com" },
    { protocol: "https", hostname: "res-console.cloudinary.com" },
    { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
    { protocol: "http", hostname: "localhost" },
    { protocol: "http", hostname: "127.0.0.1" },
  ];

  const addFromUrl = (value?: string) => {
    if (!value?.trim()) return;
    try {
      const u = new URL(
        value.startsWith("http") ? value : `https://${value}`,
      );
      patterns.push({
        protocol: (u.protocol.replace(":", "") || "https") as "http" | "https",
        hostname: u.hostname,
        port: u.port || undefined,
        pathname: "/**",
      });
    } catch {
      // ignore invalid URLs
    }
  };

  addFromUrl(getServerURL());
  addFromUrl(process.env.NEXT_PUBLIC_SERVER_URL);
  addFromUrl("https://tc2.biztalbox.com");
  addFromUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  addFromUrl(process.env.S3_ENDPOINT);

  if (process.env.VERCEL_URL) {
    addFromUrl(`https://${process.env.VERCEL_URL}`);
  }

  return patterns;
}
