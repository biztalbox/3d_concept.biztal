"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroCanvas from "@/component/bot/HeroCanvas";
import Link from "next/link";
import Image from "next/image";
import { PiClockCounterClockwise } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";

const DAY_ONE_HERO_IMAGE = "/assets/images/men-in-pc.png";

/** Counts 0 → target whenever the element scrolls into view; resets when it leaves. */
function ScrollPercentCounter({
  target = 100,
  durationMs = 1400,
  className = "",
}: {
  target?: number;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cancelAnimation = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const runCount = () => {
      cancelAnimation();
      setValue(0);
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - (1 - progress) ** 3;
        setValue(Math.round(eased * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCount();
        } else {
          cancelAnimation();
          setValue(0);
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimation();
    };
  }, [target, durationMs]);

  return (
    <div ref={ref} className={className} aria-live="polite" aria-label={`${value} percent`}>
      {value}%
    </div>
  );
}

/** Default image size (px) — used when width/height omitted on an entry */
const DEFAULT_LOGO_WIDTH = 160;
const DEFAULT_LOGO_HEIGHT = 48;
/** Padding each side of image inside its cell — keeps divider gaps even */
const LOGO_SLOT_PADDING = 8;
const LOGO_SLOT_HEIGHT = 80;

type IntegrationLogo = {
  src: string;
  alt: string;
  /** Image width in px — adjust per brand */
  width?: number;
  /** Image height in px — adjust per brand */
  height?: number;
  /** Cell width in px — override only if one logo needs a different slot */
  slotWidth?: number;
};

const integrationLogos: IntegrationLogo[] = [
  { src: "/brands/microsoft-intune.svg", alt: "Microsoft Intune", width: 280, height: 90 },
  { src: "/brands/azure-active-directory.svg", alt: "Azure Active Directory", width: 250, height: 80 },
  { src: "/brands/manageengine.svg", alt: "ManageEngine", width: 250, height: 80 },
  { src: "/brands/symphony.svg", alt: "Symphony", width: 250, height: 80 },
  { src: "/brands/servicenow.svg", alt: "ServiceNow", width: 250, height: 80 },
  { src: "/brands/infron.avif", alt: "Infor", width: 120, height: 40 },
];

/** Same cell width for every logo — matches widest entry so dividers align evenly */
const LOGO_SLOT_WIDTH = Math.max(
  ...integrationLogos.map(
    (logo) =>
      logo.slotWidth ??
      (logo.width ?? DEFAULT_LOGO_WIDTH) + LOGO_SLOT_PADDING * 2
  )
);

export default function ComplaincePage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <main>
      <section id="" className="relative w-full lg:min-h-screen">
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="container mt-0 grid grid-cols-1 gap-10 md:mt-11 md:grid-cols-2">
          <div
            className="order-2 pt-6 pb-16 md:order-1 md:py-16"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2>
              Drop-Ship Productivity. <br />
              <span className="text-primary!">Zero IT Touch Required.</span>
            </h2>

            <p className="mt-8 max-w-4xl text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
            Empower your global workforce from day one. ZerofAI bypasses the IT staging room, delivering fully configured, secure,
            and personalized devices directly from the factory to the employee’s desk.            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
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

      {/* logos / integrations marquee */}
      <section className="bg-secondary py-16 dark:bg-secondary/40">
        <div className="">
          <div className="container mb-8">
            <h2>
              Seamlessly integrating with the tools Industry Leaders rely on:
            </h2>
          </div>

          <div className="w-full bg-white py-6 ring-black/10 sm:py-7 md:py-8">
            <div className="logo-marquee">
              <div
                className="logo-marquee__track"
                aria-label="Integration logos"
              >
                {[...integrationLogos, ...integrationLogos].map((logo, idx) => {
                  const w = logo.width ?? DEFAULT_LOGO_WIDTH;
                  const h = logo.height ?? DEFAULT_LOGO_HEIGHT;
                  const slotW = logo.slotWidth ?? LOGO_SLOT_WIDTH;

                  return (
                    <div
                      key={`${logo.src}-${idx}`}
                      className="flex flex-none items-center"
                    >
                      {idx > 0 ? (
                        <div
                          aria-hidden
                          className="mx-1 h-11 w-px shrink-0 self-center bg-black sm:mx-3 sm:h-12 md:h-14"
                        />
                      ) : null}
                      <div
                        className="flex shrink-0 items-center justify-center"
                        style={{ width: slotW, height: LOGO_SLOT_HEIGHT }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={w}
                          height={h}
                          className="max-h-full max-w-full object-contain object-center"
                          style={{ width: w, height: h }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container mt-12 sm:mt-14">
          <div
            className="mx-auto rounded-3xl bg-white px-6 py-10 ring-1 ring-white/10 sm:px-10 sm:py-12 dark:bg-secondary/40"
            data-aos="fade-up"
            data-aos-delay="100"
          >
              <div className="max-w-4xl" data-aos="fade-up" data-aos-delay="120">
                <h2 className="text-black dark:text-white">
                  Imaging Laptops is a Waste of IT Talent
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                  In modern enterprise environments, paying highly skilled IT engineers to
                  unbox, image, repack, and ship laptops is an archaic drain on resources
                  and budget.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div
                  className="group relative overflow-hidden rounded-2xl bg-secondary p-6 transition-colors duration-200 hover:border-primary hover:bg-primary sm:p-7 dark:bg-secondary/40"
                  data-aos="fade-up"
                  data-aos-delay="160"
                >
                  <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-white opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors duration-200 group-hover:border-white/50 group-hover:bg-white/15 group-hover:text-white">
                    <PiClockCounterClockwise className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-black group-hover:text-white!">
                    The Old Way:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-black/70 transition-colors duration-200 group-hover:text-white! dark:text-white/75">
                    {[
                      "Manual setup",
                      "Imaging",
                      "IT dependency",
                      "Day 1 login issues",
                    ].map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="group relative overflow-hidden rounded-2xl bg-secondary p-6 transition-colors duration-200 hover:border-primary hover:bg-primary sm:p-7 dark:bg-secondary/40"
                  data-aos="fade-up"
                  data-aos-delay="240"
                >
                  <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-white opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors duration-200 group-hover:border-white/50 group-hover:bg-white/15 group-hover:text-white">
                    <CiCircleCheck className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-black group-hover:text-white!">
                    The ZerofAI Way:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-black/70 transition-colors duration-200 group-hover:text-white! dark:text-white/75">
                    {[
                      "Automated onboarding",
                      "Policy-driven provisioning",
                      "Instant readiness",
                    ].map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-secondary/40">
        <div className="container sm:px-6">
          <h3 data-aos="fade-up">The Day-One Experience, Automated.</h3>

          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
            <div
              className="flex gap-3 rounded-xl bg-secondary p-5 sm:gap-4 sm:p-6 dark:bg-black"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <span
                aria-hidden="true"
                className="mt-1 h-7 w-[8px] shrink-0 bg-black dark:bg-white"
              />
              <div className="min-w-0 flex-1">
                <h5 className="text-sm font-bold sm:text-[15px]">
                  Intelligent App Orchestration
                </h5>
                <p className="mt-3 leading-6 text-white/85 sm:leading-6">
                  No more missing software tickets. Based on the user&apos;s role and
                  department, the AI agent dynamically installs the exact applications and
                  permissions they need to start working immediately.
                </p>
              </div>
            </div>
            <div
              className="flex gap-3 rounded-xl bg-secondary p-5 sm:gap-4 sm:p-6 dark:bg-black"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <span
                aria-hidden="true"
                className="mt-1 h-7 w-[8px] shrink-0 bg-black dark:bg-white"
              />
              <div className="min-w-0 flex-1">
                <h5 className="text-sm font-bold sm:text-[15px]">Secure Identity Binding</h5>
                <p className="mt-3 text-xs leading-6 text-white/85 sm:text-[13px] sm:leading-6">
                  Security starts at the first boot. Device enrollment is tied directly to
                  the user&apos;s corporate identity with multi-factor authentication,
                  ensuring the hardware is locked down before the desktop even loads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div
            className="relative aspect-4/3 w-full md:aspect-auto"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <Image
              src={DAY_ONE_HERO_IMAGE}
              alt="Professional reviewing finance charts with holographic HUD interface"
              width={500}
              height={300}
              className=""
            />
          </div>
          <div className="flex flex-col justify-center gap-6 bg-secondary px-6 py-6 sm:px-8 sm:py-8 md:gap-7 md:px-10 dark:bg-black">
            <div data-aos="fade-up" data-aos-delay="120">
              <h4 className="text-base font-bold sm:text-lg">
                True &apos;Out-of-the-Box&apos; Readiness.
              </h4>
              <p className="mt-2 text-white/85">
                Give your employees a consumer-grade unboxing experience with
                enterprise-grade security. They simply power on the device, connect to
                the internet, and enter their credentials. ZeroAI takes over,
                transforming a blank device into a fully managed corporate asset in
                minutes.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-base font-bold sm:text-lg">
                Scale Globally Without Expanding IT.
              </h4>
              <p className="mt-2">
                Whether you are onboarding ten associates at your Global Delivery Center
                or equipping five hundred remote executives, the effort for your IT team
                remains exactly the same: zero. Team Computers designed ZeroAI to scale
                your endpoint infrastructure infinitely, without scaling your headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 text-white sm:py-20 dark:bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <Image
                  src="/icons/clock.png"
                  alt=""
                  aria-hidden
                  width={100}
                  height={100}
                  className="h-full w-full"
                />
              </div>
              <div className="mt-4 text-xl font-semibold text-black dark:text-white">0</div>
              <div className="mt-1 text-lg font-medium text-black dark:text-white">
                Hours Spent Imaging Devices
              </div>
            </div>

            <div
              className="flex flex-col items-center text-center sm:border-l sm:border-black dark:border-white"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <Image
                src="/icons/cloude.png"
                alt=""
                aria-hidden
                width={62}
                height={62}
                className="h-[82px] w-[100px]"
              />
              <ScrollPercentCounter className="mt-4 text-xl font-semibold text-primary" />
              <div className="mt-1 text-lg font-medium text-black dark:text-white">
                Cloud-Driven Configuration
              </div>
            </div>

            <div
              className="flex flex-col items-center text-center sm:border-l sm:border-black dark:border-white"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <Image
                src="/icons/plane.png"
                alt=""
                aria-hidden
                width={100}
                height={100}
                className="h-[82px] w-[92px]"
              />
              <div className="mt-4 text-xl font-semibold text-black dark:text-white">
                Day 1
              </div>
              <div className="mt-1 text-lg font-medium text-black dark:text-white">
                Immediate Employee Productivity
              </div>
            </div>
          </div>

          <div
            className="mt-14 flex flex-col items-center justify-center text-center sm:mt-20"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <h2 className="max-w-4xl text-[28px] font-light leading-tight tracking-wide text-black sm:text-[44px] sm:leading-[1.15] dark:text-white">
              Ready to eliminate manual device
              <br />
              setup?
            </h2>
            <Link
              href="#"
              className="mt-8 rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
