"use client";

import { TimelineVertical } from "@/components/v2/sections";
import { workEntries } from "@/data";

export default function V2WorkPage() {
  const items = workEntries.map((entry) => ({
    ...entry,
    type: "work" as const,
  }));

  return (
    <TimelineVertical
      items={items}
      title="Work Experience"
      subtitle="professional journey"
      accentColor="green"
    />
  );
}
