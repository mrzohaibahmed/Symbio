import Link from "next/link";
import { Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/types";
import { PrimaryButton } from "@/components/ui";
import { HoverCard } from "@/components/animations";
import { cn } from "@/utils";

const employmentLabels: Record<Job["employmentType"], string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
};

export interface JobCardProps {
  job: Job;
  className?: string;
}

export function JobCard({ job, className }: JobCardProps) {
  return (
    <HoverCard lift={4} scale={1.006}>
      <article
        className={cn(
          "flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-lg",
          className,
        )}
      >
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="rounded-md bg-accent px-2.5 py-1 text-primary">
            {job.department}
          </span>
          <span className="inline-flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            {employmentLabels[job.employmentType]}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {job.experience}
          </span>
        </div>

        <h3 className="heading-font mt-4 text-xl font-semibold text-foreground">
          <Link
            href={job.href}
            className="transition-colors duration-200 hover:text-primary"
          >
            {job.title}
          </Link>
        </h3>

        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {job.location}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {job.shortDescription}
        </p>

        <div className="mt-6">
          <PrimaryButton asChild>
            <Link href={job.href}>Apply Now</Link>
          </PrimaryButton>
        </div>
      </article>
    </HoverCard>
  );
}
