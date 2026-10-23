"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Download, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { OWNER } from "@/data/projects";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setLocalTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0d0d10] border-t border-white/[0.08] mt-24">
      {/* Primary Big CTA Block - The ONLY contact CTA block site-wide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Let&#39;s collaborate
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Let&#39;s build something solid together.
            </h2>
            <p className="text-base text-muted max-w-lg">
              Have a project in mind, an engineering opening, or want to discuss full-stack architecture? Reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={OWNER.resumePath}
              download="Salim_President_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#16161b] hover:bg-[#1f1f26] border border-white/[0.08] text-foreground font-mono text-xs uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Download className="w-4 h-4 text-muted" aria-hidden="true" />
              <span>Download resume</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation, Socials, Location, Clock */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-white/[0.08]">
          {/* Col 1: Bio / Location */}
          <div className="space-y-3">
            <p className="font-display font-bold text-base text-foreground">
              {OWNER.name}
            </p>
            <p className="font-mono text-xs text-muted">
              {OWNER.role}
            </p>
            <p className="text-xs text-muted">
              {OWNER.city}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Links */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={OWNER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={OWNER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={OWNER.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" aria-hidden="true" />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href={OWNER.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timezone / Clock */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Timezone (IST)
            </p>
            <div className="p-3 bg-[#131317] border border-white/[0.06] rounded-lg space-y-1">
              <p className="font-mono text-xs text-muted">Gujarat, India (UTC+5:30)</p>
              <p className="font-mono text-sm font-semibold text-accent">
                {mounted ? localTime : "Asia/Kolkata"}
              </p>
            </div>
            <p className="font-mono text-[11px] text-muted">
              {OWNER.availabilityText}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal links, Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-muted">
          <div>
            &copy; 2026 {OWNER.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-white/[0.05] hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
