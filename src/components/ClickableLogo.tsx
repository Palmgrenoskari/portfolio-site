"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
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
    <div className="relative flex items-center gap-2" onClick={handleClick}>
      <Image
        src="/images/corgi.jpg"
        alt=""
        width={32}
        height={32}
        className="rounded-full ring-1 ring-border"
      />
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
