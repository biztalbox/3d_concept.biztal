import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Payload returns absolute media URLs (based on `serverURL`), so we must
 * whitelist the host that's serving them in `images.remotePatterns`.
 */
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const serverUrlPattern = (() => {
  if (!serverUrl) return null;
  try {
    const u = new URL(serverUrl);
    return {
      protocol: (u.protocol.replace(":", "") as "http" | "https"),
      hostname: u.hostname,
      port: u.port || undefined,
    };
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  // React Compiler temporarily disabled to reduce dev-time memory pressure
  // when compiling the Payload admin bundle. Re-enable in production builds.
  reactCompiler: process.env.NODE_ENV === "production",
  turbopack: {
    root: dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "res-console.cloudinary.com" },
      // Always allow localhost in dev for Payload media (`/api/media/file/*`)
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
      // Dynamically allow the configured server URL (production domain)
      ...(serverUrlPattern ? [serverUrlPattern] : []),
    ],
  },
};

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
});
