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

      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1000 500" preserveAspectRatio="none" fill="none">
        <g className="grounding-flow-group sm:hidden" stroke="#334155" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <path d="M180 92H205C285 92 390 166 465 212" /><path d="M180 140H210C292 140 397 184 465 212" /><path d="M180 188H215C300 188 408 202 465 212" /><path d="M180 236H215C300 236 408 222 465 212" /><path d="M180 284H210C292 284 397 240 465 212" /><path d="M180 332H205C285 332 390 258 465 212" /><path d="M465 212H484M560 212H730" />
          <circle cx="180" cy="92" r="2" fill="#334155" stroke="none" /><circle cx="180" cy="140" r="2" fill="#334155" stroke="none" /><circle cx="180" cy="188" r="2" fill="#334155" stroke="none" /><circle cx="180" cy="236" r="2" fill="#334155" stroke="none" /><circle cx="180" cy="284" r="2" fill="#334155" stroke="none" /><circle cx="180" cy="332" r="2" fill="#334155" stroke="none" /><circle cx="465" cy="212" r="1.8" fill="#334155" stroke="none" /><circle cx="474" cy="212" r="1.8" fill="#334155" stroke="none" /><circle cx="645" cy="212" r="1.8" fill="#334155" stroke="none" />
        </g>
        <g className="grounding-flow-group hidden sm:block lg:hidden" stroke="#334155" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <path d="M192 60H220C300 60 370 166 430 222" /><path d="M192 125H224C310 125 378 179 430 222" /><path d="M192 190H228C318 190 390 211 430 222" /><path d="M192 255H228C318 255 390 233 430 222" /><path d="M192 320H224C310 320 378 265 430 222" /><path d="M192 385H220C300 385 370 278 430 222" /><path d="M430 222H444M556 222H686" />
          <circle cx="192" cy="60" r="2" fill="#334155" stroke="none" /><circle cx="192" cy="125" r="2" fill="#334155" stroke="none" /><circle cx="192" cy="190" r="2" fill="#334155" stroke="none" /><circle cx="192" cy="255" r="2" fill="#334155" stroke="none" /><circle cx="192" cy="320" r="2" fill="#334155" stroke="none" /><circle cx="192" cy="385" r="2" fill="#334155" stroke="none" /><circle cx="430" cy="222" r="1.8" fill="#334155" stroke="none" /><circle cx="437" cy="222" r="1.8" fill="#334155" stroke="none" /><circle cx="621" cy="222" r="1.8" fill="#334155" stroke="none" />
        </g>
        <g className="grounding-flow-group hidden lg:block" stroke="#334155" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <path d="M200 68H230C290 68 350 169 418 230" /><path d="M200 133H235C300 133 360 187 418 230" /><path d="M200 198H240C310 198 375 220 418 230" /><path d="M200 263H240C310 263 375 240 418 230" /><path d="M200 328H235C300 328 360 273 418 230" /><path d="M200 393H230C290 393 350 291 418 230" /><path d="M418 230H432M568 230H718" />
          <circle cx="200" cy="68" r="2" fill="#334155" stroke="none" /><circle cx="200" cy="133" r="2" fill="#334155" stroke="none" /><circle cx="200" cy="198" r="2" fill="#334155" stroke="none" /><circle cx="200" cy="263" r="2" fill="#334155" stroke="none" /><circle cx="200" cy="328" r="2" fill="#334155" stroke="none" /><circle cx="200" cy="393" r="2" fill="#334155" stroke="none" /><circle cx="418" cy="230" r="1.8" fill="#334155" stroke="none" /><circle cx="425" cy="230" r="1.8" fill="#334155" stroke="none" /><circle cx="643" cy="230" r="1.8" fill="#334155" stroke="none" />
        </g>
      </svg>

      <div className="relative z-10 grid min-h-[25rem] grid-cols-[minmax(0,1fr)_0.75rem_6.25rem_0.75rem_minmax(0,0.9fr)] items-center sm:min-h-[28rem] sm:grid-cols-[minmax(0,1fr)_2.5rem_10rem_2.5rem_minmax(0,1fr)] lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_3rem_12rem_3rem_minmax(0,1fr)]">
        <div className="relative flex flex-col gap-2 sm:gap-2.5">
          {sourceCards.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="relative z-10 flex w-full max-w-[10.5rem] items-center gap-1.5 rounded-lg border border-white/95 bg-white/90 px-2 py-2 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] sm:gap-2.5 sm:rounded-xl sm:px-3 sm:py-2.5"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#101826] text-white sm:size-8 sm:rounded-lg" aria-hidden="true">
                <Icon className="size-3.5 sm:size-4" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1 text-[0.68rem] font-medium leading-[1.15] text-[#101826] sm:text-sm sm:leading-5">{label}</span>
            </div>
          ))}
        </div>

        <div className="relative col-start-3 mx-auto flex w-full max-w-[4.75rem] flex-col items-center rounded-lg border border-white/90 bg-white/70 px-1 py-3 text-center shadow-[0_24px_46px_-30px_rgba(17,39,58,0.55)] backdrop-blur-sm sm:max-w-[7rem] sm:rounded-xl sm:px-3 sm:py-4 lg:max-w-[8.5rem] lg:rounded-[1.15rem] lg:px-4 lg:py-5">
          <div className="flex size-6 items-center justify-center rounded-md bg-white/70 p-0.5 shadow-[0_10px_20px_-12px_rgba(16,24,38,0.35)] sm:size-10 sm:rounded-lg sm:p-1">
            <Image src="/clonao-logo.png" alt="Clonao" width={40} height={40} className="size-full object-contain brightness-0 drop-shadow-[0_2px_3px_rgba(56,68,82,0.15)]" />
          </div>
          <p className="mt-1 text-[0.65rem] font-semibold tracking-[-0.04em] text-[#101826] sm:mt-2 sm:text-sm">Clonao</p>
        </div>

        <div className="relative col-start-5 mx-auto flex w-full max-w-[7rem] items-center gap-2 rounded-lg border border-white/95 bg-white/90 px-2 py-3 shadow-[0_12px_26px_-22px_rgba(17,39,58,0.55)] sm:max-w-[11rem] sm:gap-3 sm:rounded-xl sm:px-4 sm:py-4">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#101826] text-white sm:size-8 sm:rounded-lg" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-3.5 sm:size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.25" /><circle cx="6" cy="18" r="2.25" /><circle cx="18" cy="18" r="2.25" /><path d="m10.8 6.8-3.5 8.9M13.2 6.8l3.5 8.9M8.2 18h7.6" /></svg>
          </span>
          <span className="text-[0.68rem] font-semibold leading-tight text-[#101826] sm:text-sm">Brand Graph</span>
        </div>
      </div>
    </div>
  );
}
