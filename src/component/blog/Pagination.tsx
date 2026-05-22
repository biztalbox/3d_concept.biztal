import Link from "next/link";

type Props = {
  page: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string | undefined>;
};

const buildHref = (
  basePath: string,
  page: number,
  searchParams?: Record<string, string | undefined>,
) => {
  const params = new URLSearchParams();
  if (searchParams) {
    Object.entries(searchParams).forEach(([k, v]) => {
      if (v && k !== "page") params.set(k, v);
    });
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
};

export function Pagination({ page, totalPages, basePath, searchParams }: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {page > 1 ? (
        <Link
          href={buildHref(basePath, page - 1, searchParams)}
          className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-white/15"
        >
          ← Previous
        </Link>
      ) : null}

      <ul className="flex items-center gap-1.5 list-none! pl-0!">
        {pages.map((p) => {
          const isActive = p === page;
          return (
            <li key={p}>
              <Link
                href={buildHref(basePath, p, searchParams)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "grid h-9 w-9 place-items-center rounded-full text-xs font-semibold transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "border border-neutral-200 text-foreground hover:border-primary hover:text-primary dark:border-white/15",
                ].join(" ")}
              >
                {p}
              </Link>
            </li>
          );
        })}
      </ul>

      {page < totalPages ? (
        <Link
          href={buildHref(basePath, page + 1, searchParams)}
          className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-white/15"
        >
          Next →
        </Link>
      ) : null}
    </nav>
  );
}
