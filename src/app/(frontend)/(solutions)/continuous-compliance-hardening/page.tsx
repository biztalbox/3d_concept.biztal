import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Link from "next/link";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function ComplaincePage() {
  return (
    <AosInit>
      <section id="" className="relative w-full lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div
            className="order-2 md:order-1 px-5 py-14 sm:px-6 sm:py-16"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2>Bulletproof Your Endpoints.
              Automate Your{" "}
              <span className="text-primary!">
                Compliance.
              </span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
              Move from periodic audits to real-time enforcement. ZerofAI continuously monitors, detects, and auto-remediates compliance drift across every endpoint without tickets, scripts, or human intervention.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
              <Link
                href="#"
                className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
              >
                Get a Demo
              </Link>
            </div>
          </div>
          <HeroCanvas />

        </div>
      </section>

      {/* Previous section (restored) */}
      <section className=" bg-secondary dark:bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <h2
            className=""
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            The Era of <span className="text-primary!">Manual Compliance is Over.</span>
           
          </h2>
          <p
            className="mt-3"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="80"
          >
            Point-in-time audits and manual scripting leave dangerous security gaps. If your endpoints aren't compliant every second, your enterprise
            is exposed.
          </p>

          {/* 2 cards — centered */}
          
          <div className="mt-10 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-12 lg:gap-20">
         
            {/* Card 1   landscape panel ~1.42:1 (w:h) to match design PDF */}
            <div
              className="group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <p className="mb-6 text-center  font-bold text-neutral-900 sm:text-base dark:text-white">
                The Old Way
              </p>
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <FaClockRotateLeft
                  className="size-[22px] text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                />
              </div>
              
               <div className="relative flex h-[220px] w-full shrink-0 flex-col overflow-hidden rounded-2xl dark:bg-secondary bg-white transition-colors duration-300">
                <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-10 pt-8">
                  <ul className="">
                    <li>Periodic scans</li>
                    <li>Manual helpdesk tickets for updates</li>
                    <li>Broken software</li>
                    <li>Stressful audit fire-drills</li>
                  </ul>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-primary transition-colors duration-300" />
              </div>
            </div> 

            {/* Card 2 */}
            <div
              className="group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={CARD_STAGGER_MS}
            >
              <p className="mb-6 text-center text-sm font-bold text-neutral-900 sm:text-base dark:text-white">
                The ZerofAI Way
              </p>
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <BsStars
                  className="size-[22px] text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                />
              </div>
              <div className="relative flex h-[220px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-primary transition-colors duration-300 group-hover:bg-primary">
                <div className="flex min-h-0 flex-1 items-center text-white justify-center px-6 pb-10 pt-8">
                <ul className="">
                    <li>Always-on monitoring</li>
                    <li>instant auto-remediation</li>
                    <li>silent background hardening</li>
                    <li>24/7 audit readiness.</li>
                  </ul>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-white transition-colors duration-300 " />
              </div>
            </div>
          </div>

          {/* 2-up features */}
          <h2
            className="mt-30"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            Compliance That Fixes Itself
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary/80 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 transition-colors duration-300 group-hover:bg-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                    aria-hidden
                  >
                    <path
                      d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h5 className="text-black font-bold transition-colors dark:text-white! duration-300 group-hover:text-white!">
                    Real-Time Auto-Remediation
                  </h5>
                  <p className="mt-2 text-black/60 transition-colors duration-300 group-hover:text-white!">
                    The moment an endpoint drifts from your corporate security
                    baseline, ZerofAI instantly pulls it back into compliance.
                    No tickets, no delays, no human effort.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary/80 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={COMPARE_STAGGER_MS}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full  bg-primary/15 transition-colors duration-300 group-hover:bg-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    className="text-primary transition-colors duration-300  group-hover:text-white"
                    aria-hidden
                  >
                    <path
                      d="M4 4h16v16H4V4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 8h10M7 12h10M7 16h7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h5 className="text-black font-bold transition-colors duration-300 dark:text-white! group-hover:text-white!">
                    Always-On Audit
                  </h5>
                  <p className="mt-2 text-black/60 transition-colors duration-300 group-hover:text-white!">
                    Stop scrambling for compliance reports. ZerofAI maintains a
                    continuous, real-time log of your entire fleet’s security
                    posture, ready to export the second auditors ask.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION (as per screenshot) */}
      <section className="px-5 py-16 dark:bg-secondary/40 sm:px-6 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            <div
              className="relative rounded-2xl bg-secondary px-6 py-8  sm:px-10 sm:py-10"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              <div className="absolute -left-4 -top-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary sm:-left-6 sm:-top-6 sm:h-14 sm:w-14">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  className="text-black"
                  aria-hidden
                >
                  <path
                    d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.2 12.2 11 14l3.9-3.9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h5 className="text-black dark:text-white! text-lg font-bold md:text-xl">
                Lock Down the Attack Surface, Autonomously.
              </h5>
              <p className="mt-4 text-sm leading-6 text-black/45 md:text-sm">
                Stop relying on end-users to restart for updates. ZerofAI’s
                intelligent hardening automatically disables unused ports,
                services, and legacy protocols across your entire global fleet
                in the background, without disrupting productivity.
              </p>
            </div>

            <div
              className="relative rounded-2xl bg-secondary px-6 py-8 dark:bg-secondary/80 sm:px-10 sm:py-10"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={COMPARE_STAGGER_MS}
            >
              <div className="absolute -left-4 -top-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary sm:-left-6 sm:-top-6 sm:h-14 sm:w-14">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  className="text-black"
                  aria-hidden
                >
                  <path
                    d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7v6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 16h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h5 className="text-black dark:text-white! text-lg font-bold md:text-xl">
                Zero Configuration Drift.
              </h5>
              <p className="mt-4 text-sm leading-6 text-black/45 md:text-sm">
                When users alter settings or malware attempts to change
                registries, the ZerofAI agent detects the anomaly instantly. It
                acts as a self-healing security guard, reverting unauthorized
                changes to the gold standard in milliseconds.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-secondary dark:bg-secondary/80">
          <div className="container">
            <div className="flex flex-col items-center gap-12 py-14 md:flex-row md:gap-0 md:py-16">
              <div
                className="flex w-full flex-col items-center text-center md:w-1/3 md:border-r md:border-black/45 dark:md:border-white/20"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
              >
                <Image
                  src="/icons/policy-enforcement.png"
                  alt=""
                  aria-hidden
                  width={62}
                  height={62}
                  className="h-[82px] w-[82px] dark:hidden"
                />
                <div
                  className="hidden h-[82px] w-[82px] shrink-0 bg-primary mask-[url(/icons/policy-enforcement.png)] mask-center mask-contain mask-no-repeat dark:block [-webkit-mask-image:url(/icons/policy-enforcement.png)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                  aria-hidden
                />
                <div className="mt-5 text-sm font-semibold text-black dark:text-white">
                  100%
                </div>
                <div className="text-base font-bold text-black dark:text-white">
                  Policy Enforcement
                </div>
                <div className="mt-1 text-sm text-black/55 dark:text-white/70">
                  Across All Devices
                </div>
              </div>

              <div
                className="flex w-full flex-col items-center text-center md:w-1/3 md:border-r md:border-black/45 dark:md:border-white/20"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={COMPARE_STAGGER_MS}
              >
                <Image
                  src="/icons/manual-interventions.png"
                  alt=""
                  aria-hidden
                  width={62}
                  height={62}
                  className="h-[82px] w-[82px] dark:hidden"
                />
                <div
                  className="hidden h-[82px] w-[82px] shrink-0 bg-primary mask-[url(/icons/manual-interventions.png)] mask-center mask-contain mask-no-repeat dark:block [-webkit-mask-image:url(/icons/manual-interventions.png)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                  aria-hidden
                />
                <div className="mt-5 text-sm font-semibold text-black dark:text-white">
                  0
                </div>
                <div className="text-base font-bold text-black dark:text-white">
                  Manual Interventions
                </div>
                <div className="mt-1 text-sm text-black/55 dark:text-white/70">
                  for compliance drift remediation
                </div>
              </div>

              <div
                className="flex w-full flex-col items-center text-center md:w-1/3"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-delay={COMPARE_STAGGER_MS * 2}
              >
                <Image
                  src="/icons/audit-readiness.png"
                  alt=""
                  aria-hidden
                  width={62}
                  height={62}
                  className="h-[82px] w-[82px] dark:hidden"
                />
                <div
                  className="hidden h-[82px] w-[82px] shrink-0 bg-primary mask-[url(/icons/audit-readiness.png)] mask-center mask-contain mask-no-repeat dark:block [-webkit-mask-image:url(/icons/audit-readiness.png)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                  aria-hidden
                />
                <div className="mt-5 text-sm font-semibold text-black dark:text-white">
                  24/7
                </div>
                <div className="text-base font-bold text-black dark:text-white">
                  Audit Readiness
                </div>
                <div className="mt-1 text-sm text-black/55 dark:text-white/70">
                  with real-time compliance visibility
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container max-w-4xl text-center py-16"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
        >
          <h2>
            Ready to secure your endpoints with
            <br />
            zero manual effort?
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
          >
            Get a Demo
          </Link>
        </div>
      </section>
    </AosInit>
  );
}
