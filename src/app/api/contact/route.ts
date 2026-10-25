import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    engagementType: z.string().min(1, "Please select an engagement type"),
    budget: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters").max(2000),
    website_url: z.string().optional(),
    honeypot: z.string().optional(),
  })
  .refine(
    (data) => {
      const isPaid =
        data.engagementType === "Freelance Project" ||
        data.engagementType === "Contract" ||
        data.engagementType === "Consultation";
      if (isPaid && (!data.budget || data.budget.trim().length === 0)) {
        return false;
      }
      return true;
    },
    {
      message: "Please select an estimated budget for this project",
      path: ["budget"],
    }
  );

// Simple in-memory rate limiting
const ipRateLimits = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const rateData = ipRateLimits.get(ip);

    if (rateData && now < rateData.resetAt) {
      if (rateData.count >= 5) {
        return NextResponse.json(
          { error: "Too many requests. Please wait a few minutes before submitting again." },
          { status: 429 }
        );
      }
      rateData.count += 1;
    } else {
      ipRateLimits.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid submission data" },
        { status: 400 }
      );
    }

    // Honeypot bot protection (website_url or legacy honeypot)
    if (
      (parsed.data.website_url && parsed.data.website_url.trim().length > 0) ||
      (parsed.data.honeypot && parsed.data.honeypot.trim().length > 0)
    ) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "presidentsalim379@gmail.com";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is currently pending RESEND_API_KEY configuration. Please copy Salim's email directly or connect on LinkedIn.",
        },
        { status: 503 }
      );
    }

    // Call Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipient,
        subject: `New inquiry from ${parsed.data.name} (${parsed.data.engagementType})`,
        text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nEngagement Type: ${parsed.data.engagementType}\nBudget: ${parsed.data.budget || "Not applicable (Full-time / Direct)"}\n\nMessage:\n${parsed.data.message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      return NextResponse.json(
        { error: `Delivery service response: ${errText || "Unable to dispatch message"}` },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message was sent successfully. Salim will get back to you shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
