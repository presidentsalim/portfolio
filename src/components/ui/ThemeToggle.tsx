"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        disabled
        className={`inline-flex items-center justify-center gap-2 p-2 rounded-xl border border-white/[0.08] bg-surface-elevated text-muted opacity-60 ${className}`}
      >
        <span className="w-4 h-4 block" />
        {showLabel && <span className="font-mono text-xs">Theme</span>}
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex items-center justify-center gap-2 p-2 rounded-xl border border-border hover:border-accent/40 bg-surface-elevated hover:bg-surface text-muted hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun
            className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-45"
            aria-hidden="true"
          />
        ) : (
          <Moon
            className="w-4 h-4 text-accent transition-transform duration-300 group-hover:-rotate-12"
            aria-hidden="true"
          />
        )}
      </div>
      {showLabel && (
        <span className="font-mono text-xs font-medium text-foreground group-hover:text-accent transition-colors">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}

