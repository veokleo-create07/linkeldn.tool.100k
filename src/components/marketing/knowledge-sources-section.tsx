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
    <div
      className="relative mx-auto mt-14 min-h-[27rem] max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/90 bg-cover bg-center p-3 shadow-[0_30px_80px_-48px_rgba(27,58,83,0.5)] sm:mt-16 sm:min-h-[30rem] sm:p-6 lg:min-h-[31rem] lg:p-8"
      style={{ backgroundImage: "url('/ethereal-aqua-gradient.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-white/10" aria-hidden="true" />

      <div className="relative z-10 grid min-h-[25rem] grid-cols-[minmax(0,1fr)_0.75rem_6.25rem_0.75rem_minmax(0,0.9fr)] items-center sm:min-h-[28rem] sm:grid-cols-[minmax(0,1fr)_2.5rem_10rem_2.5rem_minmax(0,1fr)] lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_3rem_12rem_3rem_minmax(0,1fr)]">
        <div className="relative flex flex-col gap-2 after:absolute after:bottom-5 after:right-[-0.75rem] after:top-5 after:w-px after:bg-[#9eaab5] sm:gap-2.5 sm:after:right-[-2.5rem] lg:after:right-[-3rem]">
          {sourceCards.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="relative z-10 flex w-full max-w-[10.5rem] items-center gap-1.5 rounded-lg border border-white/95 bg-white/90 px-2 py-2 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] after:absolute after:right-[-0.75rem] after:top-1/2 after:h-px after:w-[0.75rem] after:bg-[#9eaab5] sm:gap-2.5 sm:rounded-xl sm:px-3 sm:py-2.5 sm:after:right-[-2.5rem] sm:after:w-[2.5rem] lg:after:right-[-3rem] lg:after:w-[3rem]"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#101826] text-white sm:size-8 sm:rounded-lg" aria-hidden="true">
                <Icon className="size-3.5 sm:size-4" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1 text-[0.68rem] font-medium leading-[1.15] text-[#101826] sm:text-sm sm:leading-5">{label}</span>
            </div>
          ))}
        </div>

        <div className="relative col-start-3 mx-auto flex w-full max-w-[6.25rem] flex-col items-center rounded-xl border border-white/90 bg-white/70 px-2 py-5 text-center shadow-[0_24px_46px_-30px_rgba(17,39,58,0.55)] backdrop-blur-sm after:absolute after:right-[-0.75rem] after:top-1/2 after:h-px after:w-[0.75rem] after:bg-[#9eaab5] sm:max-w-[10rem] sm:rounded-[1.35rem] sm:px-5 sm:py-7 sm:after:right-[-2.5rem] sm:after:w-[2.5rem] lg:max-w-[12rem] lg:px-6 lg:py-8 lg:after:right-[-3rem] lg:after:w-[3rem]">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white/70 p-1.5 shadow-[0_10px_20px_-12px_rgba(16,24,38,0.35)] sm:size-16 sm:rounded-2xl sm:p-2">
            <Image src="/clonao-logo.png" alt="Clonao" width={64} height={64} className="size-full object-contain drop-shadow-[0_4px_5px_rgba(56,68,82,0.2)]" />
          </div>
          <p className="mt-2 text-sm font-semibold tracking-[-0.04em] text-[#101826] sm:mt-4 sm:text-lg">Clonao</p>
        </div>

        <div className="relative col-start-5 mx-auto flex w-full max-w-[7rem] items-center gap-2 rounded-lg border border-white/95 bg-white/90 px-2 py-3 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] before:absolute before:left-[-0.75rem] before:top-1/2 before:h-px before:w-[0.75rem] before:bg-[#9eaab5] sm:max-w-[11rem] sm:gap-3 sm:rounded-xl sm:px-4 sm:py-4 sm:before:left-[-2.5rem] sm:before:w-[2.5rem] lg:before:left-[-3rem] lg:before:w-[3rem]">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#101826] text-white sm:size-8 sm:rounded-lg" aria-hidden="true">
            <span className="relative block size-3.5 border-b border-l border-white/80 sm:size-4"><span className="absolute bottom-0 left-1 h-2 w-px bg-white/80" /><span className="absolute bottom-0 left-2.5 h-3 w-px bg-white/80" /><span className="absolute bottom-0 left-4 h-4 w-px bg-white/80" /></span>
          </span>
          <span className="text-[0.68rem] font-semibold leading-tight text-[#101826] sm:text-sm">Brand Graph</span>
        </div>
      </div>
    </div>
  );
}
