import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductHero() {
  return (
    <section aria-labelledby="product-hero-heading" className="hero-atmosphere -mt-16 overflow-hidden pb-16 pt-24 sm:-mt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      <div className="marketing-container flex flex-col items-end text-right">
        <div className="hero-reveal hero-reveal-delay-1 flex max-w-4xl flex-col items-end">
          <h1 id="product-hero-heading" className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]">Your personal brand, finally working as a system.</h1>
          <p className="mt-4 max-w-2xl text-balance text-base font-medium leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">Clonao understands what you know, diagnoses what your brand needs, builds the strategy, and tells you exactly what to do next.</p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 mt-6 flex items-center justify-end">
          <Link href="/sign-up" className="metallic-cta inline-flex h-11 items-center justify-center gap-1.5 rounded-md px-5 text-sm font-medium text-white">Start for free<ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>

      </div>
    </section>
  );
}
