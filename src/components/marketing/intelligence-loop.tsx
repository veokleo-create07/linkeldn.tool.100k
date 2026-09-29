import { ArrowUpRight, Check, FileText, Globe2, Linkedin, Podcast, ScanSearch, StickyNote, Target, Video } from "lucide-react";

const sources = [
  ["LinkedIn", Linkedin],
  ["Website", Globe2],
  ["PDFs", FileText],
  ["Notes", StickyNote],
  ["Videos", Video],
  ["Podcasts", Podcast],
] as const;

const recommendations = [
  ["Share your client onboarding framework", "Authority"],
  ["Turn your latest case study into a proof post", "Trust"],
  ["Reduce AI tools content this week", "Positioning"],
] as const;

export function IntelligenceLoop() {
  return (
    <section aria-labelledby="intelligence-loop-heading" className="border-y border-foreground/[0.07] bg-[#f5f9fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/45 sm:text-sm">How Clonao thinks</p>
          <h2 id="intelligence-loop-heading" className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-foreground sm:text-5xl">From scattered knowledge to your next best move.</h2>
          <p className="mt-6 text-balance text-base leading-7 text-foreground/60 sm:mt-7 sm:text-lg sm:leading-8">Clonao continuously turns what you know, what you publish, and what performs into a clearer personal brand strategy.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          <UnderstandCard />
          <DiagnoseCard />
          <RecommendCard />
        </div>
      </div>
    </section>
  );
}

function CardShell({ children, className = "", image }: { children: React.ReactNode; className?: string; image: string }) {
  return (
    <article className={"showcase-sheen group relative overflow-hidden rounded-[1.25rem] border border-white/75 bg-[linear-gradient(145deg,rgba(239,244,247,0.82),rgba(174,190,201,0.7))] p-5 shadow-[0_28px_65px_-38px_rgba(22,45,62,0.55)] backdrop-blur-2xl transition-transform duration-500 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6 " + className}>
      <div className="pointer-events-none absolute -inset-8 -z-0 bg-cover bg-center opacity-25 blur-2xl transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100" style={{ backgroundImage: "url(" + image + ")" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.16)_48%,rgba(90,122,143,0.2))]" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </article>
  );
}

function CardHeader({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <div className="flex items-center justify-between"><span className="text-[0.625rem] font-medium tracking-[0.16em] text-foreground/35">{number}</span><span className="size-1.5 rounded-full bg-[#68afe1]" aria-hidden="true" /></div>
      <h3 className="mt-7 text-xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-foreground/55">{description}</p>
    </div>
  );
}

function UnderstandCard() {
  return (
    <CardShell image="/dreamy-blue-gradient.jpg" className="stage-transition">
      <CardHeader number="01 / UNDERSTAND" title="Understand your brand" description="Clonao gathers the knowledge behind your work and builds a living Brand Graph." />
      <div className="mt-8 rounded-lg border border-white/75 bg-[#f7fbfd]/65 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_28px_-22px_rgba(26,61,82,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-3"><span className="text-[0.625rem] font-medium uppercase tracking-[0.13em] text-foreground/40">Sources connected</span><span className="text-[0.625rem] font-medium text-[#3275ae]">Building context</span></div>
        <div className="mt-3 grid grid-cols-2 gap-2">{sources.map(([name, Icon]) => <div key={name} className="flex items-center gap-2 rounded-md border border-white/70 bg-white/65 px-2.5 py-2 text-xs font-medium text-foreground/65"><Icon className="size-3.5 text-[#3275ae]" aria-hidden="true" />{name}<span className="ml-auto size-1.5 rounded-full bg-[#6ab4e6]" aria-hidden="true" /></div>)}</div>
        <div className="mt-4 flex items-center gap-2 text-[0.6875rem] text-foreground/45"><span className="h-1 flex-1 overflow-hidden rounded-full bg-foreground/[0.08]"><span className="block h-full w-2/3 rounded-full bg-[#78bbed]" /></span>Knowledge extracted</div>
      </div>
    </CardShell>
  );
}

function DiagnoseCard() {
  return (
    <CardShell image="/lavender-blue-gradient.jpg" className="stage-transition hero-reveal-delay-1">
      <CardHeader number="02 / DIAGNOSE" title="Diagnose & strategize" description="Turn signals, gaps, and proof into a direction your brand can actually follow." />
      <div className="mt-8 rounded-lg border border-white/75 bg-[#f7fbfd]/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_28px_-22px_rgba(26,61,82,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-between"><span className="text-[0.625rem] font-medium uppercase tracking-[0.13em] text-foreground/40">Brand diagnosis</span><ScanSearch className="size-4 text-[#3275ae]" aria-hidden="true" /></div>
        <div className="mt-4 space-y-3"><InsightRow label="Positioning gap" value="Founder strategy" action="Clarify" /><InsightRow label="Missing proof" value="AI implementation results" action="Surface" /><InsightRow label="Overused topic" value="AI tools" action="Reduce" /></div>
        <div className="mt-4 border-t border-foreground/[0.08] pt-4"><div className="flex items-center gap-2 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#3275ae]"><Target className="size-3.5" aria-hidden="true" />Strategy direction</div><p className="mt-2 text-xs font-medium leading-5 text-foreground/65">Teach the method behind your client outcomes.</p></div>
      </div>
    </CardShell>
  );
}

function InsightRow({ label, value, action }: { label: string; value: string; action: string }) {
  return <div className="flex items-start justify-between gap-3 border-b border-foreground/[0.07] pb-3 last:border-0 last:pb-0"><div className="min-w-0"><p className="text-[0.625rem] uppercase tracking-[0.1em] text-foreground/35">{label}</p><p className="mt-1 text-xs font-medium text-foreground/70">{value}</p></div><span className="shrink-0 text-[0.625rem] font-medium text-[#3275ae]">{action}</span></div>;
}

function RecommendCard() {
  return (
    <CardShell image="/pastel-aqua-gradient.jpg" className="stage-transition hero-reveal-delay-2">
      <CardHeader number="03 / RECOMMEND" title="Get your next best moves" description="Receive a focused set of actions grounded in your strategy, evidence, and real performance." />
      <div className="mt-8 rounded-lg border border-white/80 bg-[#f7fcff]/72 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_12px_28px_-22px_rgba(26,61,82,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-3"><span className="text-[0.625rem] font-medium uppercase tracking-[0.13em] text-[#3275ae]">Prioritized for you</span><ArrowUpRight className="size-3.5 text-[#3275ae]" aria-hidden="true" /></div>
        <div className="mt-3 space-y-2">{recommendations.map(([title, goal], index) => <div key={title} className="flex items-start gap-2.5 rounded-md bg-white/75 px-2.5 py-2.5"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e2f3fd] text-[0.625rem] font-semibold text-[#3275ae]">{index + 1}</span><div className="min-w-0"><p className="text-xs font-semibold leading-4 text-foreground/75">{title}</p><p className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.09em] text-[#3275ae]">{goal}</p></div></div>)}</div>
        <div className="mt-3 flex items-center gap-2 text-[0.6875rem] text-foreground/45"><Check className="size-3.5 text-[#4b9ed8]" aria-hidden="true" />Ready for this week</div>
      </div>
    </CardShell>
  );
}
