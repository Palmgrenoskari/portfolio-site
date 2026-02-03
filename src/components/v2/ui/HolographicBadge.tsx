"use client";

import { motion } from "framer-motion";

interface HolographicBadgeProps {
  name: string;
  type?: "language" | "framework" | "tool" | "database" | "cloud" | "soft_skill" | "hard_skill";
  size?: "sm" | "md" | "lg";
}

const typeColors = {
  language: {
    bg: "from-v2-cyan/20 to-v2-cyan/5",
    border: "border-v2-cyan/30 hover:border-v2-cyan",
    text: "text-v2-cyan",
    glow: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
  },
  framework: {
    bg: "from-v2-purple/20 to-v2-purple/5",
    border: "border-v2-purple/30 hover:border-v2-purple",
    text: "text-v2-purple",
    glow: "hover:shadow-[0_0_20px_rgba(191,0,255,0.3)]",
  },
  tool: {
    bg: "from-v2-green/20 to-v2-green/5",
    border: "border-v2-green/30 hover:border-v2-green",
    text: "text-v2-green",
    glow: "hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]",
  },
  database: {
    bg: "from-v2-orange/20 to-v2-orange/5",
    border: "border-v2-orange/30 hover:border-v2-orange",
    text: "text-v2-orange",
    glow: "hover:shadow-[0_0_20px_rgba(255,136,0,0.3)]",
  },
  cloud: {
    bg: "from-v2-pink/20 to-v2-pink/5",
    border: "border-v2-pink/30 hover:border-v2-pink",
    text: "text-v2-pink",
    glow: "hover:shadow-[0_0_20px_rgba(255,0,128,0.3)]",
  },
  soft_skill: {
    bg: "from-gray-400/20 to-gray-400/5",
    border: "border-gray-400/30 hover:border-gray-400",
    text: "text-gray-400",
    glow: "hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]",
  },
  hard_skill: {
    bg: "from-white/20 to-white/5",
    border: "border-white/30 hover:border-white",
    text: "text-white",
    glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
  },
};

const sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

export default function HolographicBadge({
  name,
  type = "tool",
  size = "md",
}: HolographicBadgeProps) {
  const colors = typeColors[type];

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center font-mono rounded-lg
        bg-gradient-to-r ${colors.bg}
        border ${colors.border}
        ${colors.text}
        ${colors.glow}
        backdrop-blur-sm
        transition-all duration-300
        cursor-default
        ${sizeClasses[size]}
      `}
    >
      <span className="opacity-50 mr-1.5">&lt;</span>
      {name}
      <span className="opacity-50 ml-1.5">/&gt;</span>
    </motion.span>
  );
}
