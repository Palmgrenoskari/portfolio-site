"use client";

import { useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface UnderTheHoodProps {
  text: string;
  label?: string;
}

export default function UnderTheHood({
  text,
  label = "under the hood",
}: UnderTheHoodProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-mono text-sm text-accent hover:underline"
      >
        {open ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        {label}
      </button>
      {open && (
        <p
          id={id}
          className="font-sans text-sm text-fg/80 leading-relaxed mt-3 whitespace-pre-line border-l-2 border-accent/60 pl-4"
        >
          {text}
        </p>
      )}
    </div>
  );
}
