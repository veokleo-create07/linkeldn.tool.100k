import { Files, Globe2, Linkedin, NotebookPen, PlaySquare, Tags } from "lucide-react";

const sources = [
  ["LinkedIn history", Linkedin, "linkedin"],
  ["Website", Globe2, "default"],
  ["Notes & ideas", NotebookPen, "default"],
  ["Case studies", Files, "default"],
  ["Videos & podcasts", PlaySquare, "video"],
  ["Offers & expertise", Tags, "default"],
] as const;

export function CreateSourcesCard({ className = "" }: { className?: string }) {
  return (
    <section
      className={"w-full max-w-md rounded-[1.75rem] border border-white/85 bg-[#f7fafc]/90 p-6 shadow-[0_24px_48px_-34px_rgba(20,65,103,0.38)] lg:w-[17.5rem] lg:max-w-none " + className}
      aria-labelledby="create-sources-heading"
    >
      <h3 id="create-sources-heading" className="text-[1.45rem] font-semibold tracking-[-0.055em] text-[#172638]">Your Sources</h3>
      <div className="mt-6 space-y-2.5">
        {sources.map(([label, Icon, tone]) => (
          <div key={label} className="flex min-h-12 items-center gap-3 rounded-full border border-white/90 bg-white/70 px-3.5 py-2 shadow-[0_4px_12px_-10px_rgba(20,65,103,0.4)]">
            <span className={tone === "linkedin" ? "flex size-7 shrink-0 items-center justify-center rounded-[0.45rem] bg-[#0a66c2] text-white" : tone === "video" ? "flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f0f4f7] text-[#172638]" : "flex size-7 shrink-0 items-center justify-center text-[#172638]"}>
              <Icon className={tone === "linkedin" ? "size-5" : "size-5"} strokeWidth={tone === "linkedin" ? 2.2 : 1.8} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium leading-5 tracking-[-0.02em] text-[#26394d]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
