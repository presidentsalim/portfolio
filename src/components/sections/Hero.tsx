"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { OWNER } from "@/data/projects";
import { getGsap } from "@/lib/gsap";
import Marquee from "./Marquee";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );
      }

      if (factsRef.current) {
        tl.fromTo(
          factsRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-32 md:pt-40 pb-16 flex flex-col justify-between"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Index Marker */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            01
          </span>
          <span className="h-px w-8 bg-white/[0.1]" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Overview
          </span>
        </div>

        {/* Huge Display Headline in Sentence Case */}
        <h1
          ref={titleRef}
          className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05] max-w-5xl"
        >
          <span className="block">Full-stack developer</span>
          <span className="block text-muted">building scalable systems</span>
          <span className="block">from code to deployment.</span>
        </h1>

        {/* 2-line Intro */}
        <p
          ref={textRef}
          className="mt-8 max-w-2xl text-base sm:text-lg text-muted leading-relaxed"
        >
          Hi, I am {OWNER.name}. I develop accessible web applications, role-authenticated backend services, and clean digital architectures using modern technologies.
        </p>

        {/* Two Plain Solid CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Explore projects</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-surface-elevated border border-white/[0.08] text-foreground font-mono text-xs uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 text-muted" aria-hidden="true" />
          </Link>
        </div>

        {/* Three Small Mono Facts */}
        <div
          ref={factsRef}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
              Education & Role
            </span>
            <p className="font-mono text-sm text-foreground">
              MCA Student, Full-Stack Developer
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
              Work & Repositories
            </span>
            <p className="font-mono text-sm text-foreground">
              20+ Projects Built & Documented
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
              Location & Timezone
            </span>
            <p className="font-mono text-sm text-foreground">
              Gujarat, India (Asia/Kolkata)
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="mt-16 w-full">
        <Marquee
          items={[
            "SALIM PRESIDENT",
            "FULL-STACK DEVELOPER",
            "NEXT.JS & REACT",
            "NODE.JS & ASP.NET",
            "UKA TARSADIA UNIVERSITY",
          ]}
          speed="normal"
        />
      </div>
    </section>
  );
}
