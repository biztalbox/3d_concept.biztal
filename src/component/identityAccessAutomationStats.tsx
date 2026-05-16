"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuChartPie } from "react-icons/lu";
import { RxEyeOpen } from "react-icons/rx";

export default function IdentityAccessAutomationStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pct90Ref = useRef<HTMLDivElement>(null);
  const pct100Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const el90 = pct90Ref.current;
    const el100 = pct100Ref.current;
    if (!section || !el90 || !el100) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      el90.textContent = "90%";
      el100.textContent = "100%";
      return;
    }

    const ctx = gsap.context(() => {
      let countTween: gsap.core.Tween | null = null;

      const reset = () => {
        countTween?.kill();
        countTween = null;
        el90.textContent = "0%";
        el100.textContent = "0%";
      };

      const play = () => {
        reset();
        const obj = { a: 0, b: 0 };
        countTween = gsap.to(obj, {
          a: 90,
          b: 100,
          duration: 1.35,
          ease: "power2.out",
          onUpdate: () => {
            el90.textContent = `${Math.round(obj.a)}%`;
            el100.textContent = `${Math.round(obj.b)}%`;
          },
        });
      };

      reset();

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        end: "bottom 18%",
        onEnter: play,
        onEnterBack: play,
        onLeave: reset,
        onLeaveBack: reset,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-xl bg-white px-6 py-9 text-center dark:bg-[#202020]">
        <IoShieldCheckmarkOutline
          className="mx-auto h-12 w-12 text-black dark:text-white"
          aria-hidden="true"
        />
        <div className="mt-4 text-xl font-semibold tracking-wide text-black dark:text-white">
          Instant
        </div>
        <div className="mt-1 text-sm text-black dark:text-white">
          Offboarding &amp; Account Revocation
        </div>
      </div>

      <div className="rounded-xl bg-white px-6 py-9 text-center dark:bg-[#202020]">
        <LuChartPie
          className="mx-auto h-12 w-12 text-black dark:text-white"
          aria-hidden="true"
        />
        <div
          ref={pct90Ref}
          className="mt-4 text-xl font-semibold tracking-wide tabular-nums text-black dark:text-white"
        >
          0%
        </div>
        <div className="mt-1 text-sm text-black dark:text-white">
          Reduction in Identity-Related IT Tickets
        </div>
      </div>

      <div className="rounded-xl bg-white px-6 py-9 text-center dark:bg-[#202020]">
        <RxEyeOpen
          className="mx-auto h-12 w-12 text-black dark:text-white"
          aria-hidden="true"
        />
        <div
          ref={pct100Ref}
          className="mt-4 text-xl font-semibold tracking-wide tabular-nums text-black dark:text-white"
        >
          0%
        </div>
        <div className="mt-1 text-sm text-black dark:text-white">
          Visibility into Privileged User Activity
        </div>
      </div>
    </div>
  );
}
