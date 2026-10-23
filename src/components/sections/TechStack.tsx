"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/projects";

export default function TechStack() {
  return (
    <section
      className="py-24 bg-[#0a0a0b] border-t border-white/[0.08]"
      aria-label="Technical skills section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            04
          </span>
          <span className="h-px w-8 bg-white/[0.1]" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Technical Stack
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Tools and technologies used across full-stack applications.
          </h2>
          <p className="mt-4 text-base text-muted">
            Grouped by architectural layer, spanning client-side state management to database schema design and deployment.
          </p>
        </div>

        {/* 5 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-8 bg-[#111114] border border-white/[0.08] rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <span className="font-mono text-xs text-accent">
                    {group.number}
                  </span>
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    Layer
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#17171d] border border-white/[0.06] text-xs font-mono text-muted rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-foreground cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
