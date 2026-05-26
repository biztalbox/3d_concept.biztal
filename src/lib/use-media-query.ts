"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe `window.matchMedia` hook.
 *
 * - Returns `defaultValue` (false unless overridden) on the server AND on
 *   the very first client render, so server-rendered HTML and the first
 *   client render agree — no React hydration warning.
 * - After mount, syncs to the real `matchMedia` value and updates live on
 *   every resize / orientation change via the `change` event.
 *
 * Why a JS check (and not just `hidden md:block` / `block md:hidden` CSS)?
 *   CSS-only would still MOUNT the hidden component (e.g. the 3D Canvas
 *   would load GLBs, allocate WebGL context, etc. even on phones). For
 *   heavy components like a 3D scene, true conditional render via JS is
 *   the right call.
 *
 * Usage:
 *   const isDesktop = useMediaQuery("(min-width: 767px)");
 *   return isDesktop ? <BigScene /> : <MobileFallback />;
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    setMatches(mql.matches); // sync once on mount

    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
