"use client";

import { TimelineVertical } from "@/components/v2/sections";
import { educationEntries } from "@/data";

export default function V2EducationPage() {
  const items = educationEntries.map((entry) => ({
    ...entry,
    type: "education" as const,
  }));

  return (
    <TimelineVertical
      items={items}
      title="Education"
      subtitle="academic background"
      accentColor="orange"
    />
  );
}
