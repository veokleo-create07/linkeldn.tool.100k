"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    if (typeof email !== "string" || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="w-full max-w-[560px]">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center">
        <label htmlFor="hero-waitlist-email" className="sr-only">Email address</label>
        <input
          id="hero-waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="h-11 min-w-0 flex-1 rounded-md border border-white/55 bg-white/90 px-4 text-sm text-[#101826] outline-none transition-shadow placeholder:text-[#7893a6] focus:border-white focus:ring-2 focus:ring-white/55"
        />
        <button type="submit" className="metallic-cta inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          Join the waitlist
        </button>
      </form>
      <p aria-live="polite" className="mt-2 min-h-5 text-center text-xs leading-5 text-white/85 sm:text-left">
        {submitted ? "You’re in. We’ll send you early access when Clonao is ready." : error}
      </p>
    </div>
  );
}
