"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const stages = [
  {
    name: "Understand",
    description: "Learn from your knowledge, content, and experience.",
    output: "A living picture of what you know and what makes your point of view distinct.",
  },
  {
    name: "Diagnose",
    description: "Find positioning gaps, missing proof, and overused topics.",
    output: "A clearer view of where your personal brand is strong and where it needs evidence.",
  },
  {
    name: "Strategize",
    description: "Decide what your brand should focus on next.",
    output: "A focused direction that connects your expertise to the audience you want to reach.",
  },
  {
    name: "Recommend",
    description: "Prioritize the highest-impact actions.",
    output: "A short list of the decisions most likely to move your positioning forward now.",
    emphasized: true,
  },
  {
    name: "Create",
    description: "Turn those decisions into grounded content.",
    output: "Content prompts rooted in your strategy, experience, and the proof you need to build.",
  },
  {
    name: "Learn",
    description: "Use performance to improve the next recommendation.",
    output: "A sharper next cycle shaped by what your audience actually responds to.",
  },
];

export function IntelligenceLoop() {
  const [activeStage, setActiveStage] = useState(0);
  const active = stages[activeStage];

  return (
    <section aria-labelledby="intelligence-loop-heading" className="border-y border-foreground/[0.07] bg-[#f5f9fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/45 sm:text-sm">How Clonao thinks</p>
          <h2
            id="intelligence-loop-heading"
            className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-foreground sm:text-5xl"
          >
            From scattered knowledge to your next best move.
          </h2>
          <p className="mt-6 text-balance text-base leading-7 text-foreground/60 sm:mt-7 sm:text-lg sm:leading-8">
            Clonao continuously turns what you know, what you publish, and what performs into a clearer personal-brand strategy.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:mt-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20">
          <div>
            <ol className="flex flex-col gap-1" aria-label="Clonao intelligence stages">
              {stages.map((stage, index) => (
                <li key={stage.name}>
                  <button
                    type="button"
                    onClick={() => setActiveStage(index)}
                    aria-current={activeStage === index ? "step" : undefined}
                    className={cn(
                      "group flex w-full items-start gap-4 border-l border-transparent px-4 py-4 text-left transition-colors sm:items-center",
                      activeStage === index ? "border-[#3275ae] bg-white/70" : "hover:border-foreground/15 hover:bg-white/40",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full border border-[#8bc8f5] text-xs font-semibold text-[#3275ae] transition-colors",
                        activeStage === index && "border-[#3275ae] bg-[#e3f3fd] text-[#1f6298]",
                        stage.emphasized && activeStage !== index && "border-[#3275ae]/70",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className={cn("block text-base font-semibold tracking-tight text-foreground/70 transition-colors", activeStage === index && "text-foreground", stage.emphasized && "text-[#1f6298]")}>{stage.name}</span>
                      <span className="mt-1 block max-w-md text-sm leading-6 text-foreground/50">{stage.description}</span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeStage === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="ml-16 border-l border-[#8bc8f5] px-4 pb-5 pt-1 text-sm leading-6 text-foreground/60">
                          {stage.output}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden lg:block">
            <div className="relative overflow-hidden border border-foreground/10 bg-white/75 p-8 shadow-[0_18px_50px_-36px_hsl(222_34%_12%_/_0.35)] xl:p-10">
              <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/40">Clonao intelligence loop</p>
                <span className="text-xs font-medium text-[#3275ae]">{String(activeStage + 1).padStart(2, "0")} / 06</span>
              </div>

              <div className="relative mt-12">
                <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-3 h-px bg-[#8bc8f5]" />
                <div className="relative flex justify-between">
                  {stages.map((stage, index) => (
                    <button
                      key={stage.name}
                      type="button"
                      aria-label={`Show ${stage.name} stage`}
                      onClick={() => setActiveStage(index)}
                      className={cn(
                        "size-6 rounded-full border border-[#8bc8f5] bg-[#f5f9fc] transition-colors",
                        activeStage === index && "border-[#3275ae] bg-[#e3f3fd]",
                      )}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-12"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#3275ae]">{active.name}</p>
                  <h3 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-tight text-foreground xl:text-3xl">{active.description}</h3>
                  <p className="mt-5 max-w-lg text-base leading-7 text-foreground/60">{active.output}</p>
                </motion.div>
              </AnimatePresence>

              <p className="mt-16 border-t border-foreground/[0.08] pt-5 text-sm font-medium leading-6 text-foreground/55">
                Every cycle makes Clonao more useful because every decision is informed by your Brand Graph, strategy, and real performance.
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-6 text-foreground/55 sm:mt-20 sm:text-base lg:hidden">
          Every cycle makes Clonao more useful because every decision is informed by your Brand Graph, strategy, and real performance.
        </p>
      </div>
    </section>
  );
}
