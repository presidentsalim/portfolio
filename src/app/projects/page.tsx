import React from "react";
import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Exploration of full-stack engineering repositories, role-authenticated backend systems, and responsive frontends built by Salim President.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects & Case Studies | Salim President",
    description: "Exploration of full-stack engineering repositories, role-authenticated backend systems, and responsive frontends built by Salim President.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Case Studies | Salim President",
    description: "Exploration of full-stack engineering repositories, role-authenticated backend systems, and responsive frontends built by Salim President.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
