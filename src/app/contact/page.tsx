import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { DetailBlocks, FaqList } from "@/components/sections/page-content-blocks";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

export const metadata = {
  title: "Contact — GrowthiveMedia",
  description:
    "Start a campaign with GrowthiveMedia. Campaign enquiries, creator applications and direct agency contact details.",
};

export default function ContactPage() {
  const content = siteConfig.pageContent.contact;

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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-7">
              <h2 className="text-lg font-bold text-foreground">Campaign enquiries</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For brands planning a campaign, a product launch or a creator collaboration.
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border/70 px-4 py-3 font-mono text-sm text-accent transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                <Mail className="h-4 w-4 text-primary" />
                {siteConfig.contactEmail}
              </a>
              <Button asChild size="lg" className="group mt-6 w-full justify-center rounded-xl">
                <Link href="/#brand-enquiry">
                  <span>Open the campaign enquiry form</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 p-7">
              <h2 className="text-lg font-bold text-foreground">Creator applications</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                If you create content around AI, technology or software, the creator application
                is the right route.
              </p>
              <Button asChild size="lg" className="group mt-6 w-full justify-center rounded-xl">
                <Link href="/creators">
                  <span>Apply as a creator</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <div className="mt-6 border-t border-border/60 pt-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
                  Agency contact
                </span>
                <a
                  href={`mailto:${siteConfig.agencyEmail}`}
                  className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {siteConfig.agencyEmail}
                </a>
              </div>
            </div>
          </div>

          <section aria-labelledby="contact-faq" className="space-y-6">
            <h2 id="contact-faq" className="text-2xl font-bold text-foreground">
              Questions we are usually asked
            </h2>
            <FaqList items={content.faq} />
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
