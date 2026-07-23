import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { serviceIconMap } from "@/lib/icons";
import { HoverCard } from "@/components/animations";
import { cn } from "@/utils";

export interface RelatedServiceCardProps {
  service: Service;
  className?: string;
}

export function RelatedServiceCard({
  service,
  className,
}: RelatedServiceCardProps) {
  const Icon = serviceIconMap[service.icon];

  return (
    <HoverCard lift={4} scale={1.006}>
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-[border-color,box-shadow] duration-300 hover:shadow-lg",
          className,
        )}
      >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <h3 className="heading-font text-lg font-semibold text-foreground">
            {service.title}
          </h3>
        </div>
        <p className="flex-1 text-sm text-muted-foreground">
          {service.shortDescription}
        </p>
        <Link
          href={service.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
    </HoverCard>
  );
}
