import { ArrowRight, CalendarDays, Check, Crosshair, Layers3, Route, Target, Users } from "lucide-react";

const strategyRows = [
  { label: "Primary goal", value: "Build authority", icon: Target },
  { label: "Target audience", value: "Operators & founders", icon: Users },
  { label: "Weekly focus", value: "Teach the method behind outcomes", icon: CalendarDays },
  { label: "Content mix", value: "Proof · Opinion · Personal", icon: Layers3 },
];

const nextBestMoves = [
  {
    title: "Share your client onboarding framework",
    goal: "Authority",
    reason: "Strong expertise signal, low recent coverage",
  },
  {
    title: "Turn your latest case study into a proof post",
    goal: "Trust",
    reason: "Strong evidence exists but is underused",
  },
  {
    title: "Reduce AI tools content this week",
    goal: "Positioning",
    reason: "Topic repetition is weakening your position",
  },
];

export function ProductStrategyMoves() {
  return (
    <section aria-labelledby="product-strategy-moves-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">From insight to action</p>
          <h2 id="product-strategy-moves-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Clonao turns diagnosis into direction.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            It builds your strategy, then prioritizes the actions most likely to move your personal brand forward.
          </p>
        </div>

        <StrategyMovesPreview />
      </div>
    </section>
  );
}

function StrategyMovesPreview() {
  return (
    <div aria-label="Clonao strategy and next best moves preview" className="relative rounded-[1.625rem] border border-white/80 bg-[linear-gradient(145deg,rgba(241,247,250,0.94),rgba(194,211,222,0.78))] p-2 shadow-[0_30px_66px_-36px_rgba(20,65,103,0.58)] backdrop-blur-2xl sm:p-3">
      <div className="pointer-events-none absolute inset-0 rounded-[1.625rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.15))]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.2rem] border border-white/80 bg-[#f8fbfd]/72 shadow-[0_18px_48px_-34px_rgba(16,24,38,0.5)]">
        <div className="pointer-events-none absolute right-[-4rem] top-1/2 size-64 -translate-y-1/2 rounded-full bg-[#6fb7fd]/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-stretch lg:grid-cols-[minmax(0,0.88fr)_4rem_minmax(0,1.45fr)]">
          <section className="p-5 sm:p-7 lg:p-8" aria-labelledby="strategy-preview-heading">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Built from diagnosis</p>
            <div className="mt-2 flex items-center gap-2.5">
              <Route className="size-5 text-[#101826]" strokeWidth={1.55} aria-hidden="true" />
              <h3 id="strategy-preview-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">Strategy</h3>
            </div>
            <div className="mt-5 divide-y divide-[#cad9e3]/80 border-y border-[#cad9e3]/80">
              {strategyRows.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 py-3.5">
                  <Icon className="size-4 shrink-0 text-[#3977a9]" strokeWidth={1.6} aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[0.64rem] font-medium uppercase tracking-[0.08em] text-[#7893a6]">{label}</p>
                    <p className="mt-1 text-sm font-medium leading-5 text-[#1d3044]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7893a6]">A clear direction for this week.</p>
          </section>

          <div className="relative flex items-center justify-center px-5 py-1 lg:px-0 lg:py-8" aria-hidden="true">
            <span className="h-px w-full bg-[#71899a]/45 lg:block" />
            <span className="absolute flex size-8 items-center justify-center rounded-full border border-white/90 bg-[#eef5f9]/90 text-[#2563a6] shadow-[0_8px_18px_-12px_rgba(20,65,103,0.7)]">
              <ArrowRight className="size-4" strokeWidth={1.6} />
            </span>
          </div>

          <section className="border-t border-[#cad9e3]/80 bg-white/28 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8" aria-labelledby="next-best-moves-preview-heading">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#2563a6]">Prioritized for you</p>
                <h3 id="next-best-moves-preview-heading" className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#101826]">Next Best Moves</h3>
              </div>
              <Crosshair className="hidden size-5 text-[#2563a6] sm:block" strokeWidth={1.55} aria-hidden="true" />
            </div>
            <div className="mt-5 divide-y divide-[#cad9e3]/80 border-y border-[#cad9e3]/80">
              {nextBestMoves.map((move) => (
                <div key={move.title} className="flex items-start gap-3.5 py-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e2f1fb] text-[#2563a6]">
                    <Check className="size-3.5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <p className="text-sm font-semibold leading-5 text-[#172638]">{move.title}</p>
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#3977a9]">{move.goal}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-[#7893a6]">{move.reason}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7893a6]">Strategy becomes a focused plan, not a blank page.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
