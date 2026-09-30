import Image from "next/image";
import { ArrowRight, CalendarDays, Check, FileText, Lightbulb, MessageCircle, Target, UserRound, Users } from "lucide-react";

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
    <article className="relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#86aefe]/35 bg-[#06142e] p-5 shadow-[0_30px_70px_-32px_rgba(13,55,127,0.8)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(255,151,76,0.7),transparent_26%),radial-gradient(circle_at_92%_82%,rgba(255,153,72,0.68),transparent_25%),radial-gradient(circle_at_50%_52%,rgba(28,91,255,0.52),transparent_42%),linear-gradient(140deg,#0a1b3d,#04102a_58%,#071b45)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.28)_0.6px,transparent_0.6px)] [background-size:5px_5px]" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#9dbfff]">Brand Graph</p>
        <h3 className="mt-4 max-w-[15rem] text-2xl font-bold leading-[1.04] tracking-[-0.055em] text-white">The complete context of who you are.</h3>
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#c1d0ed]">Clonao connects the knowledge behind your brand into one living system.</p>
        <div className="relative mt-7 min-h-[14.5rem] flex-1 overflow-hidden rounded-[1.25rem] border border-[#7fa5ff]/35 bg-[#081a3b]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(35,102,255,0.38),transparent_38%)]" aria-hidden="true" />
          <svg className="absolute inset-0 size-full" viewBox="0 0 520 250" fill="none" aria-hidden="true" preserveAspectRatio="none">
            <path d="M116 39C180 39 188 89 235 119M116 125c53 0 78 0 119 0M116 211c64 0 72-49 119-80M404 39c-64 0-72 50-119 80M404 125c-53 0-78 0-119 0M404 211c-64 0-72-49-119-80" stroke="#8cb4ff" strokeOpacity=".82" strokeWidth="1.05" strokeLinecap="round" />
            <circle cx="260" cy="125" r="3.5" fill="#dce9ff" /><circle cx="198" cy="81" r="2.5" fill="#8cb4ff" /><circle cx="322" cy="81" r="2.5" fill="#8cb4ff" /><circle cx="198" cy="169" r="2.5" fill="#8cb4ff" /><circle cx="322" cy="169" r="2.5" fill="#8cb4ff" />
          </svg>
          <GraphNode label="Content" icon={FileText} className="left-3 top-4 sm:left-5" />
          <GraphNode label="Experience" icon={UserRound} className="right-3 top-4 flex-row-reverse sm:right-5" />
          <GraphNode label="Ideas" icon={Lightbulb} className="left-2 top-1/2 -translate-y-1/2 sm:left-4" />
          <GraphNode label="Audience" icon={Users} className="right-2 top-1/2 -translate-y-1/2 flex-row-reverse sm:right-4" />
          <GraphNode label="Conversations" icon={MessageCircle} className="bottom-4 left-3 sm:left-5" />
          <GraphNode label="Goals" icon={Target} className="bottom-4 right-3 flex-row-reverse sm:right-5" />
          <div className="absolute left-1/2 top-1/2 flex size-[4.6rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.25rem] border border-[#d5e4ff]/75 bg-[radial-gradient(circle_at_32%_25%,#fef4e7,#3c78ff_48%,#102c83)] shadow-[0_0_34px_rgba(62,128,255,0.72),0_16px_25px_-18px_rgba(0,0,0,0.8)]">
            <Image src="/clonao-logo.png" alt="Clonao" width={31} height={31} className="size-7 object-contain brightness-0 invert" />
            <span className="mt-1 text-[0.62rem] font-semibold text-white">Clonao</span>
          </div>
        </div>
        <p className="mt-4 text-center text-[0.68rem] text-[#9db1d2]">Content · Experience · Audience · Ideas · Goals · Proof</p>
      </div>
    </article>
  );
}

function GraphNode({ label, icon: Icon, className }: { label: string; icon: typeof FileText; className: string }) {
  return <span className={`absolute flex items-center gap-2 rounded-full border border-[#8fb4ff]/45 bg-[#1c3972]/70 px-2.5 py-1.5 text-[0.63rem] font-medium text-white shadow-[0_8px_18px_-14px_rgba(74,132,255,0.9)] backdrop-blur-sm sm:px-3 sm:py-2 sm:text-[0.68rem] ${className}`}><Icon className="size-3.5 text-[#dbe7ff]" strokeWidth={1.6} aria-hidden="true" />{label}</span>;
}

function StrategyCard() {
  return <CardFrame><CardHeading eyebrow="Strategy" title="A clearer direction for the week." description="Diagnosis becomes focus: what to say, who it is for, and why it matters now." /><div className="mt-8 flex-1"><div className="divide-y divide-[#cad9e3] border-y border-[#cad9e3]">{strategyRows.map(([label, value, Icon]) => <div key={label} className="flex items-center gap-3 py-4"><Icon className="size-4 shrink-0 text-[#3977a9]" strokeWidth={1.6} aria-hidden="true" /><div><p className="text-[0.63rem] font-medium uppercase tracking-[0.1em] text-[#7893a6]">{label}</p><p className="mt-1 text-sm font-medium text-[#26394d]">{value}</p></div></div>)}</div><div className="mt-8 flex items-center gap-3 text-xs font-medium text-[#3977a9]"><span className="h-px flex-1 bg-[#71899a]/45" /><ArrowRight className="size-4" strokeWidth={1.5} /><span>Direction</span></div></div><p className="mt-6 text-xs leading-5 text-[#7893a6]">A strategy you can act on, not another content calendar.</p></CardFrame>;
}

function NextMovesCard() {
  return <CardFrame><CardHeading eyebrow="Next Best Moves" title="Know what to do next." description="Three focused actions, prioritized around your strategy and context." /><div className="mt-8 flex-1"><div className="divide-y divide-[#cad9e3] border-y border-[#cad9e3]">{moves.map((move, index) => <div key={move} className="grid grid-cols-[2.2rem_minmax(0,1fr)] gap-3 py-4"><span className="text-lg font-semibold tracking-[-0.04em] text-[#4d9cf3]">{String(index + 1).padStart(2, "0")}</span><div><p className="text-sm font-semibold leading-5 text-[#172638]">{move}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-[#7893a6]"><Check className="size-3.5 text-[#3977a9]" strokeWidth={1.8} />Grounded in your Brand Graph</p></div></div>)}</div></div><p className="mt-6 text-xs leading-5 text-[#7893a6]">Prioritized recommendations, ready when you are.</p></CardFrame>;
}
