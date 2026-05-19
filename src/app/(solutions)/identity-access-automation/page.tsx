import HeroCanvas from "@/component/bot/HeroCanvas";
import IdentityAccessAutomationStats from "@/component/identityAccessAutomationStats";
import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { BsFileBarGraph } from "react-icons/bs";

const ACCESS_GAP_IMAGE ="/assets/images/vs-image.png"

export default function ComplaincePage() {
  return (
    <>
      <section id="" className="relative w-full px-0 py-5 sm:p-5 lg:min-h-screen">
        {/* right-side background decorative strips (flush to viewport edge) */}
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-0 sm:px-4 md:grid-cols-2">
          <div className="order-2 md:order-1 px-4 py-16 sm:px-0">
            <h2>Identity is the New Perimeter.
                <br />
             <span className="text-primary! leading-12! text-5xl!"> Automate the Gatekeeper.</span>
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

      {/* Section under hero (match screenshot) */}
      <section className="w-full bg-secondary py-16 dark:bg-secondary/40 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-4">
          <div className="py-8 px-4 sm:p-8">
            <h2 className="text-black dark:text-white">
              Manual Access Management is Your
              <br />
              Biggest Security Gap.
            </h2>

            <p className="mt-5 max-w-3xl text-xs leading-6 text-black/70 dark:text-white/75 sm:text-sm sm:leading-7">
              Stale accounts, over-provisioned permissions, and slow offboarding are an
              invitation for breaches. When identity management is manual, security is
              always one step behind.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl  ring-1 ring-white/10 bg-secondary dark:bg-secondary/70">
              <div className="px-5 pt-6 sm:px-8 sm:pt-8">
                <div className="relative mx-auto aspect-16/7 w-full max-w-3xl overflow-hidden rounded-2xl">
                  <Image
                    src={ACCESS_GAP_IMAGE}
                    alt="AI and access automation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 px-5 pb-6 sm:mt-10 sm:grid-cols-2 sm:gap-6 sm:px-8 sm:pb-8">
                <div className="group relative overflow-hidden rounded-2xl bg-black p-6 ring-1 ring-white/10 transition-colors duration-200 hover:bg-primary sm:p-7">
                  <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-white! opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
                  <h5 className="text-sm font-semibold text-white">The Old Way:</h5>
                  <p className="mt-3   text-white/80! transition-colors duration-200 group-hover:text-white!">
                    IT tickets for every folder access, &apos;ghost&apos; accounts of former
                    employees, manual AD updates, and weak, static passwords.
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-black p-6 ring-1 ring-white/10 transition-colors duration-200 hover:bg-primary sm:p-7">
                  <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-white! transition-opacity duration-200 group-hover:opacity-100" />
                  <h5 className="text-sm font-semibold text-white">The ZerofAI Way:</h5>
                  <p className="mt-3 text-sm text-white/80! transition-colors duration-200 group-hover:text-white!">
                    Automated identity lifecycle. Real-time access control. Zero-touch
                    execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity lifecycle cards (match screenshot) */}
      <section className="w-full bg-secondary px-0 py-16 sm:p-5 dark:bg-secondary/40 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-0">
            <h2 className=" text-black dark:text-white">
              Intelligent Identity Lifecycle Management.
            </h2>
            <p className=" mt-5 max-w-3xl text-xs leading-6 text-black/70 dark:text-white/70 sm:text-sm sm:leading-7">
              Stale accounts, over-provisioned permissions, and slow offboarding are an
              invitation for breaches. When identity management is manual, security is
              always one step behind.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  title: "Automated User Provisioning & Deprovisioning",
                  body: "ZerofAI automatically grants and revokes access based on user roles, onboarding events, and organizational changes reducing delays and eliminating orphaned accounts.",
                },
                {
                  title: "Role-Based Access Control (RBAC)",
                  body: "Access is dynamically assigned based on roles, ensuring users only get what they need no more, no less.",
                },
                {
                  title: "Password & Access Automation",
                  body: "Common requests like password resets, account unlocks, and access approvals are handled automatically eliminating help-desk dependency.",
                },
                {
                  title: "Unified Identity Visibility",
                  body: "Maintain a centralized view of users, roles, and access across endpoints, applications, and environments.",
                },
                {
                  title: "Policy-Based Access Enforcement",
                  body: "Access decisions are enforced in real time based on predefined policies, user roles, and contextual signals.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-3xl bg-white px-6 py-6 text-center ring-1 ring-black/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 hover:ring-primary/40 hover:bg-primary dark:bg-[#202020] dark:ring-white/10  dark:hover:shadow-xl dark:hover:shadow-black/50 dark:hover:ring-primary/45"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary group-hover:bg-white transition-transform duration-300 ease-out group-hover:scale-110">
                    <IoShieldCheckmarkOutline
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>

                  <h5 className="mt-4 text-sm font-semibold leading-5 text-black group-hover:text-white! dark:text-white">
                    {card.title}
                  </h5>
                  <p className="mt-3 text-sm! leading-6! text-black group-hover:text-white! dark:text-white">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3+3+CTA section (match screenshot) */}
      <section className="w-full bg-secondary py-16 dark:bg-secondary/40 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-0">
            {/* Top 3 columns inside one wide panel */}
            <div className="overflow-hidden rounded-2xl dark:bg-secondary bg-white px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-0">
                <div className="md:px-10">
                  <IoPersonOutline
                    className="mx-auto h-10 w-10 text-primary"
                    aria-hidden="true"
                  />
                  <h5 className="mt-4 text-sm font-semibold text-black dark:text-white">
                    Automated Identity
                    <br />
                    Lifecycle
                  </h5>
                    <p className="mx-auto mt-4 max-w-[320px] text-xs leading-5 text-black dark:text-white">
                    From onboarding to role changes to offboarding, ZerofAI ensures access
                    is always aligned with user roles without manual intervention.
                  </p>
                </div>

                <div className="md:px-10 md:border-l md:border-black dark:border-white">
                  <GoGoal className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
                  <h5 className="mt-4 text-sm font-semibold text-black dark:text-white">
                    Real-Time Access
                    <br />
                    Control
                  </h5>
                  <p className="mx-auto mt-4 max-w-[320px] text-xs leading-5 text-black dark:text-white">
                    ZerofAI continuously evaluates access permissions and enforces policies
                    dynamically ensuring compliance and minimizing risk exposure.
                  </p>
                </div>

                <div className="md:px-10 md:border-l md:border-black dark:border-white">
                  <BsFileBarGraph
                    className="mx-auto h-10 w-10 text-primary"
                    aria-hidden="true"
                  />
                <h5 className="mt-4 text-sm font-semibold text-black dark:text-white">
                    Continuous Access
                    <br />
                    Optimization
                  </h5>
                  <p className="mx-auto mt-4 max-w-[320px] text-xs leading-5 text-black dark:text-white">
                    Access is not static. ZerofAI continuously adjusts permissions based on
                    usage patterns, role changes, and security policies.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 stat cards   90% / 100% count up on scroll into view */}
            <IdentityAccessAutomationStats />

            {/* CTA box */}
            <div className="mt-12 overflow-hidden rounded-2xl bg-white px-6 py-14 text-center  dark:bg-[#202020] sm:px-10 sm:py-16">
              <h2 className="mx-auto max-w-4xl text-[28px] font-light leading-tight text-black dark:text-white sm:text-[44px]">
                Ready to eliminate manual device
                <br />
                setup?
              </h2>
            
              <Link
                href="#"
                className="mt-8 inline-flex rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}