import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import Link from "next/link";
import Image from "next/image";
import { IoSyncSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import {
  AOS_DURATION,
  AOS_EASING,
  CARD_STAGGER_MS,
  COMPARE_STAGGER_MS,
} from "@/lib/aos-config";
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

function IconChip({
  variant,
  label,
}: {
  variant: "old" | "new";
  label: string;
}) {
  const isOld = variant === "old";
  const chipBase =
    "flex min-h-[3.5rem] w-full items-center gap-2.5 rounded-xl px-3 py-2.5 sm:min-h-[4.5rem] sm:px-3.5 sm:py-0 md:min-h-[5rem]";
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
      <span className="min-w-0 flex-1 text-left text-xs font-medium leading-snug text-neutral-900 sm:text-sm sm:leading-tight md:text-[0.9375rem] dark:text-white">
        {label}
      </span>
    </div>
  );
}

function ExperienceMetricsComparison() {
  return (
    <div className="mt-12 flex flex-col items-stretch gap-10 md:mt-16 md:flex-row md:items-stretch md:justify-center md:gap-0">
      <div
        className="flex w-full flex-1 flex-col items-center md:pr-8 lg:pr-12"
        data-aos="fade-up"
        data-aos-duration={AOS_DURATION}
        data-aos-easing={AOS_EASING}
        data-aos-delay="120"
      >        <CompareBadgeIcon src={COMPARE_BADGE_ICONS.oldWay} alt="The Old Way" variant="old" />
        <p className="mt-4 text-center text-sm! font-bold! text-neutral-900 sm:text-[0.9375rem] dark:text-white!">
          The Old Way
        </p>

        <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem] md:max-w-none">
          <div className="grid grid-cols-1 gap-2 min-[520px]:grid-cols-3 sm:gap-3">
            <IconChip variant="old" label="Measure systems." />
            <IconChip variant="old" label="React to complaints." />
            <IconChip variant="old" label="Guess employee impact." />
          </div>
          <div className="relative mt-5 hidden min-[520px]:grid min-[520px]:grid-cols-3 min-[520px]:gap-2 sm:gap-3">
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

      <div className="relative hidden w-px shrink-0 self-stretch bg-neutral-300 md:block dark:bg-neutral-600" aria-hidden>
        <span className="absolute top-1/2 left-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </div>
      <div className="flex items-center justify-center md:hidden" aria-hidden>
        <div className="h-px w-full max-w-xs bg-neutral-300 dark:bg-neutral-600" />
      </div>

      <div
        className="flex w-full flex-1 flex-col items-center md:pl-8 lg:pl-12"
        data-aos="fade-up"
        data-aos-duration={AOS_DURATION}
        data-aos-easing={AOS_EASING}
        data-aos-delay="200"
      >        <CompareBadgeIcon src={COMPARE_BADGE_ICONS.zerofaiWay} alt="The ZerofAI Way" variant="new" />
        <p className="mt-4 text-center text-sm! font-bold! text-neutral-900 sm:text-[0.9375rem] dark:text-white!">
          The ZerofAI Way
        </p>

        <div className="mt-6 w-full max-w-[22rem] sm:max-w-[24rem] md:max-w-none">
          <div className="grid grid-cols-1 gap-2 min-[520px]:grid-cols-3 sm:gap-3">
            <IconChip variant="new" label="Analyze behavior." />
            <IconChip variant="new" label="Detect sentiment trends." />
            <IconChip variant="new" label="Improve experience proactively." />
          </div>
          <div className="relative mt-5 hidden min-[520px]:grid min-[520px]:grid-cols-3 min-[520px]:gap-2 sm:gap-3">
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
  );
}

export default function SentimentTrendAnalysisPage() {
  const traditionVsZerofai = [
    ["Focus on systems and uptime",

      "Measure operational metrics only",

      "React after complaints and escalations",

      "Lack visibility into employee experience"],
    [
      "Understands employee digital behavior",

      "Detects sentiment and frustration trends",

      "Connects experience with operational data",

      "Enables proactive workplace optimization"
    ]
  ]
  return (
    <AosInit>
    <main>
      <section id="" className="relative w-full px-0 sm:p-5">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 pb-16">
          <div
            className="order-2 md:order-1 px-4 py-16 sm:px-0 flex flex-col gap-8"
          >
            <h2>Understand What Employee Experience, Not Just What Systems Report
            </h2>

            <p>
              Traditional monitoring tells you how systems perform. ZerofAI helps you understand how employees actually experience
              workplace technology by analyzing behavioral signals, support interactions, and digital experience patterns that reveal frustration,
              dissatisfaction, and experience fatigue early.
            </p>

            <div className="flex flex-wrap items-center gap-6">              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
              >
                Get a Demo
              </Link>
            </div>
          </div>
          <div
            className="order-1 md:order-2"
            
          >
            <HeroCanvas />
          </div>
        </div>
      </section>

      <section className="bg-secondary dark:bg-secondary/40 py-16 md:py-20">
        <div className="container flex flex-col gap-10">
          <h2
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
          >
            Traditional IT Metrics Don’t Reveal Employee Frustration
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay="80"
          >
            Most IT operations teams measure system performance, uptime, and ticket volumes but these metrics rarely explain how employees actually experience
            technology. Slow applications, recurring disruptions, delayed support, and digital friction gradually impact employee productivity and satisfaction long
            before they appear in operational reports.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay="120"
          >
            By the time issues are escalated through surveys, complaints, or rising ticket volumes, frustration has already affected workplace experience and
            operational efficiency.
          </p>

          <ExperienceMetricsComparison />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container flex flex-col gap-10">
          <h2
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
          >
            From IT Metrics to Workplace Experience Intelligence
          </h2>

          <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-primary p-6 bg-secondary rounded-2xl dark:bg-secondary/40">

            <div
              className="flex flex-col gap-6 text-center items-center p-5"
              data-aos="fade-up"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
              data-aos-delay={0}
            >
              <span
                className="text-primary! bg-background text-5xl! p-5 rounded-full"
                data-aos="zoom-in"
                data-aos-duration={AOS_DURATION}
                data-aos-easing={AOS_EASING}
                data-aos-delay="100"
              >
                <MdOutlineHealthAndSafety />
              </span>

              <h4>Digital Sentiment Detection</h4>

              <p>ZerofAI continuously analyzes behavioral patterns, support interactions, and workplace experience signals to identify emerging employee frustration
                before dissatisfaction becomes visible.
              </p>
            </div>
            <div
              className="flex flex-col gap-6 text-center items-center p-5"
              data-aos="fade-up"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
              data-aos-delay={CARD_STAGGER_MS}
            >
              <span
                className="text-primary! bg-background text-5xl! p-5 rounded-full"
                data-aos="zoom-in"
                data-aos-duration={AOS_DURATION}
                data-aos-easing={AOS_EASING}
                data-aos-delay={CARD_STAGGER_MS + 100}
              >

                <FaRobot />
              </span>

              <h4>Experience Pattern Intelligence</h4>

              <p>Recurring friction often follows recognizable patterns. ZerofAI identifies recurring digital experience issues across employees, devices, applications, and
                workflows to surface hidden experience risks.
              </p>
            </div>
            <div
              className="flex flex-col gap-6 text-center items-center p-5"
              data-aos="fade-up"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
              data-aos-delay={CARD_STAGGER_MS * 2}
            >
              <span
                className="text-primary! bg-background text-5xl! p-5 rounded-full"
                data-aos="zoom-in"
                data-aos-duration={AOS_DURATION}
                data-aos-easing={AOS_EASING}
                data-aos-delay={CARD_STAGGER_MS * 2 + 100}
              >

                <IoSyncSharp />
              </span>

              <h4>Employee Experience Intelligence</h4>

              <p>Move beyond system health metrics and understand how employees actually interact with workplace technology where digital friction exists, where
                frustration builds, and where intervention is needed.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="mb-16 md:mb-20">

        <div
          className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0 items-center"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
          data-aos-easing={AOS_EASING}
        >
          <Image
            src="/assets/images/sample-img.webp"
            width={1200}
            height={680}
            alt="Continuous workplace signal analysis"
            className="rounded-xl justify-self-end md:border-r-4 border-primary"
            data-aos="zoom-in"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay="100"
          />
          <div
            className="flex flex-col gap-10 px-6 py-12 md:px-8"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={COMPARE_STAGGER_MS}
          >
            <h2>
              Continuous Workplace Signal Analysis
            </h2>
            <p>ZerofAI aggregates behavioral and operational signals across endpoints, collaboration platforms, service interactions, and workplace
              systems—creating a real-time understanding of employee digital experience.</p>



          </div>
        </div>
      </section>
      <section className="mb-16 md:mb-20">

        <div
          className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0 items-center"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
          data-aos-easing={AOS_EASING}
        >
          <div
            className="flex flex-col gap-10 px-6 py-12 md:px-8 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={COMPARE_STAGGER_MS}
          >
            <h2>
              AI-Driven Sentiment Intelligence
            </h2>
            <p>Using trend analysis, contextual correlation, and behavioral modeling, ZerofAI identifies hidden patterns of frustration, disengagement,
              and recurring workplace friction across teams and environments.</p>


          </div>
          <Image
            src="/assets/images/sample-img.webp"
            width={1200}
            height={680}
            alt="AI-driven sentiment intelligence"
            className="order-1 md:order-2 rounded-xl justify-self-end md:border-l-4 border-primary"
            data-aos="zoom-in"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay="100"
          />
        </div>
      </section>

      <section className="mb-16 md:mb-20">

        <div
          className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0! items-center"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
          data-aos-easing={AOS_EASING}
        >
          <Image
            src="/assets/images/sample-img.webp"
            width={1200}
            height={680}
            alt="Proactive experience optimization"
            className="rounded-xl justify-self-end md:border-r-4 border-primary"
            data-aos="zoom-in"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay="100"
          />
          <div
            className="flex flex-col gap-10 px-6 py-12 md:px-8"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={COMPARE_STAGGER_MS}
          >
            <h2>
              Proactive Experience Optimization
            </h2>
            <p>By identifying experience degradation early, ZerofAI enables organizations to proactively optimize workflows, resolve friction points, and
              improve digital workplace engagement before issues escalate.</p>

          </div>
        </div>
      </section>


      <section className="bg-primary py-16">

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {[
            {
              icon: "/assets/icons/watch.png",
              w: 100,
              title: "Improved Employee Productivity",
              body: "through proactive experience optimization",
            },
            {
              icon: "/assets/icons/ticket.png",
              w: 90,
              title: "Reduced Workplace Friction",
              body: "by identifying recurring experience barriers early",
            },
            {
              icon: "/assets/icons/humen.png",
              w: 80,
              title: "Higher Employee Satisfaction",
              body: "through faster experience improvements",
            },
            {
              icon: "/assets/icons/dollersing.png",
              w: 80,
              title: "Better IT Decision-Making",
              body: "with real-time workplace intelligence insights",
            },
          ].map(({ icon, w, title, body }, index) => (
            <div
              key={title}
              className="flex flex-col gap-4 items-center text-center"
              data-aos="fade-up"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
              data-aos-delay={index * CARD_STAGGER_MS}
            >
              <Image
                src={icon}
                className="invert"
                width={w}
                height={w}
                alt=""
                data-aos="zoom-in"
                data-aos-duration={AOS_DURATION}
                data-aos-easing={AOS_EASING}
                data-aos-delay={index * CARD_STAGGER_MS + 80}
              />
              <h5 className="text-xl font-bold text-white">{title}</h5>
              <p className="text-white!">{body}</p>
            </div>
          ))}
        </div>


      </section>

      <section
        className="py-16"
      >
        <div className="container max-w-6xl px-4 sm:px-6">
          <h2
            id="predictive-ops-heading"
            className="text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
          >
            System Metrics Don’t Reveal Employee Experience
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16">
            <div
              className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
              data-aos="fade-up"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
              data-aos-delay="80"
            >
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-primary-foreground sm:px-6 sm:text-sm">
                Traditional IT Operations:
              </div>              <ul className="mt-2 flex flex-col gap-4 sm:gap-5">
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

            <div
              className="relative flex flex-col rounded-2xl border border-border bg-card px-6 pb-8 pt-11 shadow-sm sm:px-8 sm:pb-10 sm:pt-12 dark:border-white/6 dark:bg-[#1a1a1a] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
              data-aos="zoom-in"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
              data-aos-delay={COMPARE_STAGGER_MS + 80}
            >
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-primary-foreground sm:px-6 sm:text-sm">
                ZerofAI
              </div>              <ul className="mt-2 flex flex-col gap-4 sm:gap-5">
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
        <div
          className="container max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
          data-aos-easing={AOS_EASING}
        >
          <h2>
            Fix Problems Before Productivity Slows Down
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
            data-aos="zoom-in"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay="120"
          >
            Get a Demo
          </Link>
        </div>
      </section>

    </main>
    </AosInit>
  );
}