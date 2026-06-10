"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import InquiryForm from "@/components/InquiryForm";
import { Product } from "@/lib/products";
import { MoveRight, ShieldCheck, Globe, Zap, Clock } from "lucide-react";

interface HomeContentProps {
  featuredProducts: Product[];
}

export default function HomeContent({ featuredProducts }: HomeContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-primary text-foreground selection:bg-accent selection:text-primary min-h-screen relative">
      
      {/* GLOBAL BACKGROUND PATTERN */}
      <div className="fixed inset-0 z-0 bg-pattern-grid pointer-events-none opacity-40"></div>

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.05, opacity: 0.1 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image 
              src="/assets/hero_bg.png"
              alt="Global Export Logistics"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          <div className="glow-mesh top-1/4 -left-20 opacity-20"></div>
        </div>

        <div className="container-custom relative z-10 w-full pt-40 lg:pt-56 pb-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Strategic Global Alliance</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter text-balance">
              Exporting India&apos;s <br />
              <span className="accent-gradient-text">Purest Legacy.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-14 max-w-xl leading-relaxed font-medium opacity-80">
              Krushnkrupa Exporters facilitates premium trade corridors for India&apos;s finest agricultural products with unparalleled operational precision.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center">
              <Link href="/inquiry" className="group relative px-10 py-5 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl transition-all flex items-center gap-4 hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] font-black">
                  Initiate Trade
                  <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link href="/products" className="px-10 py-5 bg-white/[0.03] hover:bg-white/[0.1] text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-md uppercase tracking-[0.2em] text-[10px]">
                Explore Catalog
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding relative z-10">
        <div className="glow-mesh top-0 right-0 opacity-15"></div>
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block opacity-60">Global Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">The Collection.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 100}>
                <Link href={`/products/${product.id}`} className="group block aspect-[4/5] relative rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-accent/30 transition-all duration-500 shadow-2xl">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mb-3 opacity-80">{product.category}</div>
                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{product.name}</h4>
                    <div className="inline-flex items-center gap-3 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] group-hover:text-accent transition-colors">
                      Specifications <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL PROTOCOLS */}
      <section className="section-padding relative overflow-hidden z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block opacity-60">Trade Protocol</span>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">Global Standards.</h3>
                <p className="text-lg text-slate-400 mb-16 leading-relaxed font-medium">
                  We operate with a sophisticated logistics infrastructure that ensures the biological and physical integrity of every consignment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  {[
                    { title: "Quality Audit", icon: <ShieldCheck className="w-5 h-5" />, desc: "Certified multi-stage testing protocols." },
                    { title: "Direct Connect", icon: <Zap className="w-5 h-5" />, desc: "Eliminating layers for maximum value." },
                    { title: "Global Reach", icon: <Globe className="w-5 h-5" />, desc: "Active trade desks across 4 continents." },
                    { title: "Time Logic", icon: <Clock className="w-5 h-5" />, desc: "Precision-timed logistics scheduling." }
                  ].map((feat) => (
                    <div key={feat.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-2xl">
                        {feat.icon}
                      </div>
                      <h4 className="font-bold text-white text-xl mb-3 tracking-tight">{feat.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="relative aspect-square rounded-[4rem] overflow-hidden group border border-white/10 shadow-2xl shadow-black/50 bg-[#0a0a0a]">
                  <Image src="/assets/logistics.png" alt="Global Shipping" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="bg-primary/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                      <div className="text-6xl font-black text-accent tracking-tighter mb-2">10+</div>
                      <div className="text-xl font-bold text-white tracking-tight leading-none uppercase">Years of Trade Heritage</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding relative z-10">
        <div className="glow-mesh -bottom-40 -left-40 opacity-10"></div>
        <div className="container-custom">
          <div className="bg-[#050505] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-12 lg:p-24 text-white flex flex-col justify-center border-r border-white/5">
                <ScrollReveal>
                  <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-60">Inquiry Gateway</span>
                  <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tighter leading-tight">Ready for <br />Transmission.</h2>
                  <p className="text-slate-400 mb-12 text-lg leading-relaxed font-medium">Join our global network of satisfied trade partners.</p>
                  
                  <div className="space-y-10">
                    <a href="https://wa.me/919537110250" target="_blank" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] transition-all group-hover:bg-[#25D366] group-hover:text-primary shadow-xl">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width={24} height={24} className="group-hover:invert" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-1">Instant Message</div>
                        <div className="font-bold text-xl text-white tracking-tight">+91 9537110250</div>
                      </div>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-7 p-12 lg:p-24 bg-white/[0.005]">
                <ScrollReveal>
                  <InquiryForm />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
