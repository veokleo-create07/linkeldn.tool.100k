import { ProductHero } from "@/components/marketing/product-hero";
import { ProductCards } from "@/components/marketing/product-cards";
import { ProductCreate } from "@/components/marketing/product-create";

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductCards />
      <ProductCreate />
    </>
  );
}
