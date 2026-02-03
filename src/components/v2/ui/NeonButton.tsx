"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  color?: "cyan" | "purple" | "green" | "pink" | "orange";
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

const colorStyles = {
  cyan: {
    solid: "bg-v2-cyan text-v2-bg-primary hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]",
    outline: "border-v2-cyan text-v2-cyan hover:bg-v2-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
    ghost: "text-v2-cyan hover:bg-v2-cyan/10",
  },
  purple: {
    solid: "bg-v2-purple text-white hover:shadow-[0_0_30px_rgba(191,0,255,0.5)]",
    outline: "border-v2-purple text-v2-purple hover:bg-v2-purple/10 hover:shadow-[0_0_20px_rgba(191,0,255,0.3)]",
    ghost: "text-v2-purple hover:bg-v2-purple/10",
  },
  green: {
    solid: "bg-v2-green text-v2-bg-primary hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]",
    outline: "border-v2-green text-v2-green hover:bg-v2-green/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]",
    ghost: "text-v2-green hover:bg-v2-green/10",
  },
  pink: {
    solid: "bg-v2-pink text-white hover:shadow-[0_0_30px_rgba(255,0,128,0.5)]",
    outline: "border-v2-pink text-v2-pink hover:bg-v2-pink/10 hover:shadow-[0_0_20px_rgba(255,0,128,0.3)]",
    ghost: "text-v2-pink hover:bg-v2-pink/10",
  },
  orange: {
    solid: "bg-v2-orange text-v2-bg-primary hover:shadow-[0_0_30px_rgba(255,136,0,0.5)]",
    outline: "border-v2-orange text-v2-orange hover:bg-v2-orange/10 hover:shadow-[0_0_20px_rgba(255,136,0,0.3)]",
    ghost: "text-v2-orange hover:bg-v2-orange/10",
  },
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function NeonButton({
  children,
  href,
  onClick,
  color = "cyan",
  variant = "outline",
  size = "md",
  className = "",
  external = false,
}: NeonButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-mono font-medium rounded-lg
    border-2 ${variant === "solid" ? "border-transparent" : ""}
    transition-all duration-300
    ${colorStyles[color][variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const MotionComponent = motion.button;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={baseClasses}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={baseClasses}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <MotionComponent
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
    >
      {children}
    </MotionComponent>
  );
}
