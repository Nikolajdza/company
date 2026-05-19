import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

type ContactBody = {
  email?: string;
  subject?: string;
  message?: string;
  name?: string;
  source?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Log in development until a mail provider is connected (Resend, SendGrid, etc.)
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", {
      to: siteConfig.contact.email,
      from: email,
      subject: body.subject,
      source: body.source,
    });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
          to: siteConfig.contact.email,
          reply_to: email,
          subject: body.subject ?? `Contact from ${email}`,
          text: [
            `From: ${email}`,
            body.name ? `Name: ${body.name}` : null,
            body.source ? `Source: ${body.source}` : null,
            "",
            message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("[contact] Resend error:", err);
        return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
      }

      return NextResponse.json({ ok: true, sent: true });
    } catch (err) {
      console.error("[contact]", err);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }
  }

  // No mail provider — accept submission for UI demo; connect RESEND_API_KEY later
  return NextResponse.json({
    ok: true,
    sent: false,
    message: "Stored locally only. Set RESEND_API_KEY to send email.",
  });
}
