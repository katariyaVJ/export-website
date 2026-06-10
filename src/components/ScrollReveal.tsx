"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", id, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
