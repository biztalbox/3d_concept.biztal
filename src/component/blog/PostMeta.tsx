import { formatDate } from "@/lib/format";
import type { Post } from "@/payload-types";

type Props = {
  publishedAt?: Post["publishedAt"];
  readingTime?: number;
  tags?: Post["tags"];
  className?: string;
};

export function PostMeta({ publishedAt, readingTime, tags, className }: Props) {
  const formatted = formatDate(publishedAt);
  const validTags = tags?.filter((t) => Boolean(t?.tag)) ?? [];

  return (
    <div
      className={[
        "flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground",
        className ?? "",
      ].join(" ")}
    >
      {formatted ? (
        <time dateTime={publishedAt ?? undefined} className="font-medium">
          {formatted}
        </time>
      ) : null}

      {readingTime && formatted ? <span aria-hidden>·</span> : null}

      {readingTime ? <span>{readingTime} min read</span> : null}

      {validTags.length > 0 ? (
        <ul className="flex flex-wrap items-center gap-1.5 pl-0! list-none!">
          {validTags.map((t, i) => (
            <li
              key={t.id ?? `${t.tag}-${i}`}
              className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary"
            >
              {t.tag}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
