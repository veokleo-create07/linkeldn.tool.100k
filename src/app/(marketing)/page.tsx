import { HomeHero } from "@/components/marketing/home-hero";
import { IntelligenceLoop } from "@/components/marketing/intelligence-loop";
import { KnowledgeSourcesSection } from "@/components/marketing/knowledge-sources-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <IntelligenceLoop />
      <KnowledgeSourcesSection />
      <PricingSection />
      <FinalCta />
    </>
  );
}
