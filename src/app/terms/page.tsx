import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OWNER } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for utilizing the portfolio website of Salim President.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions | Salim President",
    description: "Terms and conditions for utilizing the portfolio website of Salim President.",
    url: `${siteUrl}/terms`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Salim President",
    description: "Terms and conditions for utilizing the portfolio website of Salim President.",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0a0a0b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to home</span>
          </Link>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">
            Legal
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">
            Last updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-muted leading-relaxed">
          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and browsing this portfolio website, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please discontinue access.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              2. Intellectual Property Rights
            </h2>
            <p>
              All code snippets, case study text, architectural diagrams, and branding elements authored by {OWNER.name} are protected by copyright. Open source repositories referenced on GitHub are licensed under their respective repository licenses.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              3. Permitted Use
            </h2>
            <p>
              You are welcome to review project summaries, test demo workflows, and download the resume for evaluation of employment or consulting contracts. You may not scrape this site for automated mass email lists or repurpose project imagery without attribution.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              4. Disclaimer of Warranties
            </h2>
            <p>
              This website and its demonstrative case studies are provided on an &quot;as is&quot; basis for portfolio showcase purposes. While every effort is made to maintain accuracy, no representation is made regarding third-party external links or repository availability.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              5. Contact Inquiries
            </h2>
            <p>
              For legal inquiries or project licensing permissions, please contact {OWNER.name} via the contact form or directly through LinkedIn.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
