import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";

import { MediaImage } from "@/component/blog/MediaImage";
import { PostMeta } from "@/component/blog/PostMeta";
import { PostCard } from "@/component/blog/PostCard";
import { estimateReadingTime } from "@/lib/format";
import { hasRichTextContent } from "@/lib/hasRichTextContent";
import { getPayload } from "@/lib/payload";
import { getPost } from "@/lib/queries/getPost";
import { getPosts } from "@/lib/queries/getPosts";
import type { Media } from "@/payload-types";

/** Always read fresh published content from Payload (no stale ISR cache). */
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "posts",
    limit: 100,
    depth: 0,
    draft: false,
    overrideAccess: true,
    where: { _status: { equals: "published" } },
    select: { slug: true },
  });

  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Post not found" };

  const seoImage =
    post.meta?.image && typeof post.meta.image === "object"
      ? (post.meta.image as Media)
      : post.heroImage && typeof post.heroImage === "object"
        ? (post.heroImage as Media)
        : undefined;

  return {
    title: post.meta?.title || post.title,
    description: post.meta?.description || post.excerpt || undefined,
    openGraph: {
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt || undefined,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      images: seoImage?.url
        ? [
            {
              url: seoImage.url,
              width: seoImage.width || 1200,
              height: seoImage.height || 630,
              alt: seoImage.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt || undefined,
      images: seoImage?.url ? [seoImage.url] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const readingTime = estimateReadingTime(post.content);

  // Pull a handful of recent posts for "Continue reading", excluding current
  const { docs: recent } = await getPosts({ page: 1, limit: 4 });
  const related = recent.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,211,255,0.18)_0%,rgba(0,164,190,0.08)_42%,rgba(245,250,252,0)_75%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,211,255,0.34)_0%,rgba(0,164,190,0.18)_42%,rgba(0,0,0,0)_75%)]" />

        <div className="container relative pt-10 sm:pt-14 lg:pt-16">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M19 12H5m6-7l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to blog
          </Link>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <PostMeta
              publishedAt={post.publishedAt}
              readingTime={readingTime}
              tags={post.tags}
              className="justify-center"
            />

            <h1 className="mt-6 text-foreground !text-4xl md:!text-5xl lg:!text-6xl">
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className="mx-auto mt-6 max-w-2xl !text-base md:!text-lg !text-muted-foreground">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </div>

        {post.heroImage && typeof post.heroImage === "object" ? (
          <div className="container relative mt-10 sm:mt-12 lg:mt-14">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-secondary shadow-xl dark:border-white/8 dark:bg-secondary/40 sm:rounded-3xl">
              <MediaImage
                media={post.heroImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1280px) 1200px, 100vw"
              />
            </div>
          </div>
        ) : null}
      </section>

      {/* Body */}
      <section className="container py-12 sm:py-16 lg:py-20">
        <article className="mx-auto max-w-3xl">
          {hasRichTextContent(post.content) ? (
            <div className="post-content space-y-6">
              <RichText
                data={post.content as SerializedEditorState}
              />
            </div>
          ) : (
            <p className="text-center !text-muted-foreground">
              This post has no content yet. Open it in the CMS, add body text in
              the Content field, then click <strong>Publish changes</strong> (not
              only Save draft).
            </p>
          )}
        </article>

        {/* Footer meta */}
        <div className="mx-auto mt-12 max-w-3xl border-t border-neutral-200 pt-8 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <PostMeta
              publishedAt={post.publishedAt}
              readingTime={readingTime}
              tags={post.tags}
            />
            <Link
              href="/blogs"
              className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-white/15"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="container pb-16 sm:pb-20">
          <header className="mb-8 flex items-end justify-between gap-4">
            <h2 className="!text-2xl sm:!text-3xl">Continue reading</h2>
            <Link
              href="/blogs"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              View all →
            </Link>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
