import React from "react";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import TechStack from "@/components/sections/TechStack";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main id="main-content" className="relative flex flex-col w-full">
      {/* 01 HERO WITH SIDE 3D CARD */}
      <Hero />

      {/* 02 ABOUT */}
      <AboutPreview />

      {/* 03 TECH STACK */}
      <TechStack />

      {/* 04 FEATURED WORK */}
      <FeaturedWork />

      {/* 05 SERVICES */}
      <Services />
    </main>
  );
}
