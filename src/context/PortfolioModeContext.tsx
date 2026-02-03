"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PortfolioMode = "vanilla" | "agent-swarm";

interface PortfolioModeContextType {
  mode: PortfolioMode | null;
  setMode: (mode: PortfolioMode) => void;
  hasSelectedMode: boolean;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-mode";

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode | null>(null);
  const [hasSelectedMode, setHasSelectedMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PortfolioMode | null;
    if (stored === "vanilla" || stored === "agent-swarm") {
      setModeState(stored);
      setHasSelectedMode(true);
    }
    setIsHydrated(true);
  }, []);

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
    setHasSelectedMode(true);
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  // Don't render children until hydrated to avoid flash
  if (!isHydrated) {
    return null;
  }

  return (
    <PortfolioModeContext.Provider value={{ mode, setMode, hasSelectedMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (context === undefined) {
    throw new Error("usePortfolioMode must be used within a PortfolioModeProvider");
  }
  return context;
}
