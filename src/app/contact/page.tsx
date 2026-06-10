"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import InquiryForm from "@/components/InquiryForm";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-primary min-h-screen bg-pattern-grid">
      {/* HERO SECTION */}
      <section className="subpage-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/office.png"
            alt="Contact Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="subpage-hero-overlay"></div>
          <div className="glow-mesh top-1/4 -left-20 opacity-15"></div>
        </div>
        
        <div className="container-custom relative z-10 w-full pt-40 lg:pt-60">
          <ScrollReveal>
            <div className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">International Trade Desk</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
              Get in <span className="accent-gradient-text">Touch.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed border-l-4 border-accent pl-10">
              Connect with our global trade coordinators for volume specifications, certified quality audits, and international logistics scheduling.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="section-padding relative overflow-hidden bg-pattern-dots">
        <div className="glow-mesh top-1/2 right-0 opacity-10"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            {/* CONTACT DETAILS */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-[11px] mb-6 block opacity-60">Access Points</span>
                <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-16 tracking-tighter leading-none">Global Reach.</h2>
                
                <div className="space-y-12">
                  {[
                    {
                      title: "Regional Headquarters",
                      desc: "Krushnkrupa Exporters\nSurat, Gujarat, India",
                      icon: <MapPin className="w-7 h-7" />
                    },
                    {
                      title: "Direct Logistics Line",
                      desc: "+91 9537110250",
                      sub: "Available on WhatsApp",
                      href: "https://wa.me/919537110250",
                      icon: <Phone className="w-7 h-7" />
                    },
                    {
                      title: "Official Trade Email",
                      desc: "vijaykatariya1825@gmail.com",
                      href: "mailto:vijaykatariya1825@gmail.com",
                      icon: <Mail className="w-7 h-7" />
                    }
                  ].map((item, i) => (
                    <a 
                      key={i} 
                      href={item.href || "#"}
                      target={item.href?.startsWith('http') ? "_blank" : undefined}
                      className="flex gap-10 group cursor-pointer"
                    >
                      <div className="w-20 h-20 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-700 text-accent shadow-2xl">
                        {item.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-3 group-hover:text-accent transition-colors">{item.title}</h4>
                        <p className="text-2xl font-bold text-white leading-tight tracking-tight whitespace-pre-line group-hover:text-white transition-colors">{item.desc}</p>
                        {item.sub && <p className="text-[10px] font-bold text-accent mt-3 uppercase tracking-[0.3em] flex items-center gap-2">
                          <MessageCircle size={12} />
                          {item.sub}
                        </p>}
                      </div>
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="bg-secondary/40 p-12 lg:p-20 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden bg-pattern-waves">
                  <div className="glow-mesh -top-20 -right-20 opacity-15"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-12 tracking-tight leading-none">Certified Inquiry Submission.</h3>
                    <InquiryForm />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <ScrollReveal>
            <div className="h-[600px] w-full rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 grayscale invert contrast-125 opacity-20 hover:opacity-100 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709462828!2d72.73989476902409!3d21.15934029853909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Regional Office Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
