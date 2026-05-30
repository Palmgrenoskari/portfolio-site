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
    <div className="bg-surface border border-border rounded-lg p-5 flex flex-col h-full transition-colors hover:border-accent/50">
      <div className="flex items-start gap-3 mb-3">
        <Image
          src={badge || "/placeholder.svg"}
          alt={`${title} badge`}
          width={56}
          height={56}
          className="object-contain shrink-0"
        />
        <div>
          <h3 className="text-base font-semibold leading-snug">{title}</h3>
          <p className="font-mono text-xs text-muted mt-1">
            issued {issued}
            {expiration ? ` · expires ${expiration}` : ""}
          </p>
        </div>
      </div>
      <p className="font-sans text-sm text-fg/80 leading-relaxed mb-4 grow">
        {description}
      </p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-mono text-sm text-accent hover:underline"
      >
        view certificate <ExternalLink className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
}
