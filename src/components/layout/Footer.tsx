"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { OWNER } from "@/data/projects";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: OWNER.github,
    icon: Github,
    brandColor: "#ffffff",
    hoverClasses: "hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/10",
    iconColor: "text-white",
  },
  {
    name: "LinkedIn",
    href: OWNER.linkedin,
    icon: Linkedin,
    brandColor: "#0a66c2",
    hoverClasses: "hover:bg-[#0a66c2] hover:text-black hover:border-[#0a66c2] hover:shadow-lg hover:shadow-[#0a66c2]/25",
    iconColor: "text-[#0a66c2]",
  },
  {
    name: "X (Twitter)",
    href: OWNER.x,
    icon: Twitter,
    brandColor: "#ffffff",
    hoverClasses: "hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/10",
    iconColor: "text-white",
  },
  {
    name: "Instagram",
    href: OWNER.instagram,
    icon: Instagram,
    brandColor: "#e4405f",
    hoverClasses: "hover:bg-[#e4405f] hover:text-black hover:border-[#e4405f] hover:shadow-lg hover:shadow-[#e4405f]/30",
    iconColor: "text-[#e4405f]",
  },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OWNER.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0d0d10] border-t border-white/[0.08] mt-24">
      {/* Primary Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                Start a Conversation
              </span>
              <span className="h-px w-6 bg-white/[0.1]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              Let&#39;s build something solid together.
            </h2>
            <p className="text-base text-muted max-w-lg leading-relaxed">
              Have an open engineering role, freelance project, or full-stack architecture inquiry? Reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={OWNER.resumePath}
              download="Salim_President_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#16161b] hover:bg-[#1f1f26] border border-white/[0.08] hover:border-white/[0.18] text-foreground font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Download className="w-4 h-4 text-muted" aria-hidden="true" />
              <span>Download resume</span>
            </a>
          </div>
        </div>

        {/* Balanced 4-Column Grid: Identity, Navigation, Connect, Clock & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/[0.08]">
          {/* Col 1: Identity & Availability */}
          <div className="space-y-4">
            <div>
              <p className="font-display font-bold text-lg text-foreground">
                {OWNER.name}
              </p>
              <p className="font-mono text-xs text-accent font-medium mt-0.5">
                {OWNER.role}
              </p>
              <p className="text-xs text-muted mt-1">
                {OWNER.city}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141419] border border-white/[0.08] text-[11px] font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{OWNER.availabilityText}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span className="text-[10px] text-accent">/01</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span className="text-[10px] text-accent">/02</span>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span className="text-[10px] text-accent">/03</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span className="text-[10px] text-accent">/04</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Links that morph into solid brand buttons on hover */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              Connect Online
            </p>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-between px-3.5 py-2 rounded-lg border border-white/[0.08] bg-[#141418] text-muted font-mono text-xs tracking-wider transition-all duration-300 ease-out ${social.hoverClasses}`}
                    aria-label={`Visit Salim President on ${social.name}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent
                        className={`w-4 h-4 transition-colors duration-200 ${social.iconColor} group-hover:text-black`}
                        aria-hidden="true"
                      />
                      <span className="font-medium group-hover:text-black transition-colors duration-200">
                        {social.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:text-black transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 4: Timezone & Quick Email Copy */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              Live IST Clock
            </p>
            <div className="p-3.5 bg-[#141419] border border-white/[0.08] rounded-xl space-y-1">
              <p className="font-mono text-[11px] text-muted">
                Gujarat, India (UTC+5:30)
              </p>
              <p className="font-mono text-base font-bold text-accent tracking-wide">
                {mounted ? localTime : "12:00:00 AM"}
              </p>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-between px-3 py-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-lg font-mono text-xs text-muted hover:text-foreground transition-colors group"
                aria-label="Copy email address to clipboard"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span className="truncate text-[11px]">{OWNER.email}</span>
                </div>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted group-hover:text-foreground shrink-0" aria-hidden="true" />
                )}
              </button>
            </div>
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/[0.05] hover:text-foreground border border-transparent hover:border-white/[0.08] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

