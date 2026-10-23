import React from "react";
import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Exploration of full-stack engineering repositories, role-authenticated backend systems, and responsive frontends built by Salim President.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
