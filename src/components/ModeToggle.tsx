"use client";

import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { Sparkles, Code } from "lucide-react";

export default function ModeToggle() {
  const { mode, setMode, hasSelectedMode } = usePortfolioMode();

  if (!hasSelectedMode) {
    return null;
  }

  const isAgentSwarm = mode === "agent-swarm";

  return (
    <button
      onClick={() => setMode(isAgentSwarm ? "vanilla" : "agent-swarm")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-700 hover:bg-gray-600 border border-gray-600 transition-all duration-200"
      title={`Switch to ${isAgentSwarm ? "Vanilla" : "Agent Swarm"} mode`}
    >
      <div className="relative flex items-center">
        {/* Track */}
        <div className={`w-10 h-5 rounded-full transition-colors duration-200 ${
          isAgentSwarm ? "bg-purple-600" : "bg-blue-600"
        }`}>
          {/* Thumb */}
          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 flex items-center justify-center ${
            isAgentSwarm ? "translate-x-5" : "translate-x-0.5"
          }`}>
            {isAgentSwarm ? (
              <Sparkles className="w-2.5 h-2.5 text-purple-600" />
            ) : (
              <Code className="w-2.5 h-2.5 text-blue-600" />
            )}
          </div>
        </div>
      </div>

      <span className="text-xs font-medium text-gray-300 hidden sm:inline">
        {isAgentSwarm ? "Agent Swarm" : "Vanilla"}
      </span>
    </button>
  );
}
