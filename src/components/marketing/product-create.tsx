import { ArrowRight, BookOpen, FileText, Lightbulb, PenLine, Plus, Quote, Sparkles } from "lucide-react";

const sources = ["Case study", "LinkedIn history", "Brand Graph"];

export function ProductCreate() {
  return (
    <section aria-labelledby="product-create-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Create</p>
          <h2 id="product-create-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Create from strategy, not from a blank page.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Every draft starts with the reason it should exist, the goal it serves, and the real knowledge that supports it.
          </p>
        </div>

        <CreatePreview />
      </div>
    </section>
  );
}

function CreatePreview() {
  return (
    <div aria-label="Clonao recommendation to grounded draft preview" className="relative rounded-[1.625rem] border border-white/80 bg-[linear-gradient(145deg,rgba(241,247,250,0.94),rgba(194,211,222,0.78))] p-2 shadow-[0_30px_66px_-36px_rgba(20,65,103,0.58)] backdrop-blur-2xl sm:p-3">
      <div className="pointer-events-none absolute inset-0 rounded-[1.625rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.15))]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.2rem] border border-white/80 bg-[#f8fbfd]/72 shadow-[0_18px_48px_-34px_rgba(16,24,38,0.5)]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ccbff]/16 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-stretch lg:grid-cols-[minmax(0,0.82fr)_4rem_minmax(0,1.38fr)]">
          <section className="p-5 sm:p-7 lg:p-8" aria-labelledby="recommendation-context-heading">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Recommendation context</p>
            <div className="mt-2 flex items-center gap-2.5">
              <Lightbulb className="size-5 text-[#101826]" strokeWidth={1.55} aria-hidden="true" />
              <h3 id="recommendation-context-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">Next Best Move</h3>
            </div>

            <div className="mt-5 border-y border-[#cad9e3]/80 py-4">
              <p className="text-base font-semibold leading-6 tracking-[-0.025em] text-[#172638]">Share your client onboarding framework</p>
              <div className="mt-3 space-y-2.5">
                <ContextLine label="Goal" value="Authority" />
                <ContextLine label="Why now" value="Strong expertise signal, low recent coverage" />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[0.64rem] font-medium uppercase tracking-[0.1em] text-[#7893a6]">Supporting Brand Graph context</p>
              <div className="mt-3 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm text-[#26394d]"><BookOpen className="size-3.5 text-[#3977a9]" strokeWidth={1.7} /> Onboarding systems</div>
                <div className="flex items-center gap-2.5 text-sm text-[#26394d]"><Quote className="size-3.5 text-[#3977a9]" strokeWidth={1.7} /> Client education stories</div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-[#cad9e3]/80 pt-4">
              {sources.map((source) => <span key={source} className="flex items-center gap-1.5 text-xs text-[#7893a6]"><FileText className="size-3.5" strokeWidth={1.6} />{source}</span>)}
            </div>
          </section>

          <div className="relative flex items-center justify-center px-5 py-1 lg:px-0 lg:py-8" aria-hidden="true">
            <span className="h-px w-full bg-[#71899a]/45" />
            <span className="absolute flex size-8 items-center justify-center rounded-full border border-white/90 bg-[#eef5f9]/90 text-[#2563a6] shadow-[0_8px_18px_-12px_rgba(20,65,103,0.7)]">
              <ArrowRight className="size-4" strokeWidth={1.6} />
            </span>
          </div>

          <section className="border-t border-[#cad9e3]/80 bg-white/28 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8" aria-labelledby="writing-interface-heading">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#2563a6]">Grounded creation</p>
                <div className="mt-2 flex items-center gap-2.5">
                  <PenLine className="size-5 text-[#101826]" strokeWidth={1.55} aria-hidden="true" />
                  <h3 id="writing-interface-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">Draft post</h3>
                </div>
              </div>
              <span className="hidden items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#4d9b76] sm:flex"><Sparkles className="size-3.5" strokeWidth={1.6} /> Source grounded</span>
            </div>

            <div className="mt-5 border-y border-[#cad9e3]/80 py-4">
              <p className="text-[0.64rem] font-medium uppercase tracking-[0.1em] text-[#7893a6]">Hook</p>
              <p className="mt-2 text-base font-semibold leading-6 tracking-[-0.025em] text-[#172638]">The best onboarding frameworks do more than welcome a client.</p>
              <p className="mt-1 text-sm leading-6 text-[#647384]">They make the path to a meaningful result feel obvious.</p>
              <div className="mt-4 h-px w-14 bg-[#4d9cf3]" aria-hidden="true" />
              <p className="mt-4 text-sm leading-6 text-[#26394d]">A strong first week is not about sending more information. It is about giving people a simple way to see what happens next, and why the method works.</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {['Stronger hook', 'Add story', 'Add proof', 'Shorten'].map((action) => <span key={action} className="flex items-center gap-1.5 text-xs font-medium text-[#3977a9]"><Plus className="size-3.5" strokeWidth={1.7} />{action}</span>)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContextLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[4.25rem_minmax(0,1fr)] gap-2 text-xs leading-5">
      <span className="font-medium uppercase tracking-[0.08em] text-[#7893a6]">{label}</span>
      <span className="text-[#26394d]">{value}</span>
    </div>
  );
}
