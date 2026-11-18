import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: process.env.NODE_ENV === "production",
  serverExternalPackages: ["sharp"],
  turbopack: {
    root: dirname,
  },
  images: {
    localPatterns: [{ pathname: "/assets/**" }, { pathname: "/**" }],
    // Next.js 16 blocks localhost/private IPs unless allowed (dev + self-hosted).
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "res-console.cloudinary.com" },
    ],
  },
};

export default nextConfig;
