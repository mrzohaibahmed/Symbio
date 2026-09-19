import type { Certification } from "@/types";
import { cn } from "@/utils";

export interface CertificationCardProps {
  certification: Certification;
  className?: string;
}

export function CertificationCard({
  certification,
  className,
}: CertificationCardProps) {
  return (
    <article className={cn("border-b border-border/40 pb-6 pt-2", className)}>
      <div className="flex items-center gap-3.5 mb-2">
        <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider">
          {certification.badgeLabel}
        </span>
        <h3 className="heading-font text-lg font-bold text-accent">
          {certification.title}
        </h3>
      </div>
      <p className="text-sm font-semibold text-accent">
        {certification.issuer}
        {certification.year ? ` · ${certification.year}` : null}
      </p>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {certification.description}
      </p>
    </article>
  );
}
