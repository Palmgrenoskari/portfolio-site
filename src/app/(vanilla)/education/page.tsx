import EducationEntry from "@/components/EducationEntry";
import { educationEntries } from "@/data";

export default function EducationPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Education
      </h1>
      {educationEntries.map((entry, index) => (
        <EducationEntry key={index} {...entry} />
      ))}
    </div>
  );
}
