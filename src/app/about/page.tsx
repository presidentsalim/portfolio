import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About & Background",
  description: "Background, MCA progression at Uka Tarsadia University, skills matrix, and engineering principles of Salim President.",
};

export default function AboutPage() {
  return <AboutClient />;
}
