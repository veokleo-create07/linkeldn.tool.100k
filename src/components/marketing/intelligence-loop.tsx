"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stages = ["Understand", "Diagnose", "Strategize", "Recommend", "Create", "Learn"];

const sources = [
  { name: "LinkedIn profile", type: "Profile", status: "Synced" },
  { name: "Brand notes.pdf", type: "PDF", status: "Ingesting" },
  { name: "Personal website", type: "Website", status: "Synced" },
  { name: "Founder story episode", type: "Podcast", status: "Queued" },
  { name: "Workshop recording", type: "Video", status: "Queued" },
];

const moves = [
  {
    title: "Share your client onboarding framework",
    why: "Your strongest proof is still mostly private.",
    priority: "High impact",
  },
  {
    title: "Turn your latest case study into a proof post",
    why: "Show the method behind the result, not just the result.",
    priority: "Build trust",
  },
  {
    title: "Reduce AI tools content this week",
    why: "Make more room for your point of view and lived experience.",
    priority: "Sharpen position",
  },
];

export function IntelligenceLoop() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.step);
        if (!Number.isNaN(index)) setActiveStep(index);
      },
      { rootMargin: "-35% 0px -48% 0px", threshold: 0 },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

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

        <div className="mx-auto mt-16 grid max-w-6xl gap-14 lg:mt-24 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-20">
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-8 left-[1.9rem] top-8 w-px bg-[#a9d5f5]" />
            <ol aria-label="Clonao intelligence stages" className="relative flex flex-col gap-2">
              {stages.map((stage, index) => (
                <li key={stage}>
                  <button
                    ref={(node) => {
                      stepRefs.current[index] = node;
                    }}
                    type="button"
                    data-step={index}
                    onClick={() => setActiveStep(index)}
                    aria-current={activeStep === index ? "step" : undefined}
                    className={cn(
                      "group relative flex w-full items-center gap-4 border-l border-transparent px-4 py-4 text-left transition-colors",
                      activeStep === index ? "border-[#3275ae] bg-white/75" : "hover:border-foreground/15 hover:bg-white/45",
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#8bc8f5] bg-[#f5f9fc] text-xs font-semibold text-[#3275ae] transition-colors",
                        activeStep === index && "border-[#3275ae] bg-[#e3f3fd] text-[#1f6298]",
                        index === 3 && activeStep !== index && "border-[#3275ae]/70",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className={cn("block text-base font-semibold tracking-tight text-foreground/65 transition-colors", activeStep === index && "text-foreground", index === 3 && "text-[#1f6298]")}>{stage}</span>
                      <span className="mt-1 block text-xs font-medium uppercase tracking-[0.12em] text-foreground/35">Live product state</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:sticky lg:top-28">
            <ProductPanel activeStep={activeStep} />
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-6 text-foreground/55 sm:mt-20 sm:text-base">
          Every cycle makes Clonao more useful because every decision is informed by your Brand Graph, strategy, and real performance.
        </p>
      </div>
    </section>
  );
}

function ProductPanel({ activeStep }: { activeStep: number }) {
  return (
    <div className="overflow-hidden border border-foreground/10 bg-white shadow-[0_24px_70px_-48px_hsl(222_34%_12%_/_0.48)]" aria-live="polite">
      <div className="flex h-11 items-center justify-between border-b border-foreground/[0.08] bg-[#fbfdff] px-5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </div>
        <span className="text-[0.6875rem] font-medium tracking-[0.08em] text-foreground/35">APP.CLONAO.COM</span>
        <span className="size-2 rounded-full bg-emerald-400" aria-label="Live" />
      </div>

      <div className="min-h-[28rem] p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-4">
          <div>
            <p className="text-sm font-semibold text-foreground">Clonao workspace</p>
            <p className="mt-1 text-xs text-foreground/45">Personal brand / LinkedIn</p>
          </div>
          <span className="text-xs font-medium text-[#3275ae]">{String(activeStep + 1).padStart(2, "0")} / 06</span>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="pt-6"
          >
            {activeStep === 0 && <UnderstandState />}
            {activeStep === 1 && <DiagnoseState />}
            {activeStep === 2 && <StrategizeState />}
            {activeStep === 3 && <RecommendState />}
            {activeStep === 4 && <CreateState />}
            {activeStep === 5 && <LearnState />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function UnderstandState() {
  return (
    <div>
      <PanelIntro eyebrow="Understand" title="Bring your point of view into focus." />
      <div className="mt-6 space-y-2">
        {sources.map((source, index) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.06 }}
            className="flex items-center gap-3 border border-foreground/[0.08] bg-[#fbfdff] px-3 py-2.5"
          >
            <span className="flex size-7 shrink-0 items-center justify-center bg-[#e8f4fd] text-[0.625rem] font-semibold uppercase text-[#3275ae]">{source.type.slice(0, 2)}</span>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground/75">{source.name}</span>
            <span className={cn("text-[0.6875rem] font-medium", source.status === "Ingesting" ? "text-[#3275ae]" : "text-foreground/35")}>{source.status}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 text-xs text-foreground/45">
        <div className="h-1 flex-1 overflow-hidden bg-foreground/[0.08]"><motion.div className="h-full bg-[#72baf1]" initial={{ width: "18%" }} animate={{ width: "64%" }} transition={{ duration: 1.4, ease: "easeOut" }} /></div>
        <span>Building context</span>
      </div>
    </div>
  );
}

function DiagnoseState() {
  const findings = [
    ["Positioning gap", "Your expertise is broad, but the core promise is still implicit.", "Clarify"],
    ["Missing proof", "Your strongest client method appears in private conversations.", "Surface"],
    ["Overused topic", "AI tool commentary is crowding out your original perspective.", "Reduce"],
  ];

  return (
    <div>
      <PanelIntro eyebrow="Diagnose" title="See what is helping or holding your position back." />
      <div className="mt-6 space-y-3">
        {findings.map(([label, text, action], index) => (
          <motion.div key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="border border-foreground/[0.08] px-4 py-3.5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#3275ae]">{label}</span>
              <span className="text-[0.6875rem] font-medium text-foreground/35">{action}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/65">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StrategizeState() {
  const strategyBlocks = [
    ["Weekly direction", "Teach the method behind your client outcomes"],
    ["Topic mix", "40% expertise · 35% proof · 25% opinion"],
    ["Proof to build", "One public framework from your onboarding process"],
  ];

  return (
    <div>
      <PanelIntro eyebrow="Strategize" title="Turn the diagnosis into a focused plan." />
      <div className="mt-6 space-y-2.5">
        {strategyBlocks.map(([label, text], index) => (
          <motion.div key={label} layout initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3 border border-foreground/[0.08] bg-[#fbfdff] p-4">
            <span className="mt-0.5 size-2 shrink-0 rounded-full bg-[#72baf1]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground/45">{label}</p>
              <p className="mt-1.5 text-sm font-medium leading-6 text-foreground/75">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RecommendState() {
  return (
    <div>
      <PanelIntro eyebrow="Recommend" title="Know what deserves your attention next." />
      <div className="mt-6 space-y-2.5">
        {moves.map((move, index) => (
          <motion.div key={move.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="border border-[#9bcff4] bg-[#f4faff] p-4">
            <div className="flex items-start gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#dff1fd] text-xs font-semibold text-[#3275ae]">{index + 1}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-sm font-semibold leading-5 text-foreground">{move.title}</p>
                  <span className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#3275ae]">{move.priority}</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-foreground/55">{move.why}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CreateState() {
  return (
    <div>
      <PanelIntro eyebrow="Create" title="Give the decision a voice that sounds like you." />
      <div className="mt-6 border border-foreground/[0.08] bg-[#fbfdff] p-4">
        <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-3">
          <span className="text-xs font-medium text-foreground/45">New LinkedIn post</span>
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#3275ae]">Grounded draft</span>
        </div>
        <p className="mt-4 text-sm font-semibold text-foreground">Hook</p>
        <p className="mt-2 text-sm leading-6 text-foreground/75">Most onboarding advice starts too late.</p>
        <p className="mt-4 text-sm font-semibold text-foreground">Draft</p>
        <p className="mt-2 text-sm leading-6 text-foreground/65">
          The best client experience is often decided before the first call. Here is the framework we use to make that invisible work repeatable
          <span className="ml-0.5 inline-block h-4 w-px translate-y-1 animate-pulse bg-[#3275ae]" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function LearnState() {
  const signals = [
    ["Framework posts", "Strongest response", "High"],
    ["Tool roundups", "Low relevance", "Low"],
    ["Client proof", "Building trust", "Rising"],
  ];

  return (
    <div>
      <PanelIntro eyebrow="Learn" title="Let performance sharpen the next recommendation." />
      <div className="mt-6 border border-foreground/[0.08] bg-[#fbfdff] p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/40">Recent signals</span>
          <span className="text-xs text-[#3275ae]">Updating loop</span>
        </div>
        <div className="mt-4 space-y-4">
          {signals.map(([topic, insight, level], index) => (
            <div key={topic}>
              <div className="flex items-center justify-between gap-4 text-xs">
                <span className="font-medium text-foreground/70">{topic}</span>
                <span className="text-foreground/40">{insight}</span>
              </div>
              <div className="mt-2 h-1 bg-foreground/[0.08]"><motion.div initial={{ width: 0 }} animate={{ width: `${78 - index * 20}%` }} transition={{ delay: index * 0.1, duration: 0.6 }} className="h-full bg-[#72baf1]" /></div>
              <p className="mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-foreground/35">Signal: {level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanelIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#3275ae]">{eyebrow}</p>
      <h3 className="mt-3 max-w-lg text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">{title}</h3>
    </div>
  );
}
