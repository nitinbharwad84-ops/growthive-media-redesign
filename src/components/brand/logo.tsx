import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

/**
 * The GrowthiveMedia mark uses the supplied client asset
 * (`public/images/logo-icon.png`) rather than a redrawn glyph. A vector file
 * would sharpen it further and is still pending from the client.
 */
export function GrowthiveLogo({ className, size = "md", href = "/" }: LogoProps) {
  const markSizes = {
    sm: 26,
    md: 30,
    lg: 38,
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  const content = (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <Image
        src="/images/logo-icon.png"
        alt="GrowthiveMedia"
        width={markSizes[size]}
        height={markSizes[size]}
        className="shrink-0 rounded-[10px]"
        priority
      />
      <span className={cn("font-extrabold tracking-tight text-foreground", textSizes[size])}>
        Growthive<span className="text-accent">Media</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="GrowthiveMedia home"
        className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </Link>
    );
  }

  return content;
}
