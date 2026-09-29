import { ProblemComparisonCard } from "@/components/marketing/problem-comparison-card";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="bg-[#fdfdfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="problem-heading"
            className="text-balance text-4xl font-semibold leading-[1.06] tracking-tightest text-foreground sm:text-5xl lg:text-6xl"
          >
            Personal brands don’t grow through more content. They grow through better decisions.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-foreground/60 sm:mt-7 sm:text-lg sm:leading-8">
            Most tools help you publish. Clonao helps you decide what moves your brand forward.
          </p>
        </div>

        <ProblemComparisonCard />
      </div>
    </section>
  );
}
