import Link from "next/link";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/types";
import { cn } from "@/utils";

const employmentLabels: Record<Job["employmentType"], string> = {
  "full-time": "Full-Time",
  "part-time": "Part-Time",
  contract: "Contract",
  internship: "Internship",
};

export interface JobCardProps {
  job: Job;
  className?: string;
}

export function JobCard({ job, className }: JobCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-border/60 bg-card p-7 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5",
        className,
      )}
    >
      {/* Top subtle accent highlight line on hover */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-accent/35 to-transparent opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
      />

      <div className="flex-1 flex flex-col">
        {/* Top Metadata Hierarchy */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 font-semibold text-accent border border-accent/20">
            {job.department}
          </span>
          <span className="text-border/60" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 text-muted-foreground/70" aria-hidden="true" />
            {employmentLabels[job.employmentType]}
          </span>
          <span className="text-border/60" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-muted-foreground/70" aria-hidden="true" />
            {job.experience}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="heading-font mt-4 text-xl font-bold text-foreground leading-snug tracking-tight">
          <Link
            href={job.href}
            className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            {job.title}
          </Link>
        </h3>

        {/* Location */}
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground/80">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent/80" aria-hidden="true" />
          <span>{job.location}</span>
        </p>

        {/* Description */}
        <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {job.shortDescription}
        </p>
      </div>

      {/* Footer CTA Action with Top Divider */}
      <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
        <Link
          href={job.href}
          className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          <span>Apply Now</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
