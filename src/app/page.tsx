import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Krushnkrupa Exporters | India's Finest Agricultural Exports",
  description: "Global trade corridors for India's premium agricultural products. Exporting Spices, Pulses, Mangoes, and more with unparalleled operational precision.",
};

export default function Home() {
  // Select 4 products from different categories
  const spices = products.find(p => p.category.toLowerCase() === "spices");
  const grocery = products.find(p => p.category.toLowerCase() === "grocery");
  const fruits = products.find(p => p.category.toLowerCase() === "mango");
  const incense = products.find(p => p.category.toLowerCase() === "aggarbati");
  
  let featuredProducts = [spices, grocery, fruits, incense].filter((p): p is typeof products[0] => p !== undefined);
  
  // Fallback to first 4 products if specific ones aren't found
  if (featuredProducts.length === 0) {
    featuredProducts = products.slice(0, 4);
  }

  return <HomeContent featuredProducts={featuredProducts} />;
}
