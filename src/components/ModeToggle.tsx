"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Zap } from "lucide-react";

export default function ModeToggle() {
  const pathname = usePathname();
  const isV2 = pathname.startsWith("/v2");

  if (isV2) {
    // Link back to vanilla from v2
    const vanillaPath = pathname.replace("/v2", "") || "/";
    return (
      <Link
        href={vanillaPath}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all shadow-lg group"
      >
        <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
        <span className="text-sm font-medium">Vanilla</span>
      </Link>
    );
  }

  // Link to v2 from vanilla
  const v2Path = pathname === "/" ? "/v2" : `/v2${pathname}`;
  return (
    <Link
      href={v2Path}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all shadow-lg group"
    >
      <Zap className="w-4 h-4 group-hover:animate-pulse" />
      <span className="text-sm font-medium">2026 Edition</span>
    </Link>
  );
}
