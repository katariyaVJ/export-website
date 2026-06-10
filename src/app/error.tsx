"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 z-0 bg-pattern-grid opacity-30 pointer-events-none"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10 text-red-500">
            <AlertTriangle className="w-10 h-10" />
          </div>
          
          <span className="text-red-500 font-bold uppercase tracking-[0.5em] text-xs mb-6 block">System Interruption</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Trade Loop <span className="text-red-500">Error.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-16 leading-relaxed font-medium">
            A temporary disruption has occurred in our trade data processing. Our logistics systems are being recalibrated.
          </p>
          
          <button 
            onClick={() => reset()}
            className="group flex items-center gap-3 px-12 py-6 bg-white/[0.03] text-white font-bold rounded-2xl border border-white/10 uppercase tracking-widest text-[11px] hover:bg-white/[0.08] transition-all mx-auto shadow-2xl"
          >
            <RefreshCcw className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
            Re-Initialize System
          </button>
        </motion.div>
      </div>
    </div>
  );
}
