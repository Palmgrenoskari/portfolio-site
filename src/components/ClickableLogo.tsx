"use client";

import type React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function ClickableLogo() {
  const [showBubble, setShowBubble] = useState(false);
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    // Subtle easter egg: clicking the brand while already home stays put.
    if (pathname === "/") {
      e.preventDefault();
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 2500);
    }
  };

  return (
    <div className="relative flex items-center" onClick={handleClick}>
      <span className="font-mono font-semibold tracking-tight text-base">
        <span className="text-accent">~</span>/oskari
      </span>
      {showBubble && (
        <div className="absolute top-full left-0 mt-3 font-mono text-xs bg-surface border border-border text-fg px-3 py-2 rounded-md shadow-lg whitespace-nowrap">
          <span className="text-accent">$</span> cd ~ &mdash; already home :)
        </div>
      )}
    </div>
  );
}
