import {
  Clock,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import type { ContactChannel } from "@/types";
import { cn } from "@/utils";

const iconMap: Record<ContactChannel["icon"], LucideIcon> = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  clock: Clock,
};

export interface ContactCardProps {
  channel: ContactChannel;
  className?: string;
}

export function ContactCard({ channel, className }: ContactCardProps) {
  const Icon = iconMap[channel.icon];

  return (
    <a
      href={channel.href}
      className={cn(
        "group block border-b border-border/40 pb-6 pt-2 transition-colors duration-200",
        className,
      )}
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <h3 className="heading-font text-lg font-bold text-foreground">
          {channel.title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">{channel.description}</p>
      <p className="mt-2 text-sm font-bold text-accent">{channel.value}</p>
    </a>
  );
}
