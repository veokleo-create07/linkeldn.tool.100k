import Link from "next/link";
import { HowItWorks } from "@/components/ui/how-it-works";

const stageDetails = [
  { title: "Understand", description: "Bring your knowledge, experience, and source material into one place.", theme: "orange" as const },
  { title: "Diagnose", description: "See what is strong, missing, overused, or unclear in your brand.", theme: "blue" as const },
  { title: "Strategize", description: "Turn your context into a focused direction for what matters next.", theme: "purple" as const },
  { title: "Recommend", description: "Get clear, prioritized actions with a reason behind each one.", theme: "orange" as const },
  { title: "Create", description: "Turn the right next move into grounded content that sounds like you.", theme: "blue" as const },
  { title: "Learn", description: "Use performance signals to make every future decision smarter.", theme: "purple" as const },
];

export function HowItWorksHero() {
  return (
    <>
      <section aria-labelledby="how-it-works-heading" className="hero-atmosphere -mt-16 overflow-hidden pb-24 pt-28 sm:-mt-20 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
        <div className="marketing-container">
          <div className="max-w-4xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/80">How it works</p>
            <h1 id="how-it-works-heading" className="text-balance mt-5 max-w-4xl text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]">From what you know to what you should do next.</h1>
            <p className="mt-6 max-w-2xl text-balance text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8">Clonao learns your knowledge, understands your brand, finds what matters, and turns it into clear actions you can actually execute.</p>
            <Link href="/sign-up" className="metallic-cta mt-8 inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white">Start for free</Link>
          </div>
        </div>
      </section>
      <HowItWorks features={stageDetails} />
    </>
  );
}
