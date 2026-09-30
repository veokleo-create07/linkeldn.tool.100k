import { ProductHero } from "@/components/marketing/product-hero";
import { ProductBrandIntelligence } from "@/components/marketing/product-brand-intelligence";
import { ProductStrategyMoves } from "@/components/marketing/product-strategy-moves";
import { ProductCreate } from "@/components/marketing/product-create";

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductBrandIntelligence />
      <ProductStrategyMoves />
      <ProductCreate />
    </>
  );
}
