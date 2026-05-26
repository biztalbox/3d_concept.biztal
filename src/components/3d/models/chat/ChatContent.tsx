"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

/**
 * Left-side panel content shown when the chat model is zoomed.
 *
 * Visual language: cyberpunk-lite —
 *   - Mono label with [ ] brackets + flicker pulse
 *   - Vertical accent bar that scales in from the top
 *   - Heading "slices" in via clip-path (left → right reveal)
 *   - Body / list / CTA fade-up with stagger
 *
 * GSAP setup uses `useGSAP` from `@gsap/react`, scoped to the container
 * ref. Cleanup is automatic on unmount (which happens every time the user
 * exits and re-enters the zoom — so the animation replays each time).
 */
export function ChatContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Accent bar grows from top
      tl.from(".cp-accent", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.6,
      });

      // 2. Label flickers in
      tl.from(
        ".cp-label",
        {
          opacity: 0,
          x: -10,
          duration: 0.4,
          ease: "steps(4)", // staccato flicker
        },
        "<0.1",
      );

      // 3. Heading slice-reveal (left → right)
      tl.from(
        ".cp-heading",
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
        },
        "<0.15",
      );

      // 4. Body + list items + CTA — staggered fade-up
      tl.from(
        ".cp-stagger",
        {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.08,
        },
        "<0.2",
      );
    },
    { scope: containerRef },
  );

  return (
    <section

      ref={containerRef}
      className="w-full h-full flex flex-row justify-between">



      <div
        className="relative flex gap-0 h-fit self-center justify-center max-w-2xl pl-0.5"
      >
        {/* Cyber accent bar */}
        <span
          className="cp-accent absolute left-0 top-1/2 h-48 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_12px_rgba(0,211,255,0.6)]"
          aria-hidden
        />

        <div className="space-y-6 backdrop-blur-xs border rounded-2xl p-5">
          {/* Bracketed mono label */}
          <span className="cp-label inline-flex items-center gap-2 font-mono text-md uppercase tracking-[0.3em] text-primary">
            {/* <span aria-hidden>[</span> */}
            Autonomous Service Consciousness
            {/* <span aria-hidden>]</span> */}
          </span>

          {/* Slice-revealed heading */}
          <h2 className="cp-heading text-white!">
            Turns your IT helpdesk into a smart chat assistant
          </h2>

          {/* Body */}
          <p className="cp-stagger text-gray-300!">
            Users just type problems like “Excel crashed”
            System automatically fixes issues, runs tasks, and responds instantly
            No need for manual tickets or waiting

          </p>

          {/* Feature list */}

          {/* CTA */}
          <div className="cp-stagger pt-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-white! backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_24px_rgba(0,211,255,0.4)]"
            >
              Learn More
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

      <div className=" rounded-2xl">
        <Image width={1080} height={1340} alt="chat image" src="/assets/chat.gif"
          className="w-xl" />
      </div>
    </section>
  );
}
