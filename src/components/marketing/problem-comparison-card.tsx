"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    question: "What matters now",
    detail: "Identify the signal that deserves your attention before you publish again.",
    image: "/dreamy-blue-gradient.jpg",
  },
  {
    question: "What story should you tell",
    detail: "Turn the experience behind your work into something your audience can remember.",
    image: "/ethereal-aqua-gradient.jpg",
  },
  {
    question: "Where are you missing proof",
    detail: "See where your point of view needs evidence, examples, or a stronger result.",
    image: "/lavender-blue-gradient.jpg",
  },
  {
    question: "What should you stop repeating",
    detail: "Make room for the ideas that strengthen your positioning instead of blurring it.",
    image: "/coral-lavender-gradient.jpg",
  },
  {
    question: "What moves your positioning forward",
    detail: "Choose the action that compounds your authority over the next few weeks.",
    image: "/pastel-aqua-gradient.jpg",
  },
];

export function ProblemComparisonCard() {
  const pillarRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.pillar);
        if (!Number.isNaN(index)) setActivePillar(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.6, 0.9] },
    );

    pillarRefs.current.forEach((pillar) => pillar && observer.observe(pillar));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-w-0">
      <p className="text-[0.625rem] font-medium uppercase tracking-[0.19em] text-foreground/40 sm:text-[0.6875rem]">
        You still have to decide
      </p>

      <div className="relative mt-7 overflow-hidden rounded-[1.5rem] bg-[#f7fafc] px-4 py-3 sm:mt-9 sm:px-6 sm:py-5">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(236,247,251,0.56))]" aria-hidden="true" />
        <div className="relative">
          {pillars.map((pillar, index) => {
            const isActive = activePillar === index;

            return (
              <button
                key={pillar.question}
                ref={(node) => { pillarRefs.current[index] = node; }}
                type="button"
                data-pillar={index}
                onMouseEnter={() => setActivePillar(index)}
                onFocus={() => setActivePillar(index)}
                aria-pressed={isActive}
                className={cn(
                  "group relative flex w-full items-start gap-4 overflow-hidden border-b border-foreground/[0.08] px-2 py-5 text-left transition-all duration-500 ease-out last:border-b-0 motion-reduce:transition-none sm:gap-5 sm:px-3 sm:py-6",
                  isActive ? "translate-x-1" : "opacity-65 hover:opacity-100",
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 -z-0 bg-cover bg-center blur-2xl transition-opacity duration-700 motion-reduce:transition-none",
                    isActive ? "opacity-35" : "opacity-10",
                  )}
                  style={{ backgroundImage: "url(" + pillar.image + ")" }}
                  aria-hidden="true"
                />
                <span className={cn(
                  "relative z-10 pt-1 text-[0.625rem] font-medium tracking-[0.16em] transition-colors duration-500 sm:text-xs",
                  isActive ? "text-[#3275ae]" : "text-foreground/35",
                )}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative z-10 min-w-0">
                  <span className={cn(
                    "block text-lg font-semibold leading-tight tracking-[-0.035em] transition-colors duration-500 sm:text-[1.45rem]",
                    isActive ? "text-foreground" : "text-foreground/65",
                  )}>
                    {pillar.question}
                  </span>
                  <span className={cn(
                    "mt-2 block max-w-md text-xs leading-5 transition-colors duration-500 sm:text-sm sm:leading-6",
                    isActive ? "text-foreground/60" : "text-foreground/38",
                  )}>
                    {pillar.detail}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 max-w-sm text-sm font-medium leading-6 tracking-[-0.01em] text-foreground/65 sm:mt-10 sm:text-base">
        Clonao becomes the decision layer for your personal brand.
      </p>
    </div>
  );
}
