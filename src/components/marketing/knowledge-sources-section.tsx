const sourceRows = [
  ["LinkedIn history", "Connected"],
  ["Website", "Indexed"],
  ["Case studies", "Processed"],
  ["PDFs", "Processed"],
  ["Videos", "Transcribed"],
  ["Notes", "Indexed"],
  ["Podcasts", "Transcribed"],
  ["Offers", "Connected"],
] as const;

const extractedContext = ["Expertise", "Stories", "Opinions", "Proof", "Offers", "Topics"];

export function KnowledgeSourcesSection() {
  return (
    <section aria-labelledby="knowledge-sources-heading" className="bg-[#fbfdff] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-24">
          <div className="max-w-xl lg:pt-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#3275ae]">Grounded in your real knowledge</p>
            <h2 id="knowledge-sources-heading" className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl">
              Clonao learns what you actually know.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
              Connect the sources that contain your experience, ideas, stories, proof, and offers. Clonao turns them into context it can use across every recommendation and piece of content.
            </p>
            <p className="mt-8 max-w-sm border-l-2 border-[#8dc8ed] pl-4 text-sm font-medium leading-6 text-foreground/70">
              Your recommendations are grounded in your sources, not generic AI memory.
            </p>
          </div>

          <SourceInterface />
        </div>
      </div>
    </section>
  );
}

function SourceInterface() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#dce6ef] bg-white shadow-[0_24px_70px_-44px_rgba(24,54,83,0.38)]">
      <div className="flex items-center justify-between border-b border-[#e6edf3] px-5 py-4 sm:px-7">
        <div>
          <p className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-foreground/35">Clonao workspace</p>
          <p className="mt-1 text-sm font-medium text-foreground">Knowledge sources</p>
        </div>
        <span className="flex items-center gap-2 text-xs text-foreground/45">
          <span className="size-1.5 rounded-full bg-[#65b3ed]" aria-hidden="true" />
          Context connected
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-[#e6edf3] pb-4">
          <p className="text-xs font-medium text-foreground/50">Your sources</p>
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/30">8 connected</span>
        </div>

        <div className="divide-y divide-[#edf1f5]">
          {sourceRows.map(([source, status]) => (
            <div key={source} className="flex items-center gap-4 py-3.5">
              <span className="flex size-7 shrink-0 items-center justify-center bg-[#f0f7fc] text-[0.625rem] font-semibold uppercase text-[#3275ae]" aria-hidden="true">
                {source.slice(0, 2)}
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-foreground/75">{source}</span>
              <span className="flex shrink-0 items-center gap-2 text-xs text-foreground/45">
                <span className="size-1.5 rounded-full bg-[#70b8e9]" aria-hidden="true" />
                {status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 border-t border-[#e6edf3] pt-6">
          <div className="flex items-center gap-3">
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/35">Sources</span>
            <span className="h-px flex-1 bg-[#dce9f2]" aria-hidden="true" />
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[#3275ae]">Clonao extracts</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            {extractedContext.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
                {index > 0 && <span className="text-[#8dc8ed]" aria-hidden="true">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
