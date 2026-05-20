import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const COMPARE_BADGE_ICONS = {
  oldWay: "/assets/icons/old-way-badge.png",
  zerofaiWay: "/assets/icons/zerofai-way-badge.png",
} as const;

const compareBadgeIconBox =
  "flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center sm:h-[5rem] sm:w-[5rem]";

function CompareBadgeIcon({
  src,
  alt,
  variant,
}: {
  src: string;
  alt: string;
  variant: "old" | "new";
}) {
  if (variant === "old") {
    return (
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="h-[4.5rem] w-[4.5rem] shrink-0 object-contain sm:h-[5rem] sm:w-[5rem]"
      />
    );
  }

  return (
    <div className={compareBadgeIconBox}>
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="h-[3.25rem] w-[3.25rem] object-contain sm:h-[3.75rem] sm:w-[3.75rem]"
      />
    </div>
  );
}

function CompareStepPill({
  variant,
  label,
}: {
  variant: "old" | "new";
  label: string;
}) {
  const isOld = variant === "old";

  return (
    <li
      className={
        isOld
          ? "flex items-center gap-3 rounded-full bg-neutral-200 px-5 py-3.5 sm:px-6 sm:py-4 dark:bg-[#1e1e1e]"
          : "flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-neutral-900 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4 dark:bg-white dark:ring-0"
      }
    >
      <span
        className={`relative flex size-8 shrink-0 items-center justify-center ${isOld ? "" : "text-primary"}`}
        aria-hidden
      >
        <FaRegCircle className="absolute size-8 text-primary [&>path]:fill-primary" />
        <span className="absolute inset-[3px] z-1 rounded-full bg-primary sm:inset-1" />
        {isOld ? (
          <RxCross2 className="relative z-10 size-3.5 text-white sm:size-4" />
        ) : (
          <FaCheck className="relative z-10 size-3 text-white sm:size-3.5" />
        )}
      </span>
      <span
        className={
          isOld
            ? "text-sm font-medium text-neutral-900 sm:text-[0.9375rem] dark:text-white"
            : "text-sm font-medium text-neutral-900 sm:text-[0.9375rem]"
        }
      >
        {label}
      </span>
    </li>
  );
}

export default function OldWayZerofaiWayCompare({
  oldWayItems,
  zerofaiWayItems,
  className = "mt-10",
}: {
  oldWayItems: readonly string[];
  zerofaiWayItems: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={`mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-0 ${className}`}
    >
      <div className="flex flex-col items-center md:pr-10 lg:pr-14">
        <CompareBadgeIcon
          src={COMPARE_BADGE_ICONS.oldWay}
          alt="The Old Way"
          variant="old"
        />
        <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-base dark:text-white">
          The Old Way
        </p>
        <ul className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:gap-3.5">
          {oldWayItems.map((label) => (
            <CompareStepPill key={`old-${label}`} variant="old" label={label} />
          ))}
        </ul>
      </div>

      <div
        className="relative flex min-h-8 items-center justify-center md:min-h-0 md:w-px md:self-stretch"
        aria-hidden
      >
        <div className="h-px w-full max-w-xs bg-neutral-300 md:hidden dark:bg-neutral-600" />
        <div className="absolute top-1/2 left-1/2 hidden h-full w-px -translate-x-1/2 -translate-y-1/2 bg-neutral-300 md:block dark:bg-neutral-600" />
        <span className="absolute z-10 size-3 rounded-full bg-primary ring-4 ring-neutral-100 dark:ring-[#1a1a1a]" />
      </div>

      <div className="flex flex-col items-center md:pl-10 lg:pl-14">
        <CompareBadgeIcon
          src={COMPARE_BADGE_ICONS.zerofaiWay}
          alt="The ZerofAI Way"
          variant="new"
        />
        <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-base dark:text-white">
          The ZerofAI Way
        </p>
        <ul className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:gap-3.5">
          {zerofaiWayItems.map((label) => (
            <CompareStepPill key={`new-${label}`} variant="new" label={label} />
          ))}
        </ul>
      </div>
    </div>
  );
}
