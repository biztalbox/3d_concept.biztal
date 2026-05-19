import HeroCanvas from "@/component/bot/HeroCanvas";
import Link from "next/link";
import { GoGoal } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { CiVirus } from "react-icons/ci";
import { IoMdTime, IoIosPerson } from "react-icons/io";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsShieldCheck } from "react-icons/bs";
import Image from "next/image";

/** Row-based Traditional vs ZEROFAI comparison (screenshot-aligned colors & layout). */
const autonomousRemediationRows: { traditional: string; zerofai: string }[] = [
  {
    traditional: "TRADITIONAL IT OPERATIONS TOOLS",
    zerofai: "ZEROFAI",
  },
  {
    traditional: "GENERATE ALERTS AND TICKETS",
    zerofai: "DETECTS AND RESOLVES ISSUES AUTOMATICALLY",
  },
  {
    traditional: "DEPEND ON MANUAL INVESTIGATION",
    zerofai: "EXECUTES REMEDIATION WORKFLOWS INSTANTLY",
  },
  {
    traditional: "REQUIRE SCRIPTS AND OPERATIONAL COORDINATION",
    zerofai: "VALIDATES OUTCOMES CONTINUOUSLY",
  },
  {
    traditional: "STOP AT RECOMMENDATIONS AND WORKFLOWS",
    zerofai: "SUPPORTS ROLLBACK AND RECOVERY MECHANISMS",
  },
  {
    traditional: "SILOED MANUAL ACTIONS",
    zerofai: "OPERATES THROUGH CLOSED-LOOP AUTONOMOUS EXECUTION",
  },
];

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
    <>
      <section id="" className="relative w-full lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 px-5 py-14 sm:px-6 sm:py-16">
            <h2>Bulletproof Your Endpoints.
              Automate Your{" "}
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

      <section
        className="w-full bg-secondary py-14 sm:py-16 md:py-20 dark:bg-secondary/40"
        aria-labelledby="detecting-issues-heading"
      >
        <div className="container px-5 sm:px-6">
          <h2
            id="detecting-issues-heading"
            className="text-neutral-900 dark:text-white"
          >
            Detecting Issues Isn&apos;t Enough Anymore
          </h2>

          <p className="mt-6 text-sm leading-7 text-neutral-600 sm:mt-8 sm:text-[15px] sm:leading-8 dark:text-neutral-400">
            Traditional IT operations stop at visibility. Monitoring tools generate alerts,
            tickets are created, and IT teams manually investigate, validate, and execute fixes
            across multiple systems.
          </p>
          <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-[15px] sm:leading-8 dark:text-neutral-400">
            As environments grow more distributed and complex, this approach increases
            operational overhead, slows resolution, and creates constant fire-fighting cycles.
            Even many automation tools rely heavily on scripts, approvals, and manual execution
            leaving remediation dependent on operational bandwidth rather than system
            intelligence.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5  sm:mt-12 sm:gap-6 md:grid-cols-2">
            {remediationCompareCards.map((card) => (
              <RemediationCompareCard key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </section>

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
        className="w-full bg-neutral-100 py-10 sm:py-12 md:py-14 dark:bg-black"
        aria-label="Remediation outcomes"
      >
        <div className="container max-w-8xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {remediationOutcomeCards.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-primary px-5 py-8 text-center text-white sm:min-h-[240px] sm:px-6 sm:py-10"
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
        className="w-full bg-neutral-50 py-12 sm:py-14 md:py-16 dark:bg-[#121212]"
        aria-labelledby="beyond-automation-heading"
      >
        <div className="container max-w-6xl px-4 sm:px-6">
          <h2
            id="beyond-automation-heading"
            className="max-w-4xl text-left text-2xl font-bold leading-[1.2] tracking-tight text-neutral-900 sm:text-3xl md:text-4xl dark:text-white"
          >
            Beyond Automation Toward Autonomous Remediation
          </h2>

          <div className="mt-8 flex flex-col gap-2.5 sm:mt-10 md:gap-3">
            {autonomousRemediationRows.map((row, index) => {
              const isHeader = index === 0;
              return (
                <div
                  key={`${row.traditional}-${row.zerofai}`}
                  className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3"
                >
                  <div
                    className={
                      "flex min-h-[52px] items-center justify-center rounded-md bg-neutral-200 px-3 py-3.5 text-center text-[10px] uppercase leading-snug tracking-wide text-neutral-900 sm:min-h-[56px] sm:text-[11px] md:text-xs dark:bg-[#1C1C1C] dark:text-white " +
                      (isHeader ? "font-bold" : "font-medium")
                    }
                  >
                    {row.traditional}
                  </div>
                  <div
                    className={
                      "flex min-h-[52px] items-center justify-center rounded-md bg-[#dcf4f7] px-3 py-3.5 text-center text-[10px] uppercase leading-snug tracking-wide text-[#0d3d42] sm:min-h-[56px] sm:text-[11px] md:text-xs dark:bg-[#0D1F1E] dark:text-[#c8ebe9] " +
                      (isHeader ? "font-bold" : "font-medium")
                    }
                  >
                    <span className="text-balance">{row.zerofai}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        
          <div className="container rounded-3xl">
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

    </>
  );
}