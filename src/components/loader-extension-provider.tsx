"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { LoaderContent } from "@/components/page-loader";

type LoaderExtensionContextValue = {
  extend: (ms: number) => void;
};

const LoaderExtensionContext = createContext<LoaderExtensionContextValue | null>(
  null,
);

export function useLoaderExtension() {
  const ctx = useContext(LoaderExtensionContext);
  // Safe no-op when provider is not mounted (e.g. loader disabled site-wide).
  return ctx ?? { extend: () => {} };
}

export function LoaderExtensionProvider({ children }: { children: ReactNode }) {
  const [extended, setExtended] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const extend = useCallback(
    (ms: number) => {
      clearHideTimeout();
      setExtended(true);

      hideTimeoutRef.current = setTimeout(() => {
        setExtended(false);
        hideTimeoutRef.current = null;
      }, ms);
    },
    [clearHideTimeout],
  );

  useEffect(() => () => clearHideTimeout(), [clearHideTimeout]);

  return (
    <LoaderExtensionContext.Provider value={{ extend }}>
      {children}
      {mounted && extended
        ? createPortal(<LoaderContent />, document.body)
        : null}
    </LoaderExtensionContext.Provider>
  );
}
