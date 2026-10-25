"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Copy, Check, Send, Github, Linkedin, Twitter, Instagram, Clock, MapPin } from "lucide-react";
import { OWNER } from "@/data/projects";
import Toast from "@/components/ui/Toast";

const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    engagementType: z.string().min(1, "Please select an engagement type"),
    budget: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    website_url: z.string().optional(),
  })
  .refine(
    (data) => {
      const isPaidProject =
        data.engagementType === "Freelance Project" ||
        data.engagementType === "Contract" ||
        data.engagementType === "Consultation";
      if (isPaidProject && (!data.budget || data.budget.trim().length === 0)) {
        return false;
      }
      return true;
    },
    {
      message: "Please select an estimated budget for this project",
      path: ["budget"],
    }
  );

type FormData = z.infer<typeof formSchema>;

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      engagementType: "",
      budget: "",
      message: "",
      website_url: "",
    },
  });

  const selectedEngagement = watch("engagementType");
  const isPaidProject =
    selectedEngagement === "Freelance Project" ||
    selectedEngagement === "Contract" ||
    selectedEngagement === "Consultation";

  useEffect(() => {
    setMounted(true);
    // Explicit title guarantee avoiding any HTML entity double-encoding
    if (typeof document !== "undefined") {
      document.title = `Contact & Inquiries | ${OWNER.name}`;
    }
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
    navigator.clipboard.writeText(OWNER.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(OWNER.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        const successMsg = result.message || "Thank you. Your message has been sent. Salim will get back to you shortly.";
        setFormStatus({ type: "success", message: successMsg });
        setToast({ type: "success", message: successMsg });
        reset();
      } else {
        const errorMsg = result.error || "Unable to send message at this time.";
        setFormStatus({ type: "error", message: errorMsg });
        setToast({ type: "error", message: errorMsg });
      }
    } catch {
      const netErrorMsg = "Network error occurred while connecting to server. Please try again or reach out directly.";
      setFormStatus({ type: "error", message: netErrorMsg });
      setToast({ type: "error", message: netErrorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0a0a0b]">
      {/* Live Region for Screen Readers */}
      <div aria-live="polite" className="sr-only">
        {copiedEmail && "Email address copied to clipboard."}
        {copiedPhone && "Phone number copied to clipboard."}
        {formStatus && formStatus.message}
      </div>

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
            Reach out for full-stack engineering roles, technical collaboration, or project inquiries. Fill out the form below or copy verified contact channels directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#111114] border border-white/[0.08] rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    Send a Message
                  </span>
                  <p className="font-display font-semibold text-lg text-foreground">
                    Project & Role Inquiries
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-[10px] text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Direct Inbox</span>
                </div>
              </div>

              {formStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mb-6 p-4 rounded-xl border text-sm font-mono leading-relaxed ${
                    formStatus.type === "success"
                      ? "bg-[#111911] border-accent/40 text-accent"
                      : "bg-[#1f1212] border-red-500/40 text-red-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot field for spam prevention */}
                <div
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                >
                  <input
                    id="contact_website_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    {...register("website_url")}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-muted">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                      className={`w-full px-4 py-3 min-h-[44px] bg-[#16161c] border rounded-lg text-base sm:text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
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
                      placeholder="name@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email")}
                      className={`w-full px-4 py-3 min-h-[44px] bg-[#16161c] border rounded-lg text-base sm:text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
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

                {/* Engagement Type & Estimated Budget Row */}
                <div className={`grid grid-cols-1 ${isPaidProject ? "sm:grid-cols-2" : ""} gap-5`}>
                  <div className="space-y-2">
                    <label htmlFor="engagementType" className="block font-mono text-xs uppercase tracking-wider text-muted">
                      Engagement Type <span className="text-accent">*</span>
                    </label>
                    <select
                      id="engagementType"
                      aria-invalid={!!errors.engagementType}
                      aria-describedby={errors.engagementType ? "engagement-type-error" : undefined}
                      {...register("engagementType")}
                      className={`w-full px-4 py-3 min-h-[44px] bg-[#16161c] border rounded-lg text-base sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        errors.engagementType ? "border-red-500/80" : "border-white/[0.08]"
                      }`}
                    >
                      <option value="" className="bg-[#16161c] text-foreground">Select engagement</option>
                      <option value="Freelance Project" className="bg-[#16161c] text-foreground">Freelance Project</option>
                      <option value="Full-time Role" className="bg-[#16161c] text-foreground">Full-time Role</option>
                      <option value="Contract" className="bg-[#16161c] text-foreground">Contract</option>
                      <option value="Consultation" className="bg-[#16161c] text-foreground">Consultation</option>
                    </select>
                    {errors.engagementType && (
                      <p id="engagement-type-error" className="text-xs text-red-400 font-mono">
                        {errors.engagementType.message}
                      </p>
                    )}
                  </div>

                  {isPaidProject && (
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block font-mono text-xs uppercase tracking-wider text-muted">
                        Estimated Budget <span className="text-accent">*</span>
                      </label>
                      <select
                        id="budget"
                        aria-invalid={!!errors.budget}
                        aria-describedby={errors.budget ? "budget-error" : undefined}
                        {...register("budget")}
                        className={`w-full px-4 py-3 min-h-[44px] bg-[#16161c] border rounded-lg text-base sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          errors.budget ? "border-red-500/80" : "border-white/[0.08]"
                        }`}
                      >
                        <option value="" className="bg-[#16161c] text-foreground">Select budget range</option>
                        <option value="Under $1,000" className="bg-[#16161c] text-foreground">Under $1,000 (Small / MVP)</option>
                        <option value="$1,000 to $3,000" className="bg-[#16161c] text-foreground">$1,000 to $3,000 (Standard)</option>
                        <option value="$3,000+" className="bg-[#16161c] text-foreground">$3,000+ (Full platform)</option>
                      </select>
                      {errors.budget && (
                        <p id="budget-error" className="text-xs text-red-400 font-mono">
                          {errors.budget.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    Message Details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe your project requirements, technology stack, timeline, or engineering opportunity..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                    className={`w-full px-4 py-3 bg-[#16161c] border rounded-lg text-base sm:text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-y ${
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
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 min-h-[44px] bg-accent hover:bg-accent-hover disabled:opacity-50 text-[#0a0a0b] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer active:translate-y-0"
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

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-muted">
              <span>Strict privacy policy observed</span>
              <span className="text-accent">Zero spam guarantee</span>
            </div>
          </div>

          {/* Right Column: Direct Info, Clock, & Brand-Colored Social Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Direct Channels & Verified Status */}
            <div className="p-6 sm:p-8 bg-[#111114] border border-white/[0.08] rounded-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  Direct Contact
                </span>
                <span className="font-mono text-[11px] text-muted">
                  Guaranteed Reply
                </span>
              </div>

              {/* Availability Status */}
              <div className="flex items-start gap-3 p-3.5 bg-[#16161c] rounded-xl border border-white/[0.06]">
                <span className="relative flex h-3 w-3 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="space-y-0.5">
                  <p className="font-mono text-xs font-semibold text-foreground">
                    {OWNER.availabilityText}
                  </p>
                  <p className="font-mono text-[11px] text-muted">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

              {/* Email Copy Box */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-muted block">Direct Email</span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  aria-label="Copy direct email address to clipboard"
                  className="w-full flex items-center justify-between px-4 py-3 min-h-[44px] bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.08] hover:border-accent/40 rounded-xl text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
                >
                  <span className="font-mono text-xs text-foreground font-medium">
                    {copiedEmail ? "Address Copied to Clipboard" : OWNER.email}
                  </span>
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted group-hover:text-foreground shrink-0 transition-colors" aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Phone Copy Box */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-muted block">Direct Phone / WhatsApp</span>
                <button
                  type="button"
                  onClick={copyPhoneToClipboard}
                  aria-label="Copy direct phone number to clipboard"
                  className="w-full flex items-center justify-between px-4 py-3 min-h-[44px] bg-[#16161c] hover:bg-[#1d1d25] border border-white/[0.08] hover:border-accent/40 rounded-xl text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
                >
                  <span className="font-mono text-xs text-foreground font-medium">
                    {copiedPhone ? "Phone Copied to Clipboard" : OWNER.phone}
                  </span>
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted group-hover:text-foreground shrink-0 transition-colors" aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Location & Timezone Clock */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{OWNER.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-foreground font-medium">
                    {mounted ? currentTime : "Asia/Kolkata"} (IST)
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Social Media Profiles (Matching Footer Brand Morphing Buttons) */}
            <div className="p-6 sm:p-8 bg-[#111114] border border-white/[0.08] rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
                  Verified Social Channels
                </span>
                <span className="font-mono text-[10px] text-accent">
                  Connect & Follow
                </span>
              </div>

              {/* 4 Social Links using identical brand colors & hover morphing buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* GitHub */}
                <a
                  href={OWNER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] bg-[#16161c] text-muted font-mono text-xs tracking-wider transition-all duration-300 ease-out hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
                  aria-label="Visit Salim President on GitHub"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white group-hover:text-black transition-colors" aria-hidden="true" />
                    <span className="font-medium group-hover:text-black transition-colors">GitHub</span>
                  </div>
                  <span className="text-[10px] opacity-60 group-hover:opacity-100 group-hover:text-black transition-all">↗</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={OWNER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] bg-[#16161c] text-muted font-mono text-xs tracking-wider transition-all duration-300 ease-out hover:bg-[#0a66c2] hover:text-black hover:border-[#0a66c2] hover:shadow-lg hover:shadow-[#0a66c2]/25 hover:-translate-y-0.5"
                  aria-label="Visit Salim President on LinkedIn"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0a66c2] group-hover:text-black transition-colors" aria-hidden="true" />
                    <span className="font-medium group-hover:text-black transition-colors">LinkedIn</span>
                  </div>
                  <span className="text-[10px] opacity-60 group-hover:opacity-100 group-hover:text-black transition-all">↗</span>
                </a>

                {/* X (Twitter) */}
                <a
                  href={OWNER.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] bg-[#16161c] text-muted font-mono text-xs tracking-wider transition-all duration-300 ease-out hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
                  aria-label="Visit Salim President on X (Twitter)"
                >
                  <div className="flex items-center gap-2.5">
                    <Twitter className="w-4 h-4 text-white group-hover:text-black transition-colors" aria-hidden="true" />
                    <span className="font-medium group-hover:text-black transition-colors">X</span>
                  </div>
                  <span className="text-[10px] opacity-60 group-hover:opacity-100 group-hover:text-black transition-all">↗</span>
                </a>

                {/* Instagram */}
                <a
                  href={OWNER.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] bg-[#16161c] text-muted font-mono text-xs tracking-wider transition-all duration-300 ease-out hover:bg-[#e4405f] hover:text-black hover:border-[#e4405f] hover:shadow-lg hover:shadow-[#e4405f]/30 hover:-translate-y-0.5"
                  aria-label="Visit Salim President on Instagram"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#e4405f] group-hover:text-black transition-colors" aria-hidden="true" />
                    <span className="font-medium group-hover:text-black transition-colors">Instagram</span>
                  </div>
                  <span className="text-[10px] opacity-60 group-hover:opacity-100 group-hover:text-black transition-all">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
