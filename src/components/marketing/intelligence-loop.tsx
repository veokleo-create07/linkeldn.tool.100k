"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stage = { id: string; number: string; title: string; description: string };

const stages: Stage[] = [
  { id: "understand", number: "01", title: "Understand", description: "Build a living picture from your real sources." },
  { id: "diagnose", number: "02", title: "Diagnose", description: "See what your brand is saying today." },
  { id: "strategize", number: "03", title: "Strategize", description: "Turn diagnosis into a focused direction." },
  { id: "recommend", number: "04", title: "Recommend", description: "Prioritize the highest-impact next move." },
  { id: "create", number: "05", title: "Create", description: "Create from strategy, not a blank page." },
  { id: "learn", number: "06", title: "Learn", description: "Let performance sharpen what comes next." },
];

const sources = ["LinkedIn history", "Website", "PDFs", "Notes", "Videos", "Podcasts", "Case studies", "Offers"];

export function IntelligenceLoop() {
  const [activeStep, setActiveStep] = useState(0);
  const triggerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.step);
        if (!Number.isNaN(index)) setActiveStep(index);
      },
      { rootMargin: "-38% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    triggerRefs.current.forEach((trigger) => trigger && observer.observe(trigger));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-labelledby="intelligence-loop-heading" className="border-y border-foreground/[0.07] bg-[#f5f9fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/45 sm:text-sm">How Clonao thinks</p>
          <h2 id="intelligence-loop-heading" className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-foreground sm:text-5xl">From scattered knowledge to your next best move.</h2>
          <p className="mt-6 text-balance text-base leading-7 text-foreground/60 sm:mt-7 sm:text-lg sm:leading-8">Clonao continuously turns what you know, what you publish, and what performs into a clearer personal-brand strategy.</p>
        </div>

        <div className="mx-auto mt-16 hidden max-w-6xl lg:mt-24 lg:grid lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-14">
          <div className="lg:relative"><div className="lg:sticky lg:top-28"><StepRail activeStep={activeStep} onSelect={setActiveStep} /></div></div>
          <div className="mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-28"><ProductPanel activeStep={activeStep} /></div>
            <div className="hidden lg:block" aria-hidden="true">{stages.map((stage, index) => <div key={stage.id} ref={(node) => { triggerRefs.current[index] = node; }} data-step={index} className="h-[78vh] min-h-[34rem]" />)}</div>
          </div>
        </div>

        <div className="mx-auto mt-14 space-y-12 lg:hidden">
          {stages.map((stage, index) => (
            <div key={stage.id}>
              <div className="mb-5 flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#b6d9f2] bg-[#f5f9fc] text-[0.6875rem] font-semibold text-[#3275ae]">{stage.number}</span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{stage.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-foreground/45">{stage.description}</p>
                </div>
              </div>
              <ProductPanel activeStep={index} />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-6 text-foreground/55 sm:mt-20 sm:text-base">Every cycle makes Clonao more useful because every decision is informed by your Brand Graph, strategy, and real performance.</p>
      </div>
    </section>
  );
}

function StepRail({ activeStep, onSelect }: { activeStep: number; onSelect: (index: number) => void }) {
  return <ol aria-label="Clonao intelligence stages" className="relative grid gap-1 lg:block">
    <div aria-hidden="true" className="absolute bottom-7 left-4 top-7 hidden w-px bg-[#c3dff3] lg:block" />
    {stages.map((stage, index) => <li key={stage.id} className="relative">
      <button type="button" onClick={() => onSelect(index)} aria-current={activeStep === index ? "step" : undefined} className={cn("group flex w-full items-start gap-4 border-l border-transparent px-3 py-3 text-left transition-colors duration-300 lg:gap-5 lg:px-0 lg:py-5", activeStep === index ? "border-[#3275ae] bg-white/60 lg:bg-transparent" : "hover:bg-white/45 lg:hover:bg-transparent")}>
        <span className={cn("relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-[#f5f9fc] text-[0.6875rem] font-semibold transition-colors duration-300", activeStep === index ? "border-[#3275ae] bg-[#e4f3fc] text-[#1f6298]" : "border-[#b6d9f2] text-foreground/40", index === 3 && activeStep !== index && "border-[#6bb3e8] text-[#3275ae]")}>{stage.number}</span>
        <span className="min-w-0 pt-0.5"><span className={cn("block text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-base", activeStep === index ? "text-foreground" : "text-foreground/50", index === 3 && activeStep !== index && "text-[#3275ae]")}>{stage.title}</span><span className="mt-1 block max-w-xs text-xs leading-5 text-foreground/40 sm:text-sm">{stage.description}</span></span>
      </button>
    </li>)}
  </ol>;
}

function ProductPanel({ activeStep }: { activeStep: number }) {
  const stage = stages[activeStep];
  return <div className={cn("overflow-hidden border bg-white shadow-[0_28px_80px_-48px_hsl(222_34%_12%_/_0.48)] transition-colors duration-500", activeStep === 3 ? "border-[#8fc9ef]" : "border-foreground/10")} aria-live="polite">
    <div className="flex h-12 items-center justify-between border-b border-foreground/[0.08] bg-[#fbfdff] px-5 sm:px-7"><div className="flex items-center gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-foreground/15" /><span className="size-2 rounded-full bg-foreground/15" /><span className="size-2 rounded-full bg-foreground/15" /></div><span className="text-[0.6875rem] font-medium tracking-[0.08em] text-foreground/35">APP.CLONAO.COM</span><span className="flex items-center gap-2 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-foreground/35"><span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> Live</span></div>
    <div className="p-5 sm:p-8 lg:min-h-[39rem] lg:p-9">
      <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-5"><div><p className="text-sm font-semibold text-foreground">Clonao workspace</p><p className="mt-1 text-xs text-foreground/45">Personal brand / LinkedIn</p></div><div className="text-right"><p className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#3275ae]">{stage.title}</p><p className="mt-1 text-xs text-foreground/35">{stage.number} / 06</p></div></div>
      <div key={stage.id} className="stage-transition pt-7">{activeStep === 0 && <UnderstandState />}{activeStep === 1 && <DiagnoseState />}{activeStep === 2 && <StrategizeState />}{activeStep === 3 && <RecommendState />}{activeStep === 4 && <CreateState />}{activeStep === 5 && <LearnState />}</div>
    </div>
  </div>;
}

function UnderstandState() {
  const extracted = ["Expertise identified", "Stories found", "Opinions mapped", "Proof connected"];
  return <StateLayout title="Clonao learns from your real knowledge." subtitle="The beginning of your Brand Graph: source material becomes structured context.">
    <div className="grid gap-2 sm:grid-cols-2">{sources.map((source, index) => <div key={source} className="flex items-center gap-3 border border-foreground/[0.08] bg-[#fbfdff] px-3 py-3"><span className="flex size-7 shrink-0 items-center justify-center bg-[#e8f4fd] text-[0.625rem] font-semibold uppercase text-[#3275ae]">{source.slice(0, 2)}</span><span className="min-w-0 flex-1 truncate text-xs font-medium text-foreground/70">{source}</span><span className={cn("size-1.5 shrink-0 rounded-full", index < 5 ? "bg-[#63afe7]" : "bg-[#c9d7e2")} aria-label={index < 5 ? "Connected" : "Waiting"} /></div>)}</div>
    <div className="mt-7 border-t border-foreground/[0.08] pt-5"><p className="text-[0.625rem] font-medium uppercase tracking-[0.13em] text-foreground/35">Knowledge extracted</p><div className="mt-3 flex flex-wrap gap-2">{extracted.map((item) => <span key={item} className="border border-[#d8e9f5] bg-[#f4faff] px-2.5 py-1.5 text-xs text-[#3275ae]">{item}</span>)}</div></div>
  </StateLayout>;
}

function DiagnoseState() {
  const findings = [["Strong association", "AI Automation", "8 source signals"], ["Growing association", "Agency Growth", "5 source signals"], ["Weak association", "Founder Strategy", "Needs more proof"], ["Missing proof", "AI implementation results", "Case study found"], ["Overused topic", "AI tools", "Recent content mix"]];
  return <StateLayout title="See what your brand is saying today." subtitle="The Brand Graph makes patterns, gaps, and repetition visible before you decide what to do next.">
    <div className="divide-y divide-foreground/[0.08] border-y border-foreground/[0.08]">{findings.map(([label, value, context], index) => <div key={value} className="flex items-center gap-4 py-3.5"><span className={cn("size-2 shrink-0 rounded-full", index === 3 ? "bg-[#86c5ed]" : index === 4 ? "bg-[#b8c9d7]" : "bg-[#4d9bd6")} aria-hidden="true" /><div className="min-w-0 flex-1"><p className="text-[0.625rem] font-medium uppercase tracking-[0.1em] text-foreground/40">{label}</p><p className="mt-1 text-sm font-medium text-foreground/80">{value}</p></div><span className="hidden text-right text-[0.6875rem] text-foreground/40 sm:block">{context}</span></div>)}</div>
    <p className="mt-5 text-xs leading-5 text-foreground/45">Grounded in LinkedIn history, case studies, notes, and your connected sources.</p>
  </StateLayout>;
}

function StrategizeState() {
  const blocks = [["Primary goal", "Build authority with practical frameworks"], ["Target audience", "Operators growing a modern agency"], ["Weekly focus", "Teach the method behind client outcomes"], ["Content mix", "Authority · Proof · Opinion"]];
  return <StateLayout title="Turn diagnosis into direction." subtitle="Clonao decides what the personal brand should focus on next, with a plan that can actually guide the week.">
    <div className="grid gap-3 sm:grid-cols-2">{blocks.map(([label, value], index) => <div key={label} className={cn("border p-4", index === 0 ? "border-[#9bcff4] bg-[#f4faff]" : "border-foreground/[0.08] bg-[#fbfdff]")}><p className="text-[0.625rem] font-semibold uppercase tracking-[0.11em] text-foreground/40">{label}</p><p className="mt-2 text-sm font-medium leading-5 text-foreground/75">{value}</p></div>)}</div>
  </StateLayout>;
}

function RecommendState() {
  const moves = [["Share your client onboarding framework", "Strong expertise signal, low recent coverage", "Authority", "Case studies + LinkedIn posts"], ["Turn your latest case study into a proof post", "Strong evidence exists but is underused", "Trust", "Recent client case study"], ["Reduce AI tools content this week", "Topic repetition is weakening positioning", "Positioning", "Recent content mix"]];
  return <StateLayout title="Know exactly what to do next." subtitle="Your highest-impact moves, prioritized from strategy, Brand Graph context, and real evidence.">
    <div className="space-y-3">{moves.map(([title, why, goal, context], index) => <div key={title} className="border border-[#8fc9ef] bg-[#f4faff] p-4 shadow-[0_10px_28px_-24px_rgba(31,100,164,0.8)]"><div className="flex items-start gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#d9effd] text-xs font-semibold text-[#236fa9]">{index + 1}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-sm font-semibold leading-5 text-foreground">{title}</p><span className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#3275ae]">{goal}</span></div><p className="mt-1.5 text-xs leading-5 text-foreground/55">{why}</p><p className="mt-2 text-[0.6875rem] text-foreground/40">Supporting context: {context}</p></div></div></div>)}</div>
  </StateLayout>;
}

function CreateState() {
  return <StateLayout title="Create from strategy, not a blank page." subtitle="The Next Best Move carries its context into a grounded draft that sounds like the person behind the brand.">
    <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]"><div className="border border-[#d8e9f5] bg-[#f4faff] p-4"><p className="text-[0.625rem] font-semibold uppercase tracking-[0.11em] text-[#3275ae]">Next Best Move</p><p className="mt-2 text-sm font-semibold leading-5 text-foreground">Share your client onboarding framework</p><p className="mt-3 text-xs leading-5 text-foreground/50">Grounded in your onboarding notes, case studies, and strongest expertise signal.</p></div><div className="border border-foreground/[0.08] bg-[#fbfdff] p-4"><div className="flex items-center justify-between border-b border-foreground/[0.08] pb-3"><span className="text-xs font-medium text-foreground/45">New LinkedIn post</span><span className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#3275ae]">Grounded draft</span></div><p className="mt-4 text-sm font-semibold text-foreground">Most onboarding advice starts too late.</p><p className="mt-2 text-sm leading-6 text-foreground/65">The best client experience is often decided before the first call. Here is the framework we use to make that invisible work repeatable<span className="ml-0.5 inline-block h-4 w-px translate-y-1 animate-pulse bg-[#3275ae]" aria-hidden="true" /></p></div></div>
  </StateLayout>;
}

function LearnState() {
  const signals = [["Framework posts", "Strongest response", "High", "82%"], ["Tool roundups", "Low relevance", "Low", "35%"], ["Client proof", "Building trust", "Rising", "64%"]];
  return <StateLayout title="Let performance sharpen the next recommendation." subtitle="What works feeds back into the system, so the next decision gets more specific to your brand.">
    <div className="border border-foreground/[0.08] bg-[#fbfdff] p-4"><div className="flex items-center justify-between"><span className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-foreground/40">Recent signals</span><span className="text-xs text-[#3275ae]">Updating strategy</span></div><div className="mt-5 space-y-5">{signals.map(([topic, insight, level, width]) => <div key={topic}><div className="flex items-center justify-between gap-4 text-xs"><span className="font-medium text-foreground/75">{topic}</span><span className="text-foreground/40">{insight}</span></div><div className="mt-2 h-1 bg-foreground/[0.08]"><div style={{ width }} className="h-full bg-[#72baf1]" /></div><p className="mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-foreground/35">Signal: {level}</p></div>)}</div></div><p className="mt-5 text-sm font-medium text-foreground/65">Feeding this back into your next recommendations.</p>
  </StateLayout>;
}

function StateLayout({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <div><p className="text-xs font-medium uppercase tracking-[0.14em] text-[#3275ae]">Live product state</p><h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">{title}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/55">{subtitle}</p><div className="mt-7">{children}</div></div>;
}
