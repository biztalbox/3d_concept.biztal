import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Link from "next/link";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa";
import { TbChartDots2 } from "react-icons/tb";
import { LuMonitorCheck } from "react-icons/lu";




const traditionalOpsItems = [
  "Depend on keyword-based search",

  "Operate in disconnected silos",
  "Surface documents, not answers",
  "Require manual navigation and interpretation",
];

const predictiveOpsItems = [
  "Understands context and intent",

  "Connects knowledge across systems",
  "Embeds intelligence directly into workflows",
];

const featureCards = [
  {
    Icon: FaDatabase,
    title: "Unijfied Enterprise Search",
    body: "ZerofAI connects knowledge across documents, tickets, collaboration tools, and enterprise platforms creating a centralized intelligence layer accessible through natural language queries.",
  },
  {
    Icon: TbChartDots2,
    title: "Context-Aware Discovery",
    body: "AI models understand intent, relationships, and contextual meaning to surface the most relevant answers, not just keyword matches.",
  },
  {
    Icon: LuMonitorCheck,
    title: "Conversational Access",
    body: "Users can interact with enterprise knowledge through conversational interfaces, receiving summarized, explainable answers without navigating multiple systems",
  },
] as const;

const outcomeStats = [
  {
    icon: "/assets/icons/watch.png",
    iconW: 100,
    title: "Reduced Resolution Time",
    body: "With instant access to relevant enterprise knowledge",
  },
  {
    icon: "/assets/icons/ticket.png",
    iconW: 90,
    title: "Lower Ticket Volume",
    body: "Through self-service knowledge discovery",
  },
  {
    icon: "/assets/icons/humen.png",
    iconW: 80,
    title: "Faster Employee Onboarding",
    body: "With contextual access to institutional knowledge",
  },
  {
    icon: "/assets/icons/dollersing.png",
    iconW: 80,
    title: "Improved Productivity",
    body: "By eliminating repetitive searches and duplicated effort",
  },
] as const;

export default function CognitiveKnowledgeDiscoveryPage() {
  return (
    <AosInit>
      <main className="flex flex-col gap-12 md:gap-20 lg:min-h-screen 3xl:min-h-fit">
        <section id="" className="relative w-full px-0 sm:p-5">
          <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
            <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
            <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          </div>

          <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
            <div
              className="order-2 flex flex-col gap-8 px-4 py-16 sm:px-0 md:order-1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <h2>
                Turn Enterprise Knowledge Into
                <div className="text-primary!"> Instant Answers.</div>
              </h2>

              <p>
                ZeroFAI unifies enterprise knowledge across systems, documents, tickets, and workflows enabling
                users and IT teams to discover accurate, context-aware answers instantly through AI-driven search
                and reasoning.
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

        <section>
          <div className="container flex flex-col gap-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              Enterprise Knowledge Shouldn&apos;t Be Buried Across Systems
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              <div
                className="flex flex-col gap-8 rounded-xl bg-secondary p-8 dark:bg-secondary/40"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
              >
                <h4>The Old Way</h4>
                <ul>
                  <li>Search manually.</li>
                  <li>Navigate silos.</li>
                  <li>Depend on tribal knowledge.</li>
                </ul>
              </div>

              <div
                className="flex flex-col gap-8 rounded-xl border-b-6 border-primary bg-secondary p-8 dark:bg-secondary/40"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={COMPARE_STAGGER_MS}
              >
                <h4 className="text-primary">The ZeroFAI Way</h4>
                <ul>
                  <li>Unify knowledge .</li>
                  <li>Understand context.</li>
                  <li>Deliver instant answers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container flex flex-col gap-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              From Knowledge Repositories to Intelligence
            </h2>

            <div className="grid divide-y-2 divide-primary rounded-2xl bg-secondary p-6 dark:bg-secondary/40 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
              {featureCards.map(({ Icon, title, body }, index) => (
                <div
                  key={title}
                  className="flex flex-col items-center gap-6 p-5 text-center"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={index * CARD_STAGGER_MS}
                >
                  <span className="rounded-full bg-background p-5 text-5xl! text-primary!">
                    <Icon />
                  </span>
                  <h4>{title}</h4>
                  <p>{body}</p>
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
              <h2>Continuous Knowledge Aggregation</h2>
              <p>
                ZeroFAI continuously ingests and indexes enterprise knowledge from documents, ITSM platforms,
                collaboration tools, and operational systems ensuring information stays current and discoverable.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div
            className="container grid items-center gap-6 bg-secondary p-0 md:grid-cols-2 md:gap-10 md:rounded-xl dark:bg-secondary/40 lg:max-w-7xl"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={COMPARE_STAGGER_MS}
          >
            <div className="order-2 flex flex-col gap-10 px-6 py-12 md:order-1 md:px-8">
              <h2>AI-Powered Semantic Understanding</h2>
              <p>
              Natural language processing and contextual reasoning help ZerofAI understand relationships between incidents, workflows, documents,
              and user queries—delivering precise and explainable responses.
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
            className="container grid items-center gap-6 bg-secondary p-0! md:grid-cols-2 md:gap-10 md:rounded-xl dark:bg-secondary/40 lg:max-w-7xl"
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
              <h2>Intelligent Knowledge Delivery</h2>
              <p>
              ZerofAI surfaces relevant knowledge directly within workflows, service interactions, and support experiences reducing friction and
              accelerating resolution.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16">
          <div className="container grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
            {outcomeStats.map(({ icon, iconW, title, body }, index) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 text-center"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={index * CARD_STAGGER_MS}
              >
                <Image src={icon} className="invert" width={iconW} height={iconW} alt="" />
                <h5 className="text-xl font-bold text-white">{title}</h5>
                <p className="text-white!">{body}</p>
              </div>
            ))}
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
            <span className="text-primary">Beyond Enterprise</span>
            <span className="text-neutral-900 dark:text-white">
              {" "}
              Search Toward Knowledge Intelligence
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

          
        </div>
      </section>

        <section className="py-16">
          <div
            className="container max-w-3xl text-center"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2>Stop Searching for Knowledge. Start Discovering It Instantly.</h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
            >
              Get a Demo
            </Link>
          </div>
        </section>

        
      </main>
    </AosInit>
  );
}
