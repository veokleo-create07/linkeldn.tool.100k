import { HomeHero } from "@/components/marketing/home-hero";
import { FaqSection } from "@/components/marketing/faq-section";
import { IntelligenceLoop } from "@/components/marketing/intelligence-loop";
import { KnowledgeSourcesSection } from "@/components/marketing/knowledge-sources-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <IntelligenceLoop />
      <KnowledgeSourcesSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
