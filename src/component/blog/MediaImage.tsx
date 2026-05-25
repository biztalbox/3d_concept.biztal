import Image from "next/image";

import { getMediaUrl } from "@/lib/getMediaUrl";
import type { Media } from "@/payload-types";

type Props = {
  media: Media | number | null | undefined;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

/**
 * Renders a Payload Media document with Next.js Image.
 *
 * Handles three cases:
 * - Populated Media object (use `url` + width/height for `fill={false}` mode)
 * - Number (unpopulated relation) → renders nothing
 * - Null / undefined → renders nothing
 */
export function MediaImage({
  media,
  alt,
  className,
  sizes,
  priority,
  fill = true,
  width,
  height,
}: Props) {
  if (!media || typeof media !== "object") return null;

  const src = getMediaUrl(media.url);
  if (!src) return null;

  const resolvedAlt = alt ?? media.alt ?? "";

  if (fill) {
    return (
      <Image
        src={src}
        alt={resolvedAlt}
        fill
        className={className}
        sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={resolvedAlt}
      width={width ?? media.width ?? 1200}
      height={height ?? media.height ?? 800}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
