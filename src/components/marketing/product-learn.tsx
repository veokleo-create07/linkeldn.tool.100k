import { ArrowRight, Check } from "lucide-react";

const insights = [
  ["Framework posts", "strongest response"],
  ["Client proof", "building trust"],
  ["Tool roundups", "weakening positioning"],
];

const changes = [
  "Increase proof content",
  "Reduce repetitive topics",
  "Double down on strong formats",
  "Update future recommendations",
];

export function ProductLearn() {
  return (
    <section aria-labelledby="product-learn-heading" className="relative isolate overflow-hidden bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/pastel-aqua-gradient.jpg')] bg-cover bg-center opacity-[0.22]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(248,251,253,0.94)_0%,rgba(248,251,253,0.72)_48%,rgba(248,251,253,0.92)_100%)]" aria-hidden="true" />
      <div className="marketing-container relative z-10">
        <div className="max-w-3xl">
          <h2 id="product-learn-heading" className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#050505] sm:text-5xl lg:text-[3.8rem]">
            Every post makes the next decision smarter.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#333333] sm:text-lg sm:leading-8">
            Clonao analyzes what performs, identifies the patterns behind it, and feeds those learnings back into your strategy and next best moves.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-black/15 bg-[url('/pastel-aqua-gradient.jpg')] bg-cover bg-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <div className="pointer-events-none absolute inset-0 bg-white/38" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-6">
                  <p className="text-sm font-semibold tracking-[-0.02em] text-[#050505]">Performance patterns</p>
                  <span className="text-xs text-[#202020]">What changed</span>
                </div>

              <div className="mt-8 h-36 w-full" aria-label="Illustrative performance trend showing stronger response over time" role="img">
                <svg viewBox="0 0 640 144" className="h-full w-full overflow-visible" fill="none" preserveAspectRatio="none">
                  <path d="M2 119C58 116 68 94 120 101C170 108 190 82 239 88C289 94 303 70 350 78C404 88 424 45 472 57C526 70 552 24 638 30" stroke="#101010" strokeWidth="3" strokeLinecap="round" />
                  <path d="M2 119C58 116 68 94 120 101C170 108 190 82 239 88C289 94 303 70 350 78C404 88 424 45 472 57C526 70 552 24 638 30V144H2V119Z" fill="url(#learn-fill)" opacity=".34" />
                  <defs>
                    <linearGradient id="learn-fill" x1="320" y1="20" x2="320" y2="144" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#101010" stopOpacity="0.24" />
                      <stop offset="1" stopColor="#101010" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

                <div className="mt-7 divide-y divide-black/20 border-y border-black/20">
                {insights.map(([label, detail]) => (
                  <div key={label} className="flex items-center justify-between gap-5 py-4">
                    <span className="text-sm font-semibold text-[#101010]">{label}</span>
                    <span className="text-right text-sm text-[#404040]">{detail}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] border border-black/15 bg-[url('/lavender-blue-gradient.jpg')] bg-cover bg-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <div className="pointer-events-none absolute inset-0 bg-white/62" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold tracking-[-0.02em] text-[#050505]">Strategy update</p>
                  <ArrowRight className="size-4 text-[#101010]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-[-0.02em] text-[#050505]">Better recommendation</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-[#050505] sm:text-3xl">What Clonao changes next.</h3>

                <div className="mt-8 divide-y divide-black/20 border-y border-black/20">
                {changes.map((change) => (
                  <div key={change} className="flex items-center gap-3 py-4">
                    <Check className="size-4 shrink-0 text-[#101010]" strokeWidth={1.7} aria-hidden="true" />
                    <span className="text-sm font-medium text-[#202020]">{change}</span>
                  </div>
                ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-[#404040]">Performance becomes context for the next decision, not a report you check once.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
