import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description: "Get in touch with Salim President for full-stack engineering roles, technical collaboration, or project inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
