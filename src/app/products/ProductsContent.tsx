"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";
import { MoveRight, Filter } from "lucide-react";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  return (
    <div className="bg-primary min-h-screen bg-pattern-grid">
      {/* HERO SECTION */}
      <section className="subpage-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_bg.png"
            alt="Products Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="subpage-hero-overlay"></div>
          <div className="glow-mesh -bottom-20 -left-20 opacity-15"></div>
        </div>
        
        <div className="container-custom relative z-10 w-full pt-40 lg:pt-60">
          <ScrollReveal>
            <div className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">Trade Inventory Catalog</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
              Premium <span className="accent-gradient-text">Export Selection.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed border-l-4 border-accent pl-10">
              Explore our meticulously curated trade catalog of India&apos;s finest agricultural produce, standardized for international excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER & GRID */}
      <section className="section-padding relative">
        <div className="glow-mesh top-0 right-0 opacity-10"></div>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {["All", "Grocery", "Spices", "Mango", "Vegetables", "Aggarbati"].map((cat) => (
                <Link
                  key={cat}
                  href={cat === "All" ? "/products" : `/products?category=${cat.toLowerCase()}`}
                  className={`px-10 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] transition-all border ${
                    (categoryFilter === cat.toLowerCase()) || (cat === "All" && !categoryFilter)
                      ? "bg-accent text-primary border-accent shadow-[0_0_40px_rgba(197,160,89,0.3)]"
                      : "bg-white/5 text-slate-400 border-white/10 hover:border-accent/40 hover:text-white"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] bg-white/5 px-6 py-3 rounded-full border border-white/5">
              <Filter size={14} className="text-accent" />
              Showing {filteredProducts.length} Authenticated Units
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 50}>
                <Link href={`/products/${product.id}`} className="group bg-secondary/30 rounded-[3rem] overflow-hidden border border-white/5 hover:border-accent/40 transition-all duration-700 shadow-2xl flex flex-col h-full hover:shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                  <div className="relative h-80 overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-8 left-8 px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] text-white bg-primary/60 backdrop-blur-xl border border-white/10">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-12 flex-grow flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent transition-colors duration-500 tracking-tight leading-none">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-base mb-10 line-clamp-3 leading-relaxed font-medium flex-grow opacity-70">
                      {product.desc}
                    </p>
                    <div className="inline-flex items-center gap-4 text-accent text-[11px] font-bold uppercase tracking-[0.4em] group/btn">
                      Inquire Specifications 
                      <MoveRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-3" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-40 text-center bg-secondary/20 rounded-[4rem] border border-white/5 bg-pattern-waves">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-none">Segment Not Populated</h3>
              <p className="text-slate-500 mb-12 max-w-sm mx-auto font-medium opacity-70 leading-relaxed">Our inventory for this specific category is currently being updated for export certification.</p>
              <Link href="/products" className="inline-flex px-12 py-5 bg-accent text-primary font-bold rounded-2xl uppercase tracking-[0.4em] text-[11px] hover:bg-accent-hover transition-all shadow-2xl shadow-accent/20">
                Refresh Catalog
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
