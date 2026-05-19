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

const ACCESS_GAP_IMAGE = "/assets/images/vs-image.png"

export default function ComplaincePage() {
  return (
    <main className="flex flex-col gap-12 md:gap-20 lg:min-h-screen 3xl:min-h-fit">
      <section id="" className="relative w-full px-0 sm:p-5">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 px-4 py-16 sm:px-0 flex flex-col gap-8">
            <h2>Turn Enterprise Knowledge
              Into
              <div className="text-primary!"> Instant Answers.</div>
            </h2>

            <p>
              ZeroFAI unifies enterprise knowledge across systems, documents, tickets, and workflows enabling users and IT teams to discover accurate, context-aware answers instantly through AI-driven search and reasoning.

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

      {/* Section under hero (match screenshot) */}
      <section className="">
        <div className="container flex flex-col gap-10">
          <h2>
            Enterprise Knowledge Shouldn’t Be Buried
            Across Systems
          </h2>
          

          <div className="grid md:grid-cols-2 gap-12">

            {/* old way */}
            <div className="flex flex-col gap-8 rounded-xl bg-secondary dark:bg-secondary/40 p-8">
              <h4>The Old Way</h4>
              <ul>
                <li>Search manually across fragmented folders and legacy portals.</li>
                <li>Navigate complex silos where data is disconnected and hidden.</li>
                <li>Depend on tribal knowledge and availability of senior staff</li>
              </ul>
            </div>

            {/* new way */}
            <div className="flex flex-col gap-8 rounded-xl bg-secondary dark:bg-secondary/40 border-b-6 border-primary p-8">
              <h4 className="text-primary">The ZeroFAI Way</h4>
              <ul>
                <li>Unify knowledge from every corner of the organization instantly.</li>
                <li>Understand semantic context and intent, not just keywords.</li>
                <li>Deliver summarized, actionable instant answers directly.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container flex flex-col gap-10">           <h2>
          From Knowledge Repositories to
          Intelligence
        </h2>

          <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-primary p-6 bg-secondary rounded-2xl dark:bg-secondary/40">

            <div className="flex flex-col gap-6 text-center items-center p-5">
              <span className="text-primary! bg-background text-5xl! p-5 rounded-full">

                <FaDatabase />
              </span>

              <h4>Unijfied Enterprise Search</h4>

              <p>ZerofAI connects knowledge across
                documents, tickets, collaboration
                tools, and enterprise platforms
                creating a centralized intelligence
                layer accessible
                through natural language queries.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-center items-center p-5">
              <span className="text-primary! bg-background text-5xl! p-5 rounded-full">

                <TbChartDots2 />
              </span>

              <h4>Context-Aware Discovery</h4>

              <p>AI models understand intent,
                relationships, and contextual
                meaning to surface the most
                relevant answers, not just keyword
                matches.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-center items-center p-5">
              <span className="text-primary! bg-background text-5xl! p-5 rounded-full">

                <LuMonitorCheck />
              </span>

              <h4>Conversational Access</h4>

              <p>Users can interact with enterprise
                knowledge through conversational
                interfaces, receiving summarized,
                explainable answers without
                navigating multiple systems
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="">

        <div className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0 items-center">
          <Image src="/assets/images/sample-img.webp" width={1200} height={680} alt="zerofai" className="rounded-xl justify-self-end md:border-r-4 border-primary" />
          <div className="flex flex-col gap-10 px-6 py-12 md:px-8">
            <h2>
              Continuous Knowledge Aggregation
            </h2>

            <p>ZeroFAI continuously ingests and indexes enterprise
              knowledge from documents, ITSM platforms, collaboration
              tools, and operational systems ensuring information stays
              current and discoverable.</p>



          </div>
        </div>
      </section>
      <section className="">

        <div className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0 items-center">
          <div className="flex flex-col gap-10 px-6 py-12 md:px-8 order-2 md:order-1">
            <h2>
              Continuous Knowledge Aggregation
            </h2>

            <p>ZeroFAI continuously ingests and indexes enterprise
              knowledge from documents, ITSM platforms, collaboration
              tools, and operational systems ensuring information stays
              current and discoverable.</p>



          </div>
          <Image src="/assets/images/sample-img.webp" width={1200} height={680} alt="zerofai" className="order-1 md:order-2 rounded-xl justify-self-end md:border-l-4 border-primary" />
        </div>
      </section>

      <section className="">

        <div className="container grid md:grid-cols-2 gap-6 md:gap-10 bg-secondary dark:bg-secondary/40 lg:max-w-7xl md:rounded-xl p-0! items-center">
          <Image src="/assets/images/sample-img.webp" width={1200} height={680} alt="zerofai" className="rounded-xl justify-self-end md:border-r-4 border-primary" />
          <div className="flex flex-col gap-10 px-6 py-12 md:px-8">
            <h2>
              Continuous Knowledge Aggregation
            </h2>

            <p>ZeroFAI continuously ingests and indexes enterprise
              knowledge from documents, ITSM platforms, collaboration
              tools, and operational systems ensuring information stays
              current and discoverable.</p>



          </div>
        </div>
      </section>


      <section className="bg-primary py-16">

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          <div className="flex flex-col gap-4 items-center text-center">
            <Image src="/assets/icons/watch.png" className="invert" width={100} height={100} alt="watch" />
            <h5 className="text-xl font-bold text-white">Reduced Resolution Time</h5>
            <p className="text-white!">

              With instant access to relevant enterprise knowledge
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
            <Image src="/assets/icons/ticket.png" className="invert" width={90} height={90} alt="ticket" />
            <h5 className="text-xl font-bold text-white">Lower Ticket Volume</h5>
            <p className="text-white!">

              Through self-service
              knowledge discovery

            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/assets/icons/humen.png" className="invert" width={80} height={80} alt="ticket" />
          <h5 className="text-xl font-bold text-white">Faster Employee Onboarding</h5>
            <p className="text-white!">

              With contextual access to
              institutional knowledge

            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/assets/icons/dollersing.png" className="invert" width={80} height={80} alt="ticket" />
          <h5 className="text-xl font-bold text-white">Improved Productivity</h5>
            <p className="text-white!">

              By eliminating repetitive
              searches and duplicated
              effort
            </p>
          </div>

        </div>


      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center ">
          <h2>
            Stop Searching for Knowledge.
            Start Discovering It Instantly.
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