import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Target, Users, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Krushnkrupa Exporters",
  description: "Learn about Krushnkrupa Exporters, based in Surat, India. Our mission, heritage, and commitment to global standards in agricultural exports.",
};

export default function About() {
  return (
    <div className="bg-primary min-h-screen bg-pattern-dots">
      {/* HERO SECTION */}
      <section className="subpage-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/office.png"
            alt="About Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="subpage-hero-overlay"></div>
          <div className="glow-mesh -top-20 -right-20 opacity-15"></div>
        </div>
        
        <div className="container-custom relative z-10 w-full pt-40 lg:pt-60">
          <ScrollReveal>
            <div className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">Corporate Heritage</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
              Indigenous Roots.<br />
              <span className="accent-gradient-text">Global Standards.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed border-l-4 border-accent pl-10">
              Based in Surat, India, Krushnkrupa Exporters has been at the forefront of agricultural exports, bridging the gap between local quality and global demand for over a decade.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE IDENTITY */}
      <section className="section-padding relative overflow-hidden">
        <div className="glow-mesh top-1/2 left-0 opacity-10"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <ScrollReveal>
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[11px] mb-6 block opacity-60">Our Strategic Mission</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-10 tracking-tighter leading-none text-balance">Engineering Reliable Trade Corridors.</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                We specialize in the export of premium spices, groceries, and fresh produce. Our operations are built on a foundation of transparency, rigorous quality control, and deep-rooted relationships with farmers across India.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                  <div className="text-6xl font-bold text-white mb-3 tracking-tighter">10+</div>
                  <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-white mb-3 tracking-tighter">20+</div>
                  <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">Global Markets</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="h-[650px] rounded-[5rem] overflow-hidden shadow-2xl border border-white/10 group relative">
                <Image 
                  src="/assets/logistics.png" 
                  alt="Operational Strategy" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem]">
                  <p className="text-white text-lg font-bold tracking-tight leading-relaxed">&quot;Quality is not an act, it is a habit that we cultivate at every stage of sourcing.&quot;</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section-padding bg-secondary/20 relative">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-24">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[11px] mb-6 block opacity-60">Why Krushnkrupa</span>
              <h3 className="text-5xl md:text-7xl font-bold text-white mt-4 tracking-tighter leading-none">The Export Standard.</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Direct Sourcing", desc: "We source directly from certified farms to ensure authentic provenance and competitive pricing.", icon: <Target className="w-6 h-6" /> },
              { title: "Quality Audit", desc: "Every consignment undergoes a multi-stage audit exceeding international food safety norms.", icon: <Award className="w-6 h-6" /> },
              { title: "Farmer Connect", desc: "Empowering local agriculture through fair-trade practices and direct market access.", icon: <Users className="w-6 h-6" /> },
              { title: "Trade Heritage", desc: "A legacy of trust built through thousands of successful global consignments.", icon: <Landmark className="w-6 h-6" /> }
            ].map((adv, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-12 rounded-[3.5rem] bg-primary/50 border border-white/5 hover:border-accent/30 transition-all group hover:shadow-2xl hover:shadow-accent/5 relative overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl">
                    {adv.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">{adv.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding relative overflow-hidden bg-pattern-grid">
        <div className="glow-mesh bottom-0 right-0 opacity-15"></div>
        <div className="container-custom text-center py-32">
          <ScrollReveal>
            <h2 className="text-6xl md:text-9xl font-bold text-white mb-20 tracking-tighter leading-none">
              Ready to <span className="accent-gradient-text">Partner?</span>
            </h2>
            <Link href="/contact" className="group px-16 py-8 bg-accent hover:bg-accent-hover text-primary font-bold rounded-3xl transition-all shadow-2xl shadow-accent/30 inline-flex items-center gap-5 uppercase tracking-[0.3em] text-xs active:scale-95">
              Contact Our Trade Desk
              <Target className="w-6 h-6 transition-transform group-hover:scale-125" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
