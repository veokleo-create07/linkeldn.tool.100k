import Image from "next/image";
import { ArrowRight, CalendarDays, Check, Target, Users } from "lucide-react";

const strategyRows = [
  ["Primary goal", "Build authority", Target],
  ["Audience", "Operators & founders", Users],
  ["Weekly focus", "Teach the method behind outcomes", CalendarDays],
] as const;

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
    <article className="relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/85 bg-[linear-gradient(145deg,#EEF4FA,#DCE9F5)] p-5 shadow-[0_28px_62px_-34px_rgba(20,65,103,0.56)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.58),transparent_52%,rgba(133,157,173,0.11))]" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Brand Graph</p>
        <h3 className="mt-4 max-w-[15rem] text-2xl font-bold leading-[1.04] tracking-[-0.055em] text-[#101826]">The complete context of who you are.</h3>
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#647384]">Clonao connects the knowledge behind your brand into one living system.</p>
        <div className="relative mt-7 min-h-[14.5rem] flex-1 overflow-hidden rounded-[1.25rem] border border-white/75 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,203,255,0.3),transparent_58%)]" aria-hidden="true" />
          <svg className="absolute inset-0 size-full" viewBox="0 0 520 250" fill="none" aria-hidden="true" preserveAspectRatio="none">
            <path d="M76 46C150 46 176 96 226 124M76 124h150M76 202c74 0 100-50 150-78M444 46c-74 0-100 50-150 78M444 124H294M444 202c-74 0-100-50-150-78" stroke="#4f7088" strokeOpacity=".5" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
          <Node label="Content" className="left-3 top-6 sm:left-5" />
          <Node label="Experience" className="left-3 top-1/2 -translate-y-1/2 sm:left-5" />
          <Node label="Proof" className="bottom-6 left-3 sm:left-5" />
          <Node label="Audience" className="right-3 top-6 flex-row-reverse sm:right-5" />
          <Node label="Ideas" className="right-3 top-1/2 -translate-y-1/2 flex-row-reverse sm:right-5" />
          <Node label="Goals" className="bottom-6 right-3 flex-row-reverse sm:right-5" />
          <div className="absolute left-1/2 top-1/2 flex size-[4.35rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1rem] border border-white/90 bg-[#fafdff]/90 shadow-[0_18px_30px_-20px_rgba(20,65,103,0.7)]">
            <Image src="/clonao-logo.png" alt="Clonao" width={25} height={25} className="size-6 object-contain" />
            <span className="mt-1 text-[0.62rem] font-semibold text-[#101826]">Clonao</span>
          </div>
        </div>
        <p className="mt-4 text-center text-[0.68rem] text-[#7893a6]">Content · Experience · Audience · Ideas · Goals · Proof</p>
      </div>
    </article>
  );
}

function Node({ label, className }: { label: string; className: string }) {
  return <span className={`absolute flex items-center gap-2 text-[0.68rem] font-medium text-[#26394d] ${className}`}><span className="size-1.5 rounded-full bg-[#4d9cf3]" />{label}</span>;
}

function StrategyCard() {
  return <CardFrame><CardHeading eyebrow="Strategy" title="A clearer direction for the week." description="Diagnosis becomes focus: what to say, who it is for, and why it matters now." /><div className="mt-8 flex-1"><div className="divide-y divide-[#cad9e3] border-y border-[#cad9e3]">{strategyRows.map(([label, value, Icon]) => <div key={label} className="flex items-center gap-3 py-4"><Icon className="size-4 shrink-0 text-[#3977a9]" strokeWidth={1.6} aria-hidden="true" /><div><p className="text-[0.63rem] font-medium uppercase tracking-[0.1em] text-[#7893a6]">{label}</p><p className="mt-1 text-sm font-medium text-[#26394d]">{value}</p></div></div>)}</div><div className="mt-8 flex items-center gap-3 text-xs font-medium text-[#3977a9]"><span className="h-px flex-1 bg-[#71899a]/45" /><ArrowRight className="size-4" strokeWidth={1.5} /><span>Direction</span></div></div><p className="mt-6 text-xs leading-5 text-[#7893a6]">A strategy you can act on, not another content calendar.</p></CardFrame>;
}

function NextMovesCard() {
  return <CardFrame><CardHeading eyebrow="Next Best Moves" title="Know what to do next." description="Three focused actions, prioritized around your strategy and context." /><div className="mt-8 flex-1"><div className="divide-y divide-[#cad9e3] border-y border-[#cad9e3]">{moves.map((move, index) => <div key={move} className="grid grid-cols-[2.2rem_minmax(0,1fr)] gap-3 py-4"><span className="text-lg font-semibold tracking-[-0.04em] text-[#4d9cf3]">{String(index + 1).padStart(2, "0")}</span><div><p className="text-sm font-semibold leading-5 text-[#172638]">{move}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-[#7893a6]"><Check className="size-3.5 text-[#3977a9]" strokeWidth={1.8} />Grounded in your Brand Graph</p></div></div>)}</div></div><p className="mt-6 text-xs leading-5 text-[#7893a6]">Prioritized recommendations, ready when you are.</p></CardFrame>;
}
