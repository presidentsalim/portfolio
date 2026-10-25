"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { getGsap } from "@/lib/gsap";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();

    // Fast, responsive, buttery-smooth Lenis setup
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease out for immediate responsiveness
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      syncTouch: false, // native smooth touch scrolling on mobile
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Refresh ScrollTrigger and scroll to top on route change, and ensure document.title is never entity-encoded
  useEffect(() => {
    const { ScrollTrigger } = getGsap();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    if (typeof document !== "undefined" && document.title.includes("&amp;")) {
      document.title = document.title.replaceAll("&amp;", "&");
    }
    setTimeout(() => {
      ScrollTrigger.refresh();
      if (typeof document !== "undefined" && document.title.includes("&amp;")) {
        document.title = document.title.replaceAll("&amp;", "&");
      }
    }, 100);
  }, [pathname]);

  return <>{children}</>;
}
