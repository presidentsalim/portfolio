"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { OWNER } from "@/data/projects";
import { getGsap } from "@/lib/gsap";
import Marquee from "../sections/Marquee";

export default function BadgeCard3D() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const swayRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { gsap, ScrollTrigger } = getGsap();
    const ctx = gsap.context(() => {
      // Animate the outer sway container so it never conflicts with inner card 3D tilt
      if (swayRef.current && containerRef.current) {
        gsap.fromTo(
          swayRef.current,
          { rotateZ: -2.5 },
          {
            rotateZ: 2.5,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
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
      className="relative w-full py-24 bg-[#0a0a0b] overflow-hidden flex flex-col items-center justify-center"
      aria-label="Interactive credential badge"
    >
      {/* Section Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            02
          </span>
          <span className="h-px w-8 bg-white/[0.1]" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Credential ID
          </span>
        </div>
      </div>

      {/* Marquee Above Card */}
      <div className="w-full mb-12">
        <Marquee
          items={[
            "REACT",
            "NEXT.JS",
            "TYPESCRIPT",
            "NODE.JS",
            "ASP.NET CORE",
            "MONGODB",
            "TAILWIND CSS",
            "FASTAPI",
          ]}
          reverse={true}
          speed="slow"
        />
      </div>

      {/* 3D Hanging Badge Container */}
      <div className="relative flex flex-col items-center">
        {/* Lanyard Top Strap & Clasp */}
        <div className="flex flex-col items-center z-10 pointer-events-none">
          <div className="w-6 h-12 bg-[#1a1a20] border-x border-white/[0.1]" />
          <div className="w-10 h-3 bg-[#24242c] rounded-t-sm border border-white/[0.15]" />
          <div className="w-3 h-5 bg-[#3a3a44] rounded-sm border border-white/[0.2] -mt-1" />
        </div>

        {/* Sway Wrapper - controlled by GSAP scroll without style conflicts */}
        <div ref={swayRef} className="perspective-1000 -mt-2 will-change-transform">
          {/* Card interactive Stage */}
          <div
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label={`University credential badge for ${OWNER.name}. Press enter or space to flip.`}
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
                transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              className="preserve-3d relative w-[300px] sm:w-[340px] h-[500px] sm:h-[540px] rounded-2xl shadow-2xl"
            >
              {/* FRONT OF BADGE */}
              <div className="backface-hidden absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#111114] border border-white/[0.12] p-5 flex flex-col justify-between select-none">
                {/* Badge Hole Punch */}
                <div className="w-12 h-3.5 mx-auto bg-[#0a0a0b] rounded-full border border-white/[0.1]" />

                {/* Badge Header */}
                <div className="flex items-center justify-between text-[11px] font-mono text-muted pt-2 border-b border-white/[0.08] pb-2">
                  <span>PORTFOLIO // ID</span>
                  <span className="text-accent">{OWNER.city}</span>
                </div>

                {/* Badge Photo Frame */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-[#0d0d10] border border-white/[0.08]">
                  <Image
                    src={OWNER.badgeFrontImage}
                    alt={`Identification badge front for ${OWNER.name}`}
                    fill
                    sizes="(max-width: 640px) 300px, 340px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Badge Information */}
                <div className="space-y-1.5 pt-2">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">
                    MCA Graduate Student
                  </span>
                  <p className="font-display font-bold text-xl text-foreground">
                    {OWNER.name}
                  </p>
                  <p className="font-mono text-xs text-muted">
                    Uka Tarsadia University
                  </p>
                </div>

                {/* Badge Footer Grid */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.08] text-[10px] font-mono text-muted">
                  <div>
                    <span className="text-foreground font-semibold block">20+</span>
                    <span>Projects Built</span>
                  </div>
                  <div>
                    <span className="text-foreground font-semibold block">100%</span>
                    <span>Learning Focus</span>
                  </div>
                </div>
              </div>

              {/* BACK OF BADGE */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#121217] border border-white/[0.12] p-5 flex flex-col justify-between select-none">
                {/* Badge Hole Punch */}
                <div className="w-12 h-3.5 mx-auto bg-[#0a0a0b] rounded-full border border-white/[0.1]" />

                {/* Badge Back Photo / Info */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-[#0d0d10] border border-white/[0.08]">
                  <Image
                    src={OWNER.badgeBackImage}
                    alt={`Identification badge back for ${OWNER.name}`}
                    fill
                    sizes="(max-width: 640px) 300px, 340px"
                    className="object-cover"
                  />
                </div>

                {/* Back Information */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">
                    Technical Core
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    Focusing on full-stack web development, API security, and database modeling with modern toolchains.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>STATUS: VERIFIED</span>
                  <span className="text-accent">TAP TO FLIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Micro Hint Label */}
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
          [ Tap or press Enter to flip card ]
        </p>
      </div>

      {/* Marquee Below Card */}
      <div className="w-full mt-12">
        <Marquee
          items={[
            "UKA TARSADIA UNIVERSITY",
            "GUJARAT, INDIA",
            "MASTER OF COMPUTER APPLICATIONS",
            "GITHUB @PRESIDENTSALIM",
          ]}
          speed="normal"
        />
      </div>
    </section>
  );
}
