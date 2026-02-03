"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Terminal, Command } from "lucide-react";

const v2Routes = [
  { href: "/v2", label: "Home", color: "v2-cyan" },
  { href: "/v2/work", label: "Work", color: "v2-green" },
  { href: "/v2/education", label: "Education", color: "v2-orange" },
  { href: "/v2/projects", label: "Projects", color: "v2-purple" },
  { href: "/v2/certifications", label: "Certs", color: "v2-pink" },
];

export default function V2Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-v2-bg-primary/80 backdrop-blur-xl border-b border-v2-glass-border" />

      <nav className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/v2" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-lg bg-v2-glass border border-v2-glass-border group-hover:border-v2-cyan/50 transition-colors"
          >
            <Terminal className="w-5 h-5 text-v2-cyan" />
          </motion.div>
          <span className="font-display text-lg tracking-wider hidden sm:block">
            <span className="text-v2-cyan">OSKARI</span>
            <span className="text-gray-400">.v2</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {v2Routes.map((route) => {
            const isActive =
              pathname === route.href ||
              (route.href !== "/v2" && pathname.startsWith(route.href));

            return (
              <Link key={route.href} href={route.href} className="relative px-4 py-2 group">
                <span
                  className={`font-mono text-sm tracking-wide transition-colors ${
                    isActive ? `text-${route.color}` : "text-gray-400 group-hover:text-gray-200"
                  }`}
                >
                  {route.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-2 right-2 h-0.5 bg-${route.color}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div
                  className={`absolute inset-0 rounded-lg bg-${route.color}/10 opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mode indicator & Mobile menu button */}
        <div className="flex items-center gap-3">
          {/* Cmd+K shortcut */}
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
                ctrlKey: true,
              });
              document.dispatchEvent(event);
            }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-v2-glass border border-v2-glass-border hover:border-v2-cyan/50 transition-colors text-xs font-mono text-gray-500 hover:text-v2-cyan"
          >
            <Command className="w-3 h-3" />
            <span>K</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-v2-glass border border-v2-glass-border hover:border-v2-cyan/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-v2-cyan" />
            ) : (
              <Menu className="w-5 h-5 text-v2-cyan" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-v2-bg-primary/95 backdrop-blur-xl border-b border-v2-glass-border"
        >
          <div className="px-4 py-4 space-y-2">
            {v2Routes.map((route) => {
              const isActive =
                pathname === route.href ||
                (route.href !== "/v2" && pathname.startsWith(route.href));

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-mono text-sm transition-colors ${
                    isActive
                      ? `bg-${route.color}/10 text-${route.color} border border-${route.color}/30`
                      : "text-gray-400 hover:text-gray-200 hover:bg-v2-glass"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
