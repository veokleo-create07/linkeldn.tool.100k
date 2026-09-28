import { cn } from "@/lib/utils";

const stages = [
  {
    name: "Understand",
    description: "Learn from your knowledge, content, and experience.",
  },
  {
    name: "Diagnose",
    description: "Find positioning gaps, missing proof, and overused topics.",
  },
  {
    name: "Strategize",
    description: "Decide what your brand should focus on next.",
  },
  {
    name: "Recommend",
    description: "Prioritize the highest-impact actions.",
    emphasized: true,
  },
  {
    name: "Create",
    description: "Turn those decisions into grounded content.",
  },
  {
    name: "Learn",
    description: "Use performance to improve the next recommendation.",
  },
];

export function IntelligenceLoop() {
  return (
    <section aria-labelledby="intelligence-loop-heading" className="border-y border-foreground/[0.07] bg-[#f5f9fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/45 sm:text-sm">How Clonao thinks</p>
          <h2
            id="intelligence-loop-heading"
            className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-foreground sm:text-5xl"
          >
            From scattered knowledge to your next best move.
          </h2>
          <p className="mt-6 text-balance text-base leading-7 text-foreground/60 sm:mt-7 sm:text-lg sm:leading-8">
            Clonao continuously turns what you know, what you publish, and what performs into a clearer personal-brand strategy.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <div aria-hidden="true" className="absolute bottom-7 left-3 top-3 w-px bg-[#8bc8f5] sm:hidden" />
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-4 hidden h-px bg-[#8bc8f5] lg:block" />

          <ol className="relative grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {stages.map((stage, index) => (
              <li key={stage.name} className="relative min-w-0 pl-10 sm:pl-0 lg:text-center">
                <div
                  className={cn(
                    "absolute left-0 top-0 flex size-6 items-center justify-center rounded-full border border-[#8bc8f5] bg-[#f5f9fc] text-[0.625rem] font-semibold tracking-[0.04em] text-[#3275ae] sm:relative sm:mx-auto sm:size-8 lg:z-10",
                    stage.emphasized && "border-[#3275ae] bg-[#e3f3fd] text-[#1f6298]",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className={cn("mt-0 text-base font-semibold tracking-tight text-foreground/85 sm:mt-5", stage.emphasized && "text-[#1f6298]")}>{stage.name}</h3>
                <p className="mt-2 max-w-[13rem] text-sm leading-6 text-foreground/55 sm:mx-auto">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-6 text-foreground/55 sm:mt-20 sm:text-base">
          Every cycle makes Clonao more useful because every decision is informed by your Brand Graph, strategy, and real performance.
        </p>
      </div>
    </section>
  );
}
