import HeroCanvas from "@/component/bot/HeroCanvas";
import IdentityAccessAutomationStats from "@/component/identityAccessAutomationStats";
import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { BsFileBarGraph } from "react-icons/bs";
import { RiHome4Line } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { TbChartDots2, TbClockDown } from "react-icons/tb";
import { LuMonitorCheck } from "react-icons/lu";
import { FaClockRotateLeft, FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import { FaInfo } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { IoSyncSharp } from "react-icons/io5";




const ACCESS_GAP_IMAGE = "/assets/images/vs-image.png"

export default function ComplaincePage() {



  const traditionVsZerofai = [
    ["Focus on uptime and infrastructure metrics",

      "React after productivity is already impacted",
      
      "Measure systems, not workforce efficiency",
      
      "Lack visibility into digital workplace friction"],
    [
      "Identifies hidden productivity drains",

     " Understands how technology impacts employee efficiency",
      
      "Detects workplace friction proactively",
      
      "Helps protect uninterrupted productive work time"
    ]
  ]
  return (
    <main className="flex flex-col">
      <section id="" className="relative w-full px-0 sm:p-5">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 pb-10">
          <div className="order-2 md:order-1 px-4 py-16 sm:px-0 flex flex-col gap-8">
            <h2>Protect Productive Work Time Across the Enterprise.
            </h2>

            <p>
            ZerofAI helps organizations identify workflow inefficiencies, digital interruptions, and hidden productivity drains that
reduce employee focus, efficiency, and uninterrupted productive work time across the digital workplace.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
              >
                Get a Demo
              </Link>
            </div>
          </div>
          <HeroCanvas />

        </div>
      </section>

      <section className="bg-secondary dark:bg-secondary/40 py-16">
        <div className="container flex flex-col gap-10">
          <h2>
          Productivity Loss Often Starts Before IT Notices It
          </h2>
          <p>
            In modern digital workplaces, employee productivity is influenced by far more than system uptime. Slow applications, recurring interruptions,
            collaboration friction, excessive context switching, unresolved IT issues, and degraded digital experiences gradually reduce efficiency long before they
            become visible in operational dashboards or support escalations.
          </p>

          <p>
            Most organizations only react after productivity has already declined through rising ticket volumes, missed timelines, or employee dissatisfaction.
              </p>

              <div className="grid max-w-4xl mx-auto mt-10 grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-0">
            {/* The Old Way */}
            <div className="flex flex-col items-center md:pr-10 lg:pr-14">
              <div className="flex size-18 items-center justify-center rounded-full border border-dashed border-neutral-300 bg-neutral-200 text-neutral-700 sm:size-20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
                <FaClockRotateLeft />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-neutral-900 sm:text-base dark:text-white">
                The Old Way
              </p>
              <ul className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:gap-3.5">
                
                  <li
                    className="flex items-center gap-3 rounded-full bg-neutral-200 px-5 py-3.5 sm:px-6 sm:py-4 dark:bg-secondary"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center">
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-secondary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center">
                      <FaInfo />
                      </span>
                    </span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    Measure uptime
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-3 rounded-full bg-neutral-200 px-5 py-3.5 sm:px-6 sm:py-4 dark:bg-secondary"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center">
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-secondary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center">
                      <FaInfo />
                      </span>
                    </span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    Track tickets.
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-3 rounded-full bg-neutral-200 px-5 py-3.5 sm:px-6 sm:py-4 dark:bg-secondary"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center">
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-secondary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center">
                      <FaInfo />
                      </span>
                    </span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    Assume productivity.
                    </span>
                  </li>
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
                <li
                    className="flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-neutral-900 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4 dark:bg-white dark:ring-0"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center text-primary" aria-hidden>
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-primary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <FaCheck />
                      </span>
                    </span>
                    <span className="text-sm font-medium sm:text-[0.9375rem]">Identify friction</span>
                  </li>
                <li
                    className="flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-neutral-900 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4 dark:bg-white dark:ring-0"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center text-primary" aria-hidden>
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-primary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <FaCheck />
                      </span>
                    </span>
                    <span className="text-sm font-medium sm:text-[0.9375rem]">Protect focus</span>
                  </li>
                <li
                    className="flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-neutral-900 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4 dark:bg-white dark:ring-0"
                  >
                    <span className="relative flex size-8 shrink-0 items-center justify-center text-primary" aria-hidden>
                      <FaRegCircle />
                      <span className="absolute inset-[3px] rounded-full bg-primary sm:inset-1" />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <FaCheck />
                      </span>
                    </span>
                    <span className="text-sm font-medium sm:text-[0.9375rem]">Improve productivity continuously.</span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container flex flex-col gap-10"> 
                    <h2>
                    From IT Operations to Workforce Productivity Intelligence
        </h2>

          <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-primary">

            <div className="flex flex-col gap-6 text-center items-center p-5 rounded hover:bg-secondary dark:hover:bg-secondary/40">
              <span className="text-primary! bg-background text-5xl! p-5 rounded-full">

                <MdOutlineHealthAndSafety />
              </span>

              <h4>Productivity Drain Detection</h4>

              <p>ZerofAI identifies workflow slowdowns, repetitive interruptions, inefficient application behavior, and context-switching patterns that silently reduce
              productive output across the workplace.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-center items-center p-5 rounded hover:bg-secondary dark:hover:bg-secondary/40">
              <span className="text-primary! bg-background text-5xl! p-5 rounded-full">

                <FaRobot />
              </span>

              <h4>Workflow Continuity Intelligence</h4>

              <p>Productivity depends on uninterrupted work. ZerofAI helps surface where fragmented workflows, recurring interruptions, and digital friction disrupt
              employee momentum.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-center items-center p-5 rounded hover:bg-secondary dark:hover:bg-secondary/40">
              <span className="text-primary! bg-background text-5xl! p-5 rounded-full">

                <IoSyncSharp />
              </span>

              <h4>Workforce Productivity Visibility</h4>

              <p>Move beyond technical monitoring and understand how workplace technology impacts efficiency, work continuity, and productive employee output at
              scale.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="mt-16 md:mt-20">

        <div className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0 items-center">
          <Image src="/assets/images/sample-img.webp" width={1200} height={680} alt="zerofai" className="rounded-xl justify-self-end md:border-r-4 border-primary" />
          <div className="flex flex-col gap-10 px-6 py-12 md:px-8">
            <h2>
            Workplace Experience Intelligence
            </h2>

            <p>ZerofAI continuously analyzes digital workplace interactions across collaboration platforms, enterprise applications, service
            environments, and endpoint experiences—creating a real-time understanding of productivity health across the organization.</p>



          </div>
        </div>
      </section>
      <section className="mt-16 md:mt-20">

        <div className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0 items-center">
          <div className="flex flex-col gap-10 px-6 py-12 md:px-8 order-2 md:order-1">
            <h2>
            AI-Driven Productivity Insights
            </h2>

            <p>Using behavioral analysis and contextual intelligence, ZerofAI identifies trends that indicate workflow inefficiencies, excessive context
            switching, recurring interruptions, and operational bottlenecks impacting employee performance.</p>



          </div>
          <Image src="/assets/images/sample-img.webp" width={1200} height={680} alt="zerofai" className="order-1 md:order-2 rounded-xl justify-self-end md:border-l-4 border-primary" />
        </div>
      </section>

      <section className="mt-16 md:mt-20">

        <div className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0! items-center">
          <Image src="/assets/images/sample-img.webp" width={1200} height={680} alt="zerofai" className="rounded-xl justify-self-end md:border-r-4 border-primary" />
          <div className="flex flex-col gap-10 px-6 py-12 md:px-8">
            <h2>
            Proactive Workplace Optimization
            </h2>

            <p>By surfacing productivity-impacting patterns early, ZerofAI enables organizations to improve digital workflows, reduce operational
            friction, and create more seamless employee work experiences.</p>

          </div>
        </div>
      </section>


      <section className="bg-primary py-16">

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          <div className="flex flex-col gap-4 items-center text-center">
            <Image src="/assets/icons/watch.png" className="invert" width={100} height={100} alt="watch" />
            <h5 className="text-xl font-bold text-white">Improved Workforce Productivity</h5>
            <p className="text-white!">

            through reduced digital friction and interruptions
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
            <Image src="/assets/icons/ticket.png" className="invert" width={90} height={90} alt="ticket" />
            <h5 className="text-xl font-bold text-white">Reduced Operational Drag</h5>
            <p className="text-white!">

            by identifying hidden workplace inefficiencies early
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/assets/icons/humen.png" className="invert" width={80} height={80} alt="ticket" />
          <h5 className="text-xl font-bold text-white">Better Employee Focus & Efficiency</h5>
            <p className="text-white!">

            through uninterrupted digital work experiences

            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/assets/icons/dollersing.png" className="invert" width={80} height={80} alt="ticket" />
          <h5 className="text-xl font-bold text-white">More Informed Workplace Decisions</h5>
            <p className="text-white!">

            with real-time productivity intelligence insights
            </p>
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
            Productivity Loss Starts Long Before IT Notices
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16">
            {/* Traditional Systems */}
            <div className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]">
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-primary-foreground sm:px-6 sm:text-sm">
              Traditional IT Operations:
              </div>
              <ul className="mt-2 flex flex-col gap-4 sm:gap-5">
                {traditionVsZerofai[0].map((line) => (
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
                {traditionVsZerofai[1].map((line) => (
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

      <section className="py-16">
        <div className="container max-w-3xl text-center ">
          <h2>
          Fix Problems Before Productivity Slows Down
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
          >
            Get a Demo
          </Link>
        </div>
      </section>

    </main>
  );
}