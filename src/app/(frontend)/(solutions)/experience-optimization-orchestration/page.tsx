import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import IntelligenceAlternatingRows from "@/component/IntelligenceAlternatingRows";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Link from "next/link";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { TbChartDots2 } from "react-icons/tb";
import { LuLaptopMinimalCheck, LuMonitorCheck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { BsPersonWorkspace } from "react-icons/bs";

const featureCards = [
  {
    Icon: FaDatabase,
    title: "Unified Workplace Experience Intelligence",
    body: "ZerofAI connects signals across collaboration platforms, enterprise applications, service environments, and employee workflows creating a unified understanding of how work actually happens across the organization.",
  },
  {
    Icon: TbChartDots2,
    title: "Digital Friction & Workflow Optimization",
    body: "AI models identify repetitive interruptions, inefficient interactions, disconnected workflows, and collaboration bottlenecks that impact employee efficiency and workplace experience.",
  },
  {
    Icon: LuMonitorCheck,

    
    title: "Experience-Led Orchestration",
    body: "ZerofAI helps organizations orchestrate more seamless work experiences by aligning systems, workflows, knowledge access, and employee interactions into a more connected digital workplace environment.",

   
  },
] as const;

const outcomeStats = [
  {
    icon: "/assets/icons/watch.png",
    iconW: 100,
    
    title: "Improved Employee Experience",
    body: "Improved Employee Experience through more seamless digital workflows",
  },
  {
    icon: "/assets/icons/ticket.png",
    iconW: 90,
    title: "Reduced Digital Friction",
    body: "through self-service knowledge discovery",
  },
  {
    icon: "/assets/icons/humen.png",
    iconW: 80,
    title: "Higher Workforce Productivity ",
    body: "with connected workplace experiences",
  },
  {
    Icon: LuLaptopMinimalCheck,
    iconW: 90,
    title: "Better Workplace Visibility",
    body: "through continuous experience intelligence insights",
  },
] as const;

const workplaceTraditionalItems = [
  "Focus on isolated tools and systems",
  "Operate through disconnected workflows",
  "Measure usage instead of experience",
  "React after productivity is impacted",
] as const;

const workplaceZerofaiItems = [
  "Understands how employees experience work",
  "Connects workflows, systems, and interactions",
  "Identifies and reduces digital friction proactively",
  "Continuously optimizes workplace experiences",
] as const;


const experienceIntelligenceRows = [
  {
    label: "01 / EXPERIENCE ANALYSIS",
    title: "Continuous Workplace Experience Analysis",
    description:
      "ZerofAI continuously analyzes how employees interact with enterprise tools, workflows, collaboration systems, and support environments providing real-time visibility into workplace experience patterns across teams and business functions.",
    image: "/assets/images/sample-img.webp",
    imageAlt: "Continuous workplace experience analysis",
    imageFirst: false,
    imageAccent: "top-left" as const,
  },
  {
    label: "02 / WORKFLOW INTELLIGENCE",
    title: "AI-Driven Workflow Intelligence",
    description:
      "Using behavioral analytics and contextual understanding, ZerofAI identifies workflow inefficiencies, excessive context switching, collaboration delays, and operational friction that impact workplace productivity.",
    image: "/assets/images/sample-img.webp",
    imageAlt: "AI-driven workflow intelligence",
    imageFirst: true,
    imageAccent: "top-right" as const,
  },
  {
    label: "03 / EXPERIENCE OPTIMIZATION",
    title: "Continuous Experience Optimization",
    description:
      "By surfacing workplace friction and operational inefficiencies early, ZerofAI enables organizations to continuously improve digital workflows, streamline employee interactions, and create more connected work experiences across the enterprise.",
    image: "/assets/images/sample-img.webp",
    imageAlt: "Continuous experience optimization",
    imageFirst: false,
    imageAccent: "top-left" as const,
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
                Turn Digital Workplaces Into{""}
                <span className="text-primary!"> Seamless Work Experiences.</span>
              </h2>

              <p>
                ZerofAI continuously analyzes workplace interactions, digital friction, employee workflows, and operational patterns to
                optimize how employees experience technology creating more connected, productive, and interruption-free work environments.
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
              Employees Don’t Experience IT in Silos
            </h2>
            <p>Modern employees interact with dozens of applications, collaboration tools, workflows, and support systems every day. While organizations invest heavily
in workplace technologies, the employee experience often remains fragmented forcing users to switch between disconnected tools, repeat actions, search
for information manually, and navigate inconsistent workflows.<br />

Over time, this digital friction slows work, reduces engagement, increases cognitive overload, and impacts overall workplace efficiency.

</p>


            <div className="grid gap-12 md:grid-cols-2">
              <div
                className="flex flex-col gap-8 rounded-xl bg-secondary p-8 dark:bg-secondary/40"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
              >
                <h4>The Old Way</h4>
                <ul>
                  <li>Deploy tools.</li>
                  <li>Manage systems.</li>
                  <li>Expect employees to adapt.</li>
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
                  <li>Understand workflows.</li>
                  <li>Reduce friction.</li>
                  <li>Optimize experiences continuously.</li>
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
              Unified Workplace Experience Intelligence
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

        <IntelligenceAlternatingRows rows={[...experienceIntelligenceRows]} />

        <section className="bg-primary py-16">
          <div className="container grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
            {outcomeStats.map((stat, index) => {
              const { iconW, title, body } = stat;
              const Icon = "Icon" in stat ? stat.Icon : null;
              return (
              <div
                key={title}
                className="flex flex-col items-center gap-4 text-center"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={index * CARD_STAGGER_MS}
              >
                {Icon ? (
                  <Icon strokeWidth={0.6} className="text-white" size={iconW} aria-hidden />
                ) : (
                  <Image src={stat.icon} className="invert" width={iconW} height={iconW} alt="" />
                )}
                <h5 className="text-xl font-bold text-white">{title}</h5>
                <p className="text-white!">{body}</p>
              </div>
            );
            })}
          </div>
        </section>

        <section
          className="w-full bg-white py-16 sm:py-20 md:py-24 dark:bg-[#121212]"
          aria-labelledby="workplace-experience-heading"
        >
          <div className="container max-w-6xl px-5 sm:px-6">
            <h2
              id="workplace-experience-heading"
              className="max-w-5xl text-left text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.12] dark:text-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              Employees Don&apos;t Experience Tools. They Experience Work
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
                  Traditional Workplace Platforms
                </span>
                <ul className="mt-8 flex flex-1 flex-col gap-4 sm:mt-10 sm:gap-5">
                  {workplaceTraditionalItems.map((item) => (
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
                className="group flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:bg-primary sm:rounded-3xl sm:p-8"
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
                  {workplaceZerofaiItems.map((item) => (
                    <li key={item} className="flex gap-3 text-left">
                      <FaCheck
                        className="mt-0.5 size-4 shrink-0 text-foreground transition-colors duration-300 sm:size-[18px]"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-foreground transition-colors duration-300  sm:text-base">
                        {item}
                      </span>
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
            <h2>Create Digital Workplaces That Employees Actually Enjoy Using.</h2>
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
