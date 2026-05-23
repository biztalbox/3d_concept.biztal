import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Image from "next/image";
import Link from "next/link";
import { GoGoal } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { CiVirus } from "react-icons/ci";
import { IoMdTime, IoIosPerson } from "react-icons/io";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsShieldCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

const remediationTraditionalItems = [
  "Generate alerts and tickets",
  "Depend on manual investigation",
  "Require scripts and operational coordination",
  "Stop at recommendations and workflows",
  
] as const;

const remediationZerofaiItems = [
  "Detects and resolves issues automatically",
  "Executes remediation workflows instantly",
  "Validates outcomes continuously",
  "Supports rollback and recovery mechanisms",
  "Operates through closed-loop autonomous execution",
] as const;

const remediationOutcomeCards = [
  {
    Icon: IoMdTime,
    title: "Reduced Mean Time to Resolution (MTTR)",
    description: "through instant remediation execution",
  },
  {
    Icon: HiOutlineWrenchScrewdriver,
    title: "Lower Operational Overhead",
    description: "by eliminating repetitive manual fixes",
  },
  {
    Icon: IoIosPerson,
    title: "Reduced Service Desk Dependency",
    description: "with autonomous issue resolution workflows",
  },
  {
    Icon: BsShieldCheck,
    title: "Improved System Stability",
    description: "through continuous remediation and validation",
  },
] as const;


const remediationCompareCards = [
  {
    title: "THE OLD WAY",
    text: "Detect issues. Raise tickets. Resolve manually.",
  },
  {
    title: "THE ZEROFAI WAY",
    text: "Detect issues. Trigger remediation. Resolve automatically.",
  },
] as const;

const remediationFeatureRows = [



  {
    imageSrc:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Event-Driven Detection",
    accentClass: "bg-primary",
    title: "Event-Driven Remediation Triggers",
    description:
    "ZerofAI continuously analyzes endpoint telemetry, operational events, and service health signals automatically initiating remediationworkflows the moment issues are detected.",    
    imageFirst: true,
  },
  {
    imageSrc:
      "https://media.istockphoto.com/id/2265515077/photo/echnology-consultant-integrates-artificial-intelligence-engine-with-data-visualization.webp?a=1&b=1&s=612x612&w=0&k=20&c=qD69FXAFYtbN1Q3XIVsMF9iNv-HKaPzm_s_D9q6rsHE=",
    imageAlt: "AI-Led Diagnosis and decisioning",
    accentClass: "bg-[#00bcd4]",
    title: "Policy-Based Decision Intelligence",
    description:
    "Using predefined remediation playbooks, operational policies, and contextual analysis, ZerofAI determines the safest and most effectiveremediation path for every issue.",
    imageFirst: false,
  },
  {
    imageSrc:
      "https://media.istockphoto.com/id/2208747071/photo/hands-of-robots-touching-on-access-management-network-connections-highlight-robotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vch3r1Ej9lyc1Xhp_-FftSYKO7GK9sYUXsTMS9frMyA=",
    imageAlt: "Closed-Loop Resolution",
    accentClass: "bg-[#00bcd4]",
    title:"Verification, Recovery & Rollback",
    description:
    "Once remediation actions are executed, ZerofAI validates system health and confirms successful resolution. If instability or unexpectedbehavior is detected, rollback workflows can automatically restore systems to their previous healthy state.",    
    imageFirst: true,
  },
];

function RemediationCompareCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-neutral-300 bg-transparent p-6 transition-colors duration-300 sm:p-8 dark:border-white/25 hover:border-primary hover:bg-primary">
      <p className=" font-bold uppercase tracking-wide text-neutral-900 transition-colors duration-300 group-hover:text-white! sm:text-sm dark:text-white!">
        {title}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! sm:text-base dark:text-white/80">
        • {text}
      </p>
    </div>
  );
}

export default function ComplaincePage() {
  return (
    <AosInit>
      <section className="relative w-full lg:min-h-screen">
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
            <h2>From Detection to 
              <br />
              <span className="text-primary!">
              Resolution-Automatically
              </span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
             ZerofAI transforms IT operations from reactive troubleshooting to autonomous remediation by instantly detecting issues, triggering corrective actions, validating outcomes, and restoring stability across endpoints and services.
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
        className="w-full bg-secondary py-14 sm:py-16 md:py-20 dark:bg-secondary/40"
        aria-labelledby="detecting-issues-heading"
      >
        <div className="container px-5 sm:px-6">
          <h2
            id="detecting-issues-heading"
            className="text-neutral-900 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            Detecting Issues Isn&apos;t Enough Anymore
          </h2>

          <p
            className="mt-6 text-sm leading-7 text-neutral-600 sm:mt-8 sm:text-[15px] sm:leading-8 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="80"
          >
            Traditional IT operations stop at visibility. Monitoring tools generate alerts,
            tickets are created, and IT teams manually investigate, validate, and execute fixes
            across multiple systems.
          </p>
          <p
            className="mt-5 text-sm leading-7 text-neutral-600 sm:text-[15px] sm:leading-8 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="120"
          >
            As environments grow more distributed and complex, this approach increases
            operational overhead, slows resolution, and creates constant fire-fighting cycles.
            Even many automation tools rely heavily on scripts, approvals, and manual execution
            leaving remediation dependent on operational bandwidth rather than system
            intelligence.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            {remediationCompareCards.map((card, index) => (
              <div
                key={card.title}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={index * COMPARE_STAGGER_MS}
              >
                <RemediationCompareCard title={card.title} text={card.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-14 dark:bg-[#111111] sm:py-16 md:py-20">
        <div className="container">
          <h2
            className="text-left text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15] dark:text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            From IT Alerts to  {" "}
            <span className="text-primary!">Autonomous Resolution</span>
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
                Instant Remediation Actions
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                  <GoGoal className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
              ZerofAI enables IT teams to execute predefined remediation workflows instantly from restarting services and restoring configurations to clearing resource bottlenecks and reapplying policies.

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
                Autonomous Closed-Loop Remediation

                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                  <GiBrain className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
              For recurring and policy-approved scenarios, ZerofAI automatically initiates remediation workflows without manual intervention reducing repetitive operational effort and accelerating issue resolution.

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
                Intelligent Validation & Safe Rollback

                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary transition-colors duration-300 group-hover:bg-white!">
                  <CiVirus className="h-5 w-5 text-white group-hover:text-primary!" aria-hidden />
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white! dark:text-[#a0a0a0] sm:text-[0.9375rem]">
              Every remediation workflow includes validation checks and rollback mechanisms to ensure operational safety, stability, and controlled execution across enterprise environments.

              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-black sm:py-20 md:py-24">
        <div className="container max-w-6xl">
          <div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
            {remediationFeatureRows.map((row, index) => {
              const imageAnimation = row.imageFirst ? "fade-right" : "fade-left";
              const cardAnimation = row.imageFirst ? "fade-left" : "fade-right";
              const imageOrder = row.imageFirst ? "order-1 md:order-1" : "order-1 md:order-2";
              const cardOrder = row.imageFirst ? "order-2 md:order-2" : "order-2 md:order-1";

              return (
                <div
                  key={row.title}
                  className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14"
                >
                  <div className={`w-full min-w-0 ${imageOrder}`}>
                    <div
                      data-aos={imageAnimation}
                      data-aos-duration="900"
                      data-aos-easing="ease-out-cubic"
                      className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-[24px] ring-1 ring-neutral-200 sm:min-h-[220px] md:aspect-[3/2] md:min-h-0 md:flex-1 md:basis-0 dark:ring-0"
                    >
                      <Image
                        src={row.imageSrc}
                        alt={row.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <div className={`w-full min-w-0 ${cardOrder}`}>
                    <div
                      data-aos={cardAnimation}
                      data-aos-duration="900"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="80"
                      className="flex w-full flex-col justify-center md:flex-1 md:basis-0"
                    >
                      <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white dark:border-0 dark:bg-[#1e1e1e]">
                        <span className={`block h-2 w-14 ${row.accentClass}`} aria-hidden />
                        <div className="flex flex-col justify-center px-7 py-9 sm:px-8 sm:py-10 md:px-9 md:py-12 lg:py-14">
                          <h4 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-[1.75rem] dark:text-white">
                            {row.title}
                          </h4>
                          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem] md:text-base md:leading-relaxed dark:text-[#b0b0b0]">
                            {row.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="w-full bg-neutral-100 py-10 sm:py-12 md:py-14 dark:bg-black"
        aria-label="Remediation outcomes"
      >
        <div className="container max-w-8xl px-4 sm:px-6">
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

      <section
        className="w-full bg-white py-16 sm:py-20 md:py-24 dark:bg-[#121212]"
        aria-labelledby="beyond-automation-heading"
      >
        <div className="container max-w-6xl px-5 sm:px-6">
          <h2
            id="beyond-automation-heading"
            className="max-w-5xl text-left text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.12] dark:text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            Beyond Automation Toward Autonomous Remediation
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:items-stretch md:gap-8">
            <div
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-secondary p-6 transition-colors duration-300 hover:bg-primary sm:rounded-3xl sm:p-8 dark:bg-gray dark:hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="80"
            >
              <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-white! transition-colors duration-300 group-hover:bg-neutral-950 sm:px-5 sm:text-sm">
                Traditional IT Operations Tools
              </span>
              <ul className="mt-8 flex flex-1 flex-col gap-4 sm:mt-10 sm:gap-5">
                {remediationTraditionalItems.map((item) => (
                  <li key={item} className="flex gap-3 text-left">
                    <RxCross2
                      className="mt-0.5 size-4 shrink-0 text-neutral-600 transition-colors duration-300 group-hover:text-white sm:size-[18px] dark:text-white"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-neutral-800 transition-colors duration-300 group-hover:text-white! sm:text-base dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-secondary p-6 transition-colors duration-300 hover:bg-primary sm:rounded-3xl sm:p-8 dark:bg-gray dark:hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={COMPARE_STAGGER_MS}
            >
              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-white! transition-colors duration-300 group-hover:bg-neutral-950 sm:px-5 sm:text-sm">
                <FaCheck className="shrink-0 text-white group-hover:text-primary sm:size-4" aria-hidden />
                ZerofAI
              </span>
              <ul className="mt-8 flex flex-1 flex-col gap-4 sm:mt-10 sm:gap-5">
                {remediationZerofaiItems.map((item) => (
                  <li key={item} className="flex gap-3 text-left">
                    <FaCheck
                      className="mt-0.5 size-4 shrink-0 text-neutral-600 transition-colors duration-300 group-hover:text-white sm:size-[18px] dark:text-white"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-neutral-800 transition-colors duration-300 group-hover:text-white! sm:text-base dark:text-white">
                      {item}
                    </span>
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
              Stop Chasing Alerts. Start Resolving Issues Automatically.

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