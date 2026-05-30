import WorkEntry from "@/components/WorkEntry";
import EducationEntry from "@/components/EducationEntry";
import CertificationEntry from "@/components/CertificationEntry";
import { workEntries, educationEntries, certifications } from "@/data";

export const metadata = {
  title: "About — Oskari Palmgren",
  description: "Work history, education and certifications.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xl mb-6">
      <span className="text-accent">##</span> {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-12">
        <p className="font-mono text-sm text-accent">// about</p>
        <h1 className="text-3xl font-bold mt-1">Background</h1>
        <p className="font-sans text-muted mt-3 max-w-2xl">
          Where I&apos;ve worked, what I&apos;ve studied, and a few things
          I&apos;ve been certified in along the way.
        </p>
      </header>

      <section className="mb-16">
        <SectionLabel>work</SectionLabel>
        {workEntries.map((entry, index) => (
          <WorkEntry key={index} {...entry} />
        ))}
      </section>

      <section className="mb-16">
        <SectionLabel>education</SectionLabel>
        {educationEntries.map((entry, index) => (
          <EducationEntry key={index} {...entry} />
        ))}
      </section>

      <section>
        <SectionLabel>certifications</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertificationEntry key={index} {...cert} />
          ))}
        </div>
      </section>
    </div>
  );
}
