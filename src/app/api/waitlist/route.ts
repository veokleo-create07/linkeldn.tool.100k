import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { confirmationEmail } from "@/lib/waitlist-email";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_IP = 5;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requestsByIp.get(ip);

  if (!current || current.resetAt <= now) {
    requestsByIp.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS_PER_IP;
}

function getServerConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.NEXT_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY ?? process.env.NEXT_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  if (!url || !key || !resendKey) {
    throw new Error("Waitlist server configuration is incomplete.");
  }

  return { url, key, resendKey };
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Please try again shortly." }, { status: 429 });
  }

  let body: { email?: unknown; first_name?: unknown; marketing_consent?: unknown };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid email address." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const firstName = typeof body.first_name === "string" ? body.first_name.trim().slice(0, 80) : null;
  const marketingConsent = body.marketing_consent === true;

  if (email.length > 320 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const { url, key, resendKey } = getServerConfig();
    const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
    const resend = new Resend(resendKey);
    const consentedAt = marketingConsent ? new Date().toISOString() : null;

    const { error: insertError } = await supabase.from("waitlist").insert({
      email,
      first_name: firstName,
      source: "homepage",
      status: "waiting",
      marketing_consent: marketingConsent,
      consented_at: consentedAt,
    });

    if (insertError && insertError.code !== "23505") {
      console.error("Waitlist insert failed", insertError);
      return NextResponse.json({ error: "We couldn’t add you right now. Please try again." }, { status: 500 });
    }

    const message = confirmationEmail();
    const { error: emailError } = await resend.emails.send({
      from: "Clonao <team@clonao.com>",
      to: email,
      subject: message.subject,
      html: message.html,
      text: message.text,
    });

    if (!emailError) {
      await supabase.from("waitlist").update({ confirmation_sent_at: new Date().toISOString() }).eq("email", email);
    }

    if (emailError) {
      console.error("Waitlist confirmation email failed", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return NextResponse.json({ error: "We couldn’t add you right now. Please try again." }, { status: 500 });
  }
}
