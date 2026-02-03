"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Terminal } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/OPSphystech420",
    icon: Github,
    label: "GitHub",
    color: "hover:text-v2-cyan hover:border-v2-cyan/50",
  },
  {
    href: "https://linkedin.com/in/oskaripalmgren",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-v2-purple hover:border-v2-purple/50",
  },
];

export default function V2Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 border-t border-v2-glass-border"
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-v2-glass border border-v2-glass-border">
              <Terminal className="w-4 h-4 text-v2-cyan" />
            </div>
            <div className="font-mono text-sm">
              <span className="text-gray-500">&gt; </span>
              <span className="text-v2-cyan">2026</span>
              <span className="text-gray-500"> // </span>
              <span className="text-gray-400">Claude Code Hands-off Edition</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg bg-v2-glass border border-v2-glass-border text-gray-400 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 pt-6 border-t border-v2-glass-border/50 text-center">
          <p className="font-mono text-xs text-gray-600">
            <span className="text-v2-green">{"{"}</span>
            <span className="text-gray-500"> built_with: </span>
            <span className="text-v2-purple">&quot;Claude Code&quot;</span>
            <span className="text-gray-500">, year: </span>
            <span className="text-v2-cyan">2026</span>
            <span className="text-gray-500">, mode: </span>
            <span className="text-v2-pink">&quot;hands-off&quot;</span>
            <span className="text-v2-green"> {"}"}</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
