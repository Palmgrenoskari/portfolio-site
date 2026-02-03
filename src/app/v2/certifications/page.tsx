"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/data";
import GlassCard from "@/components/v2/ui/GlassCard";
import NeonButton from "@/components/v2/ui/NeonButton";
import { ExternalLink, Award, Calendar, Clock } from "lucide-react";

export default function V2CertificationsPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-3xl md:text-4xl tracking-wider text-v2-pink mb-4">
            CERTIFICATIONS
          </h1>
          <p className="font-mono text-sm text-gray-500">
            // professional credentials
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard glow="pink">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Badge */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl bg-v2-bg-tertiary border border-v2-glass-border overflow-hidden p-4">
                      <Image
                        src={cert.badge}
                        alt={cert.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <div className="flex items-start gap-2 mb-3">
                      <Award className="w-5 h-5 text-v2-pink flex-shrink-0 mt-1" />
                      <h2 className="font-display text-xl text-white">
                        {cert.title}
                      </h2>
                    </div>

                    {/* Dates */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-v2-bg-tertiary border border-v2-glass-border">
                        <Calendar className="w-4 h-4 text-v2-green" />
                        <span className="font-mono text-xs text-gray-400">
                          Issued: {cert.issued}
                        </span>
                      </div>
                      {cert.expiration && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-v2-bg-tertiary border border-v2-glass-border">
                          <Clock className="w-4 h-4 text-v2-orange" />
                          <span className="font-mono text-xs text-gray-400">
                            Expires: {cert.expiration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Link */}
                    <NeonButton
                      href={cert.link}
                      color="pink"
                      variant="outline"
                      size="sm"
                      external
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </NeonButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          <div className="p-4 rounded-xl bg-v2-glass border border-v2-glass-border text-center">
            <div className="font-display text-3xl text-v2-pink">
              {certifications.length}
            </div>
            <div className="font-mono text-xs text-gray-500 mt-1">
              Total Certs
            </div>
          </div>
          <div className="p-4 rounded-xl bg-v2-glass border border-v2-glass-border text-center">
            <div className="font-display text-3xl text-v2-cyan">2</div>
            <div className="font-mono text-xs text-gray-500 mt-1">Azure</div>
          </div>
          <div className="p-4 rounded-xl bg-v2-glass border border-v2-glass-border text-center">
            <div className="font-display text-3xl text-v2-orange">1</div>
            <div className="font-mono text-xs text-gray-500 mt-1">AWS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
