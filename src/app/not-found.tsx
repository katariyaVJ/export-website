"use client";

import Link from "next/link";
import { MoveLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-pattern-grid opacity-30 pointer-events-none"></div>
      <div className="glow-mesh top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Error 404</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter">
            Lost in <span className="accent-gradient-text">Transit.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed font-medium">
            The trade corridor you are looking for does not exist or has been decommissioned. Let&apos;s get you back to the main hub.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center gap-3 px-10 py-5 bg-accent text-primary font-bold rounded-2xl uppercase tracking-widest text-[11px] hover:bg-accent-hover transition-all shadow-2xl shadow-accent/20"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 px-10 py-5 bg-white/[0.03] text-white font-bold rounded-2xl border border-white/10 uppercase tracking-widest text-[11px] hover:bg-white/[0.08] transition-all"
            >
              <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Previous Page
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
