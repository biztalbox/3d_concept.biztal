/**
 * Returns true when a Payload Lexical rich-text field has visible text.
 */
export function hasRichTextContent(content: unknown): boolean {
  if (!content || typeof content !== "object") return false;

  let hasText = false;

  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    const n = node as Record<string, unknown>;

    if (typeof n.text === "string" && n.text.trim().length > 0) {
      hasText = true;
      return;
    }

    if (Array.isArray(n.children)) {
      for (const child of n.children) {
        walk(child);
        if (hasText) return;
      }
    }
  };

  walk((content as { root?: unknown }).root);
  return hasText;
}
