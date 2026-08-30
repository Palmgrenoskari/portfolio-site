interface StatLineProps {
  stats: string[];
  className?: string;
}

export default function StatLine({ stats, className = "" }: StatLineProps) {
  return (
    <p className={`font-mono text-xs text-muted ${className}`}>
      <span className="text-accent">//</span> {stats.join(" · ")}
    </p>
  );
}
