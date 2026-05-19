import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { CiVirus } from "react-icons/ci";
import { LuClockArrowDown } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import { IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
const COMPARE_STAGGER_MS = 400;

const COMPARE_BADGE_ICONS = {
  oldWay: "/assets/icons/old-way-badge.png",
  zerofaiWay: "/assets/icons/zerofai-way-badge.png",
} as const;

const featureBarItems: {
    Icon: IconType;
    title: string;
    sub: string;
  }[] = [
    {
      Icon: LuClockArrowDown,
      title: "Reduced Ticket Volume ",
      sub: "by eliminating repetitive tickets",
    },
    {
      Icon: SlMagnifier,
      title: "Faster Resolution Times",
      sub: " with end-to-end automation",

    },
    {
      Icon: IoSettingsOutline,
      title: "Lower ITSM Costs",
      sub: "through reduced manual workload",
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "Improved User Experience ",
      sub: "with instant issue resolution",
    },
  ];

const identityRecoveryCards: {
  title: string;
  description: string;
  Icon: IconType;
}[] = [
  {
    title: "Automated Ticket Detection & Classification",
    description:
    "ZerofAI interprets user requests and system signals in real time automatically identifying issues, categorizing them, and initiating resolution workflows without manual input.",
    Icon: GoGoal,
  },
  {
    title: " Autonomous Issue Resolution",
    description:
    "From password resets to application fixes, ZerofAI executes remediation actions across systems resolving common issues end-to-end without human intervention.",
    Icon: GiBrain,
  },
  {
    title: "Intelligent Orchestration Across Systems",
    description:
    "ZerofAI connects identity, endpoint, and service platforms ensuring actions are executed seamlessly across environments without manual coordination.",
    Icon: CiVirus,
  },
];

/** Stagger (ms): card 1 → 0ms, card 2 → 400ms, card 3 → 800ms */
const IDENTITY_CARD_STAGGER_MS = 400;

  const traditionalOpsItemList = [
    "Focus on ticket tracking ",
    "Automate routing and workflows ",
    "Require human resolution ",
    "Operate in reactive cycles",

  ];
  
  const predictiveOpsItems = [
    "Eliminates ticket creation for routine issues ",   
    "Resolves incidents end-to-end automatically ",
    "Integrates detection, diagnosis, and action ",
    "Operates in real-time, autonomous mode",

  ];
  
  const oldWayItems = [
    "Reactive alert handling after outages",
    "Fragmented data across isolated silos",
    "Human-led root cause analysis takes hours",
    "Constant noise from low-priority pings",
  ];
  
  const zeroFaiItems = [
    "Predictive prevention before failure occurs",
    "Unified semantic data layer for total context",
    "AI-automated remediation in milliseconds",
    "Intelligence filtering: Focus only on what matters",
  ]; 

function CompareBadgeIcon({ src, alt }: { src: string; alt: string }) {
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

function IconChip({
  variant,
  label,
}: {
  variant: "old" | "new";
  label: string;
}) {
  const isOld = variant === "old";
  const chipBase =
    "flex min-h-[4.5rem] items-center gap-2.5 rounded-xl pt-0 pr-3 pb-0 pl-0 sm:min-h-[5rem] sm:pr-3.5";
  return (
    <div className={chipBase}>
      <span className="relative inline-flex size-7 shrink-0 items-center justify-center sm:size-8">
        <FaRegCircle
          className="absolute size-7 text-primary [&>path]:fill-primary sm:size-8"
          aria-hidden
        />
        <span
          className="absolute inset-[3px] z-1 rounded-full bg-primary sm:inset-1"
          aria-hidden
        />
        {isOld ? (
          <RxCross2 className="relative z-10 size-3.5 text-white sm:size-4" aria-hidden />
        ) : (
          <FaCheck className="relative z-10 size-3 text-white sm:size-3.5" aria-hidden />
        )}
      </span>
      <span className="text-sm font-medium leading-tight text-neutral-900 sm:text-[0.9375rem] dark:text-white">
        {label}
      </span>
    </div>
  );
}

function TicketsResolvedComparison() {
  return (
    <section className="bg-secondary py-10 text-secondary-foreground dark:bg-secondary/40 dark:text-white">
      <div className="container">
        <h3 className="font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white">
          Tickets Should Be Resolved Not Managed
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="80"
          className="mt-8 text-neutral-700 dark:text-white/90"
        >
          Traditional IT service desks are built around tickets. Every issue becomes a request, every request enters a queue, and every resolution depends on manual
          triage, routing, and execution. As environments grow, this model creates delays, increases workload, and turns IT into a reactive function.
          Even with automation in place, most systems still stop at ticket creation or routing leaving resolution dependent on human effort.
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-10 md:mt-16 md:flex-row md:items-stretch md:justify-center md:gap-0">
          {/* Left: The Old Way */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="flex flex-1 flex-col items-center md:pr-8 lg:pr-12"
          >
            <img src={COMPARE_BADGE_ICONS.oldWay} alt="The Old Way" width={80} height={80} className="h-[4.5rem] w-[4.5rem] shrink-0 object-contain sm:h-[5rem] sm:w-[5rem]" />
            <p className="mt-4 text-center text-sm! font-bold! text-neutral-900 sm:text-[0.9375rem] dark:text-white!">
              The Old Way
            </p>

            <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem]">
              <div className="grid grid-cols-3 gap-2  sm:gap-3">
                <IconChip variant="old" label="Log." />
                <IconChip variant="old" label="Route." />
                <IconChip variant="old" label="Resolve manually." />
              </div>
              <div className="relative mt-5 grid  grid-cols-3 gap-2 sm:gap-3">
                <div
                  className="pointer-events-none absolute top-1/2 right-0 left-0 z-0 h-px -translate-y-1/2 bg-neutral-400 dark:bg-white"
                  aria-hidden
                />
                {[0, 1, 2].map((i) => (
                  <div key={`old-dot-${i}`} className="relative flex justify-center py-0.5">
                    <span className="relative z-10 size-2.5 rounded-full bg-white ring-4 ring-neutral-200 sm:size-2.5 dark:ring-[#1a1a1a]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative hidden w-px shrink-0 self-stretch bg-neutral-300 md:block dark:bg-neutral-600" aria-hidden>
            <span className="absolute top-1/2 left-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          </div>
          <div className="flex items-center justify-center md:hidden" aria-hidden>
            <div className="h-px w-full max-w-xs bg-neutral-300 dark:bg-neutral-600" />
          </div>

          {/* Right: The ZerofAI Way */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-1 flex-col items-center md:pl-8 lg:pl-12"
          >
            <img src={COMPARE_BADGE_ICONS.zerofaiWay} alt="The ZerofAI Way" width={160} height={160} className="h-[4.5rem] w-[4.5rem] shrink-0 object-contain sm:h-[5rem] sm:w-[5rem]" />
            <p className="mt-4 text-center text-sm! font-bold! text-neutral-900 sm:text-[0.9375rem] dark:text-white!">
              The ZerofAI Way
            </p>

            <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem]">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <IconChip variant="new" label="Detect." />
                <IconChip variant="new" label="Diagnose." />
                <IconChip variant="new" label="Resolve automatically." />
              </div>
              <div className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                <div
                  className="pointer-events-none absolute  top-1/2 right-0 left-0 z-0 h-px -translate-y-1/2 bg-primary"
                  aria-hidden
                />
                {[0, 1, 2].map((i) => (
                  <div key={`new-dot-${i}`} className="relative flex justify-center py-0.5">
                    <span className="relative z-10 size-2.5 rounded-full bg-primary ring-4 ring-neutral-200 sm:size-2.5 dark:ring-[#1a1a1a]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ZeroTouchTicketResolutionPage() {
  return (
    <AosInit>
      <section id="" className="relative w-full lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 px-5 py-14 sm:px-6 sm:py-16">
            <h2>
            Resolve Tickets.{" "}
              <span className="text-primary!">
                <br />
              Without Touching Them.
              </span>
            </h2>

            <p
              className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7"
              data-aos="fade-up"
              data-aos-delay="80"
            >
ZerofAI automatically detects, diagnoses, and resolves IT issues eliminating tickets before they reach your service desk and
reducing manual intervention to near zero.            </p>

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

      <TicketsResolvedComparison />

      <section className="bg-neutral-100 py-14 dark:bg-[#111111] sm:py-16 md:py-20">
        <div className="container">
          <h2
            data-aos="fade-up"
            className="text-left text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white"
          >
            From Password Reset to{" "}
            <span className="text-primary!">Autonomous<br /> Identity Recovery</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:items-stretch md:gap-8">
            {identityRecoveryCards.map(({ title, description, Icon }, index) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * IDENTITY_CARD_STAGGER_MS}
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary"
              >
                <div className="flex shrink-0 items-start justify-between gap-4">
                  <p className="text-[0.9375rem] font-bold leading-snug text-neutral-900 transition-colors duration-300 group-hover:text-white! sm:text-base dark:text-white">
                    {title}
                  </p>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                    <Icon className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                  </span>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
          <div
            className="container grid items-center gap-6 bg-secondary p-0 md:grid-cols-2 md:gap-10 md:rounded-xl dark:bg-secondary/40 lg:max-w-7xl"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <Image
              src="/assets/images/sample-img.webp"
              width={1200}
              height={680}
              alt="zerofai"
              className="justify-self-end rounded-xl md:border-r-4 border-primary"
            />
            <div className="flex flex-col gap-10 px-6 py-12 md:px-8">
              <h2>Event-Driven Detection</h2>
              <p>
              ZerofAI captures signals from users, endpoints, and monitoring systems, triggering resolution workflows before tickets are formally created.

              </p>
            </div>
          </div>
        </section>

        <section>
          <div
            className="container mt-10 grid items-center gap-6 bg-secondary p-0 md:grid-cols-2 md:gap-10 md:rounded-xl dark:bg-secondary/40 lg:max-w-7xl"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={COMPARE_STAGGER_MS}
          >
            <div className="order-2 flex flex-col gap-10 px-6 py-12 md:order-1 md:px-8">
              <h2>Closed-Loop Resolution</h2>
              <p>
              ZerofAI executes actions, validates outcomes, and logs resolution details ensuring issues are fully resolved without manual follow-up.

              </p>
            </div>
            <Image
              src="/assets/images/sample-img.webp"
              width={1200}
              height={680}
              alt="zerofai"
              className="order-1 justify-self-end rounded-xl md:order-2 md:border-l-4 border-primary"
            />
          </div>
        </section>



        <section>
          <div
            className="container grid items-center mt-10 gap-6 bg-secondary p-0! md:grid-cols-2 md:gap-10 md:rounded-xl dark:bg-secondary/40 lg:max-w-7xl"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={COMPARE_STAGGER_MS * 2}
          >
            <Image
              src="/assets/images/sample-img.webp"
              width={1200}
              height={680}
              alt="zerofai"
              className="justify-self-end rounded-xl md:border-r-4 border-primary"
            />
            <div className="flex flex-col gap-10 px-6 py-12 md:px-8">
              <h2>Conversational Knowledge Access</h2>
              <p>
                Users interact with enterprise knowledge through natural language, receiving summarized,
                explainable answers without navigating multiple disconnected systems.
              </p>
            </div>
          </div>
        </section>
       


      <section
        className="w-full border-y border-neutral-200 mt-20 bg-[#F8F9FA] py-2 md:py-2.5 dark:border-neutral-600 dark:bg-[#141414]"
        aria-label="Operational outcomes"
      >
        <div className="container max-w-7xl px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {featureBarItems.map((item, index) => {
              const { Icon, title, sub } = item;
              return (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={
                    "relative flex flex-col items-center px-2 py-3 text-center sm:px-3 md:py-2 " +
                    (index < featureBarItems.length - 1
                      ? "max-md:border-b max-md:border-primary/50 dark:max-md:border-primary/40"
                      : "")
                  }
                >
                  {index < featureBarItems.length - 1 && (
                    <span
                      className="pointer-events-none absolute bottom-3 left-1/2 top-3 hidden w-px -translate-x-1/2 bg-primary md:left-full md:top-[12%] md:bottom-[12%] md:block md:translate-x-0"
                      aria-hidden
                    />
                  )}
                  <div className="mb-1.5 flex h-16 w-16 shrink-0 items-center justify-center sm:mb-2 sm:h-18 sm:w-18 md:mb-5">
                    <Icon
                      className="h-full w-full text-primary"
                      
                      strokeWidth={1}
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-foreground sm:text-[15px] md:text-base">
                    {title}
                  </h6>
                  <p className="mt-1 max-w-[220px] text-sm! leading-snug text-muted-foreground sm:mt-1.5 sm:max-w-[200px] sm:text-xs sm:leading-relaxed">
                    {sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-neutral-100 pb-14 pt-12 text-foreground md:pb-16 md:pt-16 lg:pb-20 lg:pt-20 dark:bg-[#121212] dark:text-white"
        aria-labelledby="predictive-ops-heading"
      >
        <div className="container max-w-6xl px-4 sm:px-6">
          <h2
            id="predictive-ops-heading"
            data-aos="fade-up"
            className="text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            <span className="text-primary">Beyond Monitoring</span>
            <span className="text-neutral-900 dark:text-white">
              {" "}
              Towards Predictive Operations
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16">
            {/* Traditional Systems */}
            <div
              data-aos="fade-up"
              data-aos-delay="80"
              className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
            >
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-primary-foreground sm:px-6 sm:text-sm">
                Traditional Systems
              </div>
              <ul className="mt-2 flex flex-col gap-4 sm:gap-5">
                {traditionalOpsItemList.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-left text-sm leading-relaxed text-muted-foreground sm:text-base dark:text-white/95"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground dark:bg-white"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* ZerofAI */}
            <div
              data-aos="fade-up"
              data-aos-delay="160"
              className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
            >
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-primary-foreground sm:px-6 sm:text-sm">
                ZerofAI
              </div>
              <ul className="mt-2 flex flex-col gap-4 sm:gap-5">
                {predictiveOpsItems.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-left text-sm leading-relaxed text-muted-foreground sm:text-base dark:text-white/95"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground dark:bg-white"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#F5F5F5] dark:bg-[#121212] py-16"
        aria-labelledby="service-desk-cta-heading"
      >
        <div className="container max-w-4xl flex flex-col gap-10 items-center">
          <h2
            id="service-desk-cta-heading"
            data-aos="fade-up"
            className="text-center text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-3xl md:text-[2.125rem] md:leading-[1.25] dark:text-white"
          >
            <span className="block">Turn Your Service Desk Into an</span>
            <span className="block">Autonomous Engine</span>

          </h2>
            <Link
              href="/contact"
              data-aos="fade-up"
              data-aos-delay="120"
              className="rounded-full bg-[#00bcd4] px-10 py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-12 sm:py-4 sm:text-base"
            >
                  Get a Demo
                </Link>

        </div>
      </section>
    </AosInit>
  );
}
