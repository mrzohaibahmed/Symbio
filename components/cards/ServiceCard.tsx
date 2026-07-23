import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/types";
import { serviceIconMap } from "@/lib/icons";
import { HoverCard } from "@/components/animations";
import { cn } from "@/utils";

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = serviceIconMap[service.icon];

  return (
    <HoverCard lift={5} scale={1.008}>
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300",
          "hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5",
          className,
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-3.5">
            <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="heading-font text-xl font-bold text-foreground">
              {service.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.shortDescription}
          </p>

          <ul className="mt-4 space-y-2 flex-1">
            {service.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={service.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-200 hover:gap-3"
          >
            Learn More
            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </article>
    </HoverCard>
  );
}
