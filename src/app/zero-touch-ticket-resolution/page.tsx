import HeroCanvas from "@/component/bot/HeroCanvas";
import Image from "next/image";
import Link from "next/link";
import { FaClockRotateLeft, FaCheck } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { CiVirus } from "react-icons/ci";
import { LuClockArrowDown } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import { IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

/** 24-point path: alternating outer/inner radius for a circular scalloped badge (viewBox 0 0 100 100). */
const SCALLOPED_CIRCLE_PATH = (() => {
  const cx = 50;
  const cy = 50;
  const rOut = 47;
  const rIn = 40;
  const n = 12;
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const angle = (i / (n * 2)) * 2 * Math.PI - Math.PI / 2;
    const r = i % 2 === 0 ? rOut : rIn;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M ${pts[0]} L ${pts.slice(1).join(" ")} Z`;
})();

const featureBarItems: {
    Icon: IconType;
    title: string;
    sub: string;
  }[] = [
    {
      Icon: LuClockArrowDown,
      title: "Less Downtime",
      sub: "By predicting and preventing issues before they impact users",
    },
    {
      Icon: SlMagnifier,
      title: "Faster Root Cause ID",
      sub: "AI-driven insights accelerate incident investigation",
    },
    {
      Icon: IoSettingsOutline,
      title: "Lower Overhead",
      sub: "Through automated detection and response workflows",
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "System Reliability",
      sub: "With continuous health monitoring and proactive maintenance",
    },
  ];
 
 
  const traditionalOpsItemList = [
    "Generate alerts after issues occur",
    "Require manual investigation",
    "Create alert fatigue",
    "Focus on visibility",
  ];
  
  const predictiveOpsItems = [
    "Predicts issues before they occur",
    "Correlates signals automatically",
    "Eliminates noise and false alerts",
    "Takes preventive action autonomously",
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

function ScallopedIconBadge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center sm:h-[5rem] sm:w-[5rem] ${className ?? ""}`}>
      <svg
        className="absolute inset-0 h-full w-full drop-shadow-sm"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <path d={SCALLOPED_CIRCLE_PATH} fill="currentColor" />
      </svg>
      <span className="relative z-10 flex items-center justify-center text-white [&>svg]:h-[1.35rem] [&>svg]:w-[1.35rem] sm:[&>svg]:h-6 sm:[&>svg]:w-6">
        {children}
      </span>
    </div>
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
  return (
    <div
      className={
        isOld
          ? "flex min-h-[3.25rem] items-center gap-2.5 rounded-xl bg-secondary px-3 py-2.5 sm:min-h-[3.5rem] sm:px-3.5"
          : "flex min-h-[3.25rem] items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 sm:min-h-[3.5rem] sm:px-3.5"
      }
    >
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
      <span
        className={
          isOld
            ? "text-sm font-medium leading-tight  text-foreground sm:text-[0.9375rem]"
            : "text-sm font-medium leading-tight text-black sm:text-[0.9375rem]"
        }
      >
        {label}
      </span>
    </div>
  );
}

function TicketsResolvedComparison() {
  return (
    <section className="bg-secondary p-15 text-secondary-foreground dark:bg-secondary/40 dark:text-white">
      <div className="container max-w-6xl">
        <h3 className="font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white">
          Tickets Should Be Resolved Not Managed
        </h3>
        <p className="mt-8 text-neutral-700 dark:text-white/90">
          Traditional IT service desks are built around tickets. Every issue becomes a request, every request enters a queue, and every resolution depends on manual
          triage, routing, and execution. As environments grow, this model creates delays, increases workload, and turns IT into a reactive function.
          <br />
          <br />
          Even with automation in place, most systems still stop at ticket creation or routing leaving resolution dependent on human effort.
        </p>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-stretch gap-10 md:mt-16 md:flex-row md:items-stretch md:justify-center md:gap-0">
          {/* Left: The Old Way */}
          <div className="flex flex-1 flex-col items-center md:pr-8 lg:pr-12">
            <ScallopedIconBadge className="text-secondary">
              <FaClockRotateLeft className="text-foreground" aria-hidden />
            </ScallopedIconBadge>
            <p className="mt-4 text-center text-sm! font-bold! text-neutral-900 sm:text-[0.9375rem] dark:text-white!">
              The Old Way
            </p>

            <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem]">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <IconChip variant="old" label="Monitor" />
                <IconChip variant="old" label="Alert." />
                <IconChip variant="old" label="React." />
              </div>
              <div className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
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
          <div className="flex flex-1 flex-col items-center md:pl-8 lg:pl-12">
            <ScallopedIconBadge className="text-primary ">
              <WiStars className="text-white" aria-hidden />
            </ScallopedIconBadge>
            <p className="mt-4 text-center text-sm! font-bold! text-neutral-900 sm:text-[0.9375rem] dark:text-white!">
              The ZerofAI Way
            </p>

            <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem]">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <IconChip variant="new" label="Analyze" />
                <IconChip variant="new" label="Predict" />
                <IconChip variant="new" label="Prevent" />
              </div>
              <div className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                <div
                  className="pointer-events-none absolute top-1/2 right-0 left-0 z-0 h-px -translate-y-1/2 bg-primary"
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
    <>
      <section id="" className="relative w-full lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 px-5 py-14 sm:px-6 sm:py-16">
            <h2>
              Bulletproof Your Endpoints. Automate Your{" "}
              <span className="text-primary!">
                Compliance.
              </span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
              Move from periodic audits to real-time enforcement. ZerofAI continuously monitors, detects, and auto-remediates compliance drift across every endpoint without tickets, scripts, or human intervention.
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

      <TicketsResolvedComparison />

      <section className="bg-neutral-100 py-14 dark:bg-[#111111] sm:py-16 md:py-20">
        <div className="container max-w-6xl">
          <h2 className="text-left text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white">
            From Password Reset to{" "}
            <span className="text-primary!">Autonomous<br /> Identity Recovery</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:items-stretch md:gap-8">
            <div className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary">
              <div className="flex shrink-0 items-start justify-between gap-4">
                <p className="text-[0.9375rem] font-bold leading-snug dark:text-white! text-neutral-900 transition-colors duration-300 group-hover:text-white! sm:text-base dark:text-white">
                  Automated Identity Verification
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                  <GoGoal className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
                ZerofAI validates user identity using contextual signals, authentication factors,
                and policy-driven checks ensuring secure recovery without human involvement.
              </p>
            </div>

            <div className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary">
              <div className="flex shrink-0 items-start justify-between gap-4">
                <p className="text-base font-bold leading-snug text-neutral-900 dark:text-white! transition-colors duration-300 group-hover:text-white! sm:text-[1.0625rem] dark:text-white">
                  Zero-Touch Credential &amp; Access Restoration
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                  <GiBrain className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
                From password resets to MFA reconfiguration, ZerofAI automatically restores
                access across identity systems eliminating delays and manual workflows.
              </p>
            </div>

            <div className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary">
              <div className="flex shrink-0 items-start justify-between gap-4">
                <p className="text-base font-bold leading-snug text-neutral-900  dark:text-white! transition-colors duration-300 group-hover:text-white! sm:text-[1.0625rem] dark:text-white">
                  Unified Recovery Across Systems
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                  <CiVirus className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
                ZerofAI orchestrates recovery across directories, applications, and endpoints
                ensuring seamless access restoration in hybrid and multi-system environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 dark:bg-black sm:py-20 md:py-24">
        <div className="container max-w-6xl">
          <div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
            <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-14">
              <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-[24px] ring-1 ring-neutral-200 sm:min-h-[220px] md:aspect-[3/2] md:min-h-0 md:flex-1 md:basis-0 md:self-stretch dark:ring-0">
                <Image
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Event-Driven Detection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex h-full min-h-0 w-full flex-col items-stretch md:flex-1 md:basis-0 md:self-stretch">
                <span className="mb-3 h-2 w-14 shrink-0 self-start rounded-full bg-primary" aria-hidden />
                <div className="flex min-h-0 flex-1 flex-col justify-center rounded-[24px] border border-neutral-200 bg-white px-7 py-9 sm:px-8 sm:py-10 md:px-9 md:py-12 lg:py-14 dark:border-0 dark:bg-[#1e1e1e]">
                  <h4 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-[1.75rem] dark:text-white">
                    Event-Driven Detection
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem] md:text-base md:leading-relaxed dark:text-[#b0b0b0]">
                    ZerofAI captures signals from users, endpoints, and monitoring systems, triggering resolution workflows before tickets are formally created.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-14">
              <div className="flex h-full min-h-0 w-full flex-col items-stretch md:flex-1 md:basis-0 md:self-stretch">
                <span className="mb-3 h-2 w-14 shrink-0 self-start rounded-full bg-[#00bcd4]" aria-hidden />
                <div className="flex min-h-0 flex-1 flex-col justify-center rounded-[24px] border border-neutral-200 bg-white px-7 py-9 sm:px-8 sm:py-10 md:px-9 md:py-12 lg:py-14 dark:border-0 dark:bg-[#1e1e1e]">
                  <h4 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-[1.75rem] dark:text-white">
                    AI-Led Diagnosis &amp; Decisioning
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem] md:text-base md:leading-relaxed dark:text-[#b0b0b0]">
                    Using historical data, context, and predefined policies, ZerofAI determines the root cause and selects the appropriate resolution path automatically.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-[24px] ring-1 ring-neutral-200 sm:min-h-[220px] md:aspect-[3/2] md:min-h-0 md:flex-1 md:basis-0 md:self-stretch dark:ring-0">
                <Image
                  src="https://media.istockphoto.com/id/2265515077/photo/echnology-consultant-integrates-artificial-intelligence-engine-with-data-visualization.webp?a=1&b=1&s=612x612&w=0&k=20&c=qD69FXAFYtbN1Q3XIVsMF9iNv-HKaPzm_s_D9q6rsHE="
                  alt="AI-Led Diagnosis and decisioning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-14">
              <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-[24px] ring-1 ring-neutral-200 sm:min-h-[220px] md:aspect-[3/2] md:min-h-0 md:flex-1 md:basis-0 md:self-stretch dark:ring-0">
                <Image
                  src="https://media.istockphoto.com/id/2208747071/photo/hands-of-robots-touching-on-access-management-network-connections-highlight-robotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vch3r1Ej9lyc1Xhp_-FftSYKO7GK9sYUXsTMS9frMyA="
                  alt="Closed-Loop Resolution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex h-full min-h-0 w-full flex-col items-stretch md:flex-1 md:basis-0 md:self-stretch">
                <span className="mb-3 h-2 w-14 shrink-0 self-start rounded-full bg-[#00bcd4]" aria-hidden />
                <div className="flex min-h-0 flex-1 flex-col justify-center rounded-[24px] border border-neutral-200 bg-white px-7 py-9 sm:px-8 sm:py-10 md:px-9 md:py-12 lg:py-14 dark:border-0 dark:bg-[#1e1e1e]">
                  <h4 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-[1.75rem] dark:text-white">
                    Closed-Loop Resolution
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem] md:text-base md:leading-relaxed dark:text-[#b0b0b0]">
                    ZerofAI executes actions, validates outcomes, and logs resolution details ensuring issues are fully resolved without manual follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className="w-full border-y border-neutral-200 bg-[#F8F9FA] py-2 md:py-2.5 dark:border-neutral-600 dark:bg-[#141414]"
        aria-label="Operational outcomes"
      >
        <div className="container max-w-7xl px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {featureBarItems.map((item, index) => {
              const { Icon, title, sub } = item;
              return (
                <div
                  key={title}
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
            <div className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]">
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
            <div className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]">
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
            className="text-center text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-3xl md:text-[2.125rem] md:leading-[1.25] dark:text-white"
          >
            <span className="block">Turn Your Service Desk Into an</span>
            <span className="block">Autonomous Engine</span>

          </h2>
            <Link
                  href="/contact"
                  className="rounded-full bg-[#00bcd4] px-10 py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-12 sm:py-4 sm:text-base"
                >
                  Get a Demo
                </Link>

        </div>
      </section>
    </>
  );
}
