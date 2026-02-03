"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WorkEntry, EducationEntry } from "@/data/types";
import GlassCard from "../ui/GlassCard";
import HolographicBadge from "../ui/HolographicBadge";
import { Briefcase, GraduationCap } from "lucide-react";

type TimelineItem =
  | (WorkEntry & { type: "work" })
  | (EducationEntry & { type: "education" });

interface TimelineVerticalProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
  accentColor?: "cyan" | "purple" | "green" | "pink" | "orange";
}

export default function TimelineVertical({
  items,
  title = "Experience",
  subtitle = "my journey so far",
  accentColor = "cyan",
}: TimelineVerticalProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`font-display text-3xl md:text-4xl tracking-wider text-v2-${accentColor} mb-4`}>
            {title.toUpperCase()}
          </h2>
          <p className="font-mono text-sm text-gray-500">// {subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-v2-${accentColor}/50 via-v2-${accentColor}/20 to-transparent`} />

          {/* Items */}
          {items.map((item, index) => {
            const isWork = item.type === "work";
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full bg-v2-${accentColor} shadow-[0_0_15px_rgba(0,255,255,0.5)]`}
                  />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                  <GlassCard glow={accentColor} delay={index * 0.1}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Logo */}
                      <div className="relative w-12 h-12 rounded-lg bg-v2-bg-tertiary border border-v2-glass-border overflow-hidden flex-shrink-0">
                        <Image
                          src={item.logo}
                          alt={isWork ? (item as WorkEntry).company : (item as EducationEntry).institution}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Title info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {isWork ? (
                            <Briefcase className="w-4 h-4 text-v2-green" />
                          ) : (
                            <GraduationCap className="w-4 h-4 text-v2-orange" />
                          )}
                          <span className="font-mono text-xs text-gray-500">
                            {isWork ? "work" : "education"}
                          </span>
                        </div>
                        <h3 className="font-display text-lg text-white truncate">
                          {isWork ? (item as WorkEntry).role : (item as EducationEntry).degree}
                        </h3>
                        <p className={`font-mono text-sm text-v2-${accentColor}`}>
                          {isWork ? (item as WorkEntry).company : (item as EducationEntry).institution}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-v2-bg-tertiary border border-v2-glass-border mb-4">
                      <span className="w-2 h-2 rounded-full bg-v2-green animate-pulse" />
                      <span className="font-mono text-xs text-gray-400">
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 whitespace-pre-line">
                      {item.description}
                    </p>

                    {/* Extra info for education */}
                    {!isWork && (item as EducationEntry).gpa && (
                      <div className="mb-4 px-3 py-2 rounded-lg bg-v2-bg-tertiary border border-v2-glass-border">
                        <span className="font-mono text-xs text-gray-500">GPA: </span>
                        <span className="font-mono text-sm text-v2-green">
                          {(item as EducationEntry).gpa}
                        </span>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 6).map((tech) => (
                        <HolographicBadge
                          key={tech.name}
                          name={tech.name}
                          type={tech.type}
                          size="sm"
                        />
                      ))}
                      {item.technologies.length > 6 && (
                        <span className="px-2 py-1 rounded-lg bg-v2-glass border border-v2-glass-border font-mono text-xs text-gray-500">
                          +{item.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
