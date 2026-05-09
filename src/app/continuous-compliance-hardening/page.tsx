import HeroCanvas from "@/component/bot/HeroCanvas";
import Link from "next/link";
import Image from "next/image";

export default function ComplaincePage() {
  return (
    <>
      <section id="" className="relative w-full lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="px-5 py-14 sm:px-6 sm:py-16">
            <h2>Bulletproof Your Endpoints.
              Automate Your{" "}
              <span className="text-primary text-3xl sm:text-5xl">
                {" "}
                Compliance.
              </span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
              Move from periodic audits to real-time enforcement. ZerofAI continuously monitors, detects, and auto-remediates compliance drift across every endpoint—without tickets, scripts, or human intervention.
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
      <section className=" p-5 bg-secondary dark:bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <div className="zf-fade-left-up">
            <h2 className="">The Era of Manual Compliance is Over.</h2>
            <p className=" mt-6">Autonomous Enterprise Consciousness</p>
          </div>

          {/* 3 cards */}
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:gap-4">
            {/* Card 1 — landscape panel ~1.42:1 (w:h) to match design PDF */}
            <div className="zf-fade-left-up zf-fade-left-up--d1 group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1">
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                >
                  <path
                    d="M12 3 2.7 20.2a1 1 0 0 0 .9 1.5h16.8a1 1 0 0 0 .9-1.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9v5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 17h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="relative flex h-[220px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 group-hover:bg-primary">
                <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-10 pt-8 text-center">
                  <p className="text-[13px] leading-snug text-black/80 transition-colors duration-300 group-hover:text-white!">
                    Point-in-time audits and manual scripting leave dangerous
                    security gaps. If your endpoints aren’t compliant every
                    second, your enterprise is exposed.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-primary transition-colors duration-300 group-hover:bg-white" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="zf-fade-left-up zf-fade-left-up--d2 group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1">
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                >
                  <path
                    d="M12 8v5l3 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="relative flex h-[220px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 group-hover:bg-primary">
                <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-10 pt-8 text-center">
                  <p className="text-[13px] leading-snug text-black/80 transition-colors duration-300 group-hover:text-white!">
                    Periodic scans, manual helpdesk tickets for updates, broken
                    software, and stressful audit fire-drills.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-primary transition-colors duration-300 group-hover:bg-white" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="zf-fade-left-up zf-fade-left-up--d3 group flex w-full max-w-[352px] shrink-0 flex-col items-center transition-transform duration-300 hover:-translate-y-1">
              <div className="relative z-10 -mb-7 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white transition-colors duration-300 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                >
                  <path
                    d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12.3 11 13.8l3.6-3.7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="relative flex h-[220px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 group-hover:bg-primary">
                <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-10 pt-8 text-center">
                  <p className="text-[13px] leading-snug text-black/80 transition-colors duration-300 group-hover:text-white!">
                    Always-on monitoring, instant auto-remediation, silent
                    background hardening, and 24/7 audit readiness.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 rounded-b-2xl bg-primary transition-colors duration-300 group-hover:bg-white" />
              </div>
            </div>
          </div>

          {/* 2-up features */}
          <h2 className="mt-10">
            Compliance That Fixes Itself
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="zf-fade-left-up zf-fade-left-up--d1 group relative overflow-hidden rounded-none bg-white px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary">
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
                  <h5 className="text-black font-bold transition-colors duration-300 group-hover:text-white!">
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

            <div className="zf-fade-left-up zf-fade-left-up--d2 group relative overflow-hidden rounded-none bg-white px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 transition-colors duration-300 group-hover:bg-white/20">
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
                  <h5 className="text-black font-bold transition-colors duration-300 group-hover:text-white!">
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
      <section className="bg-white px-5 py-16 dark:bg-secondary/40 sm:px-6 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            <div className="zf-fade-left-up relative rounded bg-secondary px-6 py-8 dark:bg-white sm:px-10 sm:py-10">
              <div className="absolute -left-4 -top-4 grid h-12 w-12 place-items-center rounded bg-primary sm:-left-6 sm:-top-6 sm:h-14 sm:w-14">
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

              <h5 className="text-black text-lg font-bold md:text-xl">
                Lock Down the Attack Surface, Autonomously.
              </h5>
              <p className="mt-4 text-sm leading-6 text-black/45 md:text-sm">
                Stop relying on end-users to restart for updates. ZerofAI’s
                intelligent hardening automatically disables unused ports,
                services, and legacy protocols across your entire global fleet
                in the background, without disrupting productivity.
              </p>
            </div>

            <div className="zf-fade-left-up zf-fade-left-up--d1 relative rounded bg-secondary px-6 py-8 dark:bg-white sm:px-10 sm:py-10">
              <div className="absolute -left-4 -top-4 grid h-12 w-12 place-items-center rounded bg-primary sm:-left-6 sm:-top-6 sm:h-14 sm:w-14">
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

              <h5 className="text-black text-lg font-bold md:text-xl">
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

        <div className="mt-14 bg-secondary dark:bg-white">
          <div className="container">
            <div className="flex flex-col items-center gap-12 py-14 md:flex-row md:gap-0 md:py-16">
              <div className="flex w-full flex-col items-center text-center md:w-1/3 md:border-r md:border-black/45">
                <Image
                  src="/icons/policy-enforcement.png"
                  alt=""
                  aria-hidden
                  width={62}
                  height={62}
                  className="h-[82px] w-[82px]"
                />
                <div className="mt-5 text-sm font-semibold text-black">100%</div>
                <div className="text-base font-bold text-black">
                  Policy Enforcement
                </div>
                <div className="mt-1 text-sm text-black/55">
                  Across All Devices
                </div>
              </div>

              <div className="flex w-full flex-col items-center text-center md:w-1/3 md:border-r md:border-black/45">
                <Image
                  src="/icons/manual-interventions.png"
                  alt=""
                  aria-hidden
                  width={62}
                  height={62}
                  className="h-[82px] w-[82px]"
                />
                <div className="mt-5 text-sm font-semibold text-black">0</div>
                <div className="text-base font-bold text-black">
                  Manual Interventions
                </div>
                <div className="mt-1 text-sm text-black/55">
                  for compliance drift remediation
                </div>
              </div>

              <div className="flex w-full flex-col items-center text-center md:w-1/3">
                <Image
                  src="/icons/audit-readiness.png"
                  alt=""
                  aria-hidden
                  width={62}
                  height={62}
                  className="h-[82px] w-[82px]"
                />
                <div className="mt-5 text-sm font-semibold text-black">24/7</div>
                <div className="text-base font-bold text-black">
                  Audit Readiness
                </div>
                <div className="mt-1 text-sm text-black/55">
                  with real-time compliance visibility
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA (as per screenshot) */}
        <div className="container">
          <div className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
            <h2 className="text-black dark:text-white font-medium leading-tight md:leading-tight">
              Ready to secure your endpoints with
              <br />
              zero manual effort?
            </h2>

            <Link
              href="#"
              className="mt-10 inline-flex rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

