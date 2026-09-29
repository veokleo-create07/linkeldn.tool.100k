"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const decisions = [
  "What matters now?",
  "What story should you tell?",
  "Where are you missing proof?",
  "What should you stop repeating?",
  "What moves your positioning forward?",
];

const scatter = [
  { x: -18, y: 0 },
  { x: 14, y: 10 },
  { x: -8, y: 4 },
  { x: 18, y: -8 },
  { x: -2, y: 12 },
];

export function ProblemComparisonCard() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      setRevealedCount(decisions.length);
      return;
    }

    const fieldObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        fieldObserver.disconnect();
      }
    }, { threshold: 0.15 });

    const pillObserver = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number((entry.target as HTMLElement).dataset.decision))
          .filter((index) => !Number.isNaN(index));

        if (newlyVisible.length > 0) {
          setRevealedCount((current) => Math.max(current, ...newlyVisible.map((index) => index + 1)));
        }
      },
      { threshold: 0.55 },
    );

    fieldObserver.observe(field);
    pillRefs.current.forEach((pill) => pill && pillObserver.observe(pill));

    return () => {
      fieldObserver.disconnect();
      pillObserver.disconnect();
    };
  }, []);

  const clarity = Math.min(revealedCount / decisions.length, 1);

  return (
    <div ref={fieldRef} className="relative min-h-[31rem] py-2 sm:min-h-[34rem] sm:py-4">
      <p className="text-[0.625rem] font-medium uppercase tracking-[0.19em] text-foreground/40 sm:text-[0.6875rem]">
        You still have to decide
      </p>

      <div className="relative mt-8 sm:mt-12">
        {decisions.map((decision, index) => {
          const isRevealed = index < revealedCount;
          const distance = 1 - clarity;
          const offset = scatter[index];

          return (
            <div
              key={decision}
              ref={(node) => { pillRefs.current[index] = node; }}
              data-decision={index}
              className={cn(
                "relative w-fit max-w-full transition-all duration-700 ease-out motion-reduce:transition-none",
                index > 0 && "mt-5 sm:mt-7",
                index % 2 === 1 && "ml-auto",
                !isRevealed && "translate-y-3 opacity-0",
                isRevealed && "translate-y-0 opacity-100",
              )}
              style={{
                transform: isRevealed ? "translate(" + (offset.x * distance).toString() + "px, " + (offset.y * distance).toString() + "px) scale(" + (0.98 + clarity * 0.02).toString() + ")" : undefined,
                transitionDelay: isVisible ? (index * 110).toString() + "ms" : "0ms",
              }}
            >
              <span className="inline-flex max-w-full rounded-full border border-[#dce8ef] bg-white px-4 py-3 text-sm font-medium leading-5 tracking-[-0.01em] text-foreground/75 shadow-[0_8px_20px_-18px_rgba(24,54,83,0.5)] sm:px-5 sm:py-3.5 sm:text-base">
                {decision}
              </span>
            </div>
          );
        })}
      </div>

      <p className={cn(
        "mt-10 max-w-sm text-sm font-medium leading-6 tracking-[-0.01em] text-foreground/65 transition-all duration-700 ease-out motion-reduce:transition-none sm:mt-14 sm:text-base",
        revealedCount === decisions.length ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}>
        Clonao turns those decisions into direction.
      </p>
    </div>
  );
}
