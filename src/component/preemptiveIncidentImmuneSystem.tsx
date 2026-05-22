"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TIMELINE_STEPS = [
  {
    title: "DAY 1",
    body: "Automated resolution for known issue patterns across your entire infrastructure",
  },
  {
    title: "DAY 120",
    body: "Full-spectrum autonomous incident lifecycle management with predictive intervention",
  },
  {
    title: "Outcome",
    body: "Your L1/L2 engineers transition from ticket processors to strategic architects",
  },
] as const;

/**
 * Stepped path over three cards (sketch): up → across card → U-dip in gap → repeat.
 * viewBox 0 0 1000 100
 */
const STEPPED_PATH_D =
  "M 24 88 L 24 22 L 308 22 L 308 68 L 348 68 L 348 22 L 652 22 L 652 68 L 692 68 L 692 22 L 976 22 L 976 88";

function SteppedTimelinePath({
  pathRef,
  pathLength,
  pathActive,
  reduceMotion,
}: {
  pathRef: RefObject<SVGPathElement | null>;
  pathLength: number;
  pathActive: boolean;
  reduceMotion: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1000 100"
      className="h-full w-full overflow-visible"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="immune-step-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#19b6c9" />
          <stop offset="50%" stopColor="#5ee0f0" />
          <stop offset="100%" stopColor="#19b6c9" />
        </linearGradient>
        <filter id="immune-step-glow" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Wide glow track */}
      <path
        d={STEPPED_PATH_D}
        fill="none"
        stroke="url(#immune-step-grad)"
        strokeWidth="12"
        strokeLinejoin="miter"
        strokeLinecap="square"
        opacity={pathActive ? 0.18 : 0.06}
        style={{ transition: "opacity 1s ease" }}
      />

      {/* Background track */}
      <path
        d={STEPPED_PATH_D}
        fill="none"
        stroke="currentColor"
        className="text-primary/30"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />

      {/* Animated main line */}
      <path
        ref={pathRef}
        d={STEPPED_PATH_D}
        fill="none"
        stroke="url(#immune-step-grad)"
        strokeWidth="3.5"
        strokeLinejoin="miter"
        strokeLinecap="square"
        filter="url(#immune-step-glow)"
        style={{
          strokeDasharray: pathLength || 1,
          strokeDashoffset: pathActive ? 0 : pathLength || 1,
          transition: "stroke-dashoffset 2.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Traveling dot along path */}
      {pathActive && !reduceMotion && (
        <circle r="5" fill="#fff" stroke="#19b6c9" strokeWidth="2">
          <animateMotion dur="6s" repeatCount="indefinite" path={STEPPED_PATH_D} />
        </circle>
      )}
    </svg>
  );
}

export default function PreemptiveIncidentImmuneSystem() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [pathActive, setPathActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      offset: 140,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    setPathLength(path.getTotalLength());
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const root = timelineRef.current;
    if (!root) return;

    if (reduceMotion) {
      setPathActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setPathActive(entry.isIntersecting),
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section className="pt-16">
      <div className="container">
        <h2 data-aos="fade-left">Pre-emptive Incident Immune System</h2>
         <p data-aos="fade-left" className=" text-primary! py-1">Intelligent Incident Mitigation (IIM)</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr]">
          <div className="relative max-w-4xl border-l-4 border-primary pl-6 text-sm">
            <p data-aos="fade-left">
              Where incidents meet their obsolescence. Alerts are intercepted by our Predictive
              Mitigation Mesh a distributed network of specialized AI agents applying algorithmic
              resolution before human notification ever occurs.
            </p>
            <p className="mt-6" data-aos="fade-left" data-aos-delay="80">
              The result: 92% of Level 1 and Level 2 incidents autonomously resolved. Ticket
              volumes plummet. Mean Time To Resolution approaches zero. Your war room becomes a
              strategy room.
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Stepped path above cards — desktop */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden h-20 md:block lg:h-24"
              aria-hidden
            >
              <SteppedTimelinePath
                pathRef={pathRef}
                pathLength={pathLength}
                pathActive={pathActive}
                reduceMotion={reduceMotion}
              />
            </div>

            {/* Original cards — unchanged */}
            <div className="relative z-10 grid gap-5 md:grid-cols-3 md:pt-14 lg:pt-16">
              {TIMELINE_STEPS.map((c) => (
                <div
                  key={c.title}
                  data-aos="zoom-in-up"
                  className="flex flex-col gap-8 bg-background p-10 text-center"
                >
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Original cyan base */}
      <div className="-mt-16 h-32 w-full bg-primary" />
    </section>
  );
}
