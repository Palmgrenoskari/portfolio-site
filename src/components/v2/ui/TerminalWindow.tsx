"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function TerminalWindow({
  children,
  title = "terminal",
  className = "",
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl overflow-hidden border border-v2-glass-border bg-v2-bg-secondary ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-v2-bg-tertiary border-b border-v2-glass-border">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-v2-pink/80" />
          <div className="w-3 h-3 rounded-full bg-v2-orange/80" />
          <div className="w-3 h-3 rounded-full bg-v2-green/80" />
        </div>

        {/* Title */}
        <span className="flex-1 text-center font-mono text-xs text-gray-500">
          {title}
        </span>

        {/* Spacer for symmetry */}
        <div className="w-14" />
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </motion.div>
  );
}

// Helper component for terminal lines
export function TerminalLine({
  prompt = "$",
  command,
  output,
  promptColor = "text-v2-green",
}: {
  prompt?: string;
  command?: string;
  output?: ReactNode;
  promptColor?: string;
}) {
  return (
    <div className="mb-2 last:mb-0">
      {command && (
        <div className="flex gap-2">
          <span className={promptColor}>{prompt}</span>
          <span className="text-gray-300">{command}</span>
        </div>
      )}
      {output && (
        <div className="text-gray-500 pl-4 mt-1">{output}</div>
      )}
    </div>
  );
}
