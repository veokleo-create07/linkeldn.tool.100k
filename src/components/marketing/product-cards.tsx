import { Check } from "lucide-react";

const moves = [
  "Share your client onboarding framework",
  "Turn your latest case study into a proof post",
  "Reduce AI tools content this week",
];

export function ProductCards() {
  return (
    <section aria-labelledby="product-cards-heading" className="bg-[#f8fbfd] pb-24 pt-4 sm:pb-28 sm:pt-8 lg:pb-36 lg:pt-12">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">The Clonao system</p>
          <h2 id="product-cards-heading" className="text-balance mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#132238] sm:text-5xl lg:text-[4rem]">From context to your next move.</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
          <BrandGraphCard />
          <StrategyCard />
          <NextMovesCard />
        </div>
      </div>
    </section>
  );
}

function CardFrame({ children }: { children: React.ReactNode }) {
  return <article className="relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.625rem] border border-white/80 bg-[linear-gradient(145deg,rgba(238,246,250,0.96),rgba(194,211,222,0.8))] p-5 shadow-[0_30px_66px_-36px_rgba(20,65,103,0.58)] backdrop-blur-2xl sm:p-6"><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.16))]" aria-hidden="true" /><div className="relative z-10 flex h-full flex-col">{children}</div></article>;
}

function CardHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div><p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">{eyebrow}</p><h3 className="mt-3 text-2xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#132238]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#647384]">{description}</p></div>;
}

function BrandGraphCard() {
  return (
    <article className="relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#86aefe]/35 bg-[#06142e] p-5 shadow-[0_30px_70px_-32px_rgba(13,55,127,0.8)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(255,151,76,0.7),transparent_26%),radial-gradient(circle_at_92%_82%,rgba(255,153,72,0.68),transparent_25%),radial-gradient(circle_at_50%_52%,rgba(28,91,255,0.52),transparent_42%),linear-gradient(140deg,#0a1b3d,#04102a_58%,#071b45)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.28)_0.6px,transparent_0.6px)] [background-size:5px_5px]" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#9dbfff]">Brand Graph</p>
        <h3 className="mt-4 max-w-[15rem] text-2xl font-bold leading-[1.04] tracking-[-0.055em] text-white">The complete context of who you are.</h3>
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#c1d0ed]">Clonao connects the knowledge behind your brand into one living system.</p>
        <div className="relative mt-7 flex flex-1 items-center justify-center overflow-hidden rounded-[1.25rem] border border-[#7fa5ff]/35 bg-[#081a3b]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
          <img src="https://i.postimg.cc/xqrBLF3j/Chat-GPT-Image-Oct-1-2026-12-18-26-AM.png" alt="Clonao Brand Graph connecting content, experience, audience, ideas, conversations, and goals" className="h-full w-full object-contain" />
        </div>
      </div>
    </article>
  );
}

function StrategyCard() {
  return <CardFrame><CardHeading eyebrow="Strategy" title="A clearer direction for the week." description="Diagnosis becomes focus: what to say, who it is for, and why it matters now." /><div className="mt-8 flex flex-1 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"><img src="https://i.postimg.cc/mr54tjqd/Chat-GPT-Image-Oct-1-2026-12-26-48-AM.png" alt="Clonao strategy workspace showing a clear weekly direction" className="h-full w-full object-contain" /></div><p className="mt-6 text-xs leading-5 text-[#7893a6]">A strategy you can act on, not another content calendar.</p></CardFrame>;
}

function NextMovesCard() {
  return <CardFrame><CardHeading eyebrow="Next Best Moves" title="Know what to do next." description="Three focused actions, prioritized around your strategy and context." /><div className="mt-8 flex-1"><div className="divide-y divide-[#cad9e3] border-y border-[#cad9e3]">{moves.map((move, index) => <div key={move} className="grid grid-cols-[2.2rem_minmax(0,1fr)] gap-3 py-4"><span className="text-lg font-semibold tracking-[-0.04em] text-[#4d9cf3]">{String(index + 1).padStart(2, "0")}</span><div><p className="text-sm font-semibold leading-5 text-[#172638]">{move}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-[#7893a6]"><Check className="size-3.5 text-[#3977a9]" strokeWidth={1.8} />Grounded in your Brand Graph</p></div></div>)}</div></div><p className="mt-6 text-xs leading-5 text-[#7893a6]">Prioritized recommendations, ready when you are.</p></CardFrame>;
}
