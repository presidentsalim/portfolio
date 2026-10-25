"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { OWNER } from "@/data/projects";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 100) {
            // 8px threshold to prevent oscillation / jitter
            if (currentScrollY > lastScrollY.current + 8 && !mobileMenuOpen) {
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current - 8) {
              setIsVisible(true);
            }
          } else {
            setIsVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Body scroll lock on mobile menu open + ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out will-change-transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-between px-5 py-3.5 bg-[#111114]/90 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.14] rounded-2xl shadow-xl shadow-black/40 transition-all duration-200"
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg py-1 px-1 transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-elevated border border-white/[0.1] font-mono font-bold text-xs text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                SP
              </span>
              <span className="font-display font-bold text-sm tracking-tight text-foreground group-hover:text-accent transition-colors">
                {OWNER.name}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 p-1 bg-white/[0.02] border border-white/[0.04] rounded-xl">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-mono tracking-wider rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? "text-accent bg-accent/10 font-semibold"
                        : "text-muted hover:text-foreground hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Availability Pill & Contact CTA Button */}
            <div className="hidden lg:flex items-center gap-3.5">
              <div
                aria-label="Freelance availability status"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161b] border border-white/[0.08] text-[11px] font-mono text-muted"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>Available</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold text-[#0a0a0b] bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-accent/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:translate-y-0"
              >
                <span>Let&#39;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-accent" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-50 md:hidden bg-[#0a0a0b] flex flex-col justify-between p-6 sm:p-8"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-white/[0.1] font-mono font-bold text-xs text-accent">
                SP
              </span>
              <span className="font-display font-bold text-base text-foreground">
                {OWNER.name}
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="w-6 h-6 text-accent" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                >
                  <span className="font-mono text-xs text-muted">0{idx + 1}</span>
                  <span
                    className={`font-display text-3xl font-bold tracking-tight transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 ${
                      isActive ? "text-accent" : "text-muted group-hover:text-accent"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{OWNER.availabilityText}</span>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors"
            >
              Contact Salim
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
