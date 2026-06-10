import { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Trade Inquiry | Krushnkrupa Exporters",
  description: "Initiate a trade inquiry with Krushnkrupa Exporters. Submit your volume requirements and destination port for a custom export quotation.",
};

export default function Inquiry() {
  return (
    <div className="bg-primary min-h-screen bg-pattern-grid">
      {/* HERO SECTION */}
      <section className="subpage-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_bg.png"
            alt="Inquiry Background"
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
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">Strategic Procurement</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
              Inquiry <span className="accent-gradient-text">Gateway.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed border-l-4 border-accent pl-10">
              Submit your detailed requirements below. Our trade desk will process your request and provide a comprehensive logistics and pricing breakdown.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INQUIRY FORM SECTION */}
      <section className="section-padding relative">
        <div className="glow-mesh top-0 right-0 opacity-10"></div>
        <div className="container-custom">
          <div className="bg-secondary/30 rounded-[4rem] p-12 lg:p-24 border border-white/5 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="glow-mesh -bottom-40 -left-40 opacity-10"></div>
            <ScrollReveal>
              <div className="mb-20 text-center">
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Confidential Transmission</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">Trade Specification Form</h2>
              </div>
              <InquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUICK CONNECT */}
      <section className="pb-32 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <a href="https://wa.me/919537110250" target="_blank" className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-[#25D366]/30 transition-all group flex items-center gap-10">
                <div className="w-20 h-20 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-primary transition-all duration-500 shadow-2xl shadow-[#25D366]/10">
                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"></path></svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-2 block">Direct WhatsApp</span>
                  <div className="text-2xl font-bold text-white tracking-tight">+91 9537110250</div>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group flex items-center gap-10 h-full">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-2xl shadow-accent/10">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-2 block">Official Email</span>
                  <div className="text-2xl font-bold text-white tracking-tight">vijaykatariya1825@gmail.com</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
