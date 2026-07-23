import Image from "next/image";
import Link from "next/link";
import type { ServiceCaseStudyPreview } from "@/types";
import { PrimaryButton } from "@/components/ui";
import { cn } from "@/utils";

export interface CaseStudyCardProps {
  caseStudy: ServiceCaseStudyPreview;
  className?: string;
}

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid md:grid-cols-2",
        className,
      )}
    >
      <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[20rem]">
        <Image
          src={caseStudy.image}
          alt={caseStudy.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          Case Study Preview
        </p>
        <h3 className="heading-font mt-2 text-2xl font-semibold text-foreground">
          {caseStudy.title}
        </h3>

        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-foreground">Challenge</dt>
            <dd className="mt-1 text-muted-foreground">{caseStudy.challenge}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Solution</dt>
            <dd className="mt-1 text-muted-foreground">{caseStudy.solution}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Result</dt>
            <dd className="mt-1 text-muted-foreground">{caseStudy.result}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <PrimaryButton asChild>
            <Link href={caseStudy.href}>View Case Study</Link>
          </PrimaryButton>
        </div>
      </div>
    </article>
  );
}
