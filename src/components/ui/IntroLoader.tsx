"use client";

import React, { useEffect, useState } from "react";
import { OWNER } from "@/data/projects";

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion or already viewed loader in session
    try {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = sessionStorage.getItem("sp_intro_seen");
      if (prefersReducedMotion || seen) {
        return;
      }
    } catch {
      // In case storage is blocked
      return;
    }

    setVisible(true);

    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds max counter

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          complete();
        }, 200);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animFrame);
  }, []);

  const complete = () => {
    setSlideOut(true);
    try {
      sessionStorage.setItem("sp_intro_seen", "true");
    } catch {
      // ignore
    }
    setTimeout(() => {
      setVisible(false);
    }, 600);
  };

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      onClick={complete}
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-14 bg-[#0a0a0b] cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        slideOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Portfolio / 2026
        </span>
        <button
          onClick={complete}
          className="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors"
        >
          [Click to Skip]
        </button>
      </div>

      <div className="flex flex-col items-start gap-4">
        <p className="font-mono text-xs text-accent tracking-widest uppercase">
          01 // Initialization
        </p>
        <h1 className="text-4xl md:text-7xl font-display font-bold text-foreground tracking-tight">
          {OWNER.name}
        </h1>
        <p className="font-mono text-sm text-muted">
          {OWNER.role} : {OWNER.city}
        </p>
      </div>

      <div className="flex items-end justify-between border-t border-white/[0.08] pt-6">
        <span className="font-mono text-xs text-muted">
          Status: Readying architecture
        </span>
        <span className="font-mono text-3xl md:text-5xl font-bold text-accent">
          {progress}%
        </span>
      </div>
    </div>
  );
}
