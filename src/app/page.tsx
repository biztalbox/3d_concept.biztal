"use client";

import ProposeReality from "../component/proposeReality";
import Autonomous from "../component/Autonomous";
import PreemptiveIncidentImmuneSystem from "../component/preemptiveIncidentImmuneSystem";
import SelfHealingDigitalOrganism from "../component/selfHealingDigitalOrganism";
import JoinAutonomousRevolution from "../component/joinAutonomousRevolution";
import ThreeCtaCards from "../component/threeCtaCards";
import ImplementationChronology from "../component/implementationChronology";
import EconomicTransformation from "../component/economicTransformation";
import TemporalPredictionPerpetualEvolution from "../component/temporalPredictionPerpetualEvolution";
import Link from "next/link";
import HeroCanvas from "@/component/bot/HeroCanvas";





export default function Home() {


  // useThree(({ camera }) => {
  //   console.log(camera.position);
  // })

  return (
    <main className="w-full min-w-0 overflow-x-hidden">

      {/* hero */}
      <section id="" className="relative w-full min-w-0 overflow-x-hidden lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:py-16 pb-16 order-2 md:order-1 text-center items-center md:items-start md:text-left">
            <h1 className="">
              The ZerofAI
            </h1>

            <div className="mt-5 inline-flex rounded-[10px] bg-[#19B6C9] px-5 py-2.5 text-[22px] font-extrabold leading-none text-white sm:mt-6 sm:px-8 sm:py-3 sm:text-xl">
              Manifesto
            </div>

            <p className="mt-10 max-w-[720px] text-sm leading-7 text-black/75 dark:text-white/80">
              The enterprise IT paradigm is dying. Alert fatigue enslaves your teams.
              Tribal knowledge evaporates with every resignation. Your engineers
              fight yesterday&apos;s fires while tomorrow&apos;s threats multiply in
              silence.
            </p>

            <div className="mt-8 sm:gap-10">
              <Link href="#" className="rounded-full w-fit bg-foreground px-7 py-3 text-sm font-semibold text-background">
                Book Demo
              </Link>
            </div>
          </div>
          <HeroCanvas />

        </div>
      </section>



      <ProposeReality />
      <Autonomous />
    <PreemptiveIncidentImmuneSystem /> 
      <SelfHealingDigitalOrganism />
      <TemporalPredictionPerpetualEvolution />
      <EconomicTransformation />
      <ImplementationChronology />
      <JoinAutonomousRevolution />
      <ThreeCtaCards />
    </main>
  );
}