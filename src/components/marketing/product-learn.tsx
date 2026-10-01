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
    <section aria-labelledby="product-learn-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Learn</p>
          <h2 id="product-learn-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Every post makes the next decision smarter.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Clonao analyzes what performs, identifies the patterns behind it, and feeds those learnings back into your strategy and next best moves.
          </p>
        </div>

        <div className="mt-14 border-y border-[#cad9e3] sm:mt-16">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="py-8 sm:py-10 lg:pr-16">
              <div className="flex items-center justify-between gap-6">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Performance patterns</p>
                <span className="text-xs text-[#7893a6]">What changed</span>
              </div>

              <div className="mt-8 h-36 w-full" aria-label="Illustrative performance trend showing stronger response over time" role="img">
                <svg viewBox="0 0 640 144" className="h-full w-full overflow-visible" fill="none" preserveAspectRatio="none">
                  <path d="M2 119C58 116 68 94 120 101C170 108 190 82 239 88C289 94 303 70 350 78C404 88 424 45 472 57C526 70 552 24 638 30" stroke="#4d9cf3" strokeWidth="3" strokeLinecap="round" />
                  <path d="M2 119C58 116 68 94 120 101C170 108 190 82 239 88C289 94 303 70 350 78C404 88 424 45 472 57C526 70 552 24 638 30V144H2V119Z" fill="url(#learn-fill)" opacity=".34" />
                  <defs>
                    <linearGradient id="learn-fill" x1="320" y1="20" x2="320" y2="144" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8ccbff" />
                      <stop offset="1" stopColor="#8ccbff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="mt-7 divide-y divide-[#cad9e3] border-y border-[#cad9e3]">
                {insights.map(([label, detail]) => (
                  <div key={label} className="flex items-center justify-between gap-5 py-4">
                    <span className="text-sm font-semibold text-[#1d3044]">{label}</span>
                    <span className="text-right text-sm text-[#7893a6]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#cad9e3] py-8 sm:py-10 lg:border-l lg:border-t-0 lg:pl-16">
              <div className="flex items-center gap-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Strategy update</p>
                <ArrowRight className="size-4 text-[#8aa0b0]" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Better recommendation</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-[#101826] sm:text-3xl">What Clonao changes next.</h3>

              <div className="mt-8 divide-y divide-[#cad9e3] border-y border-[#cad9e3]">
                {changes.map((change) => (
                  <div key={change} className="flex items-center gap-3 py-4">
                    <Check className="size-4 shrink-0 text-[#3977a9]" strokeWidth={1.7} aria-hidden="true" />
                    <span className="text-sm font-medium text-[#26394d]">{change}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-[#7893a6]">Performance becomes context for the next decision, not a report you check once.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
