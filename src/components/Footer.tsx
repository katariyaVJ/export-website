"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

// Custom SVG Icons for Social Media (Since Lucide 1.x removed them)
const LinkedinIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-32 pb-12 border-t border-white/[0.03] relative overflow-hidden bg-pattern-dots">
      <div className="glow-mesh -bottom-32 -left-32 opacity-10"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-5 mb-10 group">
              <div className="relative w-14 h-14 transition-all duration-1000 group-hover:scale-110 flex items-center justify-center">
                <Image 
                  src="/assets/logo.svg" 
                  alt="Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl tracking-tighter text-white leading-none">
                  Krushnkrupa <span className="text-accent">Exporters</span>
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] mt-2 opacity-60">International Trade</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md font-medium">
              A decade of excellence in bridging Indian agricultural bounty with global markets. Committed to the highest standards of trade integrity and quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/919537110250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-primary hover:border-[#25D366] transition-all duration-500 shadow-xl"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={2.5} />
              </a>
              <a 
                href="https://www.linkedin.com/in/vijay-katariya-610761277" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-500 shadow-xl"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="https://www.instagram.com/vijay__katariya_1802" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-500 shadow-xl"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.4em] mb-12 opacity-50">Strategic</h4>
            <ul className="space-y-6">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link === 'Home' ? '' : link.toLowerCase()}`} className="group flex items-center gap-2 text-slate-500 hover:text-accent transition-all text-[13px] font-bold tracking-widest uppercase">
                    <span className="w-0 h-[1px] bg-accent transition-all group-hover:w-4"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.4em] mb-12 opacity-50">Trade Segments</h4>
            <ul className="space-y-6">
              {["Premium Spices", "Grocery & Pulses", "Fresh Fruits", "Incense Sticks"].map((cat) => (
                <li key={cat}>
                  <Link href="/products" className="group flex items-center gap-2 text-slate-500 hover:text-accent transition-all text-[13px] font-bold tracking-widest uppercase">
                    <span className="w-0 h-[1px] bg-accent transition-all group-hover:w-4"></span>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.4em] mb-12 opacity-50">Trade Desk</h4>
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center gap-3 text-slate-500 mb-3">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Headquarters</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-semibold pl-6">
                  Surat, Gujarat, India
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 text-slate-500 mb-3">
                  <Phone size={14} className="text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Direct</span>
                </div>
                <p className="text-slate-300 text-lg font-bold tracking-tight pl-6">+91 9537110250</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 text-slate-500 mb-3">
                  <Mail size={14} className="text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Electronic</span>
                </div>
                <p className="text-slate-400 text-sm break-all font-bold pl-6 border-b border-accent/10 group-hover:border-accent transition-all inline-block pb-1">
                  vijaykatariya1825@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em] font-bold">
            © {currentYear} Krushnkrupa Exporters • Precision in Global Trade
          </p>
          <div className="flex gap-12">
            <Link href="/privacy" className="text-slate-600 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold">Privacy Protocol</Link>
            <Link href="/terms" className="text-slate-600 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold">Trade Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
