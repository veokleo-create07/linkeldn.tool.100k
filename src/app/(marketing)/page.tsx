import { HomeHero } from "@/components/marketing/home-hero";
import { IntelligenceLoop } from "@/components/marketing/intelligence-loop";
import { ProblemSection } from "@/components/marketing/problem-section";
import { BrandGraphSection } from "@/components/marketing/brand-graph-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <IntelligenceLoop />
      <BrandGraphSection />
    </>
  );
}
