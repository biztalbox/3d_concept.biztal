import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Link from "next/link";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa";
import { TbChartDots2 } from "react-icons/tb";
import { LuMonitorCheck } from "react-icons/lu";

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
    icon: "/assets/icons/dollersing.png",
    iconW: 80,
    title: "Better Workplace Visibility",
    body: "through continuous experience intelligence insights",
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

            
              <h2>Continuous Workplace Experience Analysis</h2>
              <p>
                ZerofAI continuously analyzes how employees interact with enterprise tools, workflows, collaboration systems, and support
                environments providing real-time visibility into workplace experience patterns across teams and business functions.
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

           
              <h2>AI-Driven Workflow Intelligence</h2>
              <p>
                Using behavioral analytics and contextual understanding, ZerofAI identifies workflow inefficiencies, excessive context switching,
                collaboration delays, and operational friction that impact workplace productivity.
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
           
              <h2>Continuous Experience Optimization</h2>
              <p>
                By surfacing workplace friction and operational inefficiencies early, ZerofAI enables organizations to continuously improve digital
                workflows, streamline employee interactions, and create more connected work experiences across the enterprise.
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
