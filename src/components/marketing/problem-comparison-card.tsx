"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const existingTools = ["AI writing", "Scheduling", "Analytics", "Inspiration", "Content libraries"];
const decisionsLeftToMake = ["What matters now.", "What story to tell.", "Where you need proof.", "What to stop repeating.", "What moves your positioning forward."];

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
        "relative overflow-hidden rounded-[1.125rem] border border-[#2b628b] bg-[linear-gradient(145deg,#0d3b66_0%,#0f4c81_100%)] p-6 text-white shadow-[0_24px_64px_-38px_rgba(7,34,62,0.72)] transition-all duration-700 ease-out motion-reduce:transition-none sm:p-9",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
      )}
    >
      <span className="problem-reflection" aria-hidden="true" />

      <div className={cn("relative transition-opacity duration-700 ease-out motion-reduce:transition-none", isVisible ? "opacity-[0.52]" : "opacity-[0.4]")}>
        <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-white/65">You already have</p>
        <div className="mt-5 divide-y divide-white/[0.1]">
          {existingTools.map((tool) => (
            <div key={tool} className="py-2.5 text-sm font-medium text-white/70 sm:text-[0.9375rem]">
              {tool}
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 h-px bg-white/20" aria-hidden="true" />

      <div className={cn("relative transition-all delay-100 duration-700 ease-out motion-reduce:transition-none", isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70 motion-reduce:translate-y-0 motion-reduce:opacity-100")}>
        <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#a9ddff]">You still have to decide</p>
        <div className="mt-5">
          {decisionsLeftToMake.map((decision) => (
            <div key={decision} className="border-b border-white/[0.14] py-3 text-lg font-medium leading-6 tracking-[-0.02em] text-white sm:text-xl sm:leading-7">
              {decision}
            </div>
          ))}
        </div>
      </div>

      <p className="relative mt-8 border-t border-white/25 pt-6 text-base font-semibold leading-6 tracking-[-0.015em] text-white sm:text-lg">
        Clonao is the decision layer.
      </p>
    </div>
  );
}
