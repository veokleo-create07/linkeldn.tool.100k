const categories = [
  ["Identity", "Who you are and how you show up"],
  ["Expertise", "What you know deeply"],
  ["Stories", "Experiences worth remembering"],
  ["Opinions", "Beliefs that shape your point of view"],
  ["Proof", "Evidence behind your claims"],
  ["Audience", "People you are here to help"],
  ["Offers", "What you make possible"],
  ["Topics", "The territory you are known for"],
] as const;

const expertiseSignals = [
  ["AI Automation", "High confidence"],
  ["Agency Growth", "Strong signal"],
  ["B2B Sales", "Strong signal"],
] as const;

const sources = ["LinkedIn", "Website", "PDFs", "Notes", "Videos", "Podcasts", "Case studies"];

export function BrandGraphSection() {
  return (
    <section className="marketing-section border-t border-[#dfe8f0] bg-[#f7fafd]" aria-labelledby="brand-graph-heading">
      <div className="marketing-container">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
          <div className="max-w-xl lg:pt-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#3275ae]">Your Brand Graph</p>
            <h2 id="brand-graph-heading" className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-5xl">
              Your personal brand, mapped.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
              Clonao turns your knowledge, experience, stories, opinions, proof, audience, offers, topics, and performance into a living model of your brand.
            </p>
          </div>

          <BrandGraphSurface />
        </div>
      </div>
    </section>
  );
}

function BrandGraphSurface() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#dce6ef] bg-white shadow-[0_24px_70px_-42px_rgba(24,54,83,0.42)]">
      <div className="flex items-center justify-between border-b border-[#e6edf3] px-5 py-4 sm:px-7">
        <div>
          <p className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-foreground/35">Clonao workspace</p>
          <p className="mt-1 text-sm font-medium text-foreground">Your Brand Graph</p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs text-foreground/45">
          <span className="h-1.5 w-1.5 rounded-full bg-[#65b3ed]" aria-hidden="true" />
          Living model
        </span>
      </div>

      <div className="grid md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <div className="border-b border-[#e6edf3] p-5 md:border-b-0 md:border-r md:p-7">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-foreground/50">Brand Graph</p>
            <span className="text-[0.625rem] uppercase tracking-[0.14em] text-foreground/30">8 areas</span>
          </div>
          <div className="mt-5 divide-y divide-[#edf1f5]">
            {categories.map(([name, description]) => {
              const selected = name === "Expertise";

              return (
                <div
                  key={name}
                  className={`flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0 ${selected ? "text-[#236fa9]" : "text-foreground/65"}`}
                >
                  <div className="min-w-0">
                    <p className={`text-sm ${selected ? "font-semibold" : "font-medium"}`}>{name}</p>
                    <p className="mt-0.5 truncate text-[0.6875rem] text-foreground/35">{description}</p>
                  </div>
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${selected ? "bg-[#4a9cda]" : "bg-[#cbd9e5]"}`} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#fbfdff] p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#3275ae]">Selected category</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-foreground">Expertise</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/50">What your work consistently shows you know how to do.</p>
            </div>
            <span className="hidden border border-[#d7e9f6] bg-[#f1f8fd] px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#3275ae] sm:inline-flex">3 signals</span>
          </div>

          <div className="mt-7 divide-y divide-[#e6edf3] border-y border-[#e6edf3]">
            {expertiseSignals.map(([name, confidence]) => (
              <div key={name} className="flex items-center justify-between gap-4 py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#d8e9f5] bg-[#f2f8fc] text-xs text-[#3275ae]" aria-hidden="true">↗</span>
                  <span className="truncate text-sm font-medium text-foreground/80">{name}</span>
                </div>
                <span className="shrink-0 text-[0.6875rem] font-medium text-foreground/40">{confidence}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-[#9bcef0] pl-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/35">Evidence</p>
            <p className="mt-2 text-sm leading-6 text-foreground/65">Supported by 8 LinkedIn posts, 2 case studies, 1 podcast</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e6edf3] px-5 py-5 sm:px-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm font-medium text-foreground/70">Every Brand Graph signal is grounded in the user’s real sources.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.6875rem] text-foreground/40">
            {sources.map((source) => <span key={source}>{source}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
