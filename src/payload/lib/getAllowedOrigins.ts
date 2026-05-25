import { getServerURL } from "@/lib/getServerURL";

/**
 * Origins allowed for Payload CORS + CSRF.
 * Production must include the public site URL or admin saves fail with
 * "You are not allowed to perform this action."
 */
export function getAllowedOrigins(): string[] {
  const origins = new Set<string>();

  const add = (value?: string) => {
    if (!value?.trim()) return;
    const trimmed = value.trim();

    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      origins.add(trimmed.replace(/\/$/, ""));
      return;
    }

    origins.add(`https://${trimmed.replace(/\/$/, "")}`);
  };

  add(getServerURL());
  add(process.env.NEXT_PUBLIC_SERVER_URL);

  if (process.env.VERCEL_URL) {
    add(`https://${process.env.VERCEL_URL}`);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (process.env.PAYLOAD_ALLOWED_ORIGINS) {
    for (const origin of process.env.PAYLOAD_ALLOWED_ORIGINS.split(",")) {
      add(origin);
    }
  }

  // Local dev (Next may use 3001 when 3000 is busy)
  origins.add("http://localhost:3000");
  origins.add("http://localhost:3001");
  origins.add("http://127.0.0.1:3000");
  origins.add("http://127.0.0.1:3001");

  return [...origins];
}
