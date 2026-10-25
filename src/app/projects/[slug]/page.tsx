import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import ProjectClient from "./ProjectClient";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const heroImage = project.screenshots[0] || "/profile.jpg";

  return {
    title: project.title,
    description: project.problem,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | Salim President`,
      description: project.problem,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: heroImage,
          width: 1280,
          height: 720,
          alt: `${project.title} case study screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Salim President`,
      description: project.problem,
      images: [heroImage],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <ProjectClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
