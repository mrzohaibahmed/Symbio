import { Check } from "lucide-react";
import { cn } from "@/utils";

export interface ServiceFeatureProps {
  title: string;
  description?: string;
  className?: string;
}

export function ServiceFeature({
  title,
  description,
  className,
}: ServiceFeatureProps) {
  return (
    <li
      className={cn(
        "flex gap-3 rounded-lg border border-border bg-card p-4 shadow-sm",
        className,
      )}
    >
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </li>
  );
}
