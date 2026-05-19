import AosInit from "@/component/AosInit";
import HeroCanvas from "@/component/bot/HeroCanvas";
import IdentityAccessAutomationStats from "@/component/identityAccessAutomationStats";
import { CARD_STAGGER_MS, COMPARE_STAGGER_MS } from "@/lib/aos-config";
import Link from "next/link";
import Image from "next/image";
import {
  IoPersonSharp,
  IoPeopleSharp,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { BsFileBarGraph } from "react-icons/bs";
import type { IconType } from "react-icons";

const ACCESS_GAP_IMAGE = "/assets/images/vs-image.png";

const lifecycleCards: {
  title: string;
  body: string;
  Icon: IconType;
}[] = [
  {
    title: "Automated User Provisioning & Deprovisioning",
    body: "ZerofAI automatically grants and revokes access based on user roles, onboarding events, and organizational changes reducing delays and eliminating orphaned accounts.",
    Icon: IoPersonSharp,
  },
  {
    title: "Role-Based Access Control (RBAC)",
    body: "Access is dynamically assigned based on roles, ensuring users only get what they need no more, no less.",
    Icon: IoPeopleSharp,
  },
  {
    title: "Password & Access Automation",
    body: "Common requests like password resets, account unlocks, and access approvals are handled automatically eliminating help-desk dependency.",
    Icon: MdLock,
  },
  {
    title: "Unified Identity Visibility",
    body: "Maintain a centralized view of users, roles, and access across endpoints, applications, and environments.",
    Icon: FiEye,
  },
  {
    title: "Policy-Based Access Enforcement",
    body: "Access decisions are enforced in real time based on predefined policies, user roles, and contextual signals.",
    Icon: IoShieldCheckmarkOutline,
  },
];

const pillarColumns = [
  {
    Icon: IoPersonSharp,
    title: (
      <>
        Automated Identity
        <br />
        Lifecycle
      </>
    ),
    body: "From onboarding to role changes to offboarding, ZerofAI ensures access is always aligned with user roles without manual intervention.",
  },
  {
    Icon: GoGoal,
    title: (
      <>
        Real-Time Access
        <br />
        Control
      </>
    ),
    body: "ZerofAI continuously evaluates access permissions and enforces policies dynamically ensuring compliance and minimizing risk exposure.",
  },
  {
    Icon: BsFileBarGraph,
    title: (
      <>
        Continuous Access
        <br />
        Optimization
      </>
    ),
    body: "Access is not static. ZerofAI continuously adjusts permissions based on usage patterns, role changes, and security policies.",
  },
] as const;

export default function ComplaincePage() {
  return (
    <AosInit>
      <section id="" className="relative w-full px-0 py-5 sm:p-5 lg:min-h-screen">
        <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
          <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
          <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-0 sm:px-4 md:grid-cols-2">
          <div
            className="order-2 px-4 py-16 sm:px-0 md:order-1"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h2>
              Identity is the New Perimeter.
              <br />
              <span className="text-primary! leading-12! text-5xl!"> Automate the Gatekeeper.</span>
            </h2>

            <p className="mt-8 max-w-[640px] text-xs leading-6 text-black/70 dark:text-white/75 sm:mt-10 sm:text-sm sm:leading-7">
              Move from periodic audits to real-time enforcement. ZerofAI continuously monitors, detects, and
              auto-remediates compliance drift across every endpoint without tickets, scripts, or human
              intervention.
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

      <section className="w-full bg-secondary py-16 dark:bg-secondary/40 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-4">
          <div className="px-4 py-8 sm:p-8">
            <h2
              className="text-black dark:text-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              Manual Access Management is Your
              <br />
              Biggest Security Gap.
            </h2>

            <p
              className="mt-5 max-w-3xl text-xs leading-6 text-black/70 dark:text-white/75 sm:text-sm sm:leading-7"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="80"
            >
              Stale accounts, over-provisioned permissions, and slow offboarding are an invitation for
              breaches. When identity management is manual, security is always one step behind.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl bg-secondary ring-1 ring-white/10 dark:bg-secondary/70">
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
                <div
                  className="group relative overflow-hidden rounded-2xl bg-black p-6 ring-1 ring-white/10 transition-colors duration-200 hover:bg-primary sm:p-7"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                >
                  <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-white! opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
                  <h5 className="text-sm font-semibold text-white">The Old Way:</h5>
                  <p className="mt-3 text-white/80! transition-colors duration-200 group-hover:text-white!">
                    IT tickets for every folder access, &apos;ghost&apos; accounts of former employees, manual AD
                    updates, and weak, static passwords.
                  </p>
                </div>

                <div
                  className="group relative overflow-hidden rounded-2xl bg-black p-6 ring-1 ring-white/10 transition-colors duration-200 hover:bg-primary sm:p-7"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={COMPARE_STAGGER_MS}
                >
                  <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-white! transition-opacity duration-200 group-hover:opacity-100" />
                  <h5 className="text-sm font-semibold text-white">The ZerofAI Way:</h5>
                  <p className="mt-3 text-sm text-white/80! transition-colors duration-200 group-hover:text-white!">
                    Automated identity lifecycle. Real-time access control. Zero-touch execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary px-0 py-16 sm:p-5 dark:bg-secondary/40 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-0">
            <h2
              className="text-black dark:text-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
              Intelligent Identity Lifecycle Management.
            </h2>
            <p
              className="mt-5 max-w-3xl text-xs leading-6 text-black/70 dark:text-white/70 sm:text-sm sm:leading-7"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="80"
            >
              Stale accounts, over-provisioned permissions, and slow offboarding are an invitation for breaches.
              When identity management is manual, security is always one step behind.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {lifecycleCards.map(({ title, body, Icon }, index) => (
                <div
                  key={title}
                  className="group rounded-3xl bg-white px-6 py-6 text-center ring-1 ring-black/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-primary hover:shadow-lg hover:shadow-black/10 hover:ring-primary/40 dark:bg-[#202020] dark:ring-white/10 dark:hover:shadow-xl dark:hover:shadow-black/50 dark:hover:ring-primary/45"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={index * CARD_STAGGER_MS}
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-white">
                    <Icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>

                  <h5 className="mt-4 text-sm font-semibold leading-5 text-black group-hover:text-white! dark:text-white">
                    {title}
                  </h5>
                  <p className="mt-3 text-sm! leading-6! text-black group-hover:text-white! dark:text-white">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary py-16 dark:bg-secondary/40 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-0">
            <div className="overflow-hidden rounded-2xl bg-white px-6 py-10 sm:px-10 sm:py-12 dark:bg-secondary">
              <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-0">
                {pillarColumns.map(({ Icon, title, body }, index) => (
                  <div
                    key={String(title)}
                    className={
                      index > 0 ? "md:border-l md:border-black md:px-10 dark:border-white" : "md:px-10"
                    }
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-delay={index * CARD_STAGGER_MS}
                  >
                    <Icon className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
                    <h5 className="mt-4 text-sm font-semibold text-black dark:text-white">{title}</h5>
                    <p className="mx-auto mt-4 max-w-[320px] text-xs leading-5 text-black dark:text-white">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <IdentityAccessAutomationStats />

            <div
              className="mt-12 overflow-hidden rounded-2xl bg-white px-6 py-14 text-center dark:bg-[#202020] sm:px-10 sm:py-16"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
            >
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
    </AosInit>
  );
}
