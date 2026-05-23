import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoFingerPrint } from "react-icons/io5";
import { CgCalculator } from "react-icons/cg";
import { CiVirus } from "react-icons/ci";
import { Crosshair } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import type { ReactNode } from "react";
import { IoMdTime, IoIosPerson } from "react-icons/io";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsShieldCheck } from "react-icons/bs";

const RECOVERY_STORY_IMAGES = [
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/2265515077/photo/echnology-consultant-integrates-artificial-intelligence-engine-with-data-visualization.webp?a=1&b=1&s=612x612&w=0&k=20&c=qD69FXAFYtbN1Q3XIVsMF9iNv-HKaPzm_s_D9q6rsHE=",
  "https://media.istockphoto.com/id/2208747071/photo/hands-of-robots-touching-on-access-management-network-connections-highlight-robotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vch3r1Ej9lyc1Xhp_-FftSYKO7GK9sYUXsTMS9frMyA=",
] as const;

const recoveryStoryRows: {
  title: string;
  body: string;
  image: (typeof RECOVERY_STORY_IMAGES)[number];
  imageFirst: boolean;
}[] = [
  {
    title: "Event-Driven Recovery Initiation",
    body: "ZerofAI detects account lockouts, authentication failures, or user-triggered recovery requests initiating recovery workflows instantly without ticket creation.",
    image: RECOVERY_STORY_IMAGES[0],
    imageFirst: false,
  },
  {
    title: "Identity Validation",
    body: "Using contextual data, historical patterns, and identity policies, ZerofAI determines whether access should be restored removing reliance on manual verification.",
    image: RECOVERY_STORY_IMAGES[1],
    imageFirst: true,
  },
  {
    title: "Autonomous Access Restoration",
    body: "ZerofAI resets credentials, re-establishes authentication methods, and validates successful login, completing the recovery process end-to-end.",
    image: RECOVERY_STORY_IMAGES[2],
    imageFirst: false,
  },
];

const remediationOutcomeCards = [
  {
    Icon: IoMdTime,
    title: "Reduced Ticket Volume",
    description: "by eliminating password and access-related requests",
  },
  {
    Icon: HiOutlineWrenchScrewdriver,
    title: "Faster Access Recovery",
    description: "with instant, automated resolution",
  },
  {
    Icon: IoIosPerson,
    title: "Improved Security Posture",
    description: "through consistent, policy-driven identity verification",
  },
  {
    Icon: BsShieldCheck,
    title: "Lower IT Workload",
    description: "by removing manual recovery processes",
  },
] as const;




function RecoveryStoryImage({
  src,
  alt,
  imageFirst,
  animation,
}: {
  src: string;
  alt: string;
  imageFirst: boolean;
  animation: "fade-left" | "fade-right";
}) {
  const shellClass = imageFirst
    ? [
        "rounded-2xl border-r-[6px] border-neutral-400 md:border-r-[7px] dark:border-white",
        "md:rounded-tl-[28px] md:rounded-tr-[22px] md:rounded-br-[22px] md:rounded-bl-[28px]",
        "lg:rounded-tl-[32px] lg:rounded-tr-[24px] lg:rounded-br-[24px] lg:rounded-bl-[32px]",
      ].join(" ")
    : [
        "rounded-2xl border-l-[6px] border-neutral-400 md:border-l-[7px] dark:border-white",
        "md:rounded-tl-[22px] md:rounded-tr-[28px] md:rounded-br-[28px] md:rounded-bl-[22px]",
        "lg:rounded-tl-[24px] lg:rounded-tr-[32px] lg:rounded-br-[32px] lg:rounded-bl-[24px]",
      ].join(" ");

  return (
    <div
      data-aos={animation}
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      className={`relative h-full min-h-[200px] w-full flex-1 overflow-hidden sm:min-h-[220px] md:min-h-full ${shellClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

function RecoveryStoryTextBlock({
  title,
  body,
  animation,
}: {
  title: string;
  body: string;
  animation: "fade-left" | "fade-right";
}) {
  return (
    <div
      data-aos={animation}
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="80"
      className="flex w-full flex-col"
    >
      <span className="h-px w-10 shrink-0 bg-primary sm:w-12" aria-hidden />
      <h3 className="mt-5 text-balance text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:mt-6 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:mt-6 sm:text-base sm:leading-8 dark:text-white/85">
        {body}
      </p>
    </div>
  );
}

function RecoveryStoryRow({
  title,
  body,
  image,
  imageFirst,
}: {
  title: string;
  body: string;
  image: string;
  imageFirst: boolean;
}) {
  const imageAnimation = imageFirst ? "fade-right" : "fade-left";
  const textAnimation = imageFirst ? "fade-left" : "fade-right";

  const imageOrder = imageFirst ? "order-1 md:order-1" : "order-1 md:order-2";
  const textOrder = imageFirst ? "order-2 md:order-2" : "order-2 md:order-1";

  const textCol = (
    <div
      className={`flex min-h-0 w-full flex-1 flex-col justify-center md:py-10 ${textOrder}`}
    >
      <RecoveryStoryTextBlock title={title} body={body} animation={textAnimation} />
    </div>
  );

  const imageCol = (
    <div
      className={`flex min-h-[200px] w-full flex-1 flex-col md:h-full md:min-h-0 ${imageOrder}`}
    >
      <RecoveryStoryImage
        src={image}
        alt={title}
        imageFirst={imageFirst}
        animation={imageAnimation}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/10 sm:gap-8 sm:rounded-[28px] sm:p-6 md:grid-cols-2 md:items-stretch md:gap-10 md:p-8 md:px-10 md:py-0 lg:rounded-[32px] dark:bg-black dark:shadow-none dark:ring-white/10">
      {imageCol}
      {textCol}
    </div>
  );
}

const identityTraditionalItems = [
  "Focus on password reset",
  "Require manual identity verification",
  "Depend on service desk workflows",
  "Struggle with full lockout scenarios",
];

const identityZerofaiItems = [
  "Verifies identity autonomously",
  "Restores access across systems",
  "Eliminates ticket-based recovery",
  "Handles full lockout scenarios end-to-end",
];

function CompareStepBadge({ index }: { index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[7px] font-bold leading-none text-white ring-1 ring-black/15 dark:bg-white dark:text-neutral-900 dark:ring-0">
      {n}
    </span>
  );
}

function RecoveryCompareCard({
  title,
  steps,
  footer,
  variant,
}: {
  title: string;
  steps: string[];
  footer?: ReactNode;
  variant: "oldWay" | "zerofai";
}) {
  const iconShell =
    variant === "oldWay"
      ? "border-neutral-200 bg-neutral-200 dark:border-white/15 dark:bg-neutral-800"
      : "border-neutral-300 bg-neutral-100 dark:border-white/25 dark:bg-neutral-900/60";

  return (
    <div className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:ring-primary/35 sm:rounded-2xl dark:bg-black dark:shadow-none dark:ring-white/10 dark:hover:shadow-[0_12px_40px_-12px_rgba(25,182,201,0.25)]">
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-sm font-bold tracking-tight text-neutral-900 transition-colors duration-300 sm:text-base dark:text-white">
            {title}
          </h4>
          <div className="relative flex size-10 shrink-0 items-center justify-center">
            <div
              className={`pointer-events-none absolute inset-0 rounded-full bg-primary/40 opacity-0 blur-md transition-opacity duration-300 ease-out group-hover:opacity-100`}
              aria-hidden
            />
            <div
              className={`relative flex size-9 items-center justify-center rounded-full border-2 transition-all duration-300 ease-out ${iconShell} group-hover:border-primary group-hover:bg-primary dark:group-hover:border-primary dark:group-hover:bg-primary`}
            >
              <FaClockRotateLeft
                className="size-[18px] text-neutral-700 transition-colors duration-300 ease-out dark:text-neutral-300 group-hover:text-neutral-950"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <ol className="mt-5 flex min-h-0 flex-1 flex-col justify-start gap-3 sm:mt-6 sm:gap-3.5">
          {steps.map((label, i) => (
            <li key={label} className="flex items-center gap-2.5 sm:gap-3">
              <CompareStepBadge index={i} />
              <span className="min-w-0 flex-1 text-xs font-medium leading-snug text-neutral-800 sm:text-[13px] dark:text-white">
                {label}
              </span>
            </li>
          ))}
        </ol>
        {footer ? (
          <div className="mt-auto flex flex-col pt-4 sm:pt-5">{footer}</div>
        ) : null}
      </div>
      <div
        className="h-2 shrink-0 bg-neutral-300 transition-colors duration-300 ease-out group-hover:bg-primary sm:h-2.5 dark:bg-white dark:group-hover:bg-primary"
        aria-hidden
      />
    </div>
  );
}

const recoveryFeatureCards: {
  Icon: IconType;
  title: string;
  body: string;
}[] = [
  {
    Icon: IoFingerPrint,
    title: "Automated Identity Verification",
    body: "ZerofAI validates user identity using contextual signals, authentication factors, and policy-driven checks ensuring secure recovery without human involvement.",
  },
  {
    Icon: CgCalculator,
    title: "Zero-Touch Credential & Access Restoration",
    body: "From password resets to MFA re-configuration, ZerofAI automatically restores access across systems eliminating delays and manual workflows.",
  },
  {
    Icon: CiVirus,
    title: "Unified Recovery Across Systems",
    body: "ZerofAI orchestrates recovery across directories, applications, and endpoints ensuring seamless access restoration in hybrid and multi-system environments.",
  },
];

function RecoveryFeatureCard({
  Icon,
  title,
  body,
  aosDelay = 0,
}: {
  Icon: IconType;
  title: string;
  body: string;
  aosDelay?: number;
}) {
  return (
    <div
      className="flex h-full w-full"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-delay={aosDelay}
    >
      <div className="group relative flex h-full min-h-[17rem] w-full flex-col rounded-2xl border border-transparent bg-white text-center shadow-sm ring-1 ring-black/5 transition-colors duration-200 hover:border-primary sm:min-h-80 md:min-h-0 dark:bg-secondary dark:shadow-none dark:ring-white/10 dark:hover:border-primary">
        <div className="absolute left-1/2 top-8 z-20 flex size-13 -translate-x-1/2 items-center justify-center rounded-2xl bg-[#7DD3FC] text-neutral-900 shadow-md sm:top-10 sm:size-14">
          <Icon className="size-7 sm:size-8" aria-hidden />
        </div>
        <div className="flex min-h-0 flex-1 flex-col px-5 pb-10 pt-24 sm:px-7 sm:pb-12 sm:pt-28">
          <p className="text-base font-bold leading-snug text-neutral-900 sm:text-lg dark:text-white">
            {title}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-white/85 sm:text-[15px] sm:leading-7">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AutonomousIdentityRecoveryPage() {
  return (
    <AosInit>
      <main className="w-full min-w-0 overflow-x-clip">
      <section id="" className="relative w-full min-w-0 overflow-x-clip lg:min-h-screen">
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div
            className="order-2 px-1 py-10 sm:px-0 sm:py-14 md:order-1 md:py-16"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2 className="text-balance text-2xl leading-tight sm:text-3xl md:text-4xl">
              Recover Access Without{" "}
              <span className="text-primary! text-4xl!">
                Raising a Ticket.
              </span>
            </h2>

            <p className="mt-6 max-w-[640px] text-sm leading-6 text-black/70 dark:text-white/75 sm:mt-8 sm:text-sm sm:leading-7 md:mt-10">
              ZerofAI enables secure, zero-touch identity recovery, automatically restoring user
              access across systems without manual verification, service desk involvement, or
              delays.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
              <Link
                href="#"
                className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
              >
                Get a Demo
              </Link>
            </div>
          </div>
          <HeroCanvas />
        </div>
      </section>

      <section className="w-full bg-neutral-100 py-14 sm:py-20 dark:bg-secondary/40">
        <div className="container">
          <h3
            className="text-balance text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl md:leading-[1.15] dark:text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            Account Recovery Shouldn&apos;t Depend on the Helpdesk
          </h3>

          <p
            className="mt-6 text-sm leading-7 text-neutral-600 sm:text-[15px] sm:leading-8 dark:text-white/70"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="80"
          >
            In most organizations, account recovery still relies on manual processes, users raise
            tickets, IT teams perform identity verification, and access is restored through a series
            of disconnected steps. This approach is slow, resource-intensive, and introduces security
            risks, especially in cases of lost devices, expired credentials, or authentication
            failures.
          </p>
          <p
            className="mt-5 text-sm leading-7 text-neutral-600 sm:text-[15px] sm:leading-8 dark:text-white/70"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="120"
          >
            Even self-service password reset systems fall short when users lose access to all
            authentication methods, forcing recovery back into manual workflows.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-xl grid-cols-1 gap-4 sm:mt-12 sm:max-w-2xl sm:gap-5 md:mt-12 md:max-w-4xl md:grid-cols-2 md:items-stretch md:gap-6 lg:max-w-5xl">
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <RecoveryCompareCard
              variant="oldWay"
              title="The Old Way"
              steps={["Raise ticket.", "Verify identity manually.", "Reset access."]}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={COMPARE_STAGGER_MS}
          >
            <RecoveryCompareCard
              variant="zerofai"
              title="The ZerofAI Way"
              steps={["Verify identity.", "Authenticate.", "Restore access."]}
              footer={
                <div className="flex items-center gap-1.5 text-xs font-medium text-primary sm:text-[13px]">
                  <Crosshair className="size-3.5 shrink-0 sm:size-4" strokeWidth={2} aria-hidden />
                  <span>Self-Service.</span>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 dark:bg-secondary/40">
        <div className="container">
          <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50 px-4 py-10 sm:rounded-3xl sm:px-7 sm:py-14 md:rounded-[28px] md:px-10 md:py-16 lg:px-12 dark:border-white/10 dark:bg-black dark:shadow-none">
            <h3
              className="w-full text-balance text-left text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl md:leading-[1.15] dark:text-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              From Password Reset to Autonomous Identity Recovery
            </h3>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:mt-14 md:grid-cols-3 md:items-stretch md:gap-8 lg:gap-10">
              {recoveryFeatureCards.map(({ Icon, title, body }, index) => (
                <RecoveryFeatureCard
                  key={title}
                  Icon={Icon}
                  title={title}
                  body={body}
                  aosDelay={index * CARD_STAGGER_MS}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary py-12 sm:py-16 md:py-20 dark:bg-secondary/40">
        <div className="container flex flex-col gap-8 sm:gap-10">
          {recoveryStoryRows.map((row, index) => {
            const alignLeft = index % 2 === 0;
            return (
              <div
                key={row.title}
                className={
                  alignLeft
                    ? "w-full px-0 sm:px-2 md:pl-0 md:pr-10 lg:pr-16 xl:pr-24"
                    : "w-full px-0 sm:px-2 md:pl-10 md:pr-0 lg:pl-16 xl:pl-24"
                }
              >
                <div
                  className={
                    alignLeft
                      ? "w-full max-w-5xl lg:max-w-6xl"
                      : "w-full max-w-5xl md:ml-auto lg:max-w-6xl"
                  }
                >
                  <RecoveryStoryRow {...row} />
                </div>
              </div>
            );
          })}
        </div>
      </section>


      <section
        className="w-full bg-neutral-100 py-10 sm:py-12 md:py-14 dark:bg-black"
        aria-label="Remediation outcomes"
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {remediationOutcomeCards.map(({ Icon, title, description }, index) => (
              <div
                key={title}
                className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-primary px-5 py-8 text-center text-white sm:min-h-[240px] sm:px-6 sm:py-10"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={index * CARD_STAGGER_MS}
              >
                <Icon className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" aria-hidden />
                <p className="mt-4 text-base font-bold leading-snug text-white! sm:mt-5 sm:text-lg">
                  {title}
                </p>
                <p className="mt-2 max-w-[220px] text-sm font-normal leading-relaxed text-white! sm:text-[0.9375rem]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-16 md:py-24 dark:bg-background">
        <div className="container max-w-6xl">
          <h3
            className="mx-auto max-w-5xl text-balance text-left text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[1.12] dark:text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            Beyond Password Reset Toward Identity Continuity
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:mt-14 md:grid-cols-2 md:items-stretch md:gap-8">
            <div
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-secondary p-5 transition-colors duration-300 hover:bg-primary sm:rounded-3xl sm:p-8 dark:bg-gray dark:hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="80"
            >
              <span className="inline-flex text-white! w-fit shrink-0 items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide  transition-colors duration-300 group-hover:bg-neutral-950 sm:px-5 sm:text-sm">
                Traditional Systems
              </span>
              <ul className="mt-8 flex flex-1 flex-col gap-4 sm:mt-10 sm:gap-5">
                {identityTraditionalItems.map((item) => (
                  <li key={item} className="flex gap-3 text-left">
                    <RxCross2
                      className="mt-0.5 size-4 shrink-0 text-neutral-600 transition-colors duration-300 group-hover:text-white sm:size-[18px] dark:text-white"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 text-sm leading-relaxed text-neutral-800 transition-colors duration-300 group-hover:text-white! sm:text-base dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-secondary p-5 transition-colors duration-300 hover:bg-primary sm:rounded-3xl sm:p-8 dark:bg-gray dark:hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={COMPARE_STAGGER_MS}
            >
              <span className="inline-flex w-fit! shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-white! transition-colors duration-300 group-hover:bg-neutral-950 sm:px-5 sm:text-sm">
                <FaCheck className=" shrink-0 text-white group-hover:text-primary sm:size-4" aria-hidden />
                ZerofAI
              </span>
              <ul className="mt-8 flex flex-1 flex-col gap-4 sm:mt-10 sm:gap-5">
                {identityZerofaiItems.map((item) => (
                  <li key={item} className="flex gap-3 text-left">
                    <FaCheck
                      className="mt-0.5 size-4 shrink-0 text-neutral-700 group-hover:text-white sm:size-[18px] dark:text-white"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 text-sm leading-relaxed text-white transition-colors duration-300 group-hover:text-white! sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-10 flex justify-center md:mt-12"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="160"
          >
            <span className="inline-flex max-w-full rounded-full bg-secondary px-4 py-2.5 text-center text-xs font-medium leading-snug text-neutral-900 sm:px-6 sm:text-sm dark:bg-gray dark:text-white">
              Unlock Access Without Waiting on IT
            </span>
          </div>

          <div
            className="mt-10 rounded-2xl bg-secondary p-0 text-center sm:mt-12 sm:rounded-3xl sm:p-8 md:mt-14 md:p-10 lg:p-14 dark:bg-gray"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="200"
          >
            <div className="flex w-full flex-col items-center px-4 py-8 sm:px-6 sm:py-0 md:px-0">
              <hr
                className="mx-auto mb-6 h-px w-[70%] min-w-28 max-w-full border-0 border-t border-neutral-900 sm:mb-8 sm:w-[60%] sm:max-w-xs md:w-1/2 md:max-w-sm lg:max-w-md xl:max-w-lg dark:border-white"
                aria-hidden
              />
              <h3 className="mx-auto max-w-3xl text-balance text-lg font-bold leading-snug tracking-tight text-neutral-900 sm:text-xl md:text-2xl md:leading-tight lg:text-3xl xl:text-4xl dark:text-white">
                Turn Your Service Desk Into an Autonomous Engine
              </h3>
            </div>
            <div className="mt-6 flex justify-center px-4 pb-8 sm:mt-8 sm:px-0 sm:pb-0 sm:pt-0 md:mt-10">
              <Link
                href="#"
                className="rounded-full bg-primary text-white! px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:px-10 sm:py-3.5 sm:text-base"
              >
                Get a Demo
              </Link>
            </div>
           </div>
           
        </div>

      </section>

      </main>
    </AosInit>
  );
}

