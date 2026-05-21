"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaShareAlt,
  FaRegFileAlt,
  FaCamera,
  FaPlay,
  FaRocket,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "Leadership", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Platform Updates", href: "#" },
  { label: "Custom Stories", href: "#" },
  { label: "Contact", href: "/contact" },
];

const AI_SOLUTION_CATEGORIES = [
  {
    title: "Endpoint Management",
    items: [
      { label: "Compliance Hardening", href: "/continuous-compliance-hardening" },
      { label: "Sentimental Analysis", href: "/sentiment-trend-analysis" },
      { label: "Software Deployment", href: "/automated-zero-touch-provisioning" },
      { label: "AD Management", href: "/identity-access-automation" },
      { label: "Software Metering", href: "/employee-productivity-guardrails" },
      { label: "Auto Compliance Adherence", href: "/continuous-compliance-hardening" },
      { label: "AI Insights", href: "/predictive-analytics" },
      { label: "Analytical Dashboard", href: "/predictive-analytics" },
    ],
  },
  {
    title: "End-user Management",
    items: [
      { label: "Ticket Management", href: "/zero-touch-ticket-resolution" },
      { label: "Password Reset/ Account Unlock", href: "/autonomous-identity-recovery" },
      { label: "Knowledge Search", href: "/cognitive-knowledge-discovery" },
      { label: "Service Workflow Automation", href: "/smart-workflow-orchestration" },
      { label: "One Click Troubleshooters", href: "/one-click-auto-remediation" },
    ],
  },
  {
    title: "Digital Employee Experience",
    items: [
      { label: "Experience Management", href: "/experience-optimization-orchestration" },
      { label: "Employee Engagement", href: "/employee-productivity-guardrails" },
      { label: "Self Healing", href: "/proactive-self-healing" },
    ],
  },
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/termscondition" },
  
  
];

const SOCIAL_BUTTONS = [
  { label: "Share", Icon: FaShareAlt, href: "#" },
  { label: "Articles", Icon: FaRegFileAlt, href: "#" },
  { label: "Gallery", Icon: FaCamera, href: "#" },
  { label: "Videos", Icon: FaPlay, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-foreground">
      {/* Subtle ambient glow accents */}
      <div
        className="pointer-events-none bg-[#19B6C9]/10"
        
      />
      <div
        className="pointer-events-none absolute  bg-[#1e6cf2]/10"
        
      />

      <div className="container relative py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          {/* Logo + description + social buttons */}
          <div className="md:col-span-3">
            <Link href="/" aria-label="ZerofAI home" className="inline-block">
              <Image
                src="/zerofai-logo.png"
                alt="ZerofAI"
                width={150}
                height={50}
                className="w-32 sm:w-36"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-sm! text-foreground/65">
              Engineering the next generation of neural architectures. We
              bridge the gap between human intuition and machine precision to
              build an autonomous future.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_BUTTONS.map(({ label, Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-md bg-background/60 text-foreground/70 ring-1 ring-foreground/10 transition-colors hover:bg-[#19B6C9]/15 hover:text-[#19B6C9]"
                >
                  <Icon size={13} aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 mt-5">
            <p className="flex items-center  text-xs font-semibold  text-foreground">
             
               Company
            </p>
            <ul className="mt-5 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="md:col-span-7">
           
            <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {AI_SOLUTION_CATEGORIES.map((category) => (
                <div key={category.title}>
                  <p className="text-sm font-semibold text-foreground">
                    {category.title}
                  </p>
                  <ul className="mt-4 space-y-3.5 list-none! pl-0!">
                    {category.items.map((item) => (
                      <li key={item.label} className="list-none">
                        <Link
                          href={item.href}
                          className="flex items-center gap-2.5 text-sm text-foreground/65 transition-colors hover:text-foreground"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#19B6C9]"
                            aria-hidden
                          />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe card — commented out for now
          <div className="md:col-span-4">
            <div className="relative rounded-2xl border border-[#19B6C9]/30 bg-background/70 p-6">
              <h5 className="font-bold text-foreground">
                Get a Call Back from our team to discuss your needs.
              </h5>

              <input
                type="text"
                placeholder="Enter your phone number"
                aria-label="Phone number"
                className="mt-4 w-full rounded-md bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40"
              />
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="mt-4 w-full rounded-md bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40"
              />
              <button
                type="button"
                className="mt-3 w-full bg-primary rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-95"
              >
                Submit
              </button>
            </div>
          </div>
          */}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs! text-foreground/55">
            © 2024 ZerofAI. Engineering the future of artificial intelligence.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/55">
            {POLICY_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
