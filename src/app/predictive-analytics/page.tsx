import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { GiAnticlockwiseRotation, GiStarsStack } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { LuClockArrowDown } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import { IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

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

const traditionalOpsItems = [
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

const oldWayItems = ["Monitor", "Alert.", "React."];

const zeroFaiItems = ["Analyze", "Predict", "Prevent"];

/** Scalloped circular badge path (viewBox 0 0 100 100). */
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

function ScallopedIconBadge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center sm:h-[5rem] sm:w-[5rem] ${className ?? ""}`}
    >
      <svg className="absolute inset-0 h-full w-full drop-shadow-sm" viewBox="0 0 100 100" aria-hidden>
        <path d={SCALLOPED_CIRCLE_PATH} fill="currentColor" />
      </svg>
      <span className="relative z-10 flex items-center justify-center [&>svg]:h-[1.35rem] [&>svg]:w-[1.35rem] sm:[&>svg]:h-6 sm:[&>svg]:w-6">
        {children}
      </span>
    </div>
  );
}

function MonitoringCompareIconChip({ variant, label }: { variant: "old" | "new"; label: string }) {
  const isOld = variant === "old";
  if (!isOld) {
    return (
      <div className="flex min-h-[3.25rem] items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5 sm:min-h-[3.5rem] sm:px-3.5 dark:bg-white dark:ring-0">
        <span className="relative inline-flex size-7 shrink-0 items-center justify-center sm:size-8">
          <FaRegCircle
            className="absolute size-7 text-primary [&>path]:fill-primary sm:size-8"
            aria-hidden
          />
          <span className="absolute inset-[3px] z-[1] rounded-full bg-primary sm:inset-1" aria-hidden />
          <FaCheck className="relative z-10 size-3 text-white sm:size-3.5" aria-hidden />
        </span>
        <span className="text-sm font-medium leading-tight text-neutral-900 sm:text-[0.9375rem]">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-h-[3.25rem] items-center gap-2.5 rounded-xl bg-neutral-300 px-3 py-2.5 transition-colors duration-200 group-hover/oldcol:bg-white sm:min-h-[3.5rem] sm:px-3.5 dark:bg-[#2e2e2e] dark:group-hover/oldcol:bg-white">
      <span className="relative inline-flex size-7 shrink-0 items-center justify-center sm:size-8">
        <FaRegCircle
          className="absolute size-7 text-primary [&>path]:fill-primary sm:size-8"
          aria-hidden
        />
        <span className="absolute inset-[3px] z-[1] rounded-full bg-primary sm:inset-1" aria-hidden />
        <RxCross2
          className="relative z-10 size-3.5 text-white transition-opacity duration-200 group-hover/oldcol:opacity-0 sm:size-4"
          aria-hidden
        />
        <FaCheck
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-200 group-hover/oldcol:opacity-100 sm:size-3.5"
          aria-hidden
        />
      </span>
      <span className="text-sm font-medium leading-tight text-neutral-900 transition-colors duration-200 dark:text-white dark:group-hover/oldcol:text-neutral-900 sm:text-[0.9375rem]">
        {label}
      </span>
    </div>
  );
}

const intelligenceRows = [
  {
    label: "01 / HYPER-TELEMETRY",
    title: "Continuous Data Intelligence",
    description:
      "ZerofAI aggregates and correlates data from multiple sources, logs, metrics, usage patterns, and system behaviour, to create a real-time health intelligence layer.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Abstract data visualization representing continuous intelligence",
    imageFirst: false,
    imageAccent: "top-left" as const,
  },
  {
    label: "02 / CORE NEURAL NET",
    title: "AI-Driven Prediction Engine",
    description:
      "Machine learning models analyze trends, detect anomalies, and forecast potential failures, helping IT teams act before issues impact users.",
    image:
      "https://media.istockphoto.com/id/2265515077/photo/echnology-consultant-integrates-artificial-intelligence-engine-with-data-visualization.webp?a=1&b=1&s=612x612&w=0&k=20&c=qD69FXAFYtbN1Q3XIVsMF9iNv-HKaPzm_s_D9q6rsHE=",
    imageAlt: "Technology consultant integrating AI with data visualization",
    imageFirst: true,
    imageAccent: "top-right" as const,
  },
  {
    label: "03 / AUTONOMOUS REMEDIATION",
    title: "Autonomous Preventive Actions",
    description:
      "ZerofAI initiates corrective actions automatically reducing manual intervention and ensuring systems remain stable and optimized.",
    image:
      "https://media.istockphoto.com/id/2208747071/photo/hands-of-robots-touching-on-access-management-network-connections-highlight-robotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vch3r1Ej9lyc1Xhp_-FftSYKO7GK9sYUXsTMS9frMyA=",
    imageAlt: "Robotics and access management network visualization",
    imageFirst: false,
    imageAccent: "top-left" as const,
  },
];

export default function ComplaincePage() {
  return (
    <AosInit>
      <section id="" className="relative w-full lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div
            className="order-2 md:order-1 px-5 py-14 sm:px-6 sm:py-16"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2>Know The Health of Your IT
              
              <span className="text-primary! text-3xl! sm:text-5xl!">
                {" "}
                Before It Breaks.
              </span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
            ZerofAI continuously analyzes endpoint and system telemetry to detect anomalies, predict performance degradation, and
            prevent incidents before they impact users or business operations.            </p>

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

     

          



      

      <section
        className="relative w-full bg-neutral-100 py-16 text-foreground sm:py-20 lg:py-24 dark:bg-secondary/40 dark:text-white"
        aria-labelledby="structural-transformation-heading"
      >
        <div className="container px-6">
          <header className="mb-12 sm:mb-14 lg:mb-16">
            <h3
              id="structural-transformation-heading"
              className="font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              Monitoring Tells You What Happened. Prediction Tells You What’s Next.
            </h3>
            <p
              className="mt-4 text-sm text-muted-foreground sm:text-base lg:text-lg dark:text-neutral-400"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="80"
            >
            Traditional monitoring tools generate alerts only after issues occur, forcing IT teams into a reactive cycle of investigation and resolution. By the time a
problem is identified, performance has already degraded, users are impacted, and valuable time is lost in identifying root causes. The noise from excessive
alerts further complicates visibility, making it harder to separate critical issues from background signals.            </p>
          </header>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-stretch gap-10 lg:mt-14 lg:flex-row lg:items-stretch lg:justify-center lg:gap-0">
            <div
              className="group/oldcol group/col flex flex-1 flex-col items-center rounded-2xl p-4 transition-shadow duration-300 hover:shadow-[0_0_40px_-6px_rgba(25,182,201,0.45)] md:pr-8 lg:pr-12"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <ScallopedIconBadge className="text-neutral-400 dark:text-[#3a3a3a]">
                <GiAnticlockwiseRotation className="text-neutral-800 dark:text-white" aria-hidden />
              </ScallopedIconBadge>
              <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-[0.9375rem] dark:text-white">
                The Old Way
              </p>

              <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem]">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {oldWayItems.map((label) => (
                    <MonitoringCompareIconChip key={label} variant="old" label={label} />
                  ))}
                </div>
                <div className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  <div
                    className="pointer-events-none absolute top-1/2 right-0 left-0 z-0 h-px -translate-y-1/2 bg-neutral-400 transition-colors duration-200 group-hover/oldcol:bg-primary dark:bg-neutral-500 dark:group-hover/oldcol:bg-primary"
                    aria-hidden
                  />
                  {[0, 1, 2].map((i) => (
                    <div key={`old-dot-${i}`} className="relative flex justify-center py-0.5">
                      <span className="relative z-10 size-2.5 rounded-full bg-neutral-400 ring-4 ring-neutral-200 transition-colors duration-200 group-hover/oldcol:bg-primary group-hover/oldcol:ring-primary/25 dark:bg-white dark:ring-neutral-800 dark:group-hover/oldcol:bg-primary dark:group-hover/oldcol:ring-primary/30 sm:size-2.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden w-px shrink-0 self-stretch bg-neutral-300 lg:flex dark:bg-neutral-600" aria-hidden>
              <span className="absolute top-1/2 left-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            </div>
            <div className="flex items-center justify-center lg:hidden" aria-hidden>
              <div className="h-px w-full max-w-xs bg-neutral-300 dark:bg-neutral-600" />
            </div>

            <div
              className="group/newcol group/col flex flex-1 flex-col items-center rounded-2xl p-4 transition-shadow duration-300 hover:shadow-[0_0_40px_-6px_rgba(25,182,201,0.45)] md:pl-8 lg:pl-12"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={COMPARE_STAGGER_MS}
            >
              <ScallopedIconBadge className="text-primary">
                <GiStarsStack className="text-white" aria-hidden />
              </ScallopedIconBadge>
              <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-[0.9375rem] dark:text-white">
                The ZerofAI Way
              </p>

              <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem]">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {zeroFaiItems.map((label) => (
                    <MonitoringCompareIconChip key={label} variant="new" label={label} />
                  ))}
                </div>
                <div className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="pointer-events-none absolute top-1/2 right-0 left-0 z-0 h-px -translate-y-1/2 bg-primary" aria-hidden />
                  {[0, 1, 2].map((i) => (
                    <div key={`new-dot-${i}`} className="relative flex justify-center py-0.5">
                      <span className="relative z-10 size-2.5 rounded-full bg-primary ring-4 ring-primary/25 dark:ring-[#1a1a1a] sm:size-2.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 text-foreground md:py-20 dark:bg-secondary/40">
        <div className="container">
          <h3
            className="text-foreground"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            From Monitoring to<span className="text-primary! text-4xl!"> Predictive Intelligence</span>
          </h3>

          {/* 3 cards */}
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:gap-4">
            {/* Card 1   landscape panel ~1.42:1 (w:h) to match design PDF */}
            <div
              className="group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  className="text-primary transition-colors inline-block display duration-300 group-hover:text-white"
                >
                  <path
                    d="M12 3 2.7 20.2a1 1 0 0 0 .9 1.5h16.8a1 1 0 0 0 .9-1.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"

                  />
                  <path
                    d="M12 9v5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 17h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="relative flex h-[230px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 group-hover:bg-primary">
                <div className=" min-h-0 flex-1 items-center justify-center px-6 pb-10 pt-8 text-center">
                    <p className="text-black! font-bold! dark:group-hover:text-white!">Real-Time Health Monitoring</p>
                  <p className=" leading-snug mt-5! text-black/80 transition-colors duration-300 group-hover:text-white!">
                  ZerofAI continuously collects telemetry across endpoints, applications, and system performance building a unified, real-time view of IT health.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={CARD_STAGGER_MS}
            >
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                >
                  <path
                    d="M12 8v5l3 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="relative h-[230px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 group-hover:bg-primary">
                <div className=" min-h-0 flex-1 items-center justify-center px-6 pb-10 pt-8 text-center">
                    <p className="text-black! font-bold! dark:group-hover:text-white!">Anomaly Detection & Early Warning</p>
                  <p className="text-[13px] mt-5! leading-snug text-black/80 transition-colors duration-300 group-hover:text-white!">
                  AI models identify unusual behavior, performance deviations, and hidden patterns surfacing risks before they escalate into incidents.
                  </p>
                </div>
                {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-primary transition-colors duration-300 group-hover:bg-white" /> */}
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={CARD_STAGGER_MS * 2}
            >
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                >
                  <path
                    d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12.3 11 13.8l3.6-3.7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="relative flex h-[230px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 group-hover:bg-primary">
                <div className="flex-1 items-center justify-center pb-10 pt-8 text-center">
                    <p className="text-black! font-bold! dark:group-hover:text-white!">Predictive Issue Prevention</p>
                  <p className="text-[13px] mt-5! leading-snug text-black/80 transition-colors duration-300 group-hover:text-white!">
                  ZerofAI anticipates failures, capacity constraints, and performance degradation triggering proactive actions to avoid downtime.
                  </p>
                </div>
                {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-primary transition-colors duration-300 group-hover:bg-white" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0" aria-label="Predictive intelligence capabilities">
        <div className="flex flex-col">
          {intelligenceRows.map((row, rowIndex) => (
            <div
              key={row.label}
              className={
                rowIndex % 2 === 0
                  ? "w-full bg-neutral-100 py-4 dark:bg-[#1a1a1a] md:py-5 lg:py-6"
                  : "w-full bg-white py-4 dark:bg-black md:py-5 lg:py-6"
              }
            >
              <div className="container max-w-6xl">
                <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                  <div
                    className={
                      row.imageFirst
                        ? "order-2 flex flex-col justify-start lg:order-2"
                        : "order-1 flex flex-col justify-start lg:order-1"
                    }
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-delay={rowIndex * CARD_STAGGER_MS}
                  >
                    <span className="inline-flex w-fit rounded-full bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white! sm:text-xs!">
                      {row.label}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl lg:text-4xl">
                      {row.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-700 dark:text-white/90 sm:text-base lg:text-lg">
                      {row.description}
                    </p>
                  </div>

                  <div
                    className={
                      row.imageFirst
                        ? "order-1 lg:order-1"
                        : "order-2 lg:order-2"
                    }
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-delay={rowIndex * CARD_STAGGER_MS + 80}
                  >
                    <div
                      className={[
                        "relative overflow-hidden rounded-[20px] border-t-0 border-neutral-900 dark:border-white",
                        row.imageAccent === "top-left"
                          ? "border-l-[6px] sm:border-l-[7px] border-r-0 border-b-0"
                          : "border-r-[6px] sm:border-r-[7px] border-l-0 border-b-0",
                      ].join(" ")}
                    >
                      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                        <Image
                          src={row.image}
                          alt={row.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 45vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={index * CARD_STAGGER_MS}
                >
                  {index < featureBarItems.length - 1 && (
                    <span
                      className="pointer-events-none absolute bottom-3 left-1/2 top-3 hidden w-px -translate-x-1/2 bg-primary md:left-full md:top-[12%] md:bottom-[12%] md:block md:translate-x-0"
                      aria-hidden
                    />
                  )}
                  <div className="mb-1.5 flex h-16 w-16 shrink-0 items-center justify-center sm:mb-2 sm:h-18 sm:w-18 md:mb-2 md:h-20 md:w-20">
                    <Icon
                      className="h-full w-full text-primary"
                      aria-hidden
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
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
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
              className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-primary-foreground sm:px-6 sm:text-sm">
                Traditional Systems
              </div>
              <ul className="mt-2 flex flex-col gap-4 sm:gap-5">
                {traditionalOpsItems.map((line) => (
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
              className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={COMPARE_STAGGER_MS}
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

          <div
            className="mx-auto mt-14 max-w-3xl text-center md:mt-16 lg:mt-20"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <p className="text-xl font-semibold leading-snug text-neutral-900 sm:text-2xl md:text-[1.65rem] md:leading-snug dark:text-white">
              Unlock Access Without Waiting on IT
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:mt-8 sm:px-10 sm:py-3.5 sm:text-base"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </section>
    </AosInit>
  );
}
