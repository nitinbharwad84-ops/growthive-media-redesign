import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";

/**
 * The header block every standalone route opens with: one eyebrow, one
 * headline, one description. Never more.
 */
export function PageHero({
  eyebrow,
  headline,
  description,
  badge,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  badge?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-surface/60 to-background px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Badge variant="glow" className="mb-6 px-4 py-2">
          {badge ?? <span className="text-accent">{eyebrow}</span>}
        </Badge>
        <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
