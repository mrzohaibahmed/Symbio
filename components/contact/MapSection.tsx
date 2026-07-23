import { offices } from "@/data";
import { cn } from "@/utils";

export interface MapSectionProps {
  className?: string;
  officeId?: string;
}

export function MapSection({ className, officeId = "austin-hq" }: MapSectionProps) {
  const office = offices.find((item) => item.id === officeId) || offices[0];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="relative aspect-[16/9] min-h-[16rem] bg-muted">
        <iframe
          title={office.mapLabel}
          src={office.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
