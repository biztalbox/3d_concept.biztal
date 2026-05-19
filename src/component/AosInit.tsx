"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return children;
}
