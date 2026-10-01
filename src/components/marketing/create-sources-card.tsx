import { Files, Globe2, Linkedin, NotebookPen, PlaySquare, Tags } from "lucide-react";

const sources = [
  ["LinkedIn history", Linkedin],
  ["Website", Globe2],
  ["Notes & ideas", NotebookPen],
  ["Case studies", Files],
  ["Videos & podcasts", PlaySquare],
  ["Offers & expertise", Tags],
] as const;

export function CreateSourcesCard({ className = "" }: { className?: string }) {
  return (
    <section
      className={"w-full max-w-md rounded-[1.25rem] border border-[#dbe4eb] bg-[#ffffff] p-4 shadow-[0_18px_36px_-30px_rgba(20,65,103,0.48)] lg:w-[15rem] lg:max-w-none lg:p-4 " + className}
      aria-labelledby="create-sources-heading"
    >
      <h3 id="create-sources-heading" className="text-base font-semibold tracking-[-0.035em] text-[#172638]">Your Sources</h3>
      <div className="mt-4 space-y-2">
        {sources.map(([label, Icon]) => (
          <div key={label} className="flex min-h-10 items-center gap-2.5 rounded-lg border border-[#e6edf2] bg-[#fbfcfd] px-2.5 py-2">
            <Icon className="size-4 shrink-0 text-[#33495d]" strokeWidth={1.55} aria-hidden="true" />
            <span className="text-xs font-medium leading-4 text-[#26394d]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
