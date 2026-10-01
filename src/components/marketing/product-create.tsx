const stripItems = [
  ["Recommendation", "Share onboarding framework"],
  ["Why this", "Strong topic fit"],
  ["Sources used", "Case study · LinkedIn · Brand Graph"],
  ["Draft direction", "Authority-led educational post"],
] as const;

export function ProductCreate() {
  return (
    <section aria-labelledby="product-create-heading" className="relative isolate overflow-hidden bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/coral-lavender-gradient.jpg')] bg-cover bg-center opacity-[0.24]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(248,251,253,0.94)_0%,rgba(248,251,253,0.7)_48%,rgba(248,251,253,0.92)_100%)]" aria-hidden="true" />
      <div className="marketing-container relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-24">
          <div className="max-w-xl lg:pt-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Create</p>
            <h2 id="product-create-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">Turn the next best move into content.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">Clonao turns your strategy and real knowledge into content with a clear reason behind every post.</p>
          </div>

          <CreateArtifact />
        </div>

        <div className="mt-16 border-t border-[#cad9e3] pt-8 sm:mt-20 sm:pt-10 lg:mt-24" aria-label="Create details">
          <div className="grid divide-y divide-[#cad9e3] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {stripItems.map(([label, value], index) => (
              <div key={label} className={"py-5 lg:px-7 lg:py-1 " + (index === 0 ? "lg:pl-0" : "") + (index === stripItems.length - 1 ? "lg:pr-0" : "")}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">{label}</p>
                <p className="mt-3 max-w-[15rem] text-sm font-medium leading-6 tracking-[-0.02em] text-[#26394d]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CreateArtifact() {
  return (
    <article className="rounded-[1.5rem] border border-[#d7e2e9] bg-white px-6 py-7 shadow-[0_24px_52px_-38px_rgba(20,65,103,0.52)] sm:px-9 sm:py-9 lg:px-11 lg:py-10" aria-label="Content recommendation and draft direction">
      <div className="border-b border-[#dce6ec] pb-8">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">Next Best Move</p>
        <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#101826] sm:text-3xl">Share your client onboarding framework</h3>

        <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-3 sm:gap-5">
          <div>
            <dt className="text-xs font-medium text-[#7893a6]">Goal</dt>
            <dd className="mt-2 font-medium text-[#26394d]">Authority</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#7893a6]">Why this</dt>
            <dd className="mt-2 max-w-[14rem] leading-5 text-[#26394d]">Strong expertise signal with low recent coverage.</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#7893a6]">Sources used</dt>
            <dd className="mt-2 max-w-[14rem] leading-5 text-[#26394d]">Case study · LinkedIn history · Brand Graph</dd>
          </div>
        </dl>
      </div>

      <div className="pt-8">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">Draft Direction</p>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-[1.16] tracking-[-0.045em] text-[#172638] sm:text-3xl">The best onboarding frameworks do more than welcome a client. They create clarity around the result from day one.</p>
        <div className="mt-7 border-l-2 border-[#6daeff] pl-5">
          <p className="max-w-2xl text-sm leading-6 text-[#647384]">A clear onboarding process sets the tone for the entire client relationship. Here’s the exact framework I use to give clients clarity and results from day one.</p>
        </div>
      </div>
    </article>
  );
}
