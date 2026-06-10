import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import InquiryForm from "@/components/InquiryForm";
import { Metadata } from "next";
import { products, getProductById } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  
  return {
    title: product ? `${product.name} | Krushnkrupa Exporters` : "Product Not Found",
    description: product?.desc || "High-quality agricultural exports from India.",
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center bg-primary">
        <h1 className="text-3xl font-bold mb-4 text-white">Product Not Found</h1>
        <Link href="/products" className="text-accent hover:underline">Return to Products</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-primary text-foreground min-h-screen">
      <div className="container-custom">
        
        {/* Breadcrumb */}
        <nav className="flex text-xs font-bold uppercase tracking-widest text-slate-500 mb-12" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-3">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><span className="opacity-30">/</span></li>
            <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
            <li><span className="opacity-30">/</span></li>
            <li className="text-white" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Product Image */}
          <ScrollReveal className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-8 bg-accent text-primary px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                {product.category}
              </div>
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">{product.name}</h1>
              
              <div className="text-slate-400 text-lg leading-relaxed mb-12 space-y-6">
                <p className="font-medium text-slate-300">{product.desc}</p>
                <p>
                  Sourced from the finest farms in India, our {product.name.toLowerCase()} undergoes strict quality control measures to ensure that only the best reaches our international clients. We guarantee freshness, purity, and adherence to global food safety standards.
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-secondary/30 rounded-[2.5rem] p-10 border border-white/5 shadow-2xl mb-12 relative overflow-hidden">
                <div className="glow-mesh -top-20 -right-20 opacity-10"></div>
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 tracking-tight">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  </div>
                  Trade Specifications
                </h3>
                <ul className="space-y-6">
                  {product.specs?.map((spec, i) => (
                    <li key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{spec.label}</span>
                      <span className="text-sm font-bold text-white tracking-tight">{spec.val}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#inquiry" 
                  className="flex-1 bg-accent hover:bg-accent-hover text-primary text-center px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-2xl shadow-accent/10 active:scale-95"
                >
                  Request Quotation
                </a>
                <a 
                  href={`https://wa.me/919537110250?text=Hi, I am interested in ${encodeURIComponent(product.name)}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/[0.03] hover:bg-white/[0.08] text-white text-center px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all border border-white/10 flex items-center justify-center gap-3 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"></path></svg>
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Inline Inquiry Form */}
        <ScrollReveal id="inquiry">
          <div className="bg-secondary/40 rounded-[3rem] p-10 lg:p-20 shadow-2xl border border-white/5 max-w-5xl mx-auto relative overflow-hidden mb-24">
            <div className="glow-mesh -bottom-32 -left-32 opacity-10"></div>
            <div className="text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Confidential Inquiry</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Direct Access for {product.name}</h2>
              <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">Submit your volume requirements and our trade specialist will generate a custom quote.</p>
            </div>
            <InquiryForm productPlaceholder={product.name} />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
