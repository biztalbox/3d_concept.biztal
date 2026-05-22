"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react"; import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";
import { ThemeProvider, useTheme } from "next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type NavNode = {  /** Stable key for CMS + rendering */
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
            id: "endpoint-software-metering",
            label: "Predictive Health Analytics",
            href: "/predictive-analytics",
          },

        ],
      },
      {
        id: "end-user-management",
        label: "Intelligent Service Automation",
        children: [
          { id: "eum-ticket-management", label: "Zero-Touch Ticket Resolution", href: "/zero-touch-ticket-resolution" },
          {
            id: "eum-password-reset",
            label: "Autonomous Identity Recovery",
            href: "/autonomous-identity-recovery",
          },
          {
            id: "eum-service-workflow",
            label: "Cognitive Knowledge Discovery",
            href: "/cognitive-knowledge-discovery",
          },
          {
            id: "eum-service-workflow",
            label: "Smart Workflow Orchestration",
            href: "/smart-workflow-orchestration",
          },
          {
            id: "eum-service-workflow",
            label: "One Click Auto-Remediation",
            href: "/one-click-auto-remediation",
          },

        ],
      },
      {
        id: "digital-employee-experience",
        label: "Workplace Intelligence & DEX",
        children: [
          {
            id: "dex-experience-mgmt",
            label: "Proactive Self-Healing",
            href: "/proactive-self-healing",
          },
          { id: "dex-experience-mgmt", label: "Sentiment Trend Analysis", href: "/sentiment-trend-analysis" },
          { id: "dex-experience-mgmt", label: "Employee Productivity Guardrails", href: "/employee-productivity-guardrails" },
          { id: "dex-experience-mgmt", label: "Experience Optimization & Orchestration", href: "/experience-optimization-orchestration" },
        ],
      },
    ]
  },
  {
    id: "services",
    heading: "Services",
    items: [
      {
        id: "autonomous-support-operations",
        label: "Autonomous Support Operations",
        href: "/autonomous-support-operations",
      },
      {
        id: "predictive-intelligence-operations",
        label: "Predictive Intelligence Operations",
        href: "/predictive-intelligence-operations",
      },
      {
        id: "proactive-experience-operations",
        label: "Proactive Experience Operations",
        href: "/proactive-experience-operations",
      },
    ],
  }, {
    id: "Resources",
    heading: "Resources",
    items: [
      {
        id: "r0",
        label: "Blogs",
        href: "/blogs",
      },
      {
        id: "r1",
        label: "Knowledge Center",
        href: "/knowledge-center",
      },
      {
        id: "r2",
        label: "Customer Stories",
        href: "#",
      },
    ]
  },
  {
    id: "About",
    heading: "About",
    items: [
      {
        id: "a0",
        label: "Leadership",
        href: "/leadership",
      },
      {
        id: "a1",
        label: "Contact Us",
        href: "/contact",
      },
    ]
  }

];

function getDropdownPositionClass(index: number, total: number) {
  if (index === 0) return "left-0";
  if (index === total - 1) return "right-0";
  return "left-1/2 -translate-x-1/2";
}

function DesktopMenuItem({
  item,
  openSubMenuId,
  onToggleSubMenu,
  onNavigate,
}: {
  item: NavNode;
  openSubMenuId: string | null;
  onToggleSubMenu: (itemId: string) => void;
  onNavigate: () => void;
}) {
  const hasChildren = Boolean(item.children?.length);
  const isSubOpen = openSubMenuId === item.id;

  if (!hasChildren) {
    return (
      <Link
        href={item.href ?? "#"}
        onClick={onNavigate}
        className="block px-4 py-2.5 text-left text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isSubOpen}
        aria-haspopup="true"
        onClick={(event) => {
          event.stopPropagation();
          onToggleSubMenu(item.id);
        }}
        className="flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10"
      >
        {item.label}
        <span
          aria-hidden
          className={[
            "text-black/60 transition-transform duration-200 dark:text-white/60",
            isSubOpen ? "rotate-90" : "",
          ].join(" ")}
        >
          ›
        </span>
      </button>

      <div
        className={[
          "absolute left-full top-0 z-50 pl-2 transition-all duration-200 ease-out",
          isSubOpen
            ? "pointer-events-auto opacity-100 translate-x-0"
            : "pointer-events-none opacity-0 -translate-x-1",
        ].join(" ")}
      >
        <div className="overflow-hidden rounded-[10px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#0b0b0b]">
          <div className="min-w-[220px] divide-y divide-black/10 dark:divide-white/10">
            {item.children!.map((child) => (
              <Link
                key={child.id}
                href={child.href ?? "#"}
                onClick={onNavigate}
                className="block px-4 py-2.5 text-left text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10"
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
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [openSubMenuId, setOpenSubMenuId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuId = useId();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const closeDesktopMenus = useCallback(() => {
    setOpenMenuId(null);
    setOpenSubMenuId(null);
  }, []);

  const toggleTopMenu = useCallback((menuId: string) => {
    setOpenSubMenuId(null);
    setOpenMenuId((current) => (current === menuId ? null : menuId));
  }, []);

  const toggleSubMenu = useCallback((itemId: string) => {
    setOpenSubMenuId((current) => (current === itemId ? null : itemId));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = resolvedTheme !== "dark";

  useEffect(() => {
    if (!openMenuId && !openSubMenuId) return;

    function handlePointerDown(event: MouseEvent) {
      if (navRef.current?.contains(event.target as Node)) return;
      closeDesktopMenus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDesktopMenus();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDesktopMenus, openMenuId, openSubMenuId]);
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
        <Link href="/">
          <Image
            src="/zerofai-logo.png"
            alt="ZerofAI"
            width={150}
            height={50}
            priority
            className="w-32 sm:w-40"
          />
        </Link>

        {/* desktop nav pill (solid colors only) */}
        <div className="hidden w-fit items-center justify-between gap-3 rounded-full bg-secondary dark:bg-secondary/40 px-2 pl-4 py-2 lg:flex">
          <nav ref={navRef} className="hidden min-w-0 flex-1 items-center gap-6 whitespace-nowrap md:flex">
            {MEGA_MENU.map((col, idx) => {
              const hasItems = Boolean(col.items?.length);
              const isOpen = openMenuId === col.id;

              return (
                <div key={col.id} className="relative">
                  {hasItems ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`desktop-menu-${col.id}`}
                      onClick={() => toggleTopMenu(col.id)}
                      className={[
                        "inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold transition-colors",
                        isOpen ? "text-primary" : "",
                      ].join(" ")}
                    >
                      {col.heading}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        className={[
                          "transition-transform duration-200",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={col.href ?? "#"}
                      onClick={closeDesktopMenus}
                      className="whitespace-nowrap text-sm font-semibold"
                    >
                      {col.heading}
                    </Link>
                  )}

                  {hasItems && (
                    <div
                      id={`desktop-menu-${col.id}`}
                      role="menu"
                      aria-hidden={!isOpen}
                      className={[
                        "absolute top-full z-50 pt-4 transition-all duration-200 ease-out",
                        getDropdownPositionClass(idx, MEGA_MENU.length),
                        isOpen
                          ? "pointer-events-auto opacity-100 translate-y-0"
                          : "pointer-events-none opacity-0 translate-y-2",
                      ].join(" ")}
                    >
                      <div className="relative overflow-visible rounded-[10px] border border-black/10 bg-white shadow-lg dark:border-white/10 dark:bg-[#0b0b0b]">
                        <div className="divide-y divide-black/10 dark:divide-white/10">
                          {col.items!.map((item) => (
                            <DesktopMenuItem
                              key={item.id}
                              item={item}
                              openSubMenuId={openSubMenuId}
                              onToggleSubMenu={toggleSubMenu}
                              onNavigate={closeDesktopMenus}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
                {MEGA_MENU.map((col) => {
                  const hasItems = Boolean(col.items?.length);

                  if (!hasItems) {
                    return (
                      <Link
                        key={`mobile-${col.id}`}
                        href={col.href ?? "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block border-b border-black/10 py-4 text-sm font-semibold dark:border-white/10"
                      >
                        {col.heading}
                      </Link>
                    );
                  }

                  return (
                    <AccordionItem key={`mobile-${col.id}`} value={col.id}>
                      <AccordionTrigger>{col.heading}</AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="single" collapsible className="w-full">
                          {col.items!.map((item) => (
                            <MobileMenuNode
                              key={item.id}
                              node={item}
                              onNavigate={() => setIsMobileMenuOpen(false)}
                            />
                          ))}
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>            </div>
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
