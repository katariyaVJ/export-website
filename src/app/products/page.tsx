import { Metadata } from "next";
import ProductsContent from "./ProductsContent";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Export Catalog | Krushnkrupa Exporters",
  description: "Explore our premium selection of Indian agricultural products including Spices, Pulses, Mangoes, and more. Certified quality for international markets.",
};

export default function Products() {
  return (
    <Suspense fallback={<div className="bg-primary min-h-screen pt-60 flex justify-center text-white font-bold tracking-[0.5em] uppercase text-xs">Accessing Trade Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
