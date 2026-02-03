import CertificationEntry from "@/components/CertificationEntry";
import { certifications } from "@/data";

export default function CertificationsPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-400">
        Certifications
      </h1>
      {certifications.map((cert, index) => (
        <CertificationEntry key={index} {...cert} />
      ))}
    </div>
  );
}
