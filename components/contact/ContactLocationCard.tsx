import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Office } from "@/types";
import { OutlineButton } from "@/components/ui";
import { cn } from "@/utils";

export interface ContactLocationCardProps {
  office: Office;
  className?: string;
}

/**
 * Contact-page office card with image and directions CTA.
 * Keeps Phase 3 OfficeCard unchanged for About page usage.
 */
export function ContactLocationCard({
  office,
  className,
}: ContactLocationCardProps) {
  const address = [
    office.addressLine1,
    office.addressLine2,
    [office.city, office.state, office.postalCode].filter(Boolean).join(", "),
    office.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article className={cn("border-b border-border/40 pb-8 pt-4", className)}>
      {office.image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
          <Image
            src={office.image}
            alt={office.imageAlt || office.name}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <h3 className="heading-font text-xl font-bold text-foreground">
            {office.name}
          </h3>
        </div>

        <p className="flex items-start gap-2 text-base text-muted-foreground">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{address}</span>
        </p>
        <p className="flex items-center gap-2 text-base text-muted-foreground">
          <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <a href={`tel:${office.phone}`} className="hover:text-accent font-medium">
            {office.phoneDisplay}
          </a>
        </p>
        <p className="flex items-center gap-2 text-base text-muted-foreground">
          <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <a href={`mailto:${office.email}`} className="hover:text-accent font-medium">
            {office.email}
          </a>
        </p>
        <p className="flex items-center gap-2 text-base text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{office.workingHours}</span>
        </p>

        {office.directionsUrl ? (
          <div className="pt-2">
            <OutlineButton asChild className="w-full sm:w-auto">
              <a
                href={office.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </OutlineButton>
          </div>
        ) : null}
      </div>
    </article>
  );
}
