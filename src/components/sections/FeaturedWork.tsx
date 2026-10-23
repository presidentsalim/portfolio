"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { getGsap } from "@/lib/gsap";

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }

    const { gsap } = getGsap();
    if (previewRef.current) {
      gsap.set(previewRef.current, { xPercent: -50, yPercent: -50 });
      // Direct viewport positioning for 120Hz smooth movement without layout reflows
      xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.25, ease: "power2.out" });
      yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.25, ease: "power2.out" });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouchDevice || !xTo.current || !yTo.current) return;
    // Pure viewport coordinates - ZERO getBoundingClientRect reflows!
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  };

  const toggleAccordion = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-24 bg-[#0a0a0b] border-t border-white/[0.08]"
      aria-label="Featured work section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              05
            </span>
            <span className="h-px w-8 bg-white/[0.1]" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Featured Work
            </span>
          </div>

          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            <span>View all 6 case studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Selected engineering case studies.
          </h2>
          <p className="mt-4 text-base text-muted">
            Hover each row to preview architecture details on desktop, or tap to expand full case studies on mobile.
          </p>
        </div>

        {/* Project List Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {PROJECTS.map((project, idx) => {
            const isHovered = activeProject?.slug === project.slug;
            const isDimmed = activeProject !== null && !isHovered;
            const isExpanded = expandedSlug === project.slug;

            return (
              <div
                key={project.slug}
                className={`transition-opacity duration-300 ${
                  isDimmed ? "opacity-30" : "opacity-100"
                }`}
                onMouseEnter={() => {
                  if (!isTouchDevice) setActiveProject(project);
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) setActiveProject(null);
                }}
              >
                {/* Desktop Link Row */}
                <div className="hidden md:block">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center justify-between py-8 px-4 group hover:bg-[#111114] transition-colors rounded-lg"
                  >
                    <div className="flex items-center gap-8">
                      <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-8">
                      <span className="px-3 py-1 rounded-full bg-[#16161b] border border-white/[0.06] text-xs font-mono text-muted">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {project.year}
                      </span>
                      <div className="w-9 h-9 rounded-full border border-white/[0.1] group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#0a0a0b] transition-colors" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Mobile / Touch Accordion Row */}
                <div className="md:hidden py-4">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(project.slug)}
                    aria-expanded={isExpanded}
                    className="w-full text-left flex items-start justify-between py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="font-mono text-[11px] text-accent">
                        0{idx + 1} {"//"} {project.category}
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-muted">{project.year} : {project.role}</p>
                    </div>
                    <div className="p-2 text-muted">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-accent" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expansion */}
                  {isExpanded && (
                    <div className="pt-3 pb-4 space-y-4">
                      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#111114] border border-white/[0.08]">
                        <Image
                          src={project.screenshots[0]}
                          alt={`${project.title} interface preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {project.solution}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-[#16161b] border border-white/[0.06] text-[10px] font-mono text-muted rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-[#0a0a0b] font-mono text-xs font-semibold rounded-md"
                      >
                        <span>View case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
          >
            <span>View all 6 projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Desktop Floating Preview Window - Fixed positioning to eliminate reflow */}
      {!isTouchDevice && (
        <div
          ref={previewRef}
          aria-hidden="true"
          className={`pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-200 hidden md:block will-change-transform ${
            activeProject ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ width: "360px" }}
        >
          {activeProject && (
            <div className="p-3 bg-[#131317] border border-white/[0.15] rounded-xl shadow-2xl space-y-3">
              <div className="relative w-full h-44 rounded-lg overflow-hidden bg-[#0a0a0b] border border-white/[0.08]">
                <Image
                  src={activeProject.screenshots[0]}
                  alt=""
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1.5 px-1">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">
                  {activeProject.category} : {activeProject.year}
                </span>
                <p className="font-display font-bold text-sm text-foreground">
                  {activeProject.title}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#18181f] text-[10px] font-mono text-muted rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
