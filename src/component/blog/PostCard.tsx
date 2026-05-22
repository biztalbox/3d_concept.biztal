import Link from "next/link";

import { MediaImage } from "./MediaImage";
import { PostMeta } from "./PostMeta";
import type { Post } from "@/payload-types";

type Props = {
  post: Post;
  priority?: boolean;
};

export function PostCard({ post, priority }: Props) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/90 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/8 dark:bg-[#111111]/90 dark:shadow-none dark:hover:border-primary/40">
      <Link
        href={`/blogs/${post.slug}`}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary dark:bg-secondary/40">
          {post.heroImage ? (
            <MediaImage
              media={post.heroImage}
              alt={post.title}
              fill
              priority={priority}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/10 via-secondary to-primary/5 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/10">
              <span className="text-3xl font-extrabold tracking-tight text-primary/30">
                ZerofAI
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <PostMeta
            publishedAt={post.publishedAt}
            tags={post.tags}
          />

          <h3 className="!text-xl !font-bold !leading-snug !text-foreground transition-colors duration-200 group-hover:!text-primary md:!text-2xl">
            {post.title}
          </h3>

          {post.excerpt ? (
            <p className="!text-sm !leading-6 !text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          ) : null}

          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
            <span>Read article</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
