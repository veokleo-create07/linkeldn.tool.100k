import Image from "next/image";
import { FileText, Globe2, Mic2, NotebookPen, Tag, UserRound } from "lucide-react";

const sourceCards = [
  { label: "LinkedIn history", icon: UserRound },
  { label: "Website", icon: Globe2 },
  { label: "Case studies", icon: FileText },
  { label: "Notes", icon: NotebookPen },
  { label: "Podcasts", icon: Mic2 },
  { label: "Offers", icon: Tag },
] as const;

export function KnowledgeSourcesSection() {
  return (
    <section aria-labelledby="knowledge-sources-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#101826]">Grounding layer</p>
          <h2 id="knowledge-sources-heading" className="text-balance mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[4.1rem]">
            Everything you know, organized into one decision layer.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Connect your sources and Clonao turns them into context you can use across every recommendation.
          </p>
        </div>

        <KnowledgeFlowDiagram />
      </div>
    </section>
  );
}

function KnowledgeFlowDiagram() {
  return (
    <div className="relative mx-auto mt-14 min-h-[48rem] max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/90 bg-[radial-gradient(circle_at_72%_42%,rgba(127,158,236,0.5),transparent_27%),radial-gradient(circle_at_52%_74%,rgba(191,215,243,0.72),transparent_40%),linear-gradient(140deg,rgba(235,244,250,0.98),rgba(219,230,242,0.9))] p-5 shadow-[0_30px_80px_-48px_rgba(27,58,83,0.38)] sm:mt-16 sm:p-8 lg:min-h-[38rem] lg:p-12">
      <div className="pointer-events-none absolute -left-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-[#f4f8fc]/65 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-1/4 size-96 rounded-full bg-[#6d8de8]/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[44rem] flex-col justify-center lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_4.5rem_14rem_4.5rem_minmax(0,1fr)] lg:items-center">
        <div className="relative flex flex-col gap-3 lg:after:absolute lg:after:bottom-8 lg:after:right-[-4.5rem] lg:after:top-8 lg:after:w-px lg:after:bg-[#aebbc5]">
          {sourceCards.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="relative z-10 flex w-full max-w-[11rem] items-center gap-3 rounded-xl border border-white/95 bg-white/90 px-3.5 py-3 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] lg:after:absolute lg:after:right-[-4.5rem] lg:after:top-1/2 lg:after:h-px lg:after:w-[4.5rem] lg:after:bg-[#aebbc5]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#101826] text-white" aria-hidden="true">
                <Icon className="size-4" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium leading-5 text-[#101826]">{label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto h-8 w-px bg-[#aebbc5] lg:hidden" aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-[14rem] flex-col items-center rounded-[1.35rem] border border-white/90 bg-white/70 px-5 py-8 text-center shadow-[0_24px_46px_-30px_rgba(17,39,58,0.55)] backdrop-blur-sm lg:col-start-3">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-white/70 p-2 shadow-[0_10px_20px_-12px_rgba(16,24,38,0.35)]">
            <Image src="/clonao-logo.png" alt="Clonao" width={64} height={64} className="size-full object-contain drop-shadow-[0_4px_5px_rgba(56,68,82,0.2)]" />
          </div>
          <p className="mt-4 text-lg font-semibold tracking-[-0.04em] text-[#101826]">Clonao</p>
        </div>

        <div className="mx-auto h-8 w-px bg-[#aebbc5] lg:hidden" aria-hidden="true" />

        <div className="relative mx-auto mt-0 flex w-full max-w-[13rem] items-center gap-3 rounded-xl border border-white/95 bg-white/90 px-4 py-4 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] lg:col-start-5 lg:after:absolute lg:after:left-[-4.5rem] lg:after:top-1/2 lg:after:h-px lg:after:w-[4.5rem] lg:after:bg-[#aebbc5]">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#101826] text-white" aria-hidden="true">
            <span className="relative block size-4 border-b border-l border-white/80"><span className="absolute bottom-0 left-1 h-2 w-px bg-white/80" /><span className="absolute bottom-0 left-2.5 h-3 w-px bg-white/80" /><span className="absolute bottom-0 left-4 h-4 w-px bg-white/80" /></span>
          </span>
          <span className="text-sm font-semibold text-[#101826]">Brand Graph</span>
        </div>
      </div>
    </div>
  );
}
