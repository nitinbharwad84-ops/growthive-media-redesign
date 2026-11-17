import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { DetailBlocks, FaqList } from "@/components/sections/page-content-blocks";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata = {
  title: "Services — GrowthiveMedia",
  description:
    "Five campaign models for AI and technology brands: influencer campaigns, dedicated videos, YouTube integrations, creator discovery and multi-creator campaigns.",
};

export default function ServicesPage() {
  const content = siteConfig.pageContent.services;

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

          <div className="space-y-6">
            {siteConfig.services.map((service) => (
              <article
                key={service.id}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-border/60 bg-card/60 p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]"
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground/80">
                    {service.number}
                  </span>
                  <h2 className="mt-1 text-xl font-bold leading-snug text-foreground">
                    {service.title}
                  </h2>
                  <span className="mt-3 inline-block rounded-full border border-border/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {service.tag}
                  </span>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                          <Check className="h-2.5 w-2.5 text-accent" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-surface-2/50 px-6 py-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Not sure which format fits your launch?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Send the brief. We will come back with the format we would recommend, what it
              needs from you, and what it would take to run.
            </p>
            <Button asChild size="lg" className="group rounded-full px-8">
              <Link href="/contact">
                <span>Start a Campaign</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>

          <section aria-labelledby="services-faq" className="space-y-6">
            <h2 id="services-faq" className="text-2xl font-bold text-foreground">
              Questions we are usually asked
            </h2>
            <FaqList items={content.faq} />
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
