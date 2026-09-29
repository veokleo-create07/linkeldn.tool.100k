"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const existingTools = ["AI writing", "Scheduling", "Analytics", "Inspiration", "Content libraries"];
const decisionsLeftToMake = ["What topic matters now", "Which story to tell", "Where you need more proof", "What to stop repeating", "What will move your positioning forward"];

export function ProblemComparisonCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "overflow-hidden rounded-[1.125rem] border border-[#d7e8f0] bg-[linear-gradient(145deg,#fafdff_0%,#f4fbfc_52%,#eefaf8_100%)] p-6 shadow-[0_20px_55px_-38px_rgba(31,77,102,0.34)] transition-all duration-700 ease-out motion-reduce:transition-none sm:p-8",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
      )}
    >
      <div className={cn("transition-opacity duration-700 ease-out motion-reduce:transition-none", isVisible ? "opacity-[0.55]" : "opacity-[0.45]")}>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-foreground/45">You already have</p>
        <ul className="mt-4 space-y-3">
          {existingTools.map((tool) => (
            <li key={tool} className="flex items-center gap-3 text-sm font-medium text-foreground/55 sm:text-[0.9375rem]">
              <span className="size-1.5 shrink-0 rounded-full bg-[#b8cedb]" aria-hidden="true" />
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-7 h-px bg-[#cfe0e8]" aria-hidden="true" />

      <div className={cn("transition-all delay-100 duration-700 ease-out motion-reduce:transition-none", isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70 motion-reduce:translate-y-0 motion-reduce:opacity-100")}>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[#3275ae]">But you still have to decide</p>
        <ul className="mt-4 space-y-3">
          {decisionsLeftToMake.map((decision) => (
            <li key={decision} className="flex items-start gap-3 text-sm font-medium leading-5 text-foreground/80 sm:text-[0.9375rem]">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#65b3e7]" aria-hidden="true" />
              {decision}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 border-t border-[#cfe0e8] pt-6 text-base font-semibold leading-6 tracking-[-0.015em] text-foreground sm:text-lg">
        That decision layer is what Clonao is built for.
      </p>
    </div>
  );
}
