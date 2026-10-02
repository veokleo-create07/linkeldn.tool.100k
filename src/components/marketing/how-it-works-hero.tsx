import Link from "next/link";

const stages = ["Understand", "Diagnose", "Strategize", "Recommend", "Create", "Learn"];

export function HowItWorksHero() {
  return (
    <section aria-labelledby="how-it-works-heading" className="hero-atmosphere -mt-16 overflow-hidden pb-24 pt-28 sm:-mt-20 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
      <div className="marketing-container">
        <div className="max-w-4xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/80">How it works</p>
          <h1 id="how-it-works-heading" className="text-balance mt-5 max-w-4xl text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]">From what you know to what you should do next.</h1>
          <p className="mt-6 max-w-2xl text-balance text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8">Clonao learns your knowledge, understands your brand, finds what matters, and turns it into clear actions you can actually execute.</p>
          <Link href="/sign-up" className="metallic-cta mt-8 inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white">Start for free</Link>
        </div>

        <ol className="mt-20 grid gap-0 sm:mt-24 lg:grid-cols-6" aria-label="Clonao process">
          {stages.map((stage, index) => (
            <li key={stage} className="relative flex gap-5 border-l border-white/35 py-5 pl-5 first:border-l-0 first:pt-0 sm:py-6 sm:pl-6 lg:border-l-0 lg:px-5 lg:py-0 lg:first:pl-0 lg:last:pr-0">
              <span className="text-xs font-medium tracking-[0.16em] text-white/65">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-lg font-medium tracking-[-0.035em] text-white sm:text-xl">{stage}</span>
              {index < stages.length - 1 ? <span className="absolute bottom-0 left-5 h-px w-[calc(100%-1.25rem)] bg-white/30 sm:left-6 sm:w-[calc(100%-1.5rem)] lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:h-px lg:w-5" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
