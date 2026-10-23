import React from "react";
import Hero from "@/components/sections/Hero";
import BadgeCard3D from "@/components/ui/BadgeCard3D";
import AboutPreview from "@/components/sections/AboutPreview";
import TechStack from "@/components/sections/TechStack";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main id="main-content" className="relative flex flex-col w-full">
      {/* 01 HERO */}
      <Hero />

      {/* 02 3D ID-BADGE CARD */}
      <BadgeCard3D />

      {/* 03 ABOUT */}
      <AboutPreview />

      {/* 04 STACK */}
      <TechStack />

      {/* 05 FEATURED WORK */}
      <FeaturedWork />

      {/* 06 SERVICES */}
      <Services />
    </main>
  );
}
