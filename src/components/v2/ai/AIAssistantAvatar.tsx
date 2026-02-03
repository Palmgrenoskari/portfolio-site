"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface AIAssistantAvatarProps {
  size?: "sm" | "md" | "lg";
  isTyping?: boolean;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

const iconSizes = {
  sm: "w-5 h-5",
  md: "w-7 h-7",
  lg: "w-10 h-10",
};

export default function AIAssistantAvatar({
  size = "md",
  isTyping = false,
}: AIAssistantAvatarProps) {
  return (
    <div className="relative">
      {/* Outer glow ring */}
      <motion.div
        animate={
          isTyping
            ? {
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }
            : {}
        }
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-v2-cyan/30 to-v2-purple/30 blur-md ${sizeClasses[size]}`}
      />

      {/* Main avatar */}
      <motion.div
        animate={isTyping ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
        className={`relative ${sizeClasses[size]} rounded-full bg-gradient-to-br from-v2-cyan/20 to-v2-purple/20 border border-v2-glass-border flex items-center justify-center`}
      >
        {/* Inner gradient */}
        <div className="absolute inset-1 rounded-full bg-v2-bg-secondary" />

        {/* Icon */}
        <Bot className={`relative z-10 ${iconSizes[size]} text-v2-cyan`} />

        {/* Orbital ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-v2-purple"
            style={{ marginTop: "-2px" }}
          />
        </motion.div>

        {/* Status dot */}
        <div className="absolute bottom-0 right-0">
          <span className="relative flex h-3 w-3">
            {isTyping && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v2-green opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                isTyping ? "bg-v2-green" : "bg-v2-cyan"
              }`}
            />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
