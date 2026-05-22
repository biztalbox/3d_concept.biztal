import { unstable_cache } from "next/cache";

import { getPayload } from "@/lib/payload";
import type { Post } from "@/payload-types";

export type GetPostsArgs = {
  page?: number;
  limit?: number;
  tag?: string;
};

export type GetPostsResult = {
  docs: Post[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

/**
 * Fetch published blog posts (newest first) with pagination.
 *
 * Tagged with `posts` so Payload's `afterChange` / `afterDelete` hooks can
 * invalidate this query when editors publish or remove content.
 */
export const getPosts = async ({
  page = 1,
  limit = 9,
  tag,
}: GetPostsArgs = {}): Promise<GetPostsResult> => {
  const cached = unstable_cache(
    async () => {
      const payload = await getPayload();

      const result = await payload.find({
        collection: "posts",
        page,
        limit,
        sort: "-publishedAt",
        depth: 1,
        where: {
          and: [
            { _status: { equals: "published" } },
            ...(tag
              ? [
                  {
                    "tags.tag": {
                      equals: tag,
                    },
                  },
                ]
              : []),
          ],
        },
      });

      return {
        docs: result.docs as Post[],
        totalDocs: result.totalDocs,
        totalPages: result.totalPages,
        page: result.page ?? page,
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
      };
    },
    ["posts", String(page), String(limit), tag ?? "all"],
    {
      tags: ["posts"],
      revalidate: 3600,
    },
  );

  return cached();
};
