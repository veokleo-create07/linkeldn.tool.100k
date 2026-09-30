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
  return <CardFrame><CardHeading eyebrow="Brand Graph" title="The complete context of who you are." description="Clonao connects the knowledge behind your brand into one living system." /><div className="relative mt-8 min-h-[13rem] flex-1 overflow-hidden rounded-[1.15rem] border border-white/60 bg-white/20"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,203,255,0.32),transparent_58%)]" aria-hidden="true" /><svg className="absolute inset-0 size-full" viewBox="0 0 520 250" fill="none" aria-hidden="true" preserveAspectRatio="none"><path d="M75 52C150 52 182 100 228 124M75 124h153M75 196c75 0 107-48 153-72M445 52c-75 0-107 48-153 72M445 124H292M445 196c-75 0-107-48-153-72" stroke="#55758c" strokeOpacity=".45" strokeWidth="1.15" /></svg><Node label="Content" className="left-3 top-7 sm:left-5" /><Node label="Experience" className="left-3 top-1/2 -translate-y-1/2 sm:left-5" /><Node label="Proof" className="bottom-7 left-3 sm:left-5" /><Node label="Audience" className="right-3 top-7 flex-row-reverse sm:right-5" /><Node label="Ideas" className="right-3 top-1/2 -translate-y-1/2 flex-row-reverse sm:right-5" /><Node label="Goals" className="bottom-7 right-3 flex-row-reverse sm:right-5" /><div className="absolute left-1/2 top-1/2 flex size-[4.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-white/80 bg-white/75 shadow-[0_18px_30px_-20px_rgba(20,65,103,0.7)] backdrop-blur-md"><Image src="/clonao-logo.png" alt="Clonao" width={28} height={28} className="size-7 object-contain" /><span className="mt-1 text-[0.62rem] font-semibold text-[#101826]">Clonao</span></div></div><p className="mt-4 text-xs leading-5 text-[#7893a6]">Content · Experience · Audience · Ideas · Goals · Proof</p></CardFrame>;
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
