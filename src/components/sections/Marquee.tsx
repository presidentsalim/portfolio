"use client";

import React from "react";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: "normal" | "slow";
  separator?: string;
  className?: string;
}

export default function Marquee({
  items,
  reverse = false,
  speed = "normal",
  separator = "•",
  className = "",
}: MarqueeProps) {
  // Duplicate array 4 times for seamless loop without visual jumps
  const repeatedItems = [...items, ...items, ...items, ...items];

  const animationClass = reverse
    ? "animate-marquee-right"
    : "animate-marquee-left";

  const durationClass = speed === "slow" ? "duration-[38s]" : "duration-[24s]";

  return (
    <div
      className={`relative w-full overflow-hidden whitespace-nowrap select-none py-3 border-y border-white/[0.08] bg-[#0c0c0f] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`inline-flex items-center gap-6 ${animationClass} ${durationClass} hover:[animation-play-state:paused]`}
      >
        {repeatedItems.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted"
          >
            <span>{item}</span>
            <span className="text-accent">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
