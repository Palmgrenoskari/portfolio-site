"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "purple" | "green" | "pink" | "orange" | "none";
  hover?: boolean;
  delay?: number;
}

const glowColors = {
  cyan: "hover:border-v2-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]",
  purple: "hover:border-v2-purple/50 hover:shadow-[0_0_30px_rgba(191,0,255,0.15)]",
  green: "hover:border-v2-green/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]",
  pink: "hover:border-v2-pink/50 hover:shadow-[0_0_30px_rgba(255,0,128,0.15)]",
  orange: "hover:border-v2-orange/50 hover:shadow-[0_0_30px_rgba(255,136,0,0.15)]",
  none: "",
};

export default function GlassCard({
  children,
  className = "",
  glow = "cyan",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        relative p-6 rounded-xl
        bg-v2-glass backdrop-blur-xl
        border border-v2-glass-border
        transition-all duration-300
        ${hover ? glowColors[glow] : ""}
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
