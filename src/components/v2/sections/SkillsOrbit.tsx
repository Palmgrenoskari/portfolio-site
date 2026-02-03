"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Technology, TechnologyType } from "@/data/types";
import HolographicBadge from "../ui/HolographicBadge";

interface SkillsOrbitProps {
  technologies: Technology[];
}

const categoryInfo: Record<TechnologyType, { label: string; color: string }> = {
  language: { label: "Languages", color: "v2-cyan" },
  framework: { label: "Frameworks", color: "v2-purple" },
  tool: { label: "Tools", color: "v2-green" },
  database: { label: "Databases", color: "v2-orange" },
  cloud: { label: "Cloud", color: "v2-pink" },
  soft_skill: { label: "Soft Skills", color: "gray-400" },
  hard_skill: { label: "Hard Skills", color: "white" },
};

export default function SkillsOrbit({ technologies }: SkillsOrbitProps) {
  const [activeCategory, setActiveCategory] = useState<TechnologyType | "all">("all");

  // Group technologies by type
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.type]) acc[tech.type] = [];
    acc[tech.type].push(tech);
    return acc;
  }, {} as Record<TechnologyType, Technology[]>);

  const categories = Object.keys(grouped) as TechnologyType[];

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.type === activeCategory);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-v2-cyan mb-4">
            TECH STACK
          </h2>
          <p className="font-mono text-sm text-gray-500">
            // technologies I work with
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
              activeCategory === "all"
                ? "bg-v2-cyan/20 text-v2-cyan border border-v2-cyan/50"
                : "bg-v2-glass border border-v2-glass-border text-gray-400 hover:text-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const info = categoryInfo[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  isActive
                    ? `bg-${info.color}/20 text-${info.color} border border-${info.color}/50`
                    : "bg-v2-glass border border-v2-glass-border text-gray-400 hover:text-gray-200"
                }`}
              >
                {info.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3"
        >
          {filteredTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.03 }}
            >
              <HolographicBadge name={tech.name} type={tech.type} size="lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: "Languages", value: grouped.language?.length || 0, color: "v2-cyan" },
            { label: "Frameworks", value: grouped.framework?.length || 0, color: "v2-purple" },
            { label: "Tools", value: grouped.tool?.length || 0, color: "v2-green" },
            { label: "Cloud/DB", value: (grouped.database?.length || 0) + (grouped.cloud?.length || 0), color: "v2-orange" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-v2-glass border border-v2-glass-border text-center"
            >
              <div className={`font-display text-3xl text-${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-mono text-xs text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
