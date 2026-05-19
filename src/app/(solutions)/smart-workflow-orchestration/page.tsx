import AosInit from "@/component/AosInit";
import AlternatingFeatureRows from "@/component/AlternatingFeatureRows";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import { DEFAULT_REMEDIATION_FEATURE_ROWS } from "@/lib/default-alternating-rows";
import Link from "next/link";
import { FaClockRotateLeft, FaCheck } from "react-icons/fa6";
import { GiStarSwirl } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { CiVirus } from "react-icons/ci";
import Image from "next/image";
import type { IconType } from "react-icons";
import { LuClockArrowDown } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import { IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { CheckCircle } from "lucide-react";





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

const workflowSteps = [
  "Trigger workflows.",
  "Coordinate manually.",
  "Resolve step-by-step.",
];


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
 

export default function SmartWorkflowOrchestrationPage() {
  return (
    <AosInit>
      <section className="relative w-full lg:min-h-screen">
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div
            className="order-2 px-5 py-14 sm:px-6 sm:py-16 md:order-1"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2>
              Orchestrate IT Workflows.
              <span className="text-primary!"> Intelligently. Automatically.</span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
              ZerofAI connects systems, workflows, and actions into a unified automation layer enabling
              IT operations to execute complex processes autonomously, without manual coordination or
              repetitive effort.
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

      <section
        className="w-full p-10 bg-secondary py-14 sm:py-16 md:py-20 dark:bg-secondary/40"
        aria-labelledby="workflow-coordination-heading"
      >
        <div className="container px-5 sm:px-6">
          <div>
            <h3
              id="workflow-coordination-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              IT Workflows Shouldn&apos;t Depend on Manual Coordination
            </h3>
            <p
              className="mt-6 text-sm leading-7 text-neutral-600 sm:text-[15px] sm:leading-8 dark:text-neutral-400"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="80"
            >
              Most enterprise workflows span multiple systems, approvals, and teams forcing IT operations
              into a cycle of ticket routing, repetitive execution, and manual follow-ups. Even when
              automation exists, workflows are often fragmented, rule-based, and dependent on human
              intervention to complete the process.
            </p>
          </div>

          
          <div className="grid max-w-4xl mx-auto mt-10 grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-0">
            {/* The Old Way */}
            <div
              className="flex flex-col items-center md:pr-10 lg:pr-14"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex size-18 items-center justify-center rounded-full border border-dashed border-neutral-300 bg-neutral-200 text-neutral-700 sm:size-20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
                <FaClockRotateLeft />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-base dark:text-white">
                The Old Way
              </p>
              <ul className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:gap-3.5">
                {workflowSteps.map((label) => (
                  <li
                    key={`old-${label}`}
                    className="flex items-center gap-3 rounded-full bg-neutral-200 px-5 py-3.5 sm:px-6 sm:py-4 dark:bg-secondary"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center">
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-secondary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <RxCross2 />
                      </span>
                    </span>
                    <span className="text-sm font-medium text-neutral-900 sm:text-[0.9375rem] dark:text-white">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div
              className="relative flex min-h-8 items-center justify-center md:min-h-0 md:w-px md:self-stretch"
              aria-hidden
            >
              <div className="h-px w-full max-w-xs bg-neutral-300 md:hidden dark:bg-neutral-600" />
              <div className="absolute top-1/2 left-1/2 hidden h-full w-px -translate-x-1/2 -translate-y-1/2 bg-neutral-300 md:block dark:bg-neutral-600" />
              <span className="absolute z-10 text-primary">
                <FaRegCircle />
              </span>
            </div>

            {/* The ZerofAI Way */}
            <div className="flex flex-col items-center md:pl-10 lg:pl-14">
              <div className="flex size-18 items-center justify-center rounded-full bg-primary text-white sm:size-20">
                <CheckCircle aria-hidden />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-base dark:text-white">
                The ZerofAI Way
              </p>
              <ul className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:gap-3.5">
                {workflowSteps.map((label) => (
                  <li
                    key={`new-${label}`}
                    className="flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-neutral-900 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4 dark:bg-white dark:ring-0"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center text-primary" aria-hidden>
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-primary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <FaCheck />
                      </span>
                    </span>
                    <span className="text-sm font-medium sm:text-[0.9375rem]">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-14 dark:bg-[#111111] sm:py-16 md:py-20">
        <div className="container max-w-6xl">
          <h2
            className="text-left text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            From Password Reset to{" "}
            <span className="text-primary!">Autonomous<br /> Identity Recovery</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:items-stretch md:gap-8">
            <div
              className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
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

            <div
              className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={CARD_STAGGER_MS}
            >
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

            <div
              className="group flex h-full w-full min-w-0 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8 dark:border-0 dark:bg-[#1e1e1e] dark:shadow-none hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={CARD_STAGGER_MS * 2}
            >
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

            <AlternatingFeatureRows rows={DEFAULT_REMEDIATION_FEATURE_ROWS} />

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
        className="py-16"
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


      <section className="py-16 sm:py-20">
        
          <div
            className="container rounded-3xl"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <hr className="border-black dark:border-white mb-8 w-60 mx-auto" />
            <h3 className="text-center">
              Turn Your Service Desk Into an Autonomous Engine
            </h3>
            <div className="mt-8 flex   justify-center sm:mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary text-white! px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:px-10 sm:py-3.5 sm:text-base"
              >
                Get a Demo
              </Link>
            </div>
          </div>
        
      </section>

    </AosInit>
  );
}
