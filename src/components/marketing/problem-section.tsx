const existingTools = [
  "AI writing",
  "Scheduling",
  "Analytics",
  "Inspiration",
  "Content libraries",
];

const decisionsLeftToMake = [
  "What topic matters now",
  "Which story to tell",
  "Where you need more proof",
  "What to stop repeating",
  "What will move your positioning forward",
];

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="bg-[#fdfdfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/45 sm:text-sm">The problem</p>
          <h2
            id="problem-heading"
            className="mt-5 max-w-lg text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-foreground sm:text-5xl"
          >
            Personal branding doesn’t need more content. It needs better decisions.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-foreground/60 sm:mt-7 sm:text-lg sm:leading-8">
            Most personal-brand tools help you write faster, schedule posts, or review analytics. But they still leave the hardest question unanswered: what should you actually do next?
          </p>
        </div>

        <div className="min-w-0 border-y border-foreground/10">
          <div className="py-6 sm:py-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/40">You already have</p>
            <ul className="mt-4 divide-y divide-foreground/[0.08]">
              {existingTools.map((tool) => (
                <li key={tool} className="py-3 text-sm font-medium text-foreground/65 sm:text-base">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-foreground/10 py-6 sm:py-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#3275ae]">But you still have to decide</p>
            <ul className="mt-4 divide-y divide-foreground/[0.08]">
              {decisionsLeftToMake.map((decision) => (
                <li key={decision} className="py-3 text-sm font-medium text-foreground sm:text-base">
                  {decision}
                </li>
              ))}
            </ul>
          </div>

          <p className="border-t border-foreground/10 py-6 text-base font-semibold leading-6 text-foreground sm:py-7 sm:text-lg">
            That decision layer is what Clonao is built for.
          </p>
        </div>
      </div>
    </section>
  );
}
