import { ArrowRight, Check, RefreshCw, Route, TrendingDown, TrendingUp } from "lucide-react";

const performancePatterns = [
  { label: "Framework posts", detail: "strongest response", icon: TrendingUp, tone: "text-[#2f8b68]" },
  { label: "Client proof", detail: "building trust", icon: TrendingUp, tone: "text-[#3977a9]" },
  { label: "Tool roundups", detail: "weakening positioning", icon: TrendingDown, tone: "text-[#a06f24]" },
];

const strategyChanges = [
  "Increase proof content",
  "Reduce repetitive topics",
  "Double down on strong formats",
  "Update next recommendations",
];

export function ProductLearn() {
  return (
    <section aria-labelledby="product-learn-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Learn</p>
          <h2 id="product-learn-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Every post makes the next decision smarter.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Clonao turns performance into clear signals, updates your strategy, and improves what it recommends next.
          </p>
        </div>

        <LearnPreview />
      </div>
    </section>
  );
}

function LearnPreview() {
  return (
    <div aria-label="Clonao performance learning and strategy update preview" className="relative rounded-[1.625rem] border border-white/80 bg-[linear-gradient(145deg,rgba(241,247,250,0.94),rgba(194,211,222,0.78))] p-2 shadow-[0_30px_66px_-36px_rgba(20,65,103,0.58)] backdrop-blur-2xl sm:p-3">
      <div className="pointer-events-none absolute inset-0 rounded-[1.625rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.15))]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.2rem] border border-white/80 bg-[#f8fbfd]/72 shadow-[0_18px_48px_-34px_rgba(16,24,38,0.5)]">
        <div className="pointer-events-none absolute bottom-[-5rem] left-1/2 size-64 -translate-x-1/2 rounded-full bg-[#8ccbff]/18 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-stretch lg:grid-cols-[minmax(0,0.9fr)_4rem_minmax(0,1.3fr)]">
          <section className="p-5 sm:p-7 lg:p-8" aria-labelledby="performance-patterns-heading">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Performance patterns</p>
            <div className="mt-2 flex items-center gap-2.5">
              <TrendingUp className="size-5 text-[#101826]" strokeWidth={1.55} aria-hidden="true" />
              <h3 id="performance-patterns-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">What performed</h3>
            </div>
            <div className="mt-5 divide-y divide-[#cad9e3]/80 border-y border-[#cad9e3]/80">
              {performancePatterns.map(({ label, detail, icon: Icon, tone }) => (
                <div key={label} className="flex items-center gap-3 py-4">
                  <Icon className={`size-4 shrink-0 ${tone}`} strokeWidth={1.7} aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1d3044]">{label}</p>
                    <p className="mt-1 text-xs leading-5 text-[#7893a6]">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7893a6]">Real performance becomes useful context.</p>
          </section>

          <div className="relative flex items-center justify-center px-5 py-1 lg:px-0 lg:py-8" aria-hidden="true">
            <span className="h-px w-full bg-[#71899a]/45" />
            <span className="absolute flex size-8 items-center justify-center rounded-full border border-white/90 bg-[#eef5f9]/90 text-[#2563a6] shadow-[0_8px_18px_-12px_rgba(20,65,103,0.7)]">
              <ArrowRight className="size-4" strokeWidth={1.6} />
            </span>
          </div>

          <section className="border-t border-[#cad9e3]/80 bg-white/28 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8" aria-labelledby="strategy-update-heading">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#2563a6]">Insight → strategy update</p>
                <div className="mt-2 flex items-center gap-2.5">
                  <RefreshCw className="size-5 text-[#101826]" strokeWidth={1.55} aria-hidden="true" />
                  <h3 id="strategy-update-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">What Clonao changes</h3>
                </div>
              </div>
              <Route className="hidden size-5 text-[#3977a9] sm:block" strokeWidth={1.55} aria-hidden="true" />
            </div>
            <div className="mt-5 divide-y divide-[#cad9e3]/80 border-y border-[#cad9e3]/80">
              {strategyChanges.map((change) => (
                <div key={change} className="flex items-center gap-3 py-3.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e2f1fb] text-[#2563a6]"><Check className="size-3" strokeWidth={2} aria-hidden="true" /></span>
                  <span className="text-sm font-medium text-[#1d3044]">{change}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#3977a9]">
              <span className="size-1.5 rounded-full bg-[#4d9cf3]" aria-hidden="true" />
              Feeding this back into your next recommendation.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
