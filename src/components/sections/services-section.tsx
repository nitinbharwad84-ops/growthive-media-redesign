import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Compass, Flame, Sparkles, Tv, Users, Check, ArrowUpRight } from "lucide-react";
import { CampaignGlyph, WaveGlyph } from "@/stageshow/icons";
import { cn } from "@/lib/utils";

const iconMap = {
  Flame: Flame,
  Tv: Tv,
  Sparkles: Sparkles,
  Compass: Compass,
  Users: Users,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-border/50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[420px] w-[620px] -translate-x-1/3 rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-header text-center">
          <Badge variant="glow" className="px-4 py-2">
            <CampaignGlyph className="h-4 w-4 text-primary" size={16} />
            <span className="text-accent">Campaign capabilities</span>
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Tailored influencer marketing for{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              technology brands
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Five focused campaign models, scoped around the objective rather than around a
            package.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] ?? Sparkles;
            const isWide = index === 0 || index === 4;

            return (
              <article
                key={service.id}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors duration-300 hover:border-primary/40",
                  isWide && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div className="flex items-start justify-between gap-4 p-6 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-accent transition-colors group-hover:border-primary/40 group-hover:bg-primary/15">
                    {index === 4 ? (
                      <WaveGlyph size={22} />
                    ) : (
                      <IconComponent className="h-5 w-5" />
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-border/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {service.tag}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground/60">
                      {service.number}
                    </span>
                  </div>
                </div>

                <div className="px-6 sm:px-8">
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 px-6 py-6 sm:px-8">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
                    Included deliverables
                  </span>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                          <Check className="h-3 w-3 text-accent" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="group/link mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-foreground"
                  >
                    <span>Discuss this format</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
