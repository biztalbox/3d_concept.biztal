/**
 * Format an ISO date string as e.g. "21 May 2026".
 * Returns an empty string for null / invalid input so callers can render
 * conditionally without extra guards.
 */
export const formatDate = (iso?: string | null): string => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/**
 * Rough reading-time estimate based on a Lexical doc.
 * Walks the tree once and counts visible word characters.
 */
export const estimateReadingTime = (
  content: unknown,
  wordsPerMinute = 220,
): number => {
  if (!content || typeof content !== "object") return 1;

  let words = 0;

  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    const n = node as Record<string, unknown>;

    if (typeof n.text === "string") {
      words += n.text.trim().split(/\s+/).filter(Boolean).length;
    }

    if (Array.isArray(n.children)) {
      n.children.forEach(walk);
    }
  };

  walk((content as { root?: unknown }).root);

  return Math.max(1, Math.round(words / wordsPerMinute));
};
