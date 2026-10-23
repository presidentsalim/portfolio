"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Copy, Check, Send, Github, Linkedin, Twitter, Instagram, Clock, MapPin } from "lucide-react";
import { OWNER } from "@/data/projects";
import Toast from "@/components/ui/Toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select an area of collaboration"),
  budget: z.string().min(1, "Please select an estimated budget or project scope"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmailToClipboard = () => {
    // Assembled dynamically to prevent raw email scraping
    const user = "salim.president.dev";
    const domain = "gmail.com";
    const address = `${user}@${domain}`;
    navigator.clipboard.writeText(address);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    const code = "+91";
    const num = "98765 43210";
    navigator.clipboard.writeText(`${code} ${num}`);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setToast({
          type: "success",
          message: result.message || "Thank you! Your message has been sent.",
        });
        reset();
      } else {
        setToast({
          type: "error",
          message: result.error || "Unable to send message at this time.",
        });
      }
    } catch {
      setToast({
        type: "error",
        message: "Network error occurred while connecting to server. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0a0a0b]">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Contact
            </span>
            <span className="h-px w-8 bg-white/[0.1]" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Inquiries
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            Start a conversation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Reach out for full-stack opportunities, technical questions, or project collaborations. Fill out the validated form below or copy direct contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#111114] border border-white/[0.08] rounded-2xl p-6 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* Honeypot field for spam prevention */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this</label>
                <input
                  id="hp_field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("honeypot")}
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                    className={`w-full px-4 py-3 bg-[#16161c] border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      errors.name ? "border-red-500/80" : "border-white/[0.08]"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 font-mono">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                    className={`w-full px-4 py-3 bg-[#16161c] border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      errors.email ? "border-red-500/80" : "border-white/[0.08]"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 font-mono">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    Project Area <span className="text-accent">*</span>
                  </label>
                  <select
                    id="projectType"
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "project-type-error" : undefined}
                    {...register("projectType")}
                    className={`w-full px-4 py-3 bg-[#16161c] border rounded-lg text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      errors.projectType ? "border-red-500/80" : "border-white/[0.08]"
                    }`}
                  >
                    <option value="">Select scope</option>
                    <option value="Full-Stack Application">Full-Stack Application</option>
                    <option value="REST API & Backend">REST API & Backend</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Full-time Engineering Role">Full-time Engineering Role</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                  {errors.projectType && (
                    <p id="project-type-error" className="text-xs text-red-400 font-mono">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    Estimated Budget / Scope <span className="text-accent">*</span>
                  </label>
                  <select
                    id="budget"
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? "budget-error" : undefined}
                    {...register("budget")}
                    className={`w-full px-4 py-3 bg-[#16161c] border rounded-lg text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      errors.budget ? "border-red-500/80" : "border-white/[0.08]"
                    }`}
                  >
                    <option value="">Select range</option>
                    <option value="Under $1,000">Under $1,000 (Small / MVP)</option>
                    <option value="$1,000 to $3,000">$1,000 to $3,000 (Standard)</option>
                    <option value="$3,000+">$3,000+ (Full platform)</option>
                    <option value="Full-time Salary Discussion">Full-time Role / Contract</option>
                  </select>
                  {errors.budget && (
                    <p id="budget-error" className="text-xs text-red-400 font-mono">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-muted">
                  Message Details <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your project, timeline, and key requirements..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                  className={`w-full px-4 py-3 bg-[#16161c] border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-y ${
                    errors.message ? "border-red-500/80" : "border-white/[0.08]"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 font-mono">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-accent hover:bg-accent-hover disabled:opacity-50 text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info & Copy Buttons */}
          <div className="lg:col-span-5 space-y-8">
            {/* Copy To Clipboard Modules (No plain text in initial markup) */}
            <div className="p-6 sm:p-8 bg-[#111114] border border-white/[0.08] rounded-2xl space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-accent block">
                Direct Channels
              </span>

              {/* Email Copy */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-muted block">Direct Email</span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="w-full flex items-center justify-between px-4 py-3 bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.08] rounded-xl text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="font-mono text-xs text-foreground">
                    {copiedEmail ? "Address Copied to Clipboard" : "[ Click to copy verified email ]"}
                  </span>
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-accent shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted shrink-0" />
                  )}
                </button>
              </div>

              {/* Phone Copy */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-muted block">Direct Phone / WhatsApp</span>
                <button
                  type="button"
                  onClick={copyPhoneToClipboard}
                  className="w-full flex items-center justify-between px-4 py-3 bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.08] rounded-xl text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="font-mono text-xs text-foreground">
                    {copiedPhone ? "Phone Copied to Clipboard" : "[ Click to copy verified phone ]"}
                  </span>
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-accent shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted shrink-0" />
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Local Time */}
            <div className="p-6 sm:p-8 bg-[#111114] border border-white/[0.08] rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {OWNER.availabilityText}
                  </p>
                  <p className="font-mono text-xs text-muted">
                    Response time usually within 24 hours
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted" />
                  <span>{OWNER.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-foreground">{mounted ? currentTime : "Asia/Kolkata"}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 sm:p-8 bg-[#111114] border border-white/[0.08] rounded-2xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-muted block">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={OWNER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.06] text-xs font-mono text-muted hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={OWNER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.06] text-xs font-mono text-muted hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={OWNER.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.06] text-xs font-mono text-muted hover:text-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X (Twitter)</span>
                </a>
                <a
                  href={OWNER.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.06] text-xs font-mono text-muted hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
