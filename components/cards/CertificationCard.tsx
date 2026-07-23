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
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-3.5">
        <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-sm font-bold text-primary">
          {certification.badgeLabel}
        </span>
        <h3 className="heading-font text-lg font-semibold text-foreground">
          {certification.title}
        </h3>
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        {certification.issuer}
        {certification.year ? ` · ${certification.year}` : null}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {certification.description}
      </p>
    </article>
  );
}
