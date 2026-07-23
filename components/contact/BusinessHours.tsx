import { businessHours } from "@/data";
import { cn } from "@/utils";

export interface BusinessHoursProps {
  className?: string;
  id?: string;
}

export function BusinessHours({
  className,
  id = "business-hours",
}: BusinessHoursProps) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
    >
      <h3 className="heading-font text-lg font-semibold text-foreground">
        Business Hours
      </h3>
      <ul className="mt-4 divide-y divide-border">
        {businessHours.map((entry) => (
          <li
            key={entry.id}
            className="flex items-center justify-between gap-4 py-2.5 text-sm"
          >
            <span className="font-medium text-foreground">{entry.day}</span>
            <span
              className={
                entry.isClosed ? "text-muted-foreground" : "text-foreground"
              }
            >
              {entry.hours}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
