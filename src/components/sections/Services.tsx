"use client";

import React from "react";
import { SERVICES } from "@/data/projects";

export default function Services() {
  return (
    <section
      className="py-24 bg-[#0a0a0b] border-t border-white/[0.08]"
      aria-label="Services and capabilities section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            05
          </span>
          <span className="h-px w-8 bg-white/[0.1]" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Capabilities
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Services offered across modern web stacks.
          </h2>
          <p className="mt-4 text-base text-muted">
            Specialized engineering services focused on performance, security, and maintainable application code.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 sm:p-10 bg-[#111114] border border-white/[0.08] hover:border-accent/40 transition-colors rounded-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <span className="font-mono text-xs text-accent">
                    {srv.number}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Engineering Service
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {srv.title}
                </h3>

                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
                  {srv.subtitle}
                </p>

                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
