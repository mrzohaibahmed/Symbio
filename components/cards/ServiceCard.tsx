import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/types";
import { serviceIconMap } from "@/lib/icons";
import { cn } from "@/utils";

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = serviceIconMap[service.icon];

  return (
    <article className={cn("group border-b border-border/40 pb-10 pt-6", className)}>
      <div className="grid gap-6 md:grid-cols-12 md:items-center">
        <div className="md:col-span-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <h3 className="heading-font text-xl font-bold text-accent md:text-2xl">
                {service.title}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.shortDescription}
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground pt-1">
            {service.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div>
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent transition-all duration-200 hover:gap-3 hover:text-accent-dark"
            >
              Learn More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
