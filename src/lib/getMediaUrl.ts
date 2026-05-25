/**
 * Resolve a Payload media URL for the current environment.
 * Fixes relative paths and localhost URLs saved while developing locally.
 */
export function getMediaUrl(url: string | null | undefined): string | null {
  if (!url?.trim()) return null;

  const trimmed = url.trim();
  const serverUrl = (
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"
  ).replace(/\/$/, "");

  if (trimmed.startsWith("/")) {
    return `${serverUrl}${trimmed}`;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const parsed = new URL(trimmed);
      const isLocalHost =
        parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";

      if (isLocalHost) {
        return `${serverUrl}${parsed.pathname}${parsed.search}`;
      }

      return trimmed;
    } catch {
      return trimmed;
    }
  }

  return trimmed;
}
