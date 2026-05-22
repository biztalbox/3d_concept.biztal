import Link from "next/link";

export default function PostNotFound() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white p-10 sm:p-20 dark:bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,211,255,0.18)_0%,rgba(0,164,190,0.1)_48%,rgba(245,250,252,0.96)_90%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,211,255,0.4)_0%,rgba(0,164,190,0.25)_46%,rgba(0,0,0,0.88)_88%)]" />

        <div className="container relative flex flex-col items-center justify-center text-center py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            404 · Article not found
          </p>
          <h1 className="mt-5 text-foreground">
            This <span className="text-primary!">story</span>
            <br />
            doesn&apos;t exist.
          </h1>
          <p className="mt-7 max-w-[560px] text-sm text-foreground/70 dark:text-white/70">
            The article you&apos;re looking for may have been moved, renamed, or
            unpublished. Browse our latest writing instead.
          </p>
          <Link
            href="/blogs"
            className="mt-10 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Back to blog
          </Link>
        </div>
      </section>
    </main>
  );
}
