import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { DetailBlocks, FaqList } from "@/components/sections/page-content-blocks";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "How It Works — GrowthiveMedia",
  description:
    "Four steps from brief to published content: discovery, strategic architecture, roadmap and coordination, then launch and delivery.",
};

export default function ProcessPage() {
  const content = siteConfig.pageContent.process;

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

          <ol className="space-y-6">
            {siteConfig.processSteps.map((step) => (
              <li
                key={step.step}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,1fr)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 font-mono text-sm font-bold text-accent">
                    {step.step}
                  </span>
                  <span className="mt-3 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                    {step.detail}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-bold leading-snug text-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                      What we need
                    </span>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">{step.needs}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                      What you get
                    </span>
                    <p className="mt-1.5 leading-relaxed text-foreground/90">{step.output}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-surface-2/50 px-6 py-10 text-center">
            <h2 className="text-xl font-bold text-foreground">Ready when the brief is</h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Step one starts with a conversation about your product, your audience and your
              launch window.
            </p>
            <Button asChild size="lg" className="group rounded-full px-8">
              <Link href="/contact">
                <span>Work With Us</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>

          <section aria-labelledby="process-faq" className="space-y-6">
            <h2 id="process-faq" className="text-2xl font-bold text-foreground">
              Questions we are usually asked
            </h2>
            <FaqList items={content.faq} />
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
