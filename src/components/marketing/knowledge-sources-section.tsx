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
        <g className="sm:hidden" stroke="#334155" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <path d="M340 104H344C351 104 359 174 365 250" /><path d="M340 162H345C352 162 359 205 365 250" /><path d="M340 220H346C353 220 359 238 365 250" /><path d="M340 278H346C353 278 359 262 365 250" /><path d="M340 336H345C352 336 359 295 365 250" /><path d="M340 394H344C351 394 359 326 365 250" /><path d="M365 250H380M660 250H700" />
          <circle cx="340" cy="104" r="2" fill="#334155" stroke="none" /><circle cx="340" cy="162" r="2" fill="#334155" stroke="none" /><circle cx="340" cy="220" r="2" fill="#334155" stroke="none" /><circle cx="340" cy="278" r="2" fill="#334155" stroke="none" /><circle cx="340" cy="336" r="2" fill="#334155" stroke="none" /><circle cx="340" cy="394" r="2" fill="#334155" stroke="none" /><circle cx="365" cy="250" r="1.8" fill="#334155" stroke="none" /><circle cx="372" cy="250" r="1.8" fill="#334155" stroke="none" /><circle cx="680" cy="250" r="1.8" fill="#334155" stroke="none" />
        </g>
        <g className="hidden sm:block lg:hidden" stroke="#334155" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <path d="M338 104H348C362 104 382 176 395 250" /><path d="M338 162H350C365 162 383 207 395 250" /><path d="M338 220H352C368 220 385 239 395 250" /><path d="M338 278H352C368 278 385 261 395 250" /><path d="M338 336H350C365 336 383 294 395 250" /><path d="M338 394H348C362 394 382 324 395 250" /><path d="M395 250H415M660 250H725" />
          <circle cx="338" cy="104" r="2" fill="#334155" stroke="none" /><circle cx="338" cy="162" r="2" fill="#334155" stroke="none" /><circle cx="338" cy="220" r="2" fill="#334155" stroke="none" /><circle cx="338" cy="278" r="2" fill="#334155" stroke="none" /><circle cx="338" cy="336" r="2" fill="#334155" stroke="none" /><circle cx="338" cy="394" r="2" fill="#334155" stroke="none" /><circle cx="395" cy="250" r="1.8" fill="#334155" stroke="none" /><circle cx="405" cy="250" r="1.8" fill="#334155" stroke="none" /><circle cx="692" cy="250" r="1.8" fill="#334155" stroke="none" />
        </g>
        <g className="hidden lg:block" stroke="#334155" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <path d="M223 104H242C278 104 326 178 370 250" /><path d="M223 162H246C285 162 331 207 370 250" /><path d="M223 220H250C293 220 337 239 370 250" /><path d="M223 278H250C293 278 337 261 370 250" /><path d="M223 336H246C285 336 331 293 370 250" /><path d="M223 394H242C278 394 326 322 370 250" /><path d="M370 250H393M607 250H661" />
          <circle cx="223" cy="104" r="2" fill="#334155" stroke="none" /><circle cx="223" cy="162" r="2" fill="#334155" stroke="none" /><circle cx="223" cy="220" r="2" fill="#334155" stroke="none" /><circle cx="223" cy="278" r="2" fill="#334155" stroke="none" /><circle cx="223" cy="336" r="2" fill="#334155" stroke="none" /><circle cx="223" cy="394" r="2" fill="#334155" stroke="none" /><circle cx="370" cy="250" r="1.8" fill="#334155" stroke="none" /><circle cx="382" cy="250" r="1.8" fill="#334155" stroke="none" /><circle cx="634" cy="250" r="1.8" fill="#334155" stroke="none" />
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
