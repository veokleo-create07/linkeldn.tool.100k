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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#101826]">Grounding layer</p>
          <h2 id="knowledge-sources-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[4.1rem]">
            Everything you know, organized into one decision layer.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
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
    <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/90 bg-[radial-gradient(circle_at_50%_18%,rgba(222,237,247,0.78),transparent_52%),linear-gradient(135deg,rgba(242,248,252,0.98),rgba(225,235,242,0.86))] p-5 shadow-[0_30px_80px_-48px_rgba(27,58,83,0.38)] sm:mt-16 sm:p-8 lg:p-12">
      <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-[#d9eaf4]/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-[#edf5f9]/75 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 lg:grid lg:grid-cols-[minmax(0,1fr)_4.5rem_14rem_4.5rem_minmax(0,1fr)] lg:items-center">
        <div className="flex flex-col gap-3">
          {sourceCards.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="relative flex items-center gap-3 rounded-xl border border-white/95 bg-white/90 px-3.5 py-3 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] lg:after:absolute lg:after:right-[-4.5rem] lg:after:top-1/2 lg:after:h-px lg:after:w-[4.5rem] lg:after:bg-[#aebbc5]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#101826] text-white" aria-hidden="true">
                <Icon className="size-4" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-[#101826]">{label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto h-8 w-px bg-[#aebbc5] lg:hidden" aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-[14rem] flex-col items-center rounded-[1.35rem] border border-white bg-white/95 px-5 py-8 text-center shadow-[0_24px_46px_-30px_rgba(17,39,58,0.55)] lg:col-start-3">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-[#101826] p-3 shadow-[0_10px_20px_-12px_rgba(16,24,38,0.5)]">
            <Image src="/clonao-logo.png" alt="" width={64} height={64} className="size-full object-contain brightness-0 invert" />
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
