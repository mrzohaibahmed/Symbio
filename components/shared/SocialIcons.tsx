import * as React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";
import type { SocialLink } from "@/types";
import { cn } from "@/utils";

const iconMap = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  github: FaGithub,
} as const;

export interface SocialIconLinkProps {
  link: SocialLink;
  className?: string;
  variant?: "default" | "light";
}

export function SocialIconLink({ link, className, variant = "default" }: SocialIconLinkProps) {
  const Icon = iconMap[link.icon];

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
        variant === "light"
          ? "border border-white/15 text-white/50 hover:border-accent-light hover:bg-white/5 hover:text-accent-light"
          : "border border-border bg-card text-muted-foreground hover:border-accent hover:bg-accent/5 hover:text-accent",
        className,
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
  variant?: "default" | "light";
}

export function SocialIcons({ links, className, variant = "default" }: SocialIconsProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {links.map((link) => (
        <li key={link.id}>
          <SocialIconLink link={link} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
