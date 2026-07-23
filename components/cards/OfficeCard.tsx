import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Office } from "@/types";
import { cn } from "@/utils";

export interface OfficeCardProps {
  office: Office;
  className?: string;
}

export function OfficeCard({ office, className }: OfficeCardProps) {
  const address = [
    office.addressLine1,
    office.addressLine2,
    [office.city, office.state, office.postalCode].filter(Boolean).join(", "),
    office.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="relative aspect-[16/10] bg-muted">
        <iframe
          title={office.mapLabel}
          src={office.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <h3 className="heading-font text-xl font-semibold text-foreground">
            {office.name}
          </h3>
        </div>

        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{address}</span>
        </p>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <a href={`tel:${office.phone}`} className="transition-colors hover:text-primary">
            {office.phoneDisplay}
          </a>
        </p>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <a href={`mailto:${office.email}`} className="transition-colors hover:text-primary">
            {office.email}
          </a>
        </p>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{office.workingHours}</span>
        </p>
      </div>
    </article>
  );
}
