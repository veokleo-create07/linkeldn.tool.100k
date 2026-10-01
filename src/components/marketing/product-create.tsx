import { ArrowUpRight, Linkedin, PencilLine } from "lucide-react";
import { CreateSourcesCard } from "@/components/marketing/create-sources-card";
const outline = ["Align on goals and expectations", "Collect and structure key inputs", "Build a tailored strategy", "Set a clear communication rhythm"];

export function ProductCreate() {
  return (
    <section aria-labelledby="product-create-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Create</p>
          <h2 id="product-create-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">Turn the next best move into content.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">Clonao uses your strategy, Brand Graph, stories, proof, opinions, and source material to turn each recommendation into content grounded in what you actually know.</p>
        </div>
        <DesktopCreateSystem />
        <MobileCreateSystem />
        <div className="mt-16 border-t border-[#cad9e3] pt-10 sm:mt-20 sm:pt-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><RecommendationDetails /><DraftDirection /></div>
        </div>
      </div>
    </section>
  );
}

function DesktopCreateSystem() {
  return (
    <div className="relative mt-14 hidden min-h-[34rem] overflow-hidden lg:mt-16 lg:block" aria-label="Sources flow into the Brand Graph, next best move, and draft">
      <DesktopConnectors />
      <div className="relative z-10 grid min-h-[34rem] grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)_minmax(0,1.05fr)_minmax(0,1.25fr)] items-center gap-[clamp(0.75rem,1.8vw,2rem)]">
        <CreateSourcesCard className="max-w-none lg:w-full" />
        <BrandGraph className="w-full justify-self-center" />
        <NextMoveCard className="w-full lg:w-full" />
        <DraftCard className="w-full" />
      </div>
    </div>
  );
}

function DesktopConnectors() {
  return (
    <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M188 173C244 173 276 252 358 300M188 237C248 237 286 270 358 300M188 301C254 301 298 294 358 300M188 365C254 365 298 322 358 300M188 429C248 429 286 348 358 300M188 493C244 493 276 372 358 300" stroke="#86c3ed" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M406 300C452 300 486 300 528 300" stroke="#8cc9f4" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M702 300C710 300 714 300 719 300" stroke="#4d9cf3" strokeWidth="1.15" strokeLinecap="round" />
      <circle cx="188" cy="173" r="2.3" fill="#4d9cf3" /><circle cx="188" cy="237" r="2.3" fill="#4d9cf3" /><circle cx="188" cy="301" r="2.3" fill="#4d9cf3" /><circle cx="188" cy="365" r="2.3" fill="#4d9cf3" /><circle cx="188" cy="429" r="2.3" fill="#4d9cf3" /><circle cx="188" cy="493" r="2.3" fill="#4d9cf3" /><circle cx="358" cy="300" r="2.3" fill="#4d9cf3" /><circle cx="406" cy="300" r="2.3" fill="#4d9cf3" /><circle cx="528" cy="300" r="2.3" fill="#4d9cf3" /><circle cx="702" cy="300" r="2.3" fill="#4d9cf3" /><circle cx="719" cy="300" r="2.3" fill="#4d9cf3" />
    </svg>
  );
}

function BrandGraph({ className = "" }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="create-brand-graph-heading">
      <div className="relative aspect-[1.08] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-5 rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(140,203,255,0.34),transparent_42%)] blur-2xl" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 flex size-[clamp(7rem,35%,10rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[48%_52%_58%_42%/42%_50%_50%_58%] border border-white/90 bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,0.96),rgba(217,235,249,0.8)_52%,rgba(156,204,236,0.58))] shadow-[0_22px_42px_-22px_rgba(34,112,188,0.55)]">
          <div className="flex size-20 flex-col items-center justify-center rounded-2xl border border-white/85 bg-white/80 shadow-[0_10px_22px_-16px_rgba(20,65,103,0.7)]"><img src="/clonao-logo.png" alt="" className="size-8 object-contain" /><span className="mt-1 text-[0.7rem] font-semibold tracking-[-0.03em] text-[#101826]">Clonao</span></div>
        </div>
      </div>
      <h3 id="create-brand-graph-heading" className="mt-4 text-center text-xl font-semibold tracking-[-0.04em] text-[#101826]">Brand Graph</h3><p className="mt-1 text-center text-sm text-[#7893a6]">The context behind the recommendation.</p>
    </section>
  );
}

function NextMoveCard({ className = "" }: { className?: string }) {
  return (
    <section className={"rounded-[1.35rem] border border-[#dce7ee] bg-white p-5 shadow-[0_28px_52px_-30px_rgba(20,65,103,0.55)] lg:w-[17rem] " + className} aria-labelledby="create-next-move-heading">
      <div className="flex items-center justify-between gap-4">
        <h3 id="create-next-move-heading" className="text-lg font-semibold tracking-[-0.04em] text-[#101826]">✦ Next Best Move</h3>
      </div>
      <div className="mt-5 rounded-xl border border-[#4d9cf3]/55 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold leading-5 text-[#172638]">Share your client onboarding framework</p>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#176fe8] text-white shadow-[0_8px_18px_-10px_rgba(23,111,232,0.9)]"><ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden="true" /></span>
        </div>
        <p className="mt-2 text-xs leading-5 text-[#647384]">This builds authority, shows your process, and speaks directly to your target audience.</p>
      </div>
      <div className="mt-3 divide-y divide-[#e1e9ef] border-y border-[#e1e9ef] text-xs text-[#65768b]">
        <p className="py-3">Turn a case study into a before/after post</p>
        <p className="py-3">Share your take on a current industry trend</p>
      </div>
    </section>
  );
}

function DraftCard({ className = "" }: { className?: string }) {
  return (
    <section className={"rounded-[1.35rem] border border-[#dce7ee] bg-white p-5 shadow-[0_26px_50px_-32px_rgba(20,65,103,0.54)] lg:rotate-[1.2deg] lg:translate-y-1 " + className} aria-labelledby="create-draft-heading">
      <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-2.5"><span className="flex size-7 items-center justify-center rounded-[0.45rem] bg-[#0a66c2] text-white"><Linkedin className="size-4" strokeWidth={2.1} aria-hidden="true" /></span><h3 id="create-draft-heading" className="text-lg font-semibold tracking-[-0.04em] text-[#101826]">Draft</h3></div><button type="button" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3977a9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9cf3]/50"><PencilLine className="size-3.5" strokeWidth={1.6} aria-hidden="true" />Edit</button></div>
      <div className="mt-5 border-y border-[#dbe6ed] py-4"><p className="text-sm font-semibold leading-5 text-[#172638]">The client onboarding framework I use (and why it works)</p><p className="mt-3 text-xs leading-5 text-[#647384]">A clear onboarding process sets the tone for the entire client relationship. Here’s the exact framework I use to give clients clarity and results from day one…</p></div>
      <ol className="mt-4 space-y-2 text-xs text-[#26394d]">{outline.map((item, index) => <li key={item} className="flex gap-2.5"><span className="font-semibold text-[#3977a9]">{index + 1}.</span><span>{item}</span></li>)}</ol>
    </section>
  );
}

function MobileCreateSystem() {
  return <div className="mt-12 space-y-8 lg:hidden" aria-label="Create flow from sources to draft"><CreateSourcesCard /><MobileConnector /><BrandGraph /><MobileConnector /><NextMoveCard /><MobileConnector /><DraftCard /></div>;
}

function MobileConnector() {
  return <div className="flex h-8 items-center justify-center" aria-hidden="true"><span className="relative h-full w-px bg-[#8cc9f4]"><span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4d9cf3]" /></span></div>;
}

function RecommendationDetails() {
  return <section className="max-w-2xl" aria-labelledby="create-recommendation-heading"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">Recommendation</p><h3 id="create-recommendation-heading" className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-4xl lg:text-[3.1rem]">Share your client onboarding framework</h3><dl className="mt-9 divide-y divide-[#cad9e3] border-y border-[#cad9e3] text-sm"><div className="grid gap-2 py-4 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-6"><dt className="text-[#7893a6]">Sources</dt><dd className="font-medium text-[#26394d]">Case study · LinkedIn history · Brand Graph</dd></div><div className="grid gap-2 py-4 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-6"><dt className="text-[#7893a6]">Grounding</dt><dd className="font-medium text-[#26394d]">Built from what you already know</dd></div><div className="grid gap-2 py-4 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-6"><dt className="text-[#7893a6]">Audience</dt><dd className="font-medium text-[#26394d]">Speaks to your target audience</dd></div><div className="grid gap-2 py-4 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-6"><dt className="text-[#7893a6]">Goal</dt><dd className="font-medium text-[#26394d]">Builds authority and drives the right conversations</dd></div></dl></section>;
}

function DraftDirection() {
  return <section className="max-w-2xl lg:pt-1" aria-labelledby="create-draft-direction-heading"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">Draft Direction</p><div className="mt-6 border-l-2 border-[#6daeff] pl-6"><h3 id="create-draft-direction-heading" className="text-2xl font-medium leading-[1.16] tracking-[-0.05em] text-[#172638] sm:text-3xl lg:text-[3.1rem]">The best onboarding frameworks do more than welcome a client. They create clarity around the result from day one.</h3><p className="mt-7 max-w-lg text-base leading-7 text-[#647384]">Clonao turns your knowledge and context into content that sounds like you, with the right angle, structure, and proof — so you can focus on what matters most.</p></div></section>;
}
