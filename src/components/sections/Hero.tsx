"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  ArrowUpRight,
  ShieldCheck,
  RotateCw,
  MapPin,
  Code2,
  Briefcase,
  GraduationCap,
  Clock,
} from "lucide-react";
import { OWNER } from "@/data/projects";
import { getGsap } from "@/lib/gsap";
import Marquee from "./Marquee";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const swayRef = useRef<HTMLDivElement>(null);

  // 3D Tilt & Flip State
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const isHoveredRef = useRef(false);

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

      if (cardWrapperRef.current) {
        tl.fromTo(
          cardWrapperRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.6"
        );
      }
    }, heroRef);

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
      ref={heroRef}
      className="relative w-full pt-28 md:pt-36 pb-12 flex flex-col justify-between overflow-hidden"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO INFORMATION & ACTIONS                   */}
          {/* ========================================================= */}
          <div className="lg:w-7/12 xl:w-3/5 space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-white/[0.08] text-xs font-mono text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Status: Available · {OWNER.city}</span>
            </div>

            {/* Display Name & Subheading */}
            <div ref={titleRef} className="space-y-3">
              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.05]">
                {OWNER.name}
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-muted font-medium">
                Full-Stack Web Developer and Student
              </p>
            </div>

            {/* Intro Description */}
            <p
              ref={textRef}
              className="text-base sm:text-lg text-muted/90 max-w-xl leading-relaxed"
            >
              BCA graduate and MCA student building clean web systems, role-authenticated backend services, and resilient architectures.
            </p>

            {/* Action Buttons */}
            <div ref={ctaRef} className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-200 shadow-md shadow-accent/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:translate-y-0"
              >
                <Layers className="w-4 h-4" aria-hidden="true" />
                <span>View projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-surface-elevated border border-white/[0.08] hover:border-white/[0.18] text-foreground font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:translate-y-0"
              >
                <span>Contact us</span>
                <ArrowUpRight className="w-4 h-4 text-muted" aria-hidden="true" />
              </Link>
            </div>

            {/* 3 Discipline / Education / Timezone Columns */}
            <div
              ref={factsRef}
              className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] text-muted uppercase tracking-wider block">
                  Discipline
                </span>
                <p className="font-mono text-xs sm:text-sm text-foreground mt-1 font-medium">
                  Software Engineering
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] text-muted uppercase tracking-wider block">
                  Education
                </span>
                <p className="font-mono text-xs sm:text-sm text-foreground mt-1 font-medium">
                  MCA Student (UTU)
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] text-muted uppercase tracking-wider block">
                  Timezone
                </span>
                <p className="font-mono text-xs sm:text-sm text-foreground mt-1 font-medium">
                  India (IST)
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3D HANGING DEVELOPER IDENTITY CARD          */}
          {/* ========================================================= */}
          <div
            ref={cardWrapperRef}
            className="lg:w-5/12 xl:w-2/5 flex flex-col items-center justify-center pt-4 lg:pt-0"
          >
            {/* Lanyard Top Strap & Clasp */}
            <div className="flex flex-col items-center z-10 pointer-events-none" aria-hidden="true">
              {/* Lanyard strap */}
              <div className="w-8 h-10 bg-[#16161b] border-x border-white/[0.12] relative overflow-hidden shadow-md flex justify-center">
                <div className="w-1 h-full bg-accent/40 mx-auto" />
              </div>
              {/* Metal clip */}
              <div className="w-12 h-2.5 bg-[#2a2a32] rounded-t-sm border border-white/[0.2] shadow-inner" />
              <div className="w-4 h-4 bg-[#3a3a46] rounded-sm border border-white/[0.25] -mt-0.5 shadow-sm" />
              <div className="w-8 h-1 bg-[#18181e] rounded-full -mt-0.5" />
            </div>

            {/* Sway Wrapper */}
            <div ref={swayRef} className="perspective-1000 -mt-2 will-change-transform">
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
                  className="preserve-3d relative w-[300px] xs:w-[330px] sm:w-[360px] h-[550px] sm:h-[580px] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
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

                    {/* Top Bar on Card: PORTFOLIO // ID & Gujarat, India */}
                    <div className="flex items-center justify-between font-mono text-[9px] text-muted tracking-wider pt-1">
                      <span className="flex items-center gap-1 text-accent font-semibold">
                        <ShieldCheck className="w-3 h-3" />
                        PORTFOLIO // ID
                      </span>
                      <span>{OWNER.city}</span>
                    </div>

                    {/* Big Full-Size Portrait Photo */}
                    <div className="relative w-full h-[280px] sm:h-[310px] rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/[0.1] shadow-inner mt-1">
                      <Image
                        src={OWNER.badgeFrontImage}
                        alt={`Portrait photo of ${OWNER.name}`}
                        fill
                        sizes="(max-width: 640px) 330px, 360px"
                        className="object-cover object-top"
                        priority
                      />
                      {/* Available Pill on bottom-left */}
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#0a0a0b]/85 backdrop-blur-md rounded-full border border-white/[0.15] flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-[9px] text-white font-medium uppercase tracking-wider">
                          Available
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#0a0a0b]/85 backdrop-blur-md rounded-md border border-white/[0.12] font-mono text-[9px] text-accent font-semibold tracking-wider">
                        DEV // 2026
                      </div>
                    </div>

                    {/* Below Image: Student and Developer + Name */}
                    <div className="space-y-1 pt-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted block">
                        Student and Developer
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight leading-none">
                        {OWNER.name}
                      </h3>
                    </div>

                    {/* Card Footer: Location & Flip Prompt */}
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

                  {/* ========================================================= */}
                  {/* BACK OF CARD (Credential Details)                         */}
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
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold">
                          Credential Details
                        </span>
                        <span className="font-mono text-[9px] text-muted">
                          ID: UTU-MCA-2026
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">
                        {OWNER.name}
                      </h3>
                      <p className="text-[11px] text-muted leading-relaxed line-clamp-2">
                        Full-stack software developer focused on architecting resilient web applications, role-based backend services, and high-performance digital experiences.
                      </p>
                    </div>

                    {/* What Technologies & Languages He Uses */}
                    <div className="space-y-1 pt-1.5 border-t border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-foreground font-semibold">
                          Languages & Technologies
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-0.5">
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
                            className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[9px] text-foreground/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Role / Current Specialization */}
                    <div className="space-y-0.5 pt-1.5 border-t border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-foreground font-semibold">
                          Specialization & Role
                        </span>
                      </div>
                      <p className="text-[11px] text-muted leading-relaxed">
                        Full-Stack Engineer building end-to-end web architectures, secure RESTful APIs, and accessible interfaces.
                      </p>
                    </div>

                    {/* Education */}
                    <div className="space-y-0.5 pt-1.5 border-t border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-foreground font-semibold">
                          Education
                        </span>
                      </div>
                      <div className="space-y-0.5 text-[10px] font-mono">
                        <div>
                          <p className="text-foreground font-medium">
                            Master of Computer Applications (MCA)
                          </p>
                          <p className="text-muted">
                            Uka Tarsadia University (2026 to Present)
                          </p>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            Bachelor of Computer Applications (BCA)
                          </p>
                          <p className="text-muted">
                            Uka Tarsadia University (2023 to 2026)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timezone & Flip prompt */}
                    <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-muted">
                      <span className="flex items-center gap-1 text-foreground">
                        <Clock className="w-3 h-3 text-accent" aria-hidden="true" />
                        {OWNER.timezone} (IST)
                      </span>
                      <span className="text-accent flex items-center gap-1 font-medium cursor-pointer">
                        <RotateCw className="w-3 h-3" aria-hidden="true" />
                        Flip front
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flip action pill */}
            <button
              type="button"
              onClick={toggleFlip}
              className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-surface hover:bg-surface-elevated border border-white/[0.08] hover:border-accent text-muted hover:text-accent font-mono text-[11px] rounded-full transition-colors"
              aria-label="Flip developer identity card"
            >
              <RotateCw className="w-3 h-3" aria-hidden="true" />
              <span>Flip card ({isFlipped ? "Viewing Back" : "Viewing Front"})</span>
            </button>
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
