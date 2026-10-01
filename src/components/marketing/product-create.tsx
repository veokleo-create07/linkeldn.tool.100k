import {
  FileText,
  Files,
  Globe2,
  NotebookPen,
  PlaySquare,
  Tags,
} from "lucide-react";

const sources = [
  ["LinkedIn history", FileText],
  ["Website", Globe2],
  ["Notes & ideas", NotebookPen],
  ["Case studies", Files],
  ["Videos & podcasts", PlaySquare],
  ["Offers & expertise", Tags],
] as const;

const contextLabels = ["Audience", "Expertise", "Proof", "Offers", "Stories", "Opinions", "Topics"];

const outline = [
  "Align on goals and expectations",
  "Collect and structure key inputs",
  "Build a tailored strategy",
  "Set a clear communication rhythm",
];

export function ProductCreate() {
  return (
    <section aria-labelledby="product-create-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Create</p>
          <h2 id="product-create-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Turn the next best move into content.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Clonao uses your strategy, Brand Graph, stories, proof, opinions, and source material to turn each recommendation into content grounded in what you actually know.
          </p>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <FlowConnectors />
          <div className="relative grid gap-5 lg:grid-cols-[0.9fr_1.15fr_0.95fr_1.05fr] lg:items-center lg:gap-7">
            <SourcesStage />
            <BrandGraphStage />
            <NextMoveStage />
            <DraftStage />
          </div>
        </div>

        <div className="mt-16 border-t border-[#cad9e3] pt-10 sm:mt-20 sm:pt-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <RecommendationDetails />
            <DraftDirection />
          </div>
        </div>
      </div>
    </section>
  );
}

function SourcesStage() {
  return (
    <section aria-labelledby="create-sources-heading" className="create-stage-reveal">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Your Sources</p>
      <h3 id="create-sources-heading" className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-[#101826]">Everything starts with context.</h3>
      <div className="mt-6 divide-y divide-[#d7e2ea] border-y border-[#d7e2ea] bg-white/45">
        {sources.map(([label, Icon]) => (
          <div key={label} className="flex items-center gap-3 px-3 py-3">
            <Icon className="size-4 shrink-0 text-[#42566b]" strokeWidth={1.55} aria-hidden="true" />
            <span className="min-w-0 text-sm font-medium text-[#26394d]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandGraphStage() {
  return (
    <section aria-labelledby="create-brand-graph-heading" className="create-stage-reveal create-brand-graph text-center">
      <div className="relative mx-auto flex min-h-[21rem] max-w-[23rem] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#d5e4ef] bg-[radial-gradient(circle_at_50%_48%,rgba(140,203,255,0.42),transparent_34%),linear-gradient(145deg,#f4f8fc,#dcebf7)] px-4 py-8 shadow-[0_24px_55px_-42px_rgba(20,65,103,0.56)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.82),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(104,170,224,0.18),transparent_34%)]" aria-hidden="true" />
        <div className="relative flex size-32 items-center justify-center rounded-full border border-white/85 bg-white/72 shadow-[0_18px_34px_-22px_rgba(24,82,135,0.8)]">
          <div className="flex size-20 flex-col items-center justify-center rounded-[1.25rem] border border-[#d7e5ef] bg-white/85">
            <img src="/clonao-logo.png" alt="" className="size-7 object-contain" />
            <span className="mt-1 text-[0.68rem] font-semibold tracking-[-0.03em] text-[#101826]">Clonao</span>
          </div>
        </div>
        {contextLabels.map((label, index) => (
          <span key={label} className={"absolute " + contextPosition(index)}>
            <span className="mr-1.5 inline-block size-1.5 rounded-full bg-[#4d9cf3] align-middle" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
      <h3 id="create-brand-graph-heading" className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[#101826]">Brand Graph</h3>
      <p className="mt-1 text-sm text-[#7893a6]">The context behind the recommendation.</p>
    </section>
  );
}

function contextPosition(index: number) {
  return [
    "left-4 top-7 text-[0.64rem] font-medium text-[#47677f]",
    "right-4 top-12 text-[0.64rem] font-medium text-[#47677f]",
    "left-3 top-1/2 -translate-y-1/2 text-[0.64rem] font-medium text-[#47677f]",
    "right-4 top-[43%] text-[0.64rem] font-medium text-[#47677f]",
    "left-7 bottom-9 text-[0.64rem] font-medium text-[#47677f]",
    "right-8 bottom-12 text-[0.64rem] font-medium text-[#47677f]",
    "left-1/2 bottom-4 -translate-x-1/2 text-[0.64rem] font-medium text-[#47677f]",
  ][index];
}

function NextMoveStage() {
  return (
    <section aria-labelledby="create-next-move-heading" className="create-stage-reveal">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Next Best Move</p>
      <div className="mt-4 border-y border-[#cad9e3] py-5">
        <h3 id="create-next-move-heading" className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#101826]">Share your client onboarding framework</h3>
        <p className="mt-3 text-sm leading-6 text-[#647384]">This builds authority, shows your process, and speaks directly to your target audience.</p>
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#3977a9]">
          <span className="size-1.5 rounded-full bg-[#4d9cf3]" aria-hidden="true" />
          Selected direction
        </div>
      </div>
      <div className="divide-y divide-[#d7e2ea] text-sm text-[#65768b]">
        <p className="py-3.5">Turn a case study into a before/after post</p>
        <p className="py-3.5">Share your take on a current industry trend</p>
      </div>
    </section>
  );
}

function DraftStage() {
  return (
    <section aria-labelledby="create-draft-heading" className="create-stage-reveal">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Draft</p>
      <div className="mt-4 border-y border-[#cad9e3] py-5">
        <h3 id="create-draft-heading" className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#101826]">The client onboarding framework I use (and why it works)</h3>
        <p className="mt-4 text-sm leading-6 text-[#647384]">A clear onboarding process sets the tone for the entire client relationship. Here’s the exact framework I use to get clients clarity and results from day one...</p>
      </div>
      <ol className="mt-4 space-y-2.5 text-sm text-[#26394d]">
        {outline.map((item, index) => (
          <li key={item} className="flex gap-3">
            <span className="font-semibold text-[#3977a9]">{index + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function RecommendationDetails() {
  return (
    <section aria-labelledby="create-recommendation-heading">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Recommendation</p>
      <h3 id="create-recommendation-heading" className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-[#101826] sm:text-3xl">Share your client onboarding framework</h3>
      <dl className="mt-7 divide-y divide-[#cad9e3] border-y border-[#cad9e3] text-sm">
        <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Sources</dt><dd className="font-medium text-[#26394d]">Case study · LinkedIn history · Brand Graph</dd></div>
        <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Grounding</dt><dd className="font-medium text-[#26394d]">Built from what you already know</dd></div>
        <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Audience</dt><dd className="font-medium text-[#26394d]">Speaks to your target audience</dd></div>
        <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"><dt className="text-[#7893a6]">Goal</dt><dd className="font-medium text-[#26394d]">Builds authority and drives the right conversations</dd></div>
      </dl>
    </section>
  );
}

function DraftDirection() {
  return (
    <section aria-labelledby="create-draft-direction-heading">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Draft Direction</p>
      <div className="mt-5 border-l-2 border-[#6daeff] pl-6">
        <h3 id="create-draft-direction-heading" className="text-2xl font-medium leading-[1.18] tracking-[-0.045em] text-[#172638] sm:text-3xl lg:text-[2.5rem]">The best onboarding frameworks do more than welcome a client. They create clarity around the result from day one.</h3>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#647384]">Clonao turns your knowledge and context into content that sounds like you, with the right angle, structure, and proof — so you can focus on what matters most.</p>
      </div>
    </section>
  );
}

function FlowConnectors() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 top-[45%] z-0 hidden h-20 w-full -translate-y-1/2 lg:block" viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M258 40H360C390 40 397 18 427 18H462" stroke="#8cc9f4" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M698 18H734C764 18 772 40 802 40H838" stroke="#8cc9f4" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M1000 40H1058C1088 40 1094 24 1128 24" stroke="#8cc9f4" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="462" cy="18" r="2.5" fill="#4d9cf3" />
      <circle cx="838" cy="40" r="2.5" fill="#4d9cf3" />
      <circle cx="1128" cy="24" r="2.5" fill="#4d9cf3" />
    </svg>
  );
}
