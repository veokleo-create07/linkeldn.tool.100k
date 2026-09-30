import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpen, Check, Network, Route, Sparkles } from "lucide-react";

const nextMoves = [
  "Share your client onboarding framework",
  "Turn your latest case study into a proof post",
  "Reduce AI tools content this week",
];

export function ProductHero() {
  return (
    <section aria-labelledby="product-hero-heading" className="hero-atmosphere -mt-16 overflow-hidden pb-16 pt-24 sm:-mt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      <div className="marketing-container flex flex-col items-center text-center">
        <div className="hero-reveal hero-reveal-delay-1 flex flex-col items-center">
          <h1 id="product-hero-heading" className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]">
            Your personal brand, finally working as a system.
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base font-medium leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
            Clonao understands what you know, diagnoses what your brand needs, builds the strategy, and tells you exactly what to do next.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 mt-6 flex items-center justify-center">
          <Link href="/sign-up" className="metallic-cta inline-flex h-11 items-center justify-center gap-1.5 rounded-md px-5 text-sm font-medium text-white">
            Start for free
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="hero-reveal hero-reveal-delay-3 mt-12 w-full max-w-[1040px] sm:mt-14">
          <ProductSystemPreview />
        </div>
      </div>
    </section>
  );
}

function ProductSystemPreview() {
  return (
    <div aria-label="Clonao product workspace preview" className="relative rounded-[1.5rem] border border-white/70 bg-white/35 p-2 text-left shadow-[0_34px_80px_-42px_rgba(8,41,76,0.65)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-3">
      <div className="overflow-hidden rounded-[1.1rem] border border-[#d9e7f1]/90 bg-[#f8fbfd] shadow-[0_18px_48px_-34px_rgba(16,24,38,0.5)] sm:rounded-[1.35rem]">
        <div className="flex h-10 items-center justify-between border-b border-[#dbe7ef] bg-white/80 px-4 sm:h-12 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-6 items-center justify-center rounded-md bg-[#101826] text-white sm:size-7" aria-hidden="true">
              <Sparkles className="size-3.5" strokeWidth={1.7} />
            </span>
            <span className="text-xs font-semibold tracking-[-0.02em] text-[#101826] sm:text-sm">Clonao workspace</span>
          </div>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#7893a6] sm:block">Personal brand / LinkedIn</span>
          <span className="size-2 rounded-full bg-[#50b987]" aria-label="Workspace synced" />
        </div>

        <div className="grid min-h-[27rem] lg:grid-cols-[11.5rem_minmax(0,1fr)]">
          <aside className="hidden border-r border-[#dbe7ef] bg-[#f2f7fa] p-4 lg:block">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#7893a6]">Workspace</p>
            <p className="mt-2 text-sm font-semibold text-[#101826]">Personal brand</p>
            <p className="mt-1 text-xs text-[#7893a6]">LinkedIn</p>
            <nav className="mt-8 space-y-1" aria-label="Product preview navigation">
              <span className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-[#2563a6] shadow-[0_8px_18px_-16px_rgba(16,24,38,0.45)]"><Route className="size-3.5" />Overview</span>
              <span className="flex items-center gap-2 px-3 py-2 text-xs text-[#6c7d8d]"><Network className="size-3.5" />Brand Graph</span>
              <span className="flex items-center gap-2 px-3 py-2 text-xs text-[#6c7d8d]"><BookOpen className="size-3.5" />Strategy</span>
              <span className="flex items-center gap-2 px-3 py-2 text-xs text-[#6c7d8d]"><BarChart3 className="size-3.5" />Performance</span>
            </nav>
          </aside>

          <div className="min-w-0 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">This week</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.055em] text-[#101826] sm:text-3xl">Good morning, Alex</h2>
                <p className="mt-1 text-sm text-[#7893a6]">Here’s what matters for your brand right now.</p>
              </div>
              <span className="text-xs font-medium text-[#50a77f]">Strategy updated</span>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(14rem,0.75fr)]">
              <section className="rounded-xl border border-[#cfe3f1] bg-white/75 p-4 sm:p-5" aria-labelledby="product-next-moves-heading">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#3977a9]">Prioritized for you</p>
                    <h3 id="product-next-moves-heading" className="mt-1 text-lg font-semibold tracking-[-0.04em] text-[#101826]">Your next best moves</h3>
                  </div>
                  <span className="hidden text-xs text-[#7893a6] sm:block">This week</span>
                </div>
                <div className="mt-4 divide-y divide-[#dce6ee] border-y border-[#dce6ee]">
                  {nextMoves.map((move, index) => (
                    <div key={move} className="flex items-start gap-3 py-3.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e2f1fb] text-[0.65rem] font-semibold text-[#2563a6]">{index + 1}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-5 text-[#1d3044]">{move}</p>
                        <p className="mt-1 text-xs text-[#7893a6]">Grounded in your Brand Graph</p>
                      </div>
                      <Check className="ml-auto mt-1 size-4 shrink-0 text-[#4ca981]" strokeWidth={1.8} />
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <section className="rounded-xl border border-[#dbe7ef] bg-white/65 p-4" aria-labelledby="product-brand-graph-heading">
                  <div className="flex items-center gap-2">
                    <Network className="size-4 text-[#2563a6]" strokeWidth={1.7} />
                    <h3 id="product-brand-graph-heading" className="text-sm font-semibold text-[#101826]">Brand Graph</h3>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#647384]">Your expertise, proof, stories, and offers organized into usable context.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Expertise', 'Proof', 'Stories', 'Offers'].map((item) => <span key={item} className="text-xs text-[#3977a9]">{item}</span>)}
                  </div>
                </section>
                <section className="rounded-xl border border-[#dbe7ef] bg-white/65 p-4" aria-labelledby="product-strategy-heading">
                  <div className="flex items-center gap-2">
                    <Route className="size-4 text-[#2563a6]" strokeWidth={1.7} />
                    <h3 id="product-strategy-heading" className="text-sm font-semibold text-[#101826]">Strategy</h3>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#647384]">Weekly focus: teach the method behind your outcomes.</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e6eef4]"><div className="h-full w-2/3 rounded-full bg-[#8ccbff]" /></div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
