"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export default function Marquee({ items, reverse = false }: MarqueeProps) {
  return (
    <div className="flex overflow-hidden py-10 bg-white/[0.02] border-y border-white/5 select-none">
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap shrink-0 items-center gap-10 min-w-full"
      >
        {items.concat(items).map((item, i) => (
          <div key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white/10 hover:text-accent/40 transition-colors duration-500">
              {item}
            </span>
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent/20"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
