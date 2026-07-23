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
        "block h-full rounded-xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="heading-font text-lg font-semibold text-foreground">
        {channel.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
      <p className="mt-3 text-sm font-semibold text-primary">{channel.value}</p>
    </a>
  );
}
