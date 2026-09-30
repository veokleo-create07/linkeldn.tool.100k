"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      form.reset();
    }, 650);
  };

  return (
    <div className="waitlist-enter relative w-full max-w-[600px] rounded-[1.5rem] border border-white/25 bg-[#071d38]/78 p-5 text-left shadow-[0_26px_70px_-28px_rgba(0,27,68,0.85)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-x-0 -mt-5 h-px overflow-hidden sm:-mt-6" aria-hidden="true"><span className="waitlist-sheen block h-full w-1/3 bg-white/45 blur-sm" /></div>
      {submitted ? (
        <div className="py-2 text-center sm:py-1">
          <p className="mt-2 text-lg font-semibold tracking-[-0.035em] text-white">You’re on the list.</p>
          <p className="mt-1 text-sm leading-6 text-white/65">We’ll let you know when Clonao is ready.</p>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">Get early access</h2>
            <p className="mt-1 text-sm leading-6 text-white/65">Be the first to try Clonao when we launch.</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5 flex w-full flex-col gap-2.5 sm:flex-row sm:items-center">
          <label htmlFor="hero-waitlist-email" className="sr-only">Email address</label>
          <input
            id="hero-waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email address"
            disabled={submitting}
            className="h-11 min-w-0 flex-1 rounded-md border border-white/20 bg-white/[0.1] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#8ccbff] focus:bg-white/[0.14] focus:ring-2 focus:ring-[#8ccbff]/30 disabled:opacity-60"
          />
          <button type="submit" disabled={submitting} className="metallic-cta inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-medium text-white transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071d38] disabled:cursor-wait disabled:opacity-70">
            {submitting ? "Joining…" : "Join the waitlist"}
          </button>
          </form>
          <p aria-live="polite" className={`mt-2 min-h-5 text-center text-xs leading-5 ${error ? "text-[#ffd0c7]" : "text-white/45"}`}>
            {error}
          </p>
        </>
      )}
    </div>
  );
}
