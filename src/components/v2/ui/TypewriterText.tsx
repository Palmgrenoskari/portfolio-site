"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: isComplete ? [1, 0] : 1 }}
          transition={isComplete ? { repeat: Infinity, duration: 0.75 } : {}}
          className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

// Multi-line typewriter for sequential text
export function TypewriterSequence({
  lines,
  speed = 50,
  lineDelay = 500,
  className = "",
}: {
  lines: { text: string; className?: string }[];
  speed?: number;
  lineDelay?: number;
  className?: string;
}) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const handleLineComplete = () => {
    setCompletedLines((prev) => [...prev, lines[currentLine].text]);
    if (currentLine < lines.length - 1) {
      setTimeout(() => setCurrentLine((prev) => prev + 1), lineDelay);
    }
  };

  return (
    <div className={className}>
      {completedLines.map((line, index) => (
        <div key={index} className={lines[index].className}>
          {line}
        </div>
      ))}
      {currentLine < lines.length && !completedLines.includes(lines[currentLine].text) && (
        <TypewriterText
          text={lines[currentLine].text}
          speed={speed}
          className={lines[currentLine].className}
          onComplete={handleLineComplete}
        />
      )}
    </div>
  );
}
