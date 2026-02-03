"use client";

import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import TypewriterText from "../ui/TypewriterText";
import NeonButton from "../ui/NeonButton";
import { Terminal, Sparkles, Code2, Zap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
}

export default function HeroSection({
  name = "OSKARI PALMGREN",
  title = "Software Developer",
  subtitle = "Building the future with code",
}: HeroSectionProps) {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 relative">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] text-v2-cyan/20"
      >
        <Code2 className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] text-v2-purple/20"
      >
        <Terminal className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[20%] text-v2-green/20"
      >
        <Zap className="w-10 h-10" />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-v2-glass border border-v2-glass-border"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v2-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-v2-green" />
          </span>
          <span className="font-mono text-xs text-gray-400">
            available for opportunities
          </span>
        </motion.div>

        {/* Name with glitch effect */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider mb-4">
          <GlitchText
            text={name.split(" ")[0]}
            className="text-v2-cyan drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            glitchInterval={5000}
            hover
          />
          <br />
          <span className="text-gray-300 text-3xl md:text-5xl lg:text-6xl">
            {name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Role with typewriter */}
        <div className="font-mono text-lg md:text-xl text-gray-400 mt-6 h-8">
          <span className="text-v2-purple">const</span>{" "}
          <span className="text-v2-cyan">role</span>{" "}
          <span className="text-gray-500">=</span>{" "}
          <span className="text-v2-green">&quot;</span>
          <TypewriterText
            text={title}
            speed={80}
            delay={500}
            className="text-v2-green"
            showCursor={false}
          />
          <span className="text-v2-green">&quot;</span>
          <span className="text-gray-500">;</span>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-gray-500 mt-4 font-mono text-sm"
        >
          // {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <NeonButton href="/v2/projects" color="cyan" variant="solid">
            <Sparkles className="w-4 h-4" />
            View Projects
          </NeonButton>
          <NeonButton
            href="https://github.com/OPSphystech420"
            color="purple"
            variant="outline"
            external
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </NeonButton>
          <NeonButton
            href="https://linkedin.com/in/oskaripalmgren"
            color="green"
            variant="outline"
            external
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </NeonButton>
        </motion.div>

        {/* Tech stack preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {["Python", "TypeScript", "React", "Next.js", "Docker", "Azure"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + i * 0.1 }}
                className="px-3 py-1.5 rounded-lg bg-v2-glass border border-v2-glass-border font-mono text-xs text-gray-400 hover:text-v2-cyan hover:border-v2-cyan/50 transition-colors"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs">scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 rounded-full bg-v2-cyan"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
