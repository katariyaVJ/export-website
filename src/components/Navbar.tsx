"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isScrolled = mounted ? scrolled : false;

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ${isScrolled ? "bg-primary/80 backdrop-blur-3xl py-4 shadow-[0_20px_80px_rgba(0,0,0,0.5)]" : "bg-transparent py-10"}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-5 group">
            <div className="relative w-16 h-16 transition-all duration-1000 group-hover:scale-110 flex items-center justify-center">
              <Image 
                src="/assets/logo.svg" 
                alt="Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl tracking-tighter text-white leading-none">
                Krushnkrupa <span className="text-accent">Exporters</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] leading-none mt-2 opacity-50">Global Logistics Protocol</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-lg font-bold transition-all text-[12px] uppercase tracking-[0.3em] group/nav ${
                  pathname === link.href ? "text-accent" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-700 group-hover/nav:w-1/2 ${pathname === link.href ? "w-1/2 shadow-[0_0_10px_rgba(197,160,89,1)]" : ""}`}></span>
              </Link>
            ))}
            <div className="ml-10">
              <Link
                href="/inquiry"
                className="group relative bg-accent hover:bg-accent-hover text-primary px-10 py-4 rounded-2xl font-bold text-[12px] tracking-[0.4em] uppercase transition-all overflow-hidden shadow-2xl shadow-accent/20 active:scale-95 flex items-center gap-4"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Inquiry
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-5 text-white bg-white/5 rounded-3xl border border-white/10 transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              <div className="w-7 flex flex-col gap-2">
                <span className={`h-0.5 w-full bg-white transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-500 ${isOpen ? "opacity-0 scale-0" : ""}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-primary/98 backdrop-blur-3xl transition-all duration-1000 z-[200] ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-16 p-10">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-12 right-12 p-6 text-white/40 hover:text-white bg-white/5 rounded-3xl border border-white/10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center space-y-12">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-6xl font-bold tracking-tighter transition-all ${pathname === link.href ? "text-accent scale-110" : "text-white/30 hover:text-white"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-20 w-full max-w-sm">
            <Link
              href="/inquiry"
              className="block w-full text-center py-8 bg-accent text-primary rounded-[2.5rem] font-bold uppercase tracking-[0.5em] text-sm shadow-[0_0_60px_rgba(197,160,89,0.3)]"
              onClick={() => setIsOpen(false)}
            >
              Start Trade
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
