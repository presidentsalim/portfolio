import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested route does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#0a0a0b] px-4">
      <div className="max-w-md w-full p-8 sm:p-12 bg-[#111114] border border-white/[0.08] rounded-2xl text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent block">
          404 // Error
        </span>

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
          Page not located.
        </h1>

        <p className="text-sm text-muted leading-relaxed">
          The requested route does not exist or has been relocated within the architecture.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.08] text-foreground font-mono text-xs uppercase tracking-wider rounded-lg transition-colors"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
