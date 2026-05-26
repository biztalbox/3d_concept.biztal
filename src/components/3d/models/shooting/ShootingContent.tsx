"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function ShootingContent() {
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
      className="relative flex float-right max-w-2xl pl-0.5"
    >
      {/* Cyber accent bar */}
      <span
        className="cp-accent absolute right-0 top-1/2 h-48 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_12px_rgba(0,211,255,0.6)]"
        aria-hidden
      />

      <div className="space-y-6 backdrop-blur-xs border rounded-2xl p-5">
        {/* Bracketed mono label */}
        <span className="cp-label inline-flex items-center gap-2 font-mono text-md uppercase tracking-[0.3em] text-primary!">
          {/* <span aria-hidden>[</span> */}
          Pre-emptive Incident Immune System
          {/* <span aria-hidden>]</span> */}
        </span>

        {/* Slice-revealed heading */}
        <h3 className="cp-heading uppercase text-white!">
          Stops problems before they happen
        </h3>

        {/* Body */}
        <p className="cp-stagger text-gray-300!">
          Detects risks early and fixes them automatically
          Most common IT issues never reach humans
          Reduces alerts, downtime, and workload


        </p>

        {/* Feature list */}

        {/* CTA */}
        <div className="cp-stagger pt-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-white! backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_24px_rgba(0,211,255,0.4)]"
          >
            Get a Demo
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
