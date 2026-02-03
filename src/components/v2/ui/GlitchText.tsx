"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
  hover?: boolean;
}

const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

export default function GlitchText({
  text,
  className = "",
  glitchInterval = 3000,
  glitchDuration = 150,
  hover = false,
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);

    const iterations = 3;
    let currentIteration = 0;

    const glitchStep = () => {
      if (currentIteration >= iterations) {
        setDisplayText(text);
        setIsGlitching(false);
        return;
      }

      // Randomly glitch some characters
      const glitched = text
        .split("")
        .map((char) => {
          if (char === " ") return char;
          return Math.random() > 0.7
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char;
        })
        .join("");

      setDisplayText(glitched);
      currentIteration++;
      setTimeout(glitchStep, glitchDuration);
    };

    glitchStep();
  };

  // Auto glitch at interval
  useEffect(() => {
    if (hover) return; // Don't auto-glitch if hover mode

    const interval = setInterval(triggerGlitch, glitchInterval);
    return () => clearInterval(interval);
  }, [glitchInterval, hover, text]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={hover ? triggerGlitch : undefined}
    >
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-v2-cyan opacity-70 z-0"
            style={{ transform: "translate(-2px, 0)" }}
          >
            {displayText}
          </span>
          <span
            className="absolute inset-0 text-v2-pink opacity-70 z-0"
            style={{ transform: "translate(2px, 0)" }}
          >
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
}

// Simpler glitch effect using CSS only
export function GlitchTextCSS({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 text-v2-cyan opacity-0 group-hover:opacity-70 transition-opacity z-0 group-hover:animate-glitch"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        aria-hidden
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-v2-pink opacity-0 group-hover:opacity-70 transition-opacity z-0 group-hover:animate-glitch"
        style={{ clipPath: "inset(50% 0 0 0)", animationDelay: "0.1s" }}
        aria-hidden
      >
        {text}
      </span>
    </span>
  );
}
