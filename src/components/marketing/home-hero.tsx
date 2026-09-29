import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Check, CircleStop, FileText, Gauge, Mic, Pause, Sparkles } from "lucide-react";

const recommendations = [
  {
    title: "Share your client onboarding framework",
    goal: "Authority",
  },
  {
    title: "Turn your latest case study into a proof post",
    goal: "Trust",
  },
  {
    title: "Reduce AI tools content this week",
    goal: "Positioning",
  },
];

export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-atmosphere -mt-16 overflow-hidden pb-20 pt-36 sm:-mt-20 sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52"
    >
      <div className="marketing-container flex flex-col items-center text-center">
        <div className="hero-reveal hero-reveal-delay-1 flex flex-col items-center">
          <h1
            id="hero-heading"
            className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]"
          >
            The #1 Personal Brand Decision Engine for LinkedIn
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base font-medium leading-7 text-white/90 sm:mt-7 sm:text-lg sm:leading-8">
            Clonao analyzes your personal brand, identifies the gaps, builds the strategy and tells you exactly what to focus on next.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 mt-8 flex items-center justify-center sm:mt-9">
          <Link
            href="/sign-up"
            className="metallic-cta inline-flex h-11 items-center justify-center gap-1.5 rounded-md px-5 text-sm font-medium text-white"
          >
            Start for free
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="hero-reveal hero-reveal-delay-3 mt-16 w-full max-w-[1040px] sm:mt-20 lg:mt-24">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <div className="relative pb-6">
      <div aria-label="Clonao product preview" className="overflow-hidden rounded-[1.125rem] border border-white/60 bg-white/95 text-left shadow-[0_32px_90px_-42px_rgba(10,48,92,0.58)] backdrop-blur-sm sm:rounded-[1.35rem]">
        <div className="flex h-10 items-center justify-between border-b border-foreground/[0.08] bg-white/90 px-4 sm:h-13 sm:px-6">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-foreground/15" />
            <span className="size-2 rounded-full bg-foreground/15" />
            <span className="size-2 rounded-full bg-foreground/15" />
          </div>
          <div className="hidden items-center gap-2 text-[0.625rem] font-medium tracking-[0.12em] text-foreground/35 sm:flex"><span className="size-1.5 rounded-full bg-[#56a9e3]" aria-hidden="true" /> APP.CLONAO.COM</div>
          <div className="flex items-center gap-2 text-xs text-foreground/45"><span className="hidden sm:inline">Alex Morgan</span><span className="flex size-6 items-center justify-center rounded-full bg-[#d9effd] text-[0.625rem] font-semibold text-[#236fa9]">AM</span></div>
        </div>

        <div className="grid min-h-[24rem] sm:grid-cols-[10rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)]">
          <aside className="hidden border-r border-[#e2ebf2] bg-[#f5f9fc] p-5 sm:block">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em] text-foreground"><span className="flex size-6 items-center justify-center rounded-md bg-[#0d4dff] text-[0.625rem] font-bold text-white">C</span> Clonao</div>
            <nav aria-label="Product preview navigation" className="mt-8 space-y-1.5">
              <PreviewNavItem icon={<Gauge className="size-3.5" />} label="Overview" active />
              <PreviewNavItem icon={<Sparkles className="size-3.5" />} label="Brand Graph" />
              <PreviewNavItem icon={<FileText className="size-3.5" />} label="Create" />
              <PreviewNavItem icon={<BarChart3 className="size-3.5" />} label="Performance" />
            </nav>
            <div className="mt-10 border-t border-[#dfe9f1] pt-4"><p className="text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-foreground/35">Workspace</p><p className="mt-2 text-xs font-medium text-foreground/60">Personal brand</p><p className="mt-1 text-[0.6875rem] text-foreground/35">LinkedIn</p></div>
          </aside>

          <main className="min-w-0 bg-white p-5 sm:p-7 lg:p-9">
            <div className="flex flex-col justify-between gap-4 border-b border-[#e5edf3] pb-5 sm:flex-row sm:items-end">
              <div><p className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[#3275ae]">Monday, September 29</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">Good morning, Alex</h2><p className="mt-2 text-sm text-foreground/50">Here’s what matters this week.</p></div>
              <span className="flex items-center gap-2 self-start text-xs font-medium text-foreground/45 sm:self-auto"><span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> Strategy updated</span>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(12rem,0.65fr)]">
              <section className="rounded-lg border border-[#cfe4f1] bg-[#f8fcff] p-4 sm:p-5" aria-labelledby="hero-moves-heading">
                <div className="flex items-center justify-between gap-3"><div><p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[#3275ae]">Prioritized for you</p><h3 id="hero-moves-heading" className="mt-1.5 text-base font-semibold tracking-[-0.025em] text-foreground">Your next best moves</h3></div><span className="text-xs text-foreground/35">This week</span></div>
                <div className="mt-4 space-y-2.5">{recommendations.map((recommendation, index) => <div key={recommendation.title} className="flex items-start gap-3 rounded-md border border-[#e0ebf2] bg-white p-3"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e2f3fd] text-[0.6875rem] font-semibold text-[#3275ae]">{index + 1}</span><div className="min-w-0"><div className="flex flex-wrap items-center gap-x-2 gap-y-1"><p className="text-sm font-semibold leading-5 text-foreground/85">{recommendation.title}</p><span className="text-[0.5625rem] font-semibold uppercase tracking-[0.1em] text-[#3275ae]">{recommendation.goal}</span></div><p className="mt-1.5 text-xs leading-5 text-foreground/45">Strong evidence exists but is underused</p></div></div>)}</div>
              </section>
              <section className="rounded-lg border border-[#e1eaf1] bg-[#fbfdff] p-4 sm:p-5" aria-labelledby="hero-signals-heading">
                <div className="flex items-center justify-between"><p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/40">Signals</p><BarChart3 className="size-4 text-[#68afe1]" aria-hidden="true" /></div>
                <h3 id="hero-signals-heading" className="mt-2 text-base font-semibold tracking-[-0.025em] text-foreground">What Clonao sees</h3>
                <div className="mt-4 space-y-3.5"><p className="text-xs leading-5 text-foreground/45"><strong className="font-medium text-foreground/65">Brand Graph</strong><br />8 source groups connected</p><p className="text-xs leading-5 text-foreground/45"><strong className="font-medium text-foreground/65">Weekly focus</strong><br />Teach the method behind outcomes</p><p className="text-xs leading-5 text-foreground/45"><strong className="font-medium text-foreground/65">Next review</strong><br />Friday, after your next post</p></div>
              </section>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#e5edf3] pt-4 text-[0.6875rem] text-foreground/40"><span className="flex items-center gap-1.5 font-medium text-foreground/55"><Check className="size-3 text-[#4b9ed8]" aria-hidden="true" /> Grounded in your sources</span><span className="text-foreground/20" aria-hidden="true">·</span><span>8 source groups</span><span className="text-foreground/20" aria-hidden="true">·</span><span>Personal brand / LinkedIn</span></div>
          </main>
        </div>
      </div>

      <Image
        src="/clonao-facecam.jpg"
        alt="Alex Morgan walking through Clonao"
        width={112}
        height={112}
        className="absolute bottom-3 left-4 z-20 size-16 rounded-full object-cover ring-4 ring-white shadow-[0_10px_24px_-12px_rgba(10,48,92,0.65)] sm:bottom-2 sm:left-8 sm:size-20"
      />

      <div className="absolute bottom-0 left-1/2 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center justify-between gap-3 rounded-full border border-[#c8dce9] bg-[#fafdff]/95 px-3 py-2.5 text-foreground shadow-[0_14px_30px_-18px_rgba(13,59,102,0.45)] backdrop-blur sm:px-4">
        <div className="flex min-w-0 items-center gap-2.5"><span className="hidden truncate text-xs font-medium text-foreground/65 sm:inline">Alex is walking through Clonao</span></div>
        <div className="flex shrink-0 items-center gap-2.5 text-xs text-foreground/45"><Pause className="size-3.5 fill-current" aria-label="Pause demo" /><span className="font-mono text-[0.6875rem]">02:18</span><span className="flex items-end gap-0.5" aria-label="Audio activity"><span className="h-2 w-0.5 bg-[#65afe2]" /><span className="h-3.5 w-0.5 bg-[#65afe2]" /><span className="h-2.5 w-0.5 bg-[#65afe2]" /><span className="h-4 w-0.5 bg-[#65afe2]" /><Mic className="ml-0.5 size-3.5 text-[#3275ae]" /></span><CircleStop className="size-4 text-foreground/45" aria-label="Stop demo" /></div>
      </div>
    </div>
  );
}

function PreviewNavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return <div className={active ? "flex items-center gap-2 rounded-md bg-white px-2.5 py-2 text-xs font-medium text-[#236fa9] shadow-[0_5px_14px_-12px_rgba(13,59,102,0.35)]" : "flex items-center gap-2 px-2.5 py-2 text-xs text-foreground/45"}>{icon}{label}</div>;
}
