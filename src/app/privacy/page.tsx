import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OWNER } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Plain language privacy policy explaining data practices on Salim President's portfolio.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Salim President",
    description: "Plain language privacy policy explaining data practices on Salim President's portfolio.",
    url: `${siteUrl}/privacy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Salim President",
    description: "Plain language privacy policy explaining data practices on Salim President's portfolio.",
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">
            Last updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-muted leading-relaxed">
          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              1. Information We Collect
            </h2>
            <p>
              This website is a personal portfolio showcasing engineering projects by {OWNER.name}. We collect information only when you explicitly submit it through our contact form. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-foreground">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your selected engagement type and estimated project budget (when applicable)</li>
              <li>The content of your message</li>
            </ul>
            <p>
              We do not use tracking cookies, tracking pixels, or third-party behavioral profiling scripts.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              2. How We Use Your Information
            </h2>
            <p>
              The information submitted through the contact form is used solely to respond to your inquiry and communicate regarding potential freelance, contract, or full-time opportunities. We never sell, rent, or trade your contact details with third-party advertisers.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              3. Service Providers
            </h2>
            <p>
              Contact form submissions may be transmitted securely using Resend to deliver emails directly to {OWNER.name}&apos;s verified inbox. Submissions are encrypted during transit using standard TLS protocols.
            </p>
          </section>

          <section className="space-y-3 p-6 bg-[#111114] border border-white/[0.08] rounded-xl">
            <h2 className="font-display font-bold text-xl text-foreground">
              4. Data Retention and Your Rights
            </h2>
            <p>
              Inquiry messages are retained only as long as necessary to conduct professional correspondence. If you would like your messages or contact information deleted, please reach out directly to {OWNER.email}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
