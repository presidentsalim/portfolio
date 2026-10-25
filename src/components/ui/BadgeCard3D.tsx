"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  RotateCw,
  Code2,
  GraduationCap,
  Clock,
  Briefcase,
  MapPin,
} from "lucide-react";
import { OWNER } from "@/data/projects";
import { getGsap } from "@/lib/gsap";

export default function BadgeCard3D() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const swayRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      if (swayRef.current && containerRef.current) {
        gsap.fromTo(
          swayRef.current,
          { rotateZ: -1.5 },
          {
            rotateZ: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxTilt = 7;
    const rotateY = (x / (rect.width / 2)) * maxTilt;
    const rotateX = -(y / (rect.height / 2)) * maxTilt;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 bg-[#0a0a0b] overflow-hidden flex flex-col items-center justify-center border-t border-white/[0.06]"
      aria-label="Interactive developer identity card"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                02
              </span>
              <span className="h-px w-8 bg-white/[0.1]" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Identification
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground">
              Developer Identity Card
            </h2>
          </div>
          <p className="font-mono text-xs text-muted max-w-sm">
            Dual-sided interactive profile card. Click or tap to flip and inspect full background credentials.
          </p>
        </div>
      </div>

      {/* 3D Hanging Badge Container */}
      <div className="relative flex flex-col items-center">
        {/* Lanyard Top Strap & Clasp */}
        <div className="flex flex-col items-center z-10 pointer-events-none" aria-hidden="true">
          {/* Lanyard strap */}
          <div className="w-8 h-14 bg-[#16161b] border-x border-white/[0.12] relative overflow-hidden shadow-md flex justify-center">
            <div className="w-1 h-full bg-accent/40 mx-auto" />
          </div>
          {/* Metal clip */}
          <div className="w-12 h-3 bg-[#2a2a32] rounded-t-sm border border-white/[0.2] shadow-inner" />
          <div className="w-4 h-5 bg-[#3a3a46] rounded-sm border border-white/[0.25] -mt-0.5 shadow-sm" />
          <div className="w-8 h-1.5 bg-[#18181e] rounded-full -mt-0.5" />
        </div>

        {/* Sway Wrapper */}
        <div ref={swayRef} className="perspective-1000 -mt-2 will-change-transform">
          {/* Card Interactive Stage */}
          <div
            className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-3xl"
            tabIndex={0}
            role="button"
            aria-label={`Official profile card for ${OWNER.name}. Press enter or space to flip between front and back.`}
            onClick={toggleFlip}
            onKeyDown={handleKeyDown}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${
                  tilt.rotateY + (isFlipped ? 180 : 0)
                }deg)`,
                transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="preserve-3d relative w-[310px] xs:w-[340px] sm:w-[380px] md:w-[390px] h-[580px] sm:h-[620px] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
            >
              {/* ========================================================= */}
              {/* FRONT OF CARD                                             */}
              {/* ========================================================= */}
              <div
                aria-hidden={isFlipped}
                className="backface-hidden absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-[#111115] border border-white/[0.14] p-5 sm:p-6 flex flex-col justify-between select-none shadow-2xl"
              >
                {/* Lanyard Hole Punch */}
                <div
                  className="w-12 h-3 mx-auto bg-[#0a0a0b] rounded-full border border-white/[0.16] shadow-inner shrink-0"
                  aria-hidden="true"
                />

                {/* Big Full-Size Portrait Photo */}
                <div className="relative w-full h-[310px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/[0.1] shadow-inner mt-2">
                  <Image
                    src={OWNER.badgeFrontImage}
                    alt={`Portrait photo of ${OWNER.name}`}
                    fill
                    sizes="(max-width: 640px) 340px, 400px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Status Pill on top of photo */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0a0a0b]/85 backdrop-blur-md rounded-full border border-white/[0.15] flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-white font-medium uppercase tracking-wider">
                      Available for hire
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#0a0a0b]/85 backdrop-blur-md rounded-md border border-white/[0.12] font-mono text-[9px] text-accent font-semibold tracking-wider">
                    DEV // 2025
                  </div>
                </div>

                {/* Below Image: Name, Role, and What He Is Currently Doing */}
                <div className="space-y-3 pt-3">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight leading-none">
                      {OWNER.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider mt-1">
                      {OWNER.role}
                    </p>
                  </div>

                  {/* Current Work / Current Focus */}
                  <div className="pt-2.5 border-t border-white/[0.08] space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted block">
                      Current Work & Focus
                    </span>
                    <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                      Pursuing Master of Computer Applications at Uka Tarsadia University while developing scalable full-stack web platforms and REST services.
                    </p>
                  </div>

                  {/* Location & Flip Prompt */}
                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent" aria-hidden="true" />
                      {OWNER.city}
                    </span>
                    <span className="text-accent flex items-center gap-1 font-medium">
                      <RotateCw className="w-3 h-3" aria-hidden="true" />
                      Flip for details
                    </span>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* BACK OF CARD (Detailed Profile Credentials - No Image)     */}
              {/* ========================================================= */}
              <div
                aria-hidden={!isFlipped}
                className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-[#121218] border border-white/[0.14] p-5 sm:p-6 flex flex-col justify-between select-none shadow-2xl text-left"
              >
                {/* Lanyard Hole Punch */}
                <div
                  className="w-12 h-3 mx-auto bg-[#0a0a0b] rounded-full border border-white/[0.16] shadow-inner shrink-0"
                  aria-hidden="true"
                />

                {/* Back Top: Name & Short Intro */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold">
                      Credential Details
                    </span>
                    <span className="font-mono text-[9px] text-muted">
                      ID: UTU-MCA-2024
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    {OWNER.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Full-stack software developer focused on architecting resilient web applications, role-based backend services, and high-performance digital experiences.
                  </p>
                </div>

                {/* What Technologies & Languages He Uses */}
                <div className="space-y-1.5 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground font-semibold">
                      Languages & Technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {[
                      "TypeScript",
                      "JavaScript",
                      "C#",
                      "Python",
                      "Next.js",
                      "React",
                      "Tailwind CSS",
                      "Node.js",
                      "ASP.NET Core",
                      "FastAPI",
                      "MongoDB",
                      "SQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-foreground/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role / Current Specialization */}
                <div className="space-y-1 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground font-semibold">
                      Specialization & Role
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Full-Stack Engineer building end-to-end web architectures, secure RESTful APIs, and accessible frontend interfaces.
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-1 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground font-semibold">
                      Education
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div>
                      <p className="font-mono text-[11px] text-foreground font-medium">
                        Master of Computer Applications (MCA)
                      </p>
                      <p className="font-mono text-[10px] text-muted">
                        Uka Tarsadia University (2026 to Present)
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-foreground font-medium">
                        Bachelor of Computer Applications (BCA)
                      </p>
                      <p className="font-mono text-[10px] text-muted">
                        Uka Tarsadia University (2023 to 2026)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timezone & Collaboration */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-muted">
                  <span className="flex items-center gap-1 text-foreground">
                    <Clock className="w-3 h-3 text-accent" aria-hidden="true" />
                    {OWNER.timezone} (IST)
                  </span>
                  <span className="text-muted">
                    Remote & Contract Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Interactive Flip Action Button */}
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={toggleFlip}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-elevated border border-white/[0.12] hover:border-accent text-foreground hover:text-accent font-mono text-xs uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
            aria-label="Flip card to inspect reverse side details"
          >
            <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Flip card ({isFlipped ? "Viewing Back" : "Viewing Front"})</span>
          </button>
        </div>
      </div>
    </section>
  );
}


