"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Layers, Database } from "lucide-react";
import { OWNER } from "@/data/projects";
import { getGsap } from "@/lib/gsap";

const capabilities = [
  {
    icon: Terminal,
    title: "Backend and Auth Engineering",
    desc: "Building secure session handling, role segregation, and reliable REST endpoints using ASP.NET Core, Node.js, and FastAPI.",
  },
  {
    icon: Layers,
    title: "Modern Frontend Systems",
    desc: "Developing fast, responsive interfaces using Next.js, React, and Tailwind CSS with strict attention to semantic HTML and accessibility.",
  },
  {
    icon: Database,
    title: "Data and Database Modeling",
    desc: "Structuring relational databases and document collections using MongoDB, Entity Framework Core, and MySQL for clean queries.",
  },
];

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0a0a0b] border-t border-white/[0.08]"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            02
          </span>
          <span className="h-px w-8 bg-white/[0.1]" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            About Salim
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight">
              A computer applications graduate student dedicated to practical, reliable software.
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
              {OWNER.bio}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div className="p-6 bg-[#111114] border border-white/[0.08] rounded-xl space-y-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block">
                Primary Focus
              </span>
              <p className="text-sm text-foreground">
                Currently pursuing Master of Computer Applications at Uka Tarsadia University while shipping personal and academic repositories.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover transition-colors pt-2"
              >
                <span>Read detailed background</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Capability Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#111114] border border-white/[0.08] hover:border-white/[0.18] transition-colors rounded-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#18181e] border border-white/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
