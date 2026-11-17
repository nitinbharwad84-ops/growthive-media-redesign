import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { DetailBlocks, FaqList } from "@/components/sections/page-content-blocks";
import { CreatorApplicationForm } from "@/components/forms/creator-application-form";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "For Creators — GrowthiveMedia",
  description:
    "Create with GrowthiveMedia. Apply to be considered for creator campaigns with AI, developer and software brands.",
};

export default function CreatorsPage() {
  const content = siteConfig.pageContent.creators;

  return (
    <SiteLayout>
      <PageHero
        eyebrow={content.eyebrow}
        headline={content.headline}
        description={content.description}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <DetailBlocks blocks={content.blocks} />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Apply now</h2>
              <CreatorApplicationForm />
            </div>

            <aside className="space-y-6 lg:pt-16">
              <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
                <h3 className="text-sm font-semibold text-foreground">Before you apply</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Your channel or profile link, so we can see your work.</li>
                  <li>The platform you publish on most.</li>
                  <li>The niche you cover and who follows you.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/60 bg-surface-2/50 p-6">
                <h3 className="text-sm font-semibold text-foreground">Something else?</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If you work with brands directly and want to talk about a specific campaign,
                  write to the agency instead.
                </p>
                <Button asChild variant="outline" className="mt-5 w-full justify-center">
                  <Link href="/contact">
                    <span>Contact the agency</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>

          <section aria-labelledby="creators-faq" className="space-y-6">
            <h2 id="creators-faq" className="text-2xl font-bold text-foreground">
              Questions creators usually ask
            </h2>
            <FaqList items={content.faq} />
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
