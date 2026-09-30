import Link from "next/link";
import { ArrowRight, Network, Route, Sparkles } from "lucide-react";

const systemStages = [
  { label: "Brand Graph", detail: "What you know", icon: Network },
  { label: "Strategy", detail: "What matters next", icon: Route },
  { label: "Next Best Moves", detail: "What to do now", icon: Sparkles },
];

export function ProductHero() {
  return (
    <section aria-labelledby="product-hero-heading" className="hero-atmosphere -mt-16 overflow-hidden pb-16 pt-24 sm:-mt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      <div className="marketing-container flex flex-col items-center text-center">
        <div className="hero-reveal hero-reveal-delay-1 flex flex-col items-center">
          <h1 id="product-hero-heading" className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]">Your personal brand, finally working as a system.</h1>
          <p className="mt-4 max-w-2xl text-balance text-base font-medium leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">Clonao understands what you know, diagnoses what your brand needs, builds the strategy, and tells you exactly what to do next.</p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 mt-6 flex items-center justify-center">
          <Link href="/sign-up" className="metallic-cta inline-flex h-11 items-center justify-center gap-1.5 rounded-md px-5 text-sm font-medium text-white">Start for free<ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>

        <div className="hero-reveal hero-reveal-delay-3 mt-14 w-full max-w-[900px] sm:mt-16">
          <ProductSystemFlow />
        </div>
      </div>
    </section>
  );
}

function ProductSystemFlow() {
  return (
    <div aria-label="Clonao product system flow" className="relative py-5 text-left sm:py-7">
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/35" aria-hidden="true" />
      <div className="relative grid gap-8 sm:grid-cols-[1fr_3.5rem_1fr_3.5rem_1fr] sm:items-center sm:gap-0">
        {systemStages.map(({ label, detail, icon: Icon }, index) => (
          <div key={label} className="contents">
            <div className="flex items-center gap-3 sm:block sm:text-center">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm sm:mx-auto"><Icon className="size-4" strokeWidth={1.6} aria-hidden="true" /></span>
              <div className="sm:mt-3"><p className="text-sm font-semibold tracking-[-0.02em] text-white">{label}</p><p className="mt-1 text-xs text-white/65">{detail}</p></div>
            </div>
            {index < systemStages.length - 1 ? <ArrowRight className="hidden size-4 justify-self-center text-white/60 sm:block" strokeWidth={1.5} aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
