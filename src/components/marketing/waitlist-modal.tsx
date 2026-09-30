"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function WaitlistCta({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const openModal = () => {
    setSubmitted(false);
    setOpen(true);
  };

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        Join the waitlist
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="presentation">
          <button
            type="button"
            aria-label="Close waitlist dialog"
            className="absolute inset-0 cursor-default bg-[#101826]/35 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="relative max-h-[calc(100svh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl border border-white/80 bg-[#f8fbfd] p-5 shadow-[0_28px_80px_-28px_rgba(16,24,38,0.5)] sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1.5 text-[#7893a6] transition-colors hover:text-[#101826] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6]"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <h2 id="waitlist-title" className="text-xl font-semibold tracking-[-0.04em] text-[#101826]">You’re in.</h2>
                <p className="mt-3 text-sm leading-6 text-[#647384]">We’ll send you early access when Clonao is ready.</p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h2 id="waitlist-title" className="pr-8 text-xl font-semibold tracking-[-0.04em] text-[#101826]">Join the Clonao waitlist</h2>
                <label htmlFor="waitlist-email" className="mt-6 block text-sm font-medium text-[#26394d]">Email address</label>
                <input
                  ref={inputRef}
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 h-11 w-full rounded-md border border-[#cbdce7] bg-white px-3 text-sm text-[#101826] outline-none transition-shadow placeholder:text-[#9aabba] focus:border-[#3977a9] focus:ring-2 focus:ring-[#8ccbff]/45"
                  placeholder="you@example.com"
                />
                <button type="submit" className="metallic-cta mt-4 inline-flex h-11 w-full items-center justify-center rounded-md px-5 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6] focus-visible:ring-offset-2">
                  Join the waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
