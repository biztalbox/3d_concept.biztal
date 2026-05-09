"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";
import { ThemeProvider, useTheme } from "@teispace/next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type NavNode = {
  /** Stable key for CMS + rendering */
  id: string;
  label: string;
  href?: string;
  children?: NavNode[];
};

type MegaMenuColumn = {
  id: string;
  heading: string;
  href?: string;
  items?: NavNode[];
};

/**
 * CMS-friendly mega menu schema.
 * - Each item can have an `href` and optional `children` (nested dropdown).
 * - In future, replace this constant with CMS data of the same shape.
 */
const MEGA_MENU: MegaMenuColumn[] = [
  {
    id: "solutions",
    heading: "Solutions",
    items: [
      {
        id: "1",
        label: "Autonomous Endpoint Governance",
        children: [
          {
            id: "endpoint-compliance-hardening",
            label: "Continuous Compliance & Hardening",
            href: "/continuous-compliance-hardening",
          },
          {
            id: "endpoint-sentiment-analysis",
            label: "Automated Zero-Touch Provisioning",
            href: "/automated-zero-touch-provisioning",
          },
          {
            id: "endpoint-software-deployment",
            label: "Identity & Access Automation",
            href: "/identity-access-automation",
          },
          {
            id: "endpoint-ad-management",
            label: "Predictive Asset Intelligence",
            href: "#",
          },
          {
            id: "endpoint-software-metering",
            label: "Predictive Health Analytics",
            href: "#",
          },
          {
            id: "endpoint-auto-compliance",
            label: "Real-time Edge Observability",
            href: "#",
          },
        ],
      },
      {
        id: "end-user-management",
        label: "End-user Management",
        children: [
          { id: "eum-ticket-management", label: "Ticket Management", href: "#" },
          {
            id: "eum-password-reset",
            label: "Password Reset/ Account Unlock",
            href: "#",
          },
          { id: "eum-knowledge-search", label: "Knowledge Search", href: "#" },
          {
            id: "eum-service-workflow",
            label: "Service Workflow Automation",
            href: "#",
          },
          { id: "eum-troubleshooters", label: "One Click Troubleshooters", href: "#" },
        ],
      },
      {
        id: "digital-employee-experience",
        label: "Digital Employee Experience",
        children: [
          {
            id: "dex-experience-mgmt",
            label: "Experience Management",
            href: "#",
          },
          { id: "dex-employee-engagement", label: "Employee Engagement", href: "#" },
          {
            id: "dex-self-healing",
            label: "Self Healing",
            href: "#",
          },
        ],
      },
    ]
  },
  {
    id: "services",
    heading: "Services",
    href: "#"
  },
  {
    id: "Resources",
    heading: "Resources",
    href: "#"
  },
  {
    id: "About",
    heading: "About",
    href: "#"
  }

];

function DesktopMenuItem({ item }: { item: NavNode }) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <Link
        key={item.id}
        href={item.href ?? "#"}
        className="block px-4 py-2.5 text-left text-sm font-medium hover:bg-black/10 dark:bg-white/10"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div key={item.id} className="relative group/sub">
      <Link
        href={item.href ?? "#"}
        className="flex items-center justify-between gap-3 px-4 py-2 text-left text-sm font-medium hover:bg-black/10 dark:bg-white/10"
      >
        {item.label}
        <span aria-hidden className="text-black/60 dark:text-white/60">
          ›
        </span>
      </Link>

      <div className="pointer-events-none absolute left-full top-0 z-50 pl-2 opacity-0 translate-x-1 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
        <div className="overflow-hidden rounded-[10px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#0b0b0b]">
          <div className="divide-y divide-black/10 dark:divide-white/10 min-w-[220px]">
            {item.children!.map((child) => (
              <Link
                key={child.id}
                href={child.href ?? "#"}
                className="block px-4 py-2.5 text-left text-sm font-medium hover:bg-black/10 dark:bg-white/10"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuNode({
  node,
  onNavigate,
}: {
  node: NavNode;
  onNavigate: () => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  if (!hasChildren) {
    return (
      <Link
        href={node.href ?? "#"}
        onClick={onNavigate}
        className="block rounded-lg px-3 py-2 text-sm font-normal text-black/80 hover:bg-black/5 dark:text-white/85 dark:hover:bg-white/10"
      >
        {node.label}
      </Link>
    );
  }

  return (
    <AccordionItem value={node.id} className="border-none">
      <AccordionTrigger className="py-2 text-sm font-medium">{node.label}</AccordionTrigger>
      <AccordionContent>
        <div className="ml-2 space-y-1 border-l border-black/10 pl-2 dark:border-white/15">
          {node.children!.map((child) => (
            <MobileMenuNode key={child.id} node={child} onNavigate={onNavigate} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function StickyHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = resolvedTheme !== "dark";

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isMobileMenuOpen]);

  function onThemeToggle() {
    setTheme(isLight ? "dark" : "light");
  }

  return (
    <header className="py-4 sticky top-0 z-50 bg-background border-b">

      <div className="container flex items-center justify-between gap-4">
        {/* logo */}
        <Image
          src="/zerofai-logo.png"
          alt="ZerofAI"
          width={150}
          height={50}
          priority
          className="w-32 sm:w-40"
        />

        {/* desktop nav pill (solid colors only) */}
        <div className="hidden w-fit items-center justify-between gap-3 rounded-full bg-secondary dark:bg-secondary/40 px-2 pl-4 py-2 lg:flex">
          <nav className="hidden min-w-0 flex-1 items-center gap-6 whitespace-nowrap md:flex">
            {MEGA_MENU.map((col, idx) => (
              <div key={col.heading} className="relative group">
                <Link
                  href={col.href ?? "#"}
                  className="whitespace-nowrap text-sm font-semibold"
                >
                  {col.heading}
                </Link>

                <div
                  className={[
                    "pointer-events-none absolute top-full z-50 pt-4 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0",
                    idx === 0
                      ? "left-0"
                      : idx === 1
                        ? "left-1/2 -translate-x-1/2 group-hover:-translate-x-1/2"
                        : "right-0",
                  ].join(" ")}
                >
                  <div className="relative overflow-visible rounded-[10px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#0b0b0b]">
                    <div className="divide-y divide-black/10 dark:divide-white/10">
                      {col.items?.map((item) => (
                        <DesktopMenuItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <Link href="/contact" className="px-3 py-1 text-white bg-primary rounded-full">Request Demo</Link>

          <button
            type="button"
            disabled={!mounted}
            onClick={onThemeToggle}
            aria-label={mounted ? `Switch to ${isLight ? "dark" : "light"} theme` : "Theme toggle"}
            aria-pressed={mounted ? !isLight : undefined}
            className="flex items-center p-2 rounded-full bg-primary text-white cursor-pointer"
          >
            {!mounted ? (
              <RiMoonClearLine size={20} className="opacity-70" aria-hidden />
            ) : isLight ? (
              <IoSunnyOutline size={20} aria-hidden />
            ) : (
              <RiMoonClearLine size={20} aria-hidden />
            )}
          </button>
        </div>
        

        {/* mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            disabled={!mounted}
            onClick={onThemeToggle}
            aria-label={mounted ? `Switch to ${isLight ? "dark" : "light"} theme` : "Theme toggle"}
            aria-pressed={mounted ? !isLight : undefined}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#19B6C9] text-white hover:brightness-105 active:brightness-95 disabled:cursor-wait disabled:opacity-60"
          >
            {!mounted ? (
              <RiMoonClearLine size={20} className="opacity-70" aria-hidden />
            ) : isLight ? (
              <IoSunnyOutline size={20} aria-hidden />
            ) : (
              <RiMoonClearLine size={20} aria-hidden />
            )}
          </button>

          

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-controls={mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#efefef] text-black ring-1 ring-black/10 transition-colors hover:bg-black/5 dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {
        isMobileMenuOpen && (
          <div className="fixed inset-0 z-60 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <div
              id={mobileMenuId}
              className="absolute right-0 top-0 h-full w-[88vw] overflow-y-auto bg-white p-5 text-black shadow-2xl dark:bg-[#0b0b0b] dark:text-white"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold tracking-tight">Menu</p>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full bg-black/5 text-black ring-1 ring-black/10 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <Accordion type="single" collapsible className="mt-6 w-full">
                {MEGA_MENU.map((col) => (
                  <AccordionItem key={`mobile-${col.heading}`} value={col.heading}>
                    <AccordionTrigger>{col.heading}</AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="single" collapsible className="w-full">
                        {col.items?.map((item) => (
                          <MobileMenuNode
                            key={item.id}
                            node={item}
                            onNavigate={() => setIsMobileMenuOpen(false)}
                          />
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}
    </header>

  )
}

export default function Header() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <StickyHeader />
    </ThemeProvider>
  );
}
