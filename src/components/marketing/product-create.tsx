import { ArrowUpRight, PencilLine } from "lucide-react";
import { CreateSourcesCard } from "@/components/marketing/create-sources-card";
const contextLabels = ["Audience", "Expertise", "Proof", "Stories", "Offers", "Opinions", "Topics"];
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
    <div className="relative mt-14 hidden h-[38rem] lg:mt-16 lg:block" aria-label="Sources flow into the Brand Graph, next best move, and draft">
      <DesktopConnectors />
      <CreateSourcesCard className="absolute left-0 top-20 z-10" />
      <BrandGraph className="absolute left-[20.5rem] top-12 z-10 w-[25rem]" />
      <NextMoveCard className="absolute right-[7.5rem] top-24 z-20 w-[20rem]" />
      <DraftCard className="absolute bottom-2 right-0 z-20 w-[25rem]" />
    </div>
  );
}

function DesktopConnectors() {
  return (
    <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1200 608" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M280 156C342 156 350 248 414 304M280 208C344 208 360 265 414 304M280 260C350 260 370 286 414 304M280 312C350 312 370 312 414 304M280 364C348 364 360 330 414 304M280 416C340 416 350 350 414 304" stroke="#86c3ed" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M718 304C762 304 764 220 832 220M1032 220C1090 220 1039 444 930 444" stroke="#4d9cf3" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="280" cy="156" r="3" fill="#4d9cf3" /><circle cx="280" cy="208" r="3" fill="#4d9cf3" /><circle cx="280" cy="260" r="3" fill="#4d9cf3" /><circle cx="280" cy="312" r="3" fill="#4d9cf3" /><circle cx="280" cy="364" r="3" fill="#4d9cf3" /><circle cx="280" cy="416" r="3" fill="#4d9cf3" /><circle cx="414" cy="304" r="3" fill="#4d9cf3" /><circle cx="718" cy="304" r="3" fill="#4d9cf3" /><circle cx="832" cy="220" r="3" fill="#4d9cf3" /><circle cx="1032" cy="220" r="3" fill="#4d9cf3" /><circle cx="930" cy="444" r="3" fill="#4d9cf3" />
    </svg>
  );
}

function BrandGraph({ className = "" }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="create-brand-graph-heading">
      <div className="relative h-[23rem] overflow-visible">
        <div className="pointer-events-none absolute inset-5 rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(140,203,255,0.34),transparent_42%)] blur-2xl" aria-hidden="true" />
        <GraphPaths />
        <div className="absolute left-1/2 top-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[48%_52%_58%_42%/42%_50%_50%_58%] border border-white/90 bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,0.96),rgba(217,235,249,0.8)_52%,rgba(156,204,236,0.58))] shadow-[0_22px_42px_-22px_rgba(34,112,188,0.55)]">
          <div className="flex size-20 flex-col items-center justify-center rounded-2xl border border-white/85 bg-white/80 shadow-[0_10px_22px_-16px_rgba(20,65,103,0.7)]"><img src="/clonao-logo.png" alt="" className="size-8 object-contain" /><span className="mt-1 text-[0.7rem] font-semibold tracking-[-0.03em] text-[#101826]">Clonao</span></div>
        </div>
        {contextLabels.map((label, index) => <span key={label} className={"absolute inline-flex items-center rounded-full border border-white/90 bg-white/75 px-3 py-1.5 text-[0.66rem] font-medium text-[#314d63] shadow-[0_8px_18px_-14px_rgba(20,65,103,0.58)] " + graphLabelPosition(index)}>{label}</span>)}
      </div>
      <h3 id="create-brand-graph-heading" className="mt-4 text-center text-xl font-semibold tracking-[-0.04em] text-[#101826]">Brand Graph</h3><p className="mt-1 text-center text-sm text-[#7893a6]">The context behind the recommendation.</p>
    </section>
  );
}

function GraphPaths() {
  return <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 368" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M0 256C42 256 56 222 105 208M0 256C42 256 58 244 105 224M105 208C142 172 151 134 184 110M105 224C145 205 164 178 184 152M105 256C145 256 160 184 184 184M400 82C352 82 334 116 290 132M400 145C351 145 334 150 290 160M400 212C350 212 334 196 290 188M400 286C350 286 328 237 290 210M200 368C200 310 200 274 200 252" stroke="#8fc8ef" strokeWidth="1.2" strokeLinecap="round" /><circle cx="0" cy="256" r="3" fill="#5fadfd" /><circle cx="105" cy="224" r="2.4" fill="#5fadfd" /><circle cx="184" cy="110" r="2.4" fill="#5fadfd" /><circle cx="184" cy="152" r="2.4" fill="#5fadfd" /><circle cx="184" cy="184" r="2.4" fill="#5fadfd" /><circle cx="290" cy="132" r="2.4" fill="#5fadfd" /><circle cx="290" cy="160" r="2.4" fill="#5fadfd" /><circle cx="290" cy="188" r="2.4" fill="#5fadfd" /><circle cx="290" cy="210" r="2.4" fill="#5fadfd" /></svg>;
}

function NextMoveCard({ className = "" }: { className?: string }) {
  return (
    <section className={"rounded-[1.35rem] border border-[#dce7ee] bg-white p-5 shadow-[0_28px_52px_-30px_rgba(20,65,103,0.55)] " + className} aria-labelledby="create-next-move-heading">
      <div className="flex items-start justify-between gap-4"><div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Recommendation</p><h3 id="create-next-move-heading" className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#101826]">Next Best Move</h3></div><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#176fe8] text-white shadow-[0_8px_18px_-10px_rgba(23,111,232,0.9)]"><ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden="true" /></span></div>
      <div className="mt-5 border-y border-[#dbe6ed] py-4"><p className="text-sm font-semibold leading-5 text-[#172638]">Share your client onboarding framework</p><p className="mt-2 text-xs leading-5 text-[#647384]">This builds authority, shows your process, and speaks directly to your target audience.</p></div>
      <div className="divide-y divide-[#e1e9ef] text-xs text-[#65768b]"><p className="py-3">Turn a case study into a before/after post</p><p className="py-3">Share your take on a current industry trend</p></div>
    </section>
  );
}

function DraftCard({ className = "" }: { className?: string }) {
  return (
    <section className={"rounded-[1.35rem] border border-[#dce7ee] bg-white p-5 shadow-[0_26px_50px_-32px_rgba(20,65,103,0.54)] " + className} aria-labelledby="create-draft-heading">
      <div className="flex items-center justify-between gap-4"><div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Output</p><h3 id="create-draft-heading" className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#101826]">Draft</h3></div><button type="button" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3977a9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9cf3]/50"><PencilLine className="size-3.5" strokeWidth={1.6} aria-hidden="true" />Edit</button></div>
      <div className="mt-5 border-y border-[#dbe6ed] py-4"><p className="text-sm font-semibold leading-5 text-[#172638]">The client onboarding framework I use (and why it works)</p><p className="mt-3 text-xs leading-5 text-[#647384]">A clear onboarding process sets the tone for the entire client relationship. Here’s the exact framework I use to get clients clarity and results from day one...</p></div>
      <ol className="mt-4 space-y-2 text-xs text-[#26394d]">{outline.map((item, index) => <li key={item} className="flex gap-2.5"><span className="font-semibold text-[#3977a9]">{index + 1}.</span><span>{item}</span></li>)}</ol>
    </section>
  );
}

function MobileCreateSystem() {
  return <div className="mt-12 space-y-8 lg:hidden" aria-label="Create flow from sources to draft"><CreateSourcesCard /><div className="flex justify-center text-[#4d9cf3]" aria-hidden="true">↓</div><BrandGraph /><div className="flex justify-center text-[#4d9cf3]" aria-hidden="true">↓</div><NextMoveCard /><div className="flex justify-center text-[#4d9cf3]" aria-hidden="true">↓</div><DraftCard /></div>;
}

function graphLabelPosition(index: number) {
  return ["left-5 top-10 text-[0.64rem] font-medium text-[#47677f]", "right-5 top-14 text-[0.64rem] font-medium text-[#47677f]", "left-4 top-1/2 -translate-y-1/2 text-[0.64rem] font-medium text-[#47677f]", "right-5 top-[44%] text-[0.64rem] font-medium text-[#47677f]", "left-10 bottom-10 text-[0.64rem] font-medium text-[#47677f]", "right-9 bottom-12 text-[0.64rem] font-medium text-[#47677f]", "left-1/2 bottom-5 -translate-x-1/2 text-[0.64rem] font-medium text-[#47677f]"][index];
}

function RecommendationDetails() {
  return <section aria-labelledby="create-recommendation-heading"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Recommendation</p><h3 id="create-recommendation-heading" className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-[#101826] sm:text-3xl">Share your client onboarding framework</h3><dl className="mt-7 divide-y divide-[#cad9e3] border-y border-[#cad9e3] text-sm"><div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Sources</dt><dd className="font-medium text-[#26394d]">Case study · LinkedIn history · Brand Graph</dd></div><div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Grounding</dt><dd className="font-medium text-[#26394d]">Built from what you already know</dd></div><div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Audience</dt><dd className="font-medium text-[#26394d]">Speaks to your target audience</dd></div><div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Goal</dt><dd className="font-medium text-[#26394d]">Builds authority and drives the right conversations</dd></div></dl></section>;
}

function DraftDirection() {
  return <section aria-labelledby="create-draft-direction-heading"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Draft Direction</p><div className="mt-5 border-l-2 border-[#6daeff] pl-6"><h3 id="create-draft-direction-heading" className="text-2xl font-medium leading-[1.18] tracking-[-0.045em] text-[#172638] sm:text-3xl lg:text-[2.5rem]">The best onboarding frameworks do more than welcome a client. They create clarity around the result from day one.</h3><p className="mt-6 max-w-xl text-base leading-7 text-[#647384]">Clonao turns your knowledge and context into content that sounds like you, with the right angle, structure, and proof — so you can focus on what matters most.</p></div></section>;
}
