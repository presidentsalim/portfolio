import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description: "Get in touch with Salim President for full-stack engineering roles, technical collaboration, or project inquiries.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Inquiries | Salim President",
    description: "Get in touch with Salim President for full-stack engineering roles, technical collaboration, or project inquiries.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Inquiries | Salim President",
    description: "Get in touch with Salim President for full-stack engineering roles, technical collaboration, or project inquiries.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
