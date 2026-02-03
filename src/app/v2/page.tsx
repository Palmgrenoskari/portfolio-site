"use client";

import { HeroSection, SkillsOrbit } from "@/components/v2/sections";
import { technologies } from "@/data";

export default function V2HomePage() {
  return (
    <>
      <HeroSection
        name="OSKARI PALMGREN"
        title="Software Developer"
        subtitle="Building the future with code"
      />
      <SkillsOrbit technologies={technologies} />
    </>
  );
}
