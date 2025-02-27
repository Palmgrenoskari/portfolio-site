import CertificationEntry from "@/components/CertificationEntry";

export default function CertificationsPage() {
  const certifications = [
    {
      badge: "/images/azure_badge.svg",
      title: "Microsoft Certified: Azure Fundamentals",
      issued: "July 2024",
      link: "https://learn.microsoft.com/en-us/users/oskaripalmgren-7248/credentials/65bc741f67c34e8",
      description:
        "Validates foundational knowledge of cloud concepts and Azure services, including compute, networking, storage, security, and administration tools.",
    },
    {
      badge: "/images/azure_badge.svg",
      title: "Microsoft Certified: Azure AI Fundamentals",
      issued: "July 2024",
      link: "https://learn.microsoft.com/en-us/users/oskaripalmgren-7248/credentials/f2a8e81eaa48bca4",
      description:
        "Validates knowledge of AI and machine learning concepts, Azure AI services, and workloads, including computer vision, NLP, and generative AI.",
    },
    {
      badge: "/images/aws_badge.png",
      title: "AWS Certified Cloud Practitioner",
      issued: "Jan 2024",
      expiration: "Jan 2027",
      link: "https://www.credly.com/badges/f8f59038-a455-4c00-b1e6-74c06dc3e68c/public_url",
      description:
        "Validates knowledge of AWS Cloud concepts, including core services, security practices, cost management, and implementation. Covers AWS cloud design, operations, and the shared responsibility model.",
    },
  ];

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
