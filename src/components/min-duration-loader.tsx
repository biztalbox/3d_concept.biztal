"use client";

import { useEffect, useRef } from "react";
import { PageLoader } from "@/components/page-loader";
import { useLoaderExtension } from "@/components/loader-extension-provider";
import { MIN_LOADING_DISPLAY_MS } from "@/lib/loading-config";

/** Full-screen loader with minimum display time from loading-config. */
export function MinDurationLoader() {
  const { extend } = useLoaderExtension();
  const startedAtRef = useRef(0);

  useEffect(() => {
    startedAtRef.current = Date.now();

    return () => {
      const elapsed = Date.now() - startedAtRef.current;
      const remaining = Math.max(0, MIN_LOADING_DISPLAY_MS - elapsed);

      if (remaining > 0) {
        extend(remaining);
      }
    };
  }, [extend]);

  return <PageLoader />;
}
