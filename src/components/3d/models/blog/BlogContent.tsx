"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function BlogContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".cp-accent", { scaleY: 0, transformOrigin: "top", duration: 0.6 });
      tl.from(".cp-label", { opacity: 0, x: -10, duration: 0.4, ease: "steps(4)" }, "<0.1");
      tl.from(".cp-heading", { clipPath: "inset(0 100% 0 0)", opacity: 0, duration: 0.9, ease: "expo.out" }, "<0.15");
      tl.from(".cp-stagger", { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 }, "<0.2");
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-full flex-col justify-center pl-6 sm:pl-8"
    >
      {/* <span
        className="cp-accent absolute left-0 top-1/2 h-48 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_12px_rgba(0,211,255,0.6)]"
        aria-hidden
      />

      <div className="space-y-6">
        <span className="cp-label inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          <span aria-hidden>[</span>
          Insights
          <span aria-hidden>]</span>
        </span>

        <h2 className="cp-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Field Notes from
          <br />
          <span className="text-primary">Autonomous Operations</span>
        </h2>

        <p className="cp-stagger max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
          Latest thinking on autonomous operations, AI infrastructure, and
          the future of IT — straight from teams building and running
          ZerofAI at scale.
        </p>

        <ul className="space-y-2 font-mono text-sm text-white/65">
          <li className="cp-stagger flex items-start gap-2">
            <span className="text-primary" aria-hidden>▸</span>
            Architecture deep-dives and post-mortems
          </li>
          <li className="cp-stagger flex items-start gap-2">
            <span className="text-primary" aria-hidden>▸</span>
            Practitioner playbooks for SREs and platform teams
          </li>
          <li className="cp-stagger flex items-start gap-2">
            <span className="text-primary" aria-hidden>▸</span>
            Industry research and AI capability reports
          </li>
        </ul>

        <div className="cp-stagger pt-4">
          <a
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_24px_rgba(0,211,255,0.4)]"
          >
            Read the Blog
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div> */}
    </div>
  );
}
