import type { Metadata } from "next";

import { PostCard } from "@/component/blog/PostCard";
import { Pagination } from "@/component/blog/Pagination";
import { getPosts } from "@/lib/queries/getPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, deep-dives, and field reports on autonomous IT operations from the ZerofAI team.",
};

const POSTS_PER_PAGE = 9;

type Props = {
  searchParams: Promise<{ page?: string; tag?: string }>;
};

export default async function BlogsPage({ searchParams }: Props) {
  const params = await searchParams;
  const requestedPage = Math.max(1, Number(params?.page) || 1);
  const tag = params?.tag?.trim() || undefined;

  const { docs: posts, totalPages, page, totalDocs } = await getPosts({
    page: requestedPage,
    limit: POSTS_PER_PAGE,
    tag,
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white p-10 sm:p-16 lg:p-20 dark:bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,211,255,0.2)_0%,rgba(0,164,190,0.12)_48%,rgba(245,250,252,0.96)_90%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,211,255,0.46)_0%,rgba(0,164,190,0.28)_46%,rgba(0,0,0,0.88)_88%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0.42)_100%)] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.72)_100%)]" />

        <div className="container relative flex flex-col items-center justify-center py-16 text-center sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
            ZerofAI Insights
          </div>

          <h1 className="mt-6 text-foreground">
            The <span className="text-primary!">Autonomous</span>
            <br />
            Enterprise Journal
          </h1>

          <p className="mt-7 max-w-[760px] text-foreground/70 dark:text-white/70">
            Field reports, technical deep-dives, and frameworks for building
            self-healing IT infrastructure. Written by the engineers shipping
            ZerofAI to Fortune 100 enterprises.
          </p>

          {tag ? (
            <p className="mt-6 text-sm text-muted-foreground">
              Filtering by tag:{" "}
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                #{tag}
              </span>
              <a href="/blogs" className="ml-3 underline hover:text-primary">
                Clear
              </a>
            </p>
          ) : null}
        </div>
      </section>

      {/* Grid */}
      <section className="container py-12 sm:py-16 lg:py-20">
        {posts.length === 0 ? (
          <EmptyState tag={tag} />
        ) : (
          <>
            <header className="mb-8 flex items-end justify-between gap-4">
              <h2 className="!text-2xl sm:!text-3xl">
                {tag ? `Tagged “${tag}”` : "Latest articles"}
              </h2>
              <p className="!text-sm !text-muted-foreground">
                {totalDocs} {totalDocs === 1 ? "article" : "articles"}
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
              {posts.map((post, idx) => (
                <PostCard key={post.id} post={post} priority={idx < 3} />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              basePath="/blogs"
              searchParams={{ tag }}
            />
          </>
        )}
      </section>
    </main>
  );
}

function EmptyState({ tag }: { tag?: string }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-neutral-300 px-8 py-16 text-center dark:border-white/15">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 12h6m-6 4h6m-7 5h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.586a1 1 0 0 1-.707-.293L11.293 3.293A1 1 0 0 0 10.586 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="mt-5 !text-xl !font-bold !text-foreground">
        {tag ? `No posts tagged “${tag}”` : "No articles published yet"}
      </h3>
      <p className="mt-3 !text-sm !text-muted-foreground">
        {tag
          ? "Try clearing the filter or check back soon for new posts on this topic."
          : "The team is putting the finishing touches on the first batch of articles. Check back shortly."}
      </p>
      {tag ? (
        <a
          href="/blogs"
          className="mt-7 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          View all posts
        </a>
      ) : null}
    </div>
  );
}
