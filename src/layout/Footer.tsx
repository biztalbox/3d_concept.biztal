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
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Book Demo", href: "#", highlight: true },
];

const AI_SOLUTIONS = [
  "AI Automation",
  "AI Agents",
  "Web Development",
  "3D Experiences",
  "Analytics",
  "Cloud Integration",
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/termscondition" },
  { label: "Cookie Policy", href: "#" },
  { label: "Security", href: "#" },
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
            <p className="mt-5 text-sm leading-6 text-foreground/65">
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
          <div className="md:col-span-2">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
             
              Navigation
            </p>
            <ul className="mt-5 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      link.highlight
                        ? "text-sm font-semibold text-[#19B6C9] transition-colors hover:text-[#3ed6e6]"
                        : "text-sm text-foreground/65 transition-colors hover:text-foreground"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="md:col-span-3">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              AI Solutions
            </p>
            <ul className="mt-5 space-y-3.5">
              {AI_SOLUTIONS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground/65"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#19B6C9]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe card */}
          <div className="md:col-span-4">
            <div className="relative rounded-2xl border border-[#19B6C9]/30 bg-background/70 p-6">
              <h5 className="font-bold text-foreground">
                Stay Ahead with AI
              </h5>
              <p className="mt-2 text-sm! leading-6 text-foreground/65">
                Get curated insights into the future of enterprise intelligence.
              </p>
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
                Subscribe
              </button>
            </div>
          </div>
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
