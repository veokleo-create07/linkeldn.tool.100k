import { HomeHero } from "@/components/marketing/home-hero";
import { IntelligenceLoop } from "@/components/marketing/intelligence-loop";
import { KnowledgeSourcesSection } from "@/components/marketing/knowledge-sources-section";
import { ProblemSection } from "@/components/marketing/problem-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <IntelligenceLoop />
      <KnowledgeSourcesSection />
    </>
  );
}
