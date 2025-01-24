import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CertificationEntryProps {
  badge: string;
  title: string;
  issued: string;
  expiration?: string;
  link: string;
  description: string;
}

export default function CertificationEntry({
  badge,
  title,
  issued,
  expiration,
  link,
  description,
}: CertificationEntryProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-750 hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <Image
          src={badge || "/placeholder.svg"}
          alt={`${title} badge`}
          width={100}
          height={100}
          className="mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400">Issued: {issued}</p>
          <p className="text-gray-400">Expires: {expiration}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-400 hover:text-blue-300"
      >
        View Certificate <ExternalLink className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
}
