"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project, SmallerProject, PlannedProject } from "@/data/types";
import GlassCard from "../ui/GlassCard";
import HolographicBadge from "../ui/HolographicBadge";
import NeonButton from "../ui/NeonButton";
import { ExternalLink, Github, Folder, Clock, AlertCircle } from "lucide-react";

interface ProjectShowcaseProps {
  projects: Project[];
  smallerProjects?: SmallerProject[];
  plannedProjects?: PlannedProject[];
}

export default function ProjectShowcase({
  projects,
  smallerProjects = [],
  plannedProjects = [],
}: ProjectShowcaseProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-v2-purple mb-4">
            PROJECTS
          </h2>
          <p className="font-mono text-sm text-gray-500">
            // things I&apos;ve built
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard glow="purple" className="overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="lg:w-2/5 flex-shrink-0">
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-v2-bg-tertiary border border-v2-glass-border">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        {/* Image count badge */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-v2-bg-primary/80 backdrop-blur-sm font-mono text-xs text-gray-400">
                            +{project.images.length - 1} more
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-display text-2xl text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <NeonButton
                            href={project.liveUrl}
                            color="purple"
                            variant="ghost"
                            size="sm"
                            external
                          >
                            <ExternalLink className="w-4 h-4" />
                          </NeonButton>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <HolographicBadge
                          key={tech.name}
                          name={tech.name}
                          type={tech.type}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Smaller projects grid */}
        {smallerProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="font-display text-xl tracking-wider text-v2-green mb-2">
                SMALLER PROJECTS
              </h3>
              <p className="font-mono text-xs text-gray-500">
                // experiments & side projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {smallerProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard glow="green" className="h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <Folder className="w-5 h-5 text-v2-green flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-mono text-sm text-white truncate">
                          {project.title}
                        </h4>
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-v2-green transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <HolographicBadge
                          key={tech.name}
                          name={tech.name}
                          type={tech.type}
                          size="sm"
                        />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Planned projects */}
        {plannedProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="font-display text-xl tracking-wider text-v2-orange mb-2">
                IN THE PIPELINE
              </h3>
              <p className="font-mono text-xs text-gray-500">
                // coming soon
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {plannedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard glow="orange" className="h-full opacity-80">
                    <div className="flex items-start gap-3 mb-3">
                      {project.status === "in-progress" ? (
                        <Clock className="w-5 h-5 text-v2-orange flex-shrink-0 mt-1 animate-pulse" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-mono text-sm text-white">
                          {project.title}
                        </h4>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono mt-1 ${
                            project.status === "in-progress"
                              ? "bg-v2-orange/20 text-v2-orange"
                              : project.status === "planning"
                              ? "bg-v2-purple/20 text-v2-purple"
                              : "bg-gray-500/20 text-gray-500"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-v2-orange transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.plannedTechnologies.slice(0, 4).map((tech) => (
                        <HolographicBadge
                          key={tech.name}
                          name={tech.name}
                          type={tech.type}
                          size="sm"
                        />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
