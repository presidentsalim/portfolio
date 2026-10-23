"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const categories = ["All", "Full-Stack", "Backend", "Frontend", "Architecture"] as const;

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Catalog
            </span>
            <span className="h-px w-8 bg-white/[0.1]" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Projects
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            Case studies and applications.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Exploration of full-stack engineering repositories, role-authenticated backend systems, and responsive frontends built with modern web technologies.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-white/[0.08]">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? "bg-accent text-[#0a0a0b] font-semibold"
                    : "bg-[#111114] text-muted hover:text-foreground hover:bg-[#18181e] border border-white/[0.06]"
                }`}
              >
                {cat}
                {cat === "All" && ` (${PROJECTS.length})`}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.slug}
              className="group bg-[#111114] border border-white/[0.08] hover:border-white/[0.18] rounded-xl overflow-hidden flex flex-col justify-between transition-colors"
            >
              <div>
                {/* Thumbnail */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative w-full h-56 bg-[#0d0d10] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Image
                    src={project.screenshots[0]}
                    alt={`${project.title} interface screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0a0a0b]/80 border border-white/[0.1] font-mono text-[10px] text-accent uppercase">
                    0{idx + 1}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted">
                    <span className="text-accent">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors leading-snug">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#17171e] text-[10px] font-mono text-muted rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted group-hover:text-foreground transition-colors"
                >
                  <span>View case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
