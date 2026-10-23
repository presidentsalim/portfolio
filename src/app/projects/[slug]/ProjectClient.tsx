"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Maximize2 } from "lucide-react";
import { type Project } from "@/data/projects";
import Lightbox from "@/components/ui/Lightbox";

interface ProjectClientProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectClient({
  project,
  prevProject,
  nextProject,
}: ProjectClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article className="min-h-screen pt-32 pb-24 bg-[#0a0a0b]">
      {/* Lightbox Modal */}
      <Lightbox
        images={project.screenshots}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
        title={project.title}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to projects catalog</span>
          </Link>
        </div>

        {/* Category & Year */}
        <div className="flex items-center gap-3 text-xs font-mono text-muted mb-4">
          <span className="text-accent uppercase tracking-wider">{project.category}</span>
          <span>:</span>
          <span>{project.year}</span>
        </div>

        {/* Big Title */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight mb-8">
          {project.title}
        </h1>

        {/* Meta Bar */}
        <div className="p-6 sm:p-8 bg-[#111114] border border-white/[0.08] rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">
              My Role
            </span>
            <p className="font-mono text-sm text-foreground">{project.role}</p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">
              Timeline
            </span>
            <p className="font-mono text-sm text-foreground">{project.year}</p>
          </div>

          <div className="space-y-1 sm:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-1.5">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-[#17171e] border border-white/[0.05] text-[10px] font-mono text-muted rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons: Only render if URLs exist */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161c] hover:bg-[#1f1f26] border border-white/[0.08] text-foreground font-mono text-xs uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github className="w-4 h-4 text-muted" />
              <span>Inspect Source Repository</span>
            </a>
          )}
        </div>

        {/* Hero Image with Lightbox Trigger */}
        <div
          onClick={() => openLightbox(0)}
          className="group relative w-full h-72 sm:h-96 md:h-[480px] bg-[#0d0d10] border border-white/[0.08] rounded-xl overflow-hidden mb-16 cursor-pointer"
        >
          <Image
            src={project.screenshots[0]}
            alt={`${project.title} overview screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            priority
          />
          <div className="absolute top-4 right-4 p-2 rounded-lg bg-[#0a0a0b]/80 border border-white/[0.1] text-muted group-hover:text-foreground transition-colors">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-16">
          {/* 01 // THE CHALLENGE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent">01 //</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                The Challenge
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </section>

          {/* 02 // ARCHITECTURE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent">02 //</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                Architecture and Implementation
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
              {project.solution}
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#14141a] border border-white/[0.08] text-xs font-mono text-foreground rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* 03 // OUTCOME */}
          <section className="space-y-4 p-8 bg-[#111114] border border-white/[0.08] rounded-xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent">03 //</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                Outcome and Validation
              </h2>
            </div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl">
              {project.outcome}
            </p>
          </section>

          {/* Interface Gallery */}
          <section className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-2xl text-foreground">
                Interface Gallery
              </h2>
              <span className="font-mono text-xs text-muted">
                Click any asset to inspect in lightbox
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative w-full h-48 bg-[#0d0d10] border border-white/[0.08] hover:border-accent/40 rounded-lg overflow-hidden cursor-pointer transition-colors"
                >
                  <Image
                    src={shot}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 p-1.5 rounded bg-[#0a0a0b]/80 border border-white/[0.1] text-muted group-hover:text-foreground">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0a0a0b]/80 text-[10px] font-mono text-muted">
                    Asset 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Previous / Next Case Study Links (Wrap Around) */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-6 bg-[#111114] border border-white/[0.08] hover:border-white/[0.18] rounded-xl group transition-colors flex flex-col justify-between"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-2">
              Previous Case Study
            </span>
            <p className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
              {prevProject.title}
            </p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-6 bg-[#111114] border border-white/[0.08] hover:border-white/[0.18] rounded-xl group transition-colors flex flex-col justify-between sm:text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-2">
              Next Case Study
            </span>
            <p className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
              {nextProject.title}
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
