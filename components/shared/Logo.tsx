import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/constants/assets";
import { companyInfo } from "@/constants";
import { cn } from "@/utils";

export interface LogoProps {
  className?: string;
  href?: string;
  showText?: boolean;
  priority?: boolean;
  /** Use white logo variant for dark backgrounds */
  variant?: "default" | "white" | "mark";
}

/**
 * Brand logo using local assets from /public/logos.
 * Replace SVG files there with official artwork when available.
 */
const logoDimensions = {
  default: { width: 2048, height: 2047 },
  white: { width: 416, height: 369 },
  mark: { width: 1254, height: 1254 },
} as const;

export function Logo({
  className,
  href = "/",
  showText = true,
  priority = false,
  variant = "default",
}: LogoProps) {
  const isMark = variant === "mark" || !showText;
  const resolvedVariant = isMark ? "mark" : variant;
  const src =
    resolvedVariant === "white"
      ? brandAssets.logoWhite
      : resolvedVariant === "mark"
        ? brandAssets.logoMark
        : brandAssets.logo;

  const { width, height } = logoDimensions[resolvedVariant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center rounded-md transition-all duration-300 hover:opacity-95 hover:brightness-105 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
      aria-label={`${companyInfo.name} home`}
    >
      <Image
        src={src}
        alt={companyInfo.name}
        width={width}
        height={height}
        priority={priority}
        unoptimized={src.endsWith(".svg")}
        className={cn(
          "object-contain",
          isMark
            ? "h-11 w-11 sm:h-12 sm:w-12"
            : "h-11 sm:h-12 md:h-[50px] w-auto max-h-13 max-w-[12rem] sm:max-w-[14rem]",
        )}
      />
    </Link>
  );
}
