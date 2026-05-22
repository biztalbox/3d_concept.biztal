import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { AOS_DURATION, AOS_EASING, CARD_STAGGER_MS } from "@/lib/aos-config";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdPerson } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { PiHourglassLow } from "react-icons/pi";
import { TbDeviceIpadHorizontalOff } from "react-icons/tb";

const frictionCardsLeft: { Icon: IconType; label: string }[] = [
  { Icon: CiTimer, label: "A slow application." },
  { Icon: TbDeviceIpadHorizontalOff, label: "A recurring device issue." },
  { Icon: IoPeopleSharp, label: "A meeting disruption." },
];

const frictionCardsRight: { Icon: IconType; label: string }[] = [
  { Icon: CiTimer, label: "A workflow that takes longer than it should." },
  { Icon: PiHourglassLow, label: "A delayed login." },
];

const reactiveSupportBullets = [
  "React after impact",
  "Manual investigations",
  "Fragmented visibility",
  "Employee frustration",
] as const;

const proactiveOperationsBullets = [
  "Detect Early",
  "Continuous optimization",
  "Unified experience signals",
  "Seamless productivity",
] as const;

const workSignalsLeft = ["Workplace Sentiment", "Productivity Patterns", "Support Interactions"] as const;
const workSignalsRight = ["Experience Heatmaps", "Behavioral Trends", "Operational Insights"] as const;

const OPERATIONAL_FRICTION_IMAGE =
  "https://media.istockphoto.com/id/2199640039/photo/business-people-working-on-a-laptop-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=6wdOnW1otNydPbuyKTj__bPtT91d0ygP128DdFFt5aE=";

const proactiveOutcomeHighlights: { Icon: IconType; label: string }[] = [
  { Icon: FaFire, label: "Less work-place friction." },
  { Icon: AiFillThunderbolt, label: "More uninterrupt-ed productivity." },
  { Icon: IoMdPerson, label: "Faster employee experiences." },
  { Icon: IoMdHeartEmpty, label: "Reduced operational fatigue." },
];

function FrictionCard({
  Icon,
  label,
  aosDelay,
}: {
  Icon: IconType;
  label: string;
  aosDelay: number;
}) {
  return (
    <div
      className="flex min-h-[52px] w-full min-w-0 overflow-hidden rounded-md sm:min-h-[56px]"
      data-aos="fade-up"
      data-aos-duration={AOS_DURATION}
      data-aos-easing={AOS_EASING}
      data-aos-delay={aosDelay}
    >
      <div
        className="flex size-12 shrink-0 items-center justify-center bg-primary text-white sm:size-14"
        aria-hidden
      >
        <Icon className="size-6.5 sm:size-7" />
      </div>
      <div className="flex min-w-0 flex-1 items-center bg-white px-3 py-2.5 shadow-sm ring-1 ring-zinc-200/80 sm:px-5 sm:py-3 dark:bg-[#1a1a1a] dark:shadow-none dark:ring-0">
        <p className="text-sm font-normal leading-snug text-foreground dark:text-white sm:text-[15px]">
          {label}
        </p>
      </div>
    </div>
  );
}

/** Hub ↔ card: middle = straight dashed; top/bottom = elbow; teal dot at hub end. lg+ only. */
function HubLink({ side, row }: { side: "left" | "right"; row: number }) {
  const mirror = side === "right";
  const mid = row === 1;

  if (mid) {
    return (
      <div className="hidden min-h-px min-w-0 flex-1 self-center overflow-visible lg:block" aria-hidden>
        <svg
          className="h-[2px] w-full text-primary/80 dark:text-primary"
          preserveAspectRatio="none"
          viewBox="0 0 100 2"
        >
          <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
            <line
              x1="4"
              y1="1"
              x2="96"
              y2="1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="4 6"
              vectorEffect="nonScalingStroke"
              className="orchestration-flow-line"
            />
            <circle cx="96" cy="1" r="2.25" className="fill-primary" vectorEffect="nonScalingStroke" />
          </g>
        </svg>
      </div>
    );
  }

  const top = row === 0;
  const d = top
    ? "M 8 10 L 52 10 L 52 46 L 92 46"
    : "M 8 46 L 52 46 L 52 10 L 92 10";
  const dotCx = 92;
  const dotCy = top ? 46 : 10;

  return (
    <div className="hidden min-h-11 min-w-0 flex-1 self-center overflow-visible lg:block" aria-hidden>
      <svg
        className="h-11 w-full text-primary/80 dark:text-primary"
        viewBox="0 0 100 56"
        preserveAspectRatio="none"
      >
        <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
          <path
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="4 6"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="nonScalingStroke"
            className="orchestration-flow-line"
          />
          <circle cx={dotCx} cy={dotCy} r="2.25" className="fill-primary" vectorEffect="nonScalingStroke" />
        </g>
      </svg>
    </div>
  );
}

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
            className="order-2 px-5 py-14 sm:px-6 sm:py-16 md:order-1"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2>
              Workplace Experience Shouldn’t Break{" "}
              <span className="text-primary!">Before IT Notices.</span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
              ZerofAI helps enterprises move from reactive employee support to proactive workplace experience
              operations by continuously identifying digital friction, reducing interruptions, and improving employee
              experience across the digital workplace.{" "}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
              <Link
                href="#"
                className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
              >
                Explore Proactive Operations
              </Link>
            </div>
          </div>
          <HeroCanvas />
        </div>
      </section>

      {/* Most productivity loss — theme-aware + AOS */}
      <section
        className="w-full bg-zinc-200 text-foreground dark:bg-[#222222] dark:text-white"
        aria-labelledby="productivity-loss-heading"
      >
        <div className="container w-full py-12 sm:px-6 sm:py-16 lg:py-20">
          <h2
            id="productivity-loss-heading"
            className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2rem] md:leading-[1.15] lg:text-4xl"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
          >
            Most Productivity Loss <span className="text-primary">Happens Quietly</span>
          </h2>

          <div
            className="mt-5 max-w-2xl rounded-md border-l-2 border-primary bg-white py-3 pl-4 pr-4 shadow-sm ring-1 ring-zinc-200/80 sm:mt-7 sm:py-3.5 sm:pl-5 dark:bg-[#1a1a1a] dark:shadow-none dark:ring-0"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={CARD_STAGGER_MS}
          >
            <p className="text-sm leading-relaxed sm:text-[15px]">
              Not through major outages. Not through visible system failures.
            </p>
          </div>

          <p
            className="mt-4 inline-block max-w-[min(100%,42rem)] border-b-2 border-primary pb-1 text-sm font-normal leading-relaxed sm:mt-6 sm:text-[15px]"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={CARD_STAGGER_MS * 2}
          >
            But through small daily interruptions that slowly reduce employee focus and efficiency.
          </p>

          <div className="mt-9 grid min-w-0 grid-cols-1 gap-4 sm:mt-11 sm:gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-4 lg:gap-x-10">
            <div className="flex min-w-0 flex-col gap-3.5 sm:gap-4 md:gap-5">
              {frictionCardsLeft.map((item, index) => (
                <FrictionCard
                  key={item.label}
                  Icon={item.Icon}
                  label={item.label}
                  aosDelay={CARD_STAGGER_MS * 3 + index * CARD_STAGGER_MS}
                />
              ))}
            </div>
            <div className="flex min-w-0 flex-col gap-3.5 sm:gap-4 md:gap-5">
              {frictionCardsRight.map((item, index) => (
                <FrictionCard
                  key={item.label}
                  Icon={item.Icon}
                  label={item.label}
                  aosDelay={CARD_STAGGER_MS * 3 + (frictionCardsLeft.length + index) * CARD_STAGGER_MS}
                />
              ))}
            </div>
          </div>

          <div
            className="mt-9 rounded-r-xl border-l-4 border-primary bg-white px-4 py-6 shadow-sm ring-1 ring-zinc-200/80 sm:mt-11 sm:px-6 sm:py-8 md:px-8 md:py-9 dark:bg-[#1a1a1a] dark:shadow-none dark:ring-0"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={CARD_STAGGER_MS * 8}
          >
            <div className="mb-3 h-1 w-12 bg-primary sm:mb-5" aria-hidden />
            <p className="text-base font-bold leading-snug sm:text-lg">Individually, these moments seem small.</p>
            <p className="mt-3 max-w-4xl text-sm font-normal leading-relaxed text-muted-foreground dark:text-white/95 sm:mt-3.5 sm:text-[15px]">
              Across the enterprise, they quietly impact productivity, employee experience, and operational momentum.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-zinc-100 text-foreground dark:bg-[#0d0d0d] dark:text-white"
        aria-labelledby="experience-optimization-heading"
      >
        <div
          className="container py-12 sm:px-6 sm:py-16 lg:py-20"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
          data-aos-easing={AOS_EASING}
        >
          <h2
            id="experience-optimization-heading"
            className="max-w-4xl text-balance text-2xl font-bold leading-tight tracking-tight text-foreground dark:text-white sm:text-3xl md:text-4xl lg:text-[2.35rem] lg:leading-[1.2]"
          >
            From Reactive Support to Continuous Experience Optimization
          </h2>

          <p className="mt-6 inline-block max-w-3xl border-b-2 border-primary pb-1.5 text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mt-8 sm:text-base">
            Traditional support operations react after employees are already impacted.
          </p>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mt-7 sm:text-[15px] sm:leading-7">
            ZerofAI helps organizations operate more proactively by continuously identifying workplace friction, detecting
            experience degradation early, and improving operational responsiveness before disruptions begin affecting
            productivity at scale.
          </p>

          <div className="mt-10 min-w-0 sm:mt-12">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-zinc-200/90 dark:bg-[#1a1a1a] dark:shadow-none dark:ring-white/10">
              <div className="grid min-w-0 grid-cols-1 divide-y divide-zinc-200 dark:divide-white/10 md:grid-cols-2 md:items-stretch md:divide-x md:divide-y-0">
                <div className="flex min-h-full min-w-0 flex-col border-l-4 border-primary hover:border-white! bg-zinc-50/90 p-6 sm:p-8 hover:bg-primary dark:bg-[#161616]">
                  <h3 className="text-lg font-bold text-foreground dark:text-white">Reactive Support</h3>
                  <ul
                    className="mt-6 list-outside list-disc space-y-3 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-primary hover:marker:text-white! dark:text-white  hover:text-white! sm:mt-8 sm:space-y-3.5 sm:text-[15px]"
                  >
                    {reactiveSupportBullets.map((line) => (
                      <li key={line} className="pl-1">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex min-h-full min-w-0 flex-col border-l-4 border-primary hover:border-white!  dark:bg-secondary/40 hover:bg-primary p-6 sm:p-8">
                  <h3 className="font-bold text-foreground">Proactive Operations</h3>
                  <ul className="mt-6 list-outside list-disc hover:text-white! space-y-3 pl-5 text-sm font-medium leading-relaxed text-foreground marker:text-primary hover:marker:text-white! sm:mt-8 sm:space-y-3.5 sm:text-[15px]">
                    {proactiveOperationsBullets.map((line) => (
                      <li key={line} className="pl-1">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding how work feels — hub diagram */}
      <section
        className=" bg-zinc-50 text-foreground dark:bg-[#121212] dark:text-white"
        aria-labelledby="work-actually-feels-heading"
      >
        <div
          className="container py-12 text-center sm:px-6 sm:py-16 lg:py-20"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
          data-aos-easing={AOS_EASING}
        >
          <h2
            id="work-actually-feels-heading"
            className="text-balance text-2xl font-bold leading-tight tracking-tight"
          >
            Understanding How Work Actually Feels
          </h2>

          <div className=" mt-8  text-sm leading-relaxed text-zinc-600 sm:text-[15px] sm:leading-7 dark:text-zinc-400">
            <p className="inline-block border-b-2 border-primary pb-1 font-medium text-foreground dark:text-white">
              Traditional IT operations measure systems.
            </p>
            <p className="mt-4">
              Proactive experience operations measure how technology impacts employees.
            </p>
            <p className="mt-4">
              ZerofAI continuously analyzes workplace signals, behavioral patterns, support interactions, and operational
              trends to help organizations better understand where digital friction impacts productivity, collaboration, and
              employee experience.
            </p>
          </div>

          <div className="mx-auto mt-12 w-full max-w-5xl rounded-2xl bg-secondary border-white px-4 py-10 shadow-xl ring-1 ring-zinc-800 sm:px-6 sm:py-12 md:px-10 md:py-14 dark:ring-white/10">
            <div className="relative mx-auto flex w-full max-w-4xl min-h-[300px] flex-col items-stretch gap-8 lg:grid lg:min-h-[300px] lg:grid-cols-[minmax(0,1fr)_minmax(200px,280px)_minmax(0,1fr)] lg:items-center lg:gap-4 lg:px-2">
              <div className="relative z-1 flex w-full flex-col items-center gap-3 lg:items-end lg:pr-1">
                {workSignalsLeft.map((label, index) => (
                  <div
                    key={label}
                    className="flex w-full min-w-0 max-w-66 justify-center sm:max-w-none lg:max-w-none lg:justify-end"
                  >
                    <div className="flex min-w-0 max-w-full items-center justify-end gap-2 sm:gap-3">
                      <span className="relative z-10 inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-center text-xs font-semibold text-white shadow-md sm:px-5 sm:text-sm lg:min-w-46">
                        {label}
                      </span>
                      <HubLink side="left" row={index} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-1 mx-auto flex w-full max-w-[min(72vw,280px)] shrink-0 items-center justify-center sm:max-w-[300px] md:max-w-[320px]">
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 rounded-full border border-primary/35" aria-hidden />
                  <div className="absolute inset-[9%] rounded-full border border-primary/45" aria-hidden />
                  <div className="absolute inset-[18%] rounded-full border border-primary/55" aria-hidden />
                  <div className="hub-core-soft-pulse absolute inset-[28%] flex items-center justify-center rounded-full bg-primary shadow-[0_0_40px_rgba(25,182,201,0.35)]">
                    <Image
                      src="/assets/images/zerofai-hub-logo.png"
                      alt=""
                      width={160}
                      height={160}
                      sizes="(max-width: 768px) 42vw, 160px"
                      className="h-[58%] w-[58%] object-contain brightness-0 invert"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-1 flex w-full flex-col items-center gap-3 lg:items-start lg:pl-1">
                {workSignalsRight.map((label, index) => (
                  <div
                    key={label}
                    className="flex w-full min-w-0 max-w-66 justify-center sm:max-w-none lg:max-w-none lg:justify-start"
                  >
                    <div className="flex min-w-0 max-w-full items-center gap-2 sm:gap-3">
                      <HubLink side="right" row={index} />
                      <span className="relative z-10 inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-center text-xs font-semibold text-white shadow-md sm:px-5 sm:text-sm lg:min-w-46">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI reduces operational friction — two-column card + image */}
      <section aria-labelledby="operational-friction-heading">
        <div className="bg-white px-4 pb-10 pt-12 text-foreground sm:px-6 sm:pb-12 sm:pt-14 lg:pb-16 lg:pt-16 dark:bg-zinc-900">
          <div className="container max-w-6xl">
            <h2
              id="operational-friction-heading"
              className="max-w-4xl text-left text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2rem] md:leading-snug lg:text-4xl"
              data-aos="fade-up"
              data-aos-duration={AOS_DURATION}
              data-aos-easing={AOS_EASING}
            >
              AI Reduces Operational Friction. People Focus on Meaningful Work.
            </h2>

            <div className="mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2 lg:items-stretch lg:gap-10">
              <article
                className="flex min-h-0 flex-col overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-md ring-1 ring-zinc-200/90 dark:bg-zinc-800/95 dark:ring-white/10 sm:p-10 lg:p-12"
                data-aos="fade-up"
                data-aos-duration={AOS_DURATION}
                data-aos-easing={AOS_EASING}
              >
                <p className="text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
                  ZerofAI helps operational teams spend less time reacting to repetitive workplace issues and more time
                  improving employee experience, operational strategy, and workforce productivity.
                </p>
                <div className="my-8 flex w-full justify-center px-6 sm:my-10 sm:px-10" aria-hidden>
                  <div className="friction-card-divider-line h-px w-full max-w-52 shrink-0 bg-primary/75 dark:bg-primary/85" />
                </div>
                <p className="text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
                  By continuously reducing operational friction in the background, support environments become more scalable,
                  responsive, and experience-focused without increasing operational complexity.
                </p>
              </article>

              <div
                className="relative min-h-[280px] w-full min-w-0 overflow-hidden rounded-[1.75rem] ring-1 ring-zinc-200/90 sm:min-h-[320px] lg:min-h-0 lg:h-full dark:ring-white/10"
                data-aos="fade-up"
                data-aos-duration={AOS_DURATION}
                data-aos-easing={AOS_EASING}
                data-aos-delay={CARD_STAGGER_MS}
              >
                <Image
                  src={OPERATIONAL_FRICTION_IMAGE}
                  alt="Business people collaborating over a laptop in a modern office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive outcomes + CTA */}
      <section
        className="w-full bg-zinc-200 py-12 sm:py-14 lg:py-16 dark:bg-[#222222]"
        aria-labelledby="proactive-workplace-future-heading"
      >
        <div className="container px-4 sm:px-6">
          <div
            className="rounded-2xl bg-white px-4 py-8 shadow-md ring-1 ring-zinc-200/90 sm:px-8 sm:py-10 dark:bg-[#1a1a1a] dark:shadow-none dark:ring-white/10"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
          >
            <ul className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6">
              {proactiveOutcomeHighlights.map(({ Icon, label }, index) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-3 text-center sm:gap-4"
                  data-aos="fade-up"
                  data-aos-duration={AOS_DURATION}
                  data-aos-easing={AOS_EASING}
                  data-aos-delay={index * CARD_STAGGER_MS}
                >
                  <Icon
                    className="size-10 shrink-0 text-primary sm:size-11 md:size-12 lg:size-12"
                    aria-hidden
                  />
                  <p className="max-w-44 text-xs font-bold leading-snug text-foreground sm:max-w-none sm:text-sm dark:text-white">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-6 rounded-t-[1.75rem] bg-white px-5 pb-12 pt-10 shadow-md ring-1 ring-zinc-200/90 sm:mt-8 sm:px-8 sm:pb-14 sm:pt-12 dark:bg-[#1a1a1a] dark:shadow-none dark:ring-white/10"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
            data-aos-easing={AOS_EASING}
            data-aos-delay={CARD_STAGGER_MS}
          >
            <div className="mx-auto mb-8 h-1 w-24 max-w-[30%] rounded-full bg-primary sm:mb-10 sm:w-28" aria-hidden />
            <h2
              id="proactive-workplace-future-heading"
              className="mx-auto max-w-4xl text-center text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-tight dark:text-white"
            >
              <span className="block">The Future of Workplace Oper-</span>
              <span className="block">ations Is Proactive.</span>
            </h2>
            <div className="mt-8 flex justify-center sm:mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-10 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-hover sm:px-12 sm:text-base"
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AosInit>
  );
}
