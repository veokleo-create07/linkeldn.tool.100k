import Image from "next/image";
import { WaitlistCta } from "@/components/marketing/waitlist-modal";

export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-atmosphere -mt-16 overflow-hidden pb-12 pt-20 sm:-mt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      <div className="marketing-container flex flex-col items-center text-center">
        <div className="hero-reveal hero-reveal-delay-1 flex flex-col items-center">
          <h1
            id="hero-heading"
            className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]"
          >
            The #1 Personal Brand AI for LinkedIn.
          </h1>
          <p className="mt-4 max-w-xl text-balance text-base font-medium leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
            Clonao analyzes your personal brand, identifies the gaps, builds the strategy and tells you exactly what to focus on next.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 mt-5 flex items-center justify-center sm:mt-6">
          <WaitlistCta className="metallic-cta inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6] focus-visible:ring-offset-2" />
        </div>

        <div className="hero-reveal hero-reveal-delay-3 mt-0 w-full max-w-[1040px]">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <div aria-label="Clonao product demo recording" className="relative mx-auto w-full">
      <Image
        src="/clonao-demo.png"
        alt="Clonao dashboard walkthrough with next best moves, analytics, and a presenter recording"
        width={1280}
        height={960}
        priority
        sizes="(max-width: 1040px) 100vw, 1040px"
        className="h-auto w-full"
      />
    </div>
  );
}
