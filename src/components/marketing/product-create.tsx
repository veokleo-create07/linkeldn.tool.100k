import { ArrowRight } from "lucide-react";

const flow = ["Next Best Move", "Brand Context", "Sources", "Draft"];

export function ProductCreate() {
  return (
    <section aria-labelledby="product-create-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Create</p>
          <h2 id="product-create-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Turn the next best move into content.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Clonao uses your strategy, Brand Graph, stories, proof, opinions, and source material to turn each recommendation into content grounded in what you actually know.
          </p>
        </div>

        <div className="mt-14 border-y border-[#cad9e3] py-6 sm:mt-16 sm:py-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:flex-nowrap lg:justify-between">
            {flow.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <span className={index === flow.length - 1 ? "text-base font-semibold tracking-[-0.025em] text-[#101826]" : "text-base font-medium tracking-[-0.025em] text-[#3977a9]"}>
                  {step}
                </span>
                {index < flow.length - 1 ? <ArrowRight className="size-4 shrink-0 text-[#8aa0b0]" strokeWidth={1.5} aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-12 sm:mt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Recommendation</p>
            <h3 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#101826] sm:text-3xl">
              Share your client onboarding framework
            </h3>

            <div className="mt-8 border-y border-[#cad9e3]">
              <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 border-b border-[#cad9e3] py-4">
                <span className="text-sm text-[#7893a6]">Sources</span>
                <span className="text-sm font-medium text-[#26394d]">Case study · LinkedIn history · Brand Graph</span>
              </div>
              <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 py-4">
                <span className="text-sm text-[#7893a6]">Grounding</span>
                <span className="text-sm font-medium text-[#26394d]">Built from what you already know</span>
              </div>
            </div>
          </div>

          <div className="lg:pt-1">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Draft direction</p>
            <blockquote className="mt-5 max-w-2xl border-l-2 border-[#6daeff] pl-6 text-2xl font-medium leading-[1.18] tracking-[-0.045em] text-[#172638] sm:text-3xl lg:text-[2.5rem]">
              The best onboarding frameworks do more than welcome a client. They create clarity around the result from day one.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
