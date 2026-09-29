import { BarChart3, Check, CircleStop, FileText, Gauge, Mic, Pause, Sparkles } from "lucide-react";

const recommendations = [
  ["Share your client onboarding framework", "Authority", "Strong expertise signal, low recent coverage"],
  ["Turn your latest case study into a proof post", "Trust", "Strong evidence exists but is underused"],
  ["Reduce AI tools content this week", "Positioning", "Topic repetition is weakening your position"],
];

const insights = [
  ["Brand Graph", "8 source groups connected", "92% context coverage"],
  ["Weekly focus", "Teach the method behind outcomes", "Strategy"],
  ["Next review", "Friday, after your next post", "Learn"],
];

export function LoomDemoSection() {
  return (
    <section aria-labelledby="loom-demo-heading" className="overflow-hidden border-b border-[#dfe9f1] bg-[#f3f8fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#3275ae]">See Clonao in action</p>
          <h2 id="loom-demo-heading" className="mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl">
            A clearer next move, in view.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
            Watch how Clonao turns your brand context into a focused, prioritized week.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-18 lg:mt-20">
          <DemoWindow />
          <RecordingBar />
        </div>
      </div>
    </section>
  );
}

function DemoWindow() {
  return (
    <div className="relative overflow-hidden rounded-[1.125rem] border border-[#c8dbe9] bg-[#fafdff] shadow-[0_38px_90px_-48px_rgba(13,59,102,0.58)]">
      <div className="flex h-11 items-center justify-between border-b border-[#dfe9f1] bg-white/90 px-4 sm:h-14 sm:px-6">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#d8e3eb]" />
          <span className="size-2 rounded-full bg-[#d8e3eb]" />
          <span className="size-2 rounded-full bg-[#d8e3eb]" />
        </div>
        <div className="hidden items-center gap-2 text-[0.625rem] font-medium tracking-[0.12em] text-foreground/35 sm:flex">
          <span className="size-1.5 rounded-full bg-[#56a9e3]" aria-hidden="true" />
          APP.CLONAO.COM
        </div>
        <div className="flex items-center gap-2 text-xs text-foreground/45">
          <span className="hidden sm:inline">Alex Morgan</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#d9effd] text-[0.625rem] font-semibold text-[#236fa9]">AM</span>
        </div>
      </div>

      <div className="grid min-h-[29rem] sm:grid-cols-[10.5rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)]">
        <aside className="hidden border-r border-[#e2ebf2] bg-[#f5f9fc] p-5 sm:block">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em] text-foreground">
            <span className="flex size-6 items-center justify-center rounded-md bg-[#0d4dff] text-[0.625rem] font-bold text-white">C</span>
            Clonao
          </div>
          <nav aria-label="Product demo navigation" className="mt-10 space-y-1.5">
            <DemoNavItem icon={<Gauge className="size-3.5" />} label="Overview" active />
            <DemoNavItem icon={<Sparkles className="size-3.5" />} label="Brand Graph" />
            <DemoNavItem icon={<FileText className="size-3.5" />} label="Create" />
            <DemoNavItem icon={<BarChart3 className="size-3.5" />} label="Performance" />
          </nav>
          <div className="mt-12 border-t border-[#dfe9f1] pt-4">
            <p className="text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-foreground/35">Workspace</p>
            <p className="mt-2 text-xs font-medium text-foreground/60">Personal brand</p>
            <p className="mt-1 text-[0.6875rem] text-foreground/35">LinkedIn</p>
          </div>
        </aside>

        <main className="min-w-0 bg-white p-5 sm:p-7 lg:p-9">
          <div className="flex flex-col justify-between gap-5 border-b border-[#e5edf3] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[#3275ae]">Monday, September 29</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">Good morning, Alex</h3>
              <p className="mt-2 text-sm text-foreground/50">Here’s what matters this week.</p>
            </div>
            <span className="flex items-center gap-2 self-start text-xs font-medium text-foreground/45 sm:self-auto">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Strategy updated
            </span>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(13rem,0.65fr)]">
            <section className="rounded-lg border border-[#cfe4f1] bg-[#f8fcff] p-4 sm:p-5" aria-labelledby="moves-heading">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[#3275ae]">Prioritized for you</p>
                  <h4 id="moves-heading" className="mt-1.5 text-base font-semibold tracking-[-0.025em] text-foreground">Your next best moves</h4>
                </div>
                <span className="text-xs text-foreground/35">This week</span>
              </div>
              <div className="mt-5 space-y-3">
                {recommendations.map(([title, goal, why], index) => (
                  <div key={title} className="flex items-start gap-3 rounded-md border border-[#e0ebf2] bg-white p-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e2f3fd] text-[0.6875rem] font-semibold text-[#3275ae]">{index + 1}</span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="text-sm font-semibold leading-5 text-foreground/85">{title}</p>
                        <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.1em] text-[#3275ae]">{goal}</span>
                      </div>
                      <p className="mt-1.5 text-xs leading-5 text-foreground/45">{why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#e1eaf1] bg-[#fbfdff] p-4 sm:p-5" aria-labelledby="signals-heading">
              <div className="flex items-center justify-between">
                <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/40">Signals</p>
                <BarChart3 className="size-4 text-[#68afe1]" aria-hidden="true" />
              </div>
              <h4 id="signals-heading" className="mt-2 text-base font-semibold tracking-[-0.025em] text-foreground">What Clonao sees</h4>
              <div className="mt-5 space-y-4">
                {insights.map(([label, value, meta]) => (
                  <div key={label}>
                    <div className="flex items-center justify-between gap-2 text-[0.6875rem]">
                      <span className="font-medium text-foreground/65">{label}</span>
                      <span className="text-foreground/35">{meta}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-foreground/45">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#e5edf3] pt-5 text-[0.6875rem] text-foreground/40">
            <span className="flex items-center gap-1.5 font-medium text-foreground/55"><Check className="size-3 text-[#4b9ed8]" aria-hidden="true" /> Grounded in your sources</span>
            <span className="text-foreground/20" aria-hidden="true">·</span>
            <span>8 source groups</span>
            <span className="text-foreground/20" aria-hidden="true">·</span>
            <span>Personal brand / LinkedIn</span>
          </div>
        </main>
      </div>
    </div>
  );
}

function DemoNavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={active ? "flex items-center gap-2 rounded-md bg-white px-2.5 py-2 text-xs font-medium text-[#236fa9] shadow-[0_5px_14px_-12px_rgba(13,59,102,0.35)]" : "flex items-center gap-2 px-2.5 py-2 text-xs text-foreground/45"}>
      {icon}
      {label}
    </div>
  );
}

function RecordingBar() {
  return (
    <div className="relative mx-auto -mt-5 flex w-[calc(100%-2rem)] max-w-md items-center justify-between gap-3 rounded-full border border-[#c8dce9] bg-[#fafdff]/95 px-3 py-2.5 text-foreground shadow-[0_14px_30px_-18px_rgba(13,59,102,0.45)] backdrop-blur sm:-mt-6 sm:px-4">
      <div className="flex items-center gap-2.5">
        <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-full border border-white bg-[linear-gradient(145deg,#8ccBff,#0d3b66)] text-[0.625rem] font-semibold text-white shadow-sm">
          AM
        </span>
        <span className="hidden text-xs font-medium text-foreground/65 sm:inline">Alex is walking through Clonao</span>
      </div>
      <div className="flex items-center gap-2.5 text-xs text-foreground/45">
        <Pause className="size-3.5 fill-current" aria-label="Pause demo" />
        <span className="font-mono text-[0.6875rem]">02:18</span>
        <span className="flex items-end gap-0.5" aria-label="Audio activity">
          <span className="h-2 w-0.5 bg-[#65afe2]" />
          <span className="h-3.5 w-0.5 bg-[#65afe2]" />
          <span className="h-2.5 w-0.5 bg-[#65afe2]" />
          <span className="h-4 w-0.5 bg-[#65afe2]" />
          <Mic className="ml-0.5 size-3.5 text-[#3275ae]" />
        </span>
        <CircleStop className="size-4 text-foreground/45" aria-label="Stop demo" />
      </div>
    </div>
  );
}
