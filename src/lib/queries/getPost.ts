import { getPayload } from "@/lib/payload";
import type { Post } from "@/payload-types";

/**
 * Fetch a single published post by slug (always the published version, not draft).
 *
 * Returns `null` if the post is not found (lets the route call `notFound()`).
 * Not wrapped in unstable_cache so CMS publishes show on the site immediately.
 */
export const getPost = async (slug: string): Promise<Post | null> => {
  if (!slug) return null;

  const payload = await getPayload();

  const result = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 1,
    draft: false,
    overrideAccess: true,
    where: {
      and: [
        { slug: { equals: slug } },
        { _status: { equals: "published" } },
      ],
    },
  });

  return (result.docs[0] as Post) ?? null;
};
