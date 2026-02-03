"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  Search,
  Home,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Award,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: "navigation" | "external" | "action";
}

export default function V2CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "home",
      label: "Home",
      description: "Go to homepage",
      icon: <Home className="w-4 h-4" />,
      action: () => router.push("/v2"),
      category: "navigation",
    },
    {
      id: "work",
      label: "Work",
      description: "View work experience",
      icon: <Briefcase className="w-4 h-4" />,
      action: () => router.push("/v2/work"),
      category: "navigation",
    },
    {
      id: "education",
      label: "Education",
      description: "View education background",
      icon: <GraduationCap className="w-4 h-4" />,
      action: () => router.push("/v2/education"),
      category: "navigation",
    },
    {
      id: "projects",
      label: "Projects",
      description: "View projects",
      icon: <FolderKanban className="w-4 h-4" />,
      action: () => router.push("/v2/projects"),
      category: "navigation",
    },
    {
      id: "certifications",
      label: "Certifications",
      description: "View certifications",
      icon: <Award className="w-4 h-4" />,
      action: () => router.push("/v2/certifications"),
      category: "navigation",
    },
    {
      id: "vanilla",
      label: "Switch to Vanilla",
      description: "Go to classic portfolio version",
      icon: <ArrowLeft className="w-4 h-4" />,
      action: () => router.push("/"),
      category: "navigation",
    },
    // External
    {
      id: "github",
      label: "GitHub",
      description: "Open GitHub profile",
      icon: <FaGithub className="w-4 h-4" />,
      action: () => window.open("https://github.com/OPSphystech420", "_blank"),
      category: "external",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "Open LinkedIn profile",
      icon: <FaLinkedin className="w-4 h-4" />,
      action: () =>
        window.open("https://linkedin.com/in/oskaripalmgren", "_blank"),
      category: "external",
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Open with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        return;
      }

      if (!isOpen) return;

      // Navigation
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    },
    [isOpen, filteredCommands, selectedIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const categoryLabels: Record<string, string> = {
    navigation: "Navigation",
    external: "External Links",
    action: "Actions",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Command palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-lg z-[101]"
          >
            <div className="bg-v2-bg-secondary/95 backdrop-blur-xl border border-v2-glass-border rounded-xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-v2-glass-border">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search commands..."
                  autoFocus
                  className="flex-1 bg-transparent font-mono text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-v2-glass border border-v2-glass-border">
                  <Command className="w-3 h-3 text-gray-500" />
                  <span className="font-mono text-xs text-gray-500">K</span>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <p className="font-mono text-sm text-gray-500">
                      No results found
                    </p>
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category} className="mb-2 last:mb-0">
                      <div className="px-3 py-1.5">
                        <span className="font-mono text-xs text-gray-500">
                          {categoryLabels[category]}
                        </span>
                      </div>
                      {items.map((cmd) => {
                        const globalIndex = filteredCommands.findIndex(
                          (c) => c.id === cmd.id
                        );
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <button
                            key={cmd.id}
                            onClick={() => {
                              cmd.action();
                              setIsOpen(false);
                            }}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                              isSelected
                                ? "bg-v2-cyan/10 border border-v2-cyan/30"
                                : "border border-transparent hover:bg-v2-glass"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-v2-cyan/20 text-v2-cyan"
                                  : "bg-v2-glass text-gray-400"
                              }`}
                            >
                              {cmd.icon}
                            </div>
                            <div className="flex-1 text-left">
                              <div
                                className={`font-mono text-sm ${
                                  isSelected ? "text-v2-cyan" : "text-white"
                                }`}
                              >
                                {cmd.label}
                              </div>
                              {cmd.description && (
                                <div className="font-mono text-xs text-gray-500">
                                  {cmd.description}
                                </div>
                              )}
                            </div>
                            {cmd.category === "external" && (
                              <ExternalLink className="w-4 h-4 text-gray-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-v2-glass-border bg-v2-bg-tertiary/50">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-v2-glass">↵</span>
                    select
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-v2-glass">↑↓</span>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-v2-glass">esc</span>
                    close
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
