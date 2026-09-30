"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function WaitlistCta({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const openModal = () => {
    setSubmitted(false);
    setClosing(false);
    setOpen(true);
  };

  const closeModal = () => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 220);
  };

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        Join the waitlist
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4" role="presentation">
          <button
            type="button"
            aria-label="Close waitlist dialog"
            className={`absolute inset-0 cursor-default bg-[#101826]/35 backdrop-blur-[2px] ${closing ? "waitlist-backdrop-out" : "waitlist-backdrop-in"}`}
            onClick={closeModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className={`relative max-h-[min(34rem,calc(100svh-1rem))] w-full max-w-md overflow-y-auto rounded-[1.5rem_1.5rem_0_0] border border-white/80 bg-[linear-gradient(145deg,rgba(248,251,253,0.98),rgba(226,239,247,0.96))] p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[0_28px_80px_-28px_rgba(16,24,38,0.5)] sm:rounded-2xl sm:p-8 ${closing ? "waitlist-panel-out" : "waitlist-panel-in"}`}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1.5 text-[#7893a6] transition-colors hover:text-[#101826] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6]"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="py-7 text-center sm:py-8">
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
                <h2 id="waitlist-title" className="pr-8 text-[1.35rem] font-semibold leading-tight tracking-[-0.045em] text-[#101826] sm:text-2xl">Join the Clonao waitlist</h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#647384]">Be first to know when Clonao is ready for early access.</p>
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
