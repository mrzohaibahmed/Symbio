import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import type { TeamMember } from "@/types";
import { HoverCard } from "@/components/animations";
import { cn } from "@/utils";

export interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <HoverCard lift={4} scale={1.006}>
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl",
          className,
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={member.photo}
            alt={member.photoAlt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="heading-font text-xl font-bold text-accent">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {member.bio}
          </p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
          >
            <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </article>
    </HoverCard>
  );
}
