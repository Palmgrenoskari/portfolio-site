"use client";

import {
  usePortfolioMode,
  PortfolioMode,
} from "@/context/PortfolioModeContext";
import { Sparkles, Code } from "lucide-react";

export default function ModeSelectionModal() {
  const { hasSelectedMode, setMode } = usePortfolioMode();

  if (hasSelectedMode) {
    return null;
  }

  const handleSelect = (mode: PortfolioMode) => {
    setMode(mode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-lg mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Hey, welcome to Oskari Palmgren&apos;s personal dev portfolio.
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Select your experience:
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleSelect("vanilla")}
            className="w-full p-4 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-blue-500 rounded-xl transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">
                  Vanilla Portfolio
                </h3>
                <p className="text-gray-400 text-sm">
                  Default, light AI assistance mode. Nothing flashy.
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleSelect("agent-swarm")}
            className="w-full p-4 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-purple-500 rounded-xl transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">
                  2026 Gastown Agent Swarm
                </h3>
                <p className="text-gray-400 text-sm">
                  Experimental AI-powered 100% Agent Swarm made portfolio.
                  Gastown + Claude Code (MAX)
                </p>
              </div>
            </div>
          </button>
        </div>

        <p className="text-gray-500 text-xs text-center mt-6">
          Don&apos;t worry, you can switch this later from the header&apos;s
          toggle
        </p>
      </div>
    </div>
  );
}
