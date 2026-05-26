"use client";

import { useEffect, useState, type ReactNode } from "react";

type ZoomedPanelProps = {
  /** When true the panel slides in from the left and fades in. */
  open: boolean;
  children: ReactNode;
};

/**
 * Left-half overlay container shown when a model is selected.
 *
 * - Positioned absolutely so the underlying <Canvas> doesn't have to resize
 *   (avoids WebGL viewport jank during the GSAP camera move).
 * - Uses a short CSS transition for slide+fade. Camera flies in parallel.
 * - `pointer-events` are limited to the content area so users can still
 *   interact with the 3D scene to the right.
 */
export function ZoomedPanel({ open, children }: ZoomedPanelProps) {
  // Defer mount slightly so the enter transition actually runs (Tailwind
  // transitions need a frame between initial state and final state).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(id);
    }
    setMounted(false);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 items-center z-20 flex w-full  px-6  sm:px-12 lg:px-16 transition-all duration-700 ease-out ${
        mounted ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
      }`}
    >
      <div className="pointer-events-auto w-full">{children}</div>
    </div>
  );
}
