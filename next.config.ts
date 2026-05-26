import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

import { getImageRemotePatterns } from "./src/lib/getImageRemotePatterns";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // React Compiler temporarily disabled to reduce dev-time memory pressure
  // when compiling the Payload admin bundle. Re-enable in production builds.
  reactCompiler: process.env.NODE_ENV === "production",
  serverExternalPackages: ["sharp", "payload", "@payloadcms/db-postgres"],
  turbopack: {
    root: dirname,
  },
  images: {
    // Payload serves media from /api/media/file/* (often with ?updatedAt query strings).
    localPatterns: [
      { pathname: "/api/media/file/**" },
      { pathname: "/assets/**" },
      { pathname: "/**" },
    ],
    // Next.js 16 blocks localhost/private IPs unless allowed (dev + self-hosted).
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: getImageRemotePatterns(),
  },
};

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
});
