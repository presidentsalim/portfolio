import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export const metadata: Metadata = {
  title: "About & Background",
  description: "Background, MCA progression at Uka Tarsadia University, skills matrix, and engineering principles of Salim President.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About & Background | Salim President",
    description: "Background, MCA progression at Uka Tarsadia University, skills matrix, and engineering principles of Salim President.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About & Background | Salim President",
    description: "Background, MCA progression at Uka Tarsadia University, skills matrix, and engineering principles of Salim President.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
