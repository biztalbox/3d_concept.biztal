import { unstable_cache } from "next/cache";

import { getPayload } from "@/lib/payload";
import type { Post } from "@/payload-types";

/**
 * Fetch a single published post by slug.
 *
 * Returns `null` if the post is not found (lets the route call `notFound()`).
 * Tagged as `post:<slug>` so afterChange/afterDelete hooks can invalidate it.
 */
export const getPost = async (slug: string): Promise<Post | null> => {
  if (!slug) return null;

  const cached = unstable_cache(
    async () => {
      const payload = await getPayload();

      const result = await payload.find({
        collection: "posts",
        depth: 2,
        limit: 1,
        where: {
          and: [
            { slug: { equals: slug } },
            { _status: { equals: "published" } },
          ],
        },
      });

      return (result.docs[0] as Post) ?? null;
    },
    ["post", slug],
    {
      tags: ["posts", `post:${slug}`],
      revalidate: 3600,
    },
  );

  return cached();
};
