"use client";

import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import { V2Header, V2Footer, V2CommandPalette } from "@/components/v2/layout";
import { ParticleBackground } from "@/components/v2/effects";
import { AIChatInterface } from "@/components/v2/ai";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans bg-v2-bg-primary text-gray-100 min-h-screen flex flex-col relative overflow-x-hidden`}
    >
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-v2-purple/5 via-transparent to-v2-cyan/5 pointer-events-none" />

      {/* Particle background */}
      <ParticleBackground particleCount={60} />

      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <V2Header />
      <main className="flex-grow w-full relative z-10">{children}</main>
      <V2Footer />
      <AIChatInterface />
      <V2CommandPalette />
    </div>
  );
}
