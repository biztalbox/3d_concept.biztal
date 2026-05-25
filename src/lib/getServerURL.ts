function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function isLocalhost(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return host === "localhost" || host === "127.0.0.1";
  } catch {
    return /localhost|127\.0\.0\.1/i.test(url);
  }
}

function normalize(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Public origin for Payload (media URLs, CORS, CSRF, live preview).
 * Never returns localhost when a production URL is available.
 */
export function getServerURL(): string {
  const candidates = [
    env("PAYLOAD_PUBLIC_SERVER_URL"),
    env("SITE_URL"),
    env("NEXT_PUBLIC_SERVER_URL"),
  ];

  for (const candidate of candidates) {
    if (candidate && !isLocalhost(candidate)) {
      return normalize(candidate);
    }
  }

  if (env("VERCEL_PROJECT_PRODUCTION_URL")) {
    return normalize(`https://${env("VERCEL_PROJECT_PRODUCTION_URL")}`);
  }

  if (env("VERCEL_URL")) {
    return normalize(`https://${env("VERCEL_URL")}`);
  }

  // Production deploy: avoid localhost URLs in CMS when env was not updated.
  if (process.env.NODE_ENV === "production") {
    return "https://tc2.biztalbox.com";
  }

  const fallback = env("NEXT_PUBLIC_SERVER_URL");
  return normalize(fallback || "http://localhost:3000");
}
