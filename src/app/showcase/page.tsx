import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { DetailBlocks, FaqList } from "@/components/sections/page-content-blocks";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Video Showcase — GrowthiveMedia",
  description:
    "The video formats GrowthiveMedia builds for AI and technology brands: long-form deep dives, dedicated videos, contextual integrations, short-form cut-downs and multi-creator waves.",
};

export default function ShowcasePage() {
  const content = siteConfig.pageContent.showcase;

  return (
    <SiteLayout>
      <PageHero
        eyebrow={content.eyebrow}
        headline={content.headline}
        description={content.description}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          <DetailBlocks blocks={content.blocks} />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {siteConfig.montageItems.map((item) => {
              const isPortrait = item.aspect === "portrait";

              return (
                <figure
                  key={item.id}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors duration-300 hover:border-primary/40",
                    isPortrait && "sm:row-span-2"
                  )}
                >
                  <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-surface-2 via-card to-background">
                    <div
                      className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                      style={{
                        background: `radial-gradient(circle at 30% 20%, ${item.accentColor}22, transparent 65%)`,
                      }}
                      aria-hidden
                    />
                    <div className="relative flex h-full min-h-[160px] flex-col justify-between p-5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-md border border-border/70 bg-background/70 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/85 backdrop-blur">
                          {item.category}
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground/80 backdrop-blur transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/20 group-hover:text-accent">
                          <Play className="h-4 w-4 fill-current" aria-hidden />
                        </span>
                      </div>

                      <div className="mt-6">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                          {item.format}
                        </p>
                        <h2 className="mt-1.5 text-sm font-semibold leading-snug text-foreground">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <figcaption className="flex items-center justify-between border-t border-border/60 px-5 py-3 font-mono text-[11px] text-muted-foreground">
                    <span>
                      {item.aspect === "portrait" ? "9:16" : item.aspect === "square" ? "1:1" : "16:9"}
                    </span>
                    <span>{item.duration}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-surface-2/50 px-6 py-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Want to see which format fits your product?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tell us what you are launching. We will come back with the format, the audience
              and the schedule we would propose.
            </p>
            <Button asChild size="lg" className="group rounded-full px-8">
              <Link href="/contact">
                <span>Start a Campaign</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>

          <section aria-labelledby="showcase-faq" className="space-y-6">
            <h2 id="showcase-faq" className="text-2xl font-bold text-foreground">
              Questions we are usually asked
            </h2>
            <FaqList items={content.faq} />
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
