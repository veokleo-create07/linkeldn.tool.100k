"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const availableTools = "AI writing · Scheduling · Analytics · Inspiration · Libraries";
const decisions = [
  "What matters now?",
  "What story should you tell?",
  "Where are you missing proof?",
  "What should you stop repeating?",
  "What moves your positioning forward?",
];

export function ProblemComparisonCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const decisionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDecision, setActiveDecision] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const revealObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        revealObserver.disconnect();
      }
    }, { threshold: 0.2 });

    const decisionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.decision);
        if (!Number.isNaN(index)) setActiveDecision(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.4, 0.8] },
    );

    revealObserver.observe(card);
    decisionRefs.current.forEach((decision) => decision && decisionObserver.observe(decision));

    return () => {
      revealObserver.disconnect();
      decisionObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-[1.125rem] border border-[#2b628b] bg-[linear-gradient(145deg,#0d3b66_0%,#0f4c81_100%)] px-6 py-8 text-white shadow-[0_24px_64px_-38px_rgba(7,34,62,0.72)] transition-all duration-700 ease-out motion-reduce:transition-none sm:px-9 sm:py-10",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
      )}
    >
      <span className="problem-reflection" aria-hidden="true" />

      <p className="relative text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[0.6875rem]">
        {availableTools}
      </p>

      <div className="relative mt-10 pl-8 sm:mt-14 sm:pl-12">
        <div className="absolute bottom-2 left-0 top-2 w-px bg-white/15" aria-hidden="true">
          <div
            className="absolute left-0 top-0 w-px bg-[#a9ddff] transition-all duration-500 ease-out motion-reduce:transition-none"
            style={{ height: ((activeDecision + 1) / decisions.length * 100).toString() + "%" }}
          />
        </div>

        <p className="mb-6 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#a9ddff] sm:mb-8">
          You still have to decide
        </p>

        <div className="space-y-7 sm:space-y-9">
          {decisions.map((decision, index) => {
            const isActive = index === activeDecision;
            const isPast = index < activeDecision;

            return (
              <div
                key={decision}
                ref={(node) => { decisionRefs.current[index] = node; }}
                data-decision={index}
                className={cn(
                  "relative transition-all duration-500 ease-out motion-reduce:transition-none",
                  isActive ? "translate-x-0 opacity-100" : isPast ? "-translate-y-0.5 opacity-[0.55]" : "translate-y-1 opacity-[0.45]",
                )}
              >
                <p className={cn(
                  "text-[0.625rem] font-medium tracking-[0.16em] transition-colors duration-500 sm:text-xs",
                  isActive ? "text-[#a9ddff]" : "text-white/35",
                )}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className={cn(
                  "mt-1.5 max-w-md font-medium leading-[1.12] tracking-[-0.035em] transition-all duration-500 sm:mt-2 sm:text-[1.75rem] sm:leading-[1.08]",
                  isActive ? "text-[1.55rem] text-white" : "text-[1.35rem] text-white/75",
                )}>
                  {decision}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <p className={cn(
        "relative mt-12 border-t border-white/20 pt-6 text-base font-semibold tracking-[-0.02em] text-white transition-all delay-300 duration-700 ease-out motion-reduce:transition-none sm:mt-16 sm:text-lg",
        activeDecision === decisions.length - 1 && isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-45",
      )}>
        Clonao becomes the decision layer.
      </p>
    </div>
  );
}
