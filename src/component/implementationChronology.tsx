"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type PhaseCardProps = {
  phase: string;
  title: string;
  day: string;
  body: string;
  delay?: number;
};

function PhaseCard({ phase, title, day, body, delay = 0 }: PhaseCardProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      className="rounded-2xl bg-[#19B6C9] p-2"
    >
      <div className="flex items-center gap-4 px-1 py-4">
        <h5 className="font-extrabold text-foreground">{phase}</h5>
        <div className="h-px flex-1 bg-foreground" />
      </div>

      <div className="flex flex-col gap-3 min-h-96 rounded-2xl bg-black p-4">
        <h4 className="text-white">
          {title}
        </h4>

        <p className="font-extrabold text-white/80">{day}</p>

        <p className="leading-5 text-white/40">{body}</p>
      </div>
    </div>
  );
}

export default function ImplementationChronology() {
  useEffect(() => {
    AOS.init({
      offset: 140,
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="container">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="text-white"
          >
            Implementation Chronology
          </h2>

          <div
            data-aos="fade-up"
            className="mx-auto mt-5 inline-flex items-center rounded-full bg-white px-6 py-2 text-[12px] font-semibold text-black/80 shadow-[0_14px_35px_rgba(0,0,0,0.55)]"
          >
            From Cost Center to Revenue Architect
          </div>

          <p
            data-aos="fade-up"
            className="mx-auto mt-6 max-w-3xl"
          >
            This isn&apos;t a software deployment it&apos;s a consciousness
            migration. Your enterprise evolves through three distinct phases,
            each unlocking exponentially greater capabilities.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <PhaseCard
            phase="Phase 1"
            title="Consciousness Awakening"
            day="Day 1"
            body="Hyper-orchestrative self-service portal goes live. Users experience conversational workflows that feel like magic. Autonomous incident resolution foundation activates across your infrastructure. Self-healing compute capabilities begin operating."
            delay={0}
          />

          <PhaseCard
            phase="Phase 2"
            title="Autonomous Sovereignty"
            day="Day 90"
            body="Full false-positive suppression eliminates alert noise. Agentic security enforcement operates continuously across every endpoint. Predictive capacity planning forecasts needs months in advance. Your infrastructure begins making strategic decisions independently. Engineers transition from reactive to proactive roles."
            delay={400}
          />

          <PhaseCard
            phase="Phase 3"
            title="Cognitive Dominance"
            day="Day 180"
            body="Temporal prediction matrices reveal future states with unprecedented accuracy. Strategic intelligence canvases deliver executive insights that reshape business strategy. Perpetual evolution engine reaches full activation your platform now improves itself faster than human teams ever could. You've achieved true enterprise consciousness"
            delay={800}
          />
        </div>
      </div>
    </section>
  );
}

