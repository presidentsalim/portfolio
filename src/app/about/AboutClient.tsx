"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, GraduationCap, Code, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { OWNER, TIMELINE, SKILL_GROUPS } from "@/data/projects";
import { getGsap } from "@/lib/gsap";

const principles = [
  {
    icon: Code,
    title: "1. Clean, Modular Architecture",
    desc: "Writing decoupled, maintainable code with clear separation of business logic and presentation layer. No bloated dependencies or unnecessary complexity.",
  },
  {
    icon: Zap,
    title: "2. Performance & Accessibility First",
    desc: "Ensuring sub-second load times, semantic HTML, visible keyboard focus rings, and WCAG AA contrast compliance across all device viewports.",
  },
  {
    icon: ShieldCheck,
    title: "3. Thorough Local Verification",
    desc: "Building with strict TypeScript, schema validation, and real error handling. Every route, endpoint, and UI state is tested before deployment.",
  },
];

export default function AboutClient() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      if (lineRef.current && timelineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Profile
            </span>
            <span className="h-px w-8 bg-white/[0.1]" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              About
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            Background and philosophy.
          </h1>
        </div>

        {/* Hero Bio + Photo Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-display text-2xl sm:text-3xl text-foreground font-semibold leading-relaxed">
              Hello, I am {OWNER.name}. I focus on building reliable full-stack applications with high code quality and strict performance standards.
            </p>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {OWNER.bio}
            </p>

            <p className="text-base text-muted leading-relaxed">
              My engineering philosophy revolves around foundational strength: mastering data structures, understanding relational and document database indexing, writing clean REST and GraphQL endpoints, and rendering accessible frontends with modern toolchains.
            </p>

            <div className="pt-4">
              <a
                href={OWNER.resumePath}
                download="Salim_President_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="w-4 h-4" />
                <span>Download resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#111114]">
              <Image
                src={OWNER.profileImage}
                alt={`Portrait of ${OWNER.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0a0a0b]/85 border border-white/[0.08] backdrop-blur-sm flex items-center justify-between font-mono text-xs text-muted">
                <span>{OWNER.city}</span>
                <span className="text-accent">{OWNER.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Career & Education Timeline */}
        <section className="mb-24 pt-12 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">
              Education & Timeline
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Academic progression and technical milestones.
            </h2>
          </div>

          <div ref={timelineRef} className="relative pl-8 sm:pl-12 space-y-12 max-w-3xl">
            {/* Vertical Drawing Line */}
            <div
              ref={lineRef}
              className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-0.5 bg-accent"
              aria-hidden="true"
            />
            {/* Background Track Line */}
            <div
              className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-0.5 bg-white/[0.1] -z-10"
              aria-hidden="true"
            />

            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Node icon */}
                <div className="absolute -left-[27px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#111114] border-2 border-accent flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-accent" />
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                  <span className="text-accent font-semibold">{item.year}</span>
                  <span>:</span>
                  <span>{item.institution}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground">
                  {item.role}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Matrix (4 Columns) */}
        <section className="mb-24 pt-12 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">
              Competencies
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Skills matrix across domains.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.slice(0, 4).map((group) => (
              <div
                key={group.category}
                className="p-6 bg-[#111114] border border-white/[0.08] rounded-xl space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-accent">{group.number}</span>
                  <span className="font-display font-semibold text-sm text-foreground">
                    {group.category}
                  </span>
                </div>

                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-xs font-mono text-muted"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* "How I Work" Block (3 Principles) */}
        <section className="pt-12 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">
              Methodology
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Core engineering principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((pr, idx) => {
              const Icon = pr.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#111114] border border-white/[0.08] rounded-xl space-y-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#18181e] border border-white/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {pr.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
