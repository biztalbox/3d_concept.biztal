import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";
import { revalidatePath, revalidateTag } from "next/cache";

import type { Post } from "@/payload-types";

/**
 * Invalidate cached blog routes after a post is created or updated.
 * - Always purges the listing
 * - Purges the previous slug too (in case slug changed) and the new slug
 */
export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  // Only refresh the public site when the published version changes.
  if (doc._status !== "published") {
    return doc;
  }

  try {
    revalidateTag("posts", "max");
    revalidatePath("/blogs", "layout");

    if (doc?.slug) {
      revalidatePath(`/blogs/${doc.slug}`);
    }

    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      revalidatePath(`/blogs/${previousDoc.slug}`);
    }
  } catch (err) {
    payload.logger.error({ err }, "[revalidatePost] failed to revalidate");
  }

  return doc;
};

export const revalidateDeletedPost: CollectionAfterDeleteHook<Post> = ({
  doc,
  req: { payload },
}) => {
  try {
    revalidateTag("posts", "max");
    revalidatePath("/blogs");

    if (doc?.slug) {
      revalidatePath(`/blogs/${doc.slug}`);
    }
  } catch (err) {
    payload.logger.error({ err }, "[revalidateDeletedPost] failed to revalidate");
  }
};
