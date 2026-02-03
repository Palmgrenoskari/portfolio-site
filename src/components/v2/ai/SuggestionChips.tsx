"use client";

import { motion } from "framer-motion";

interface SuggestionChipsProps {
  onSelect: (text: string) => void;
}

const suggestions = [
  { text: "What skills do you have?", icon: "🛠️" },
  { text: "Tell me about your projects", icon: "📁" },
  { text: "Where do you work?", icon: "💼" },
  { text: "What's your education?", icon: "🎓" },
];

export default function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={suggestion.text}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(suggestion.text)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-v2-glass border border-v2-glass-border text-xs font-mono text-gray-400 hover:text-v2-cyan hover:border-v2-cyan/30 transition-colors"
        >
          <span>{suggestion.icon}</span>
          <span className="truncate max-w-[150px]">{suggestion.text}</span>
        </motion.button>
      ))}
    </div>
  );
}
