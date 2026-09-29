const decisions = [
  {
    number: "01",
    title: "What matters now?",
    detail: "Find the signal worth your attention before you publish again.",
    image: "/dreamy-blue-gradient.jpg",
  },
  {
    number: "02",
    title: "What story should you tell?",
    detail: "Turn the experience behind your work into a story people remember.",
    image: "/ethereal-aqua-gradient.jpg",
  },
  {
    number: "03",
    title: "Where are you missing proof?",
    detail: "See where your point of view needs evidence, examples, or results.",
    image: "/lavender-blue-gradient.jpg",
  },
  {
    number: "04",
    title: "What should you stop repeating?",
    detail: "Make room for the ideas that sharpen your positioning.",
    image: "/coral-lavender-gradient.jpg",
  },
  {
    number: "05",
    title: "What moves your positioning forward?",
    detail: "Choose the action that compounds your authority over time.",
    image: "/pastel-aqua-gradient.jpg",
  },
] as const;

export function ProblemComparisonCard() {
  return (
    <div className="mx-auto mt-14 grid max-w-6xl grid-cols-6 gap-2 sm:mt-16 sm:gap-3 lg:mt-20 lg:gap-5">
      {decisions.map((decision, index) => (
        <article
          key={decision.number}
          className={[
            "group relative isolate min-h-[11rem] overflow-hidden rounded-[0.875rem] border border-white/55 bg-[#dcecf4] transition-transform duration-500 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:min-h-[14rem] sm:rounded-[1rem] lg:min-h-[17rem] lg:rounded-[1.25rem]",
            index < 3 ? "col-span-2" : "col-span-3",
          ].join(" ")}
        >
          <div
            className="absolute inset-0 -z-20 scale-105 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-105"
            style={{ backgroundImage: "url(" + decision.image + ")" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(155deg,rgba(8,51,88,0.08),rgba(8,51,88,0.64))]" aria-hidden="true" />

          <div className="flex min-h-[11rem] flex-col justify-between p-3 sm:min-h-[14rem] sm:p-5 lg:min-h-[17rem] lg:p-8">
            <span className="text-[0.5625rem] font-medium tracking-[0.14em] text-white/70 sm:text-xs sm:tracking-[0.16em]">{decision.number}</span>
            <div className="max-w-sm">
              <h3 className="text-sm font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-xl lg:text-[1.75rem]">{decision.title}</h3>
              <p className="mt-2 max-w-xs text-[0.625rem] leading-4 text-white/70 sm:mt-3 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">{decision.detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
