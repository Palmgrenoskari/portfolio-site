import WorkEntry from "@/components/WorkEntry";
import { workEntries } from "@/data";

export default function WorkPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-400">
        Work Experience
      </h1>
      {workEntries.map((entry, index) => (
        <WorkEntry key={index} {...entry} />
      ))}
    </div>
  );
}
