import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SiteLayout } from "@/components/layout/site-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Privacy Policy (draft) — GrowthiveMedia",
  description:
    "GrowthiveMedia privacy policy draft placeholder, pending review by the agency and its legal counsel before production launch.",
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <Badge variant="glow" className="px-4 py-2">
            <ShieldAlert className="h-4 w-4 text-primary" />
            <span className="text-accent">Client review status: pending legal verification</span>
          </Badge>

          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy <span className="text-muted-foreground">(draft)</span>
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This page is a clearly marked draft for the GrowthiveMedia presentation build. No
              invented company registration details, jurisdiction claims or legal terms appear
              here, and this draft is not yet an approved policy.
            </p>
          </div>

          <div className="space-y-6 border-t border-border/60 pt-8 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">What we collect</h2>
              <p>
                The brand enquiry and creator application forms collect the details you type into
                them: your name, email address, company or channel, the content you are working
                on, and any further context you choose to include.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">How it is used</h2>
              <p>
                In this presentation build, submitted forms are validated in your browser and are
                not transmitted, stored or logged by the site. To reach the agency you open your
                own email client with a prefilled message addressed to{" "}
                <strong className="text-foreground">{siteConfig.contactEmail}</strong>, and the
                application reaches the agency through your own mail client and inbox.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">What we do not publish</h2>
              <p>
                Creator applications are read confidentially by the agency. Nothing you submit is
                displayed publicly, and nothing is shared with other applicants. This site does
                not publish creator profiles, channel listings or audience statistics.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">Third parties</h2>
              <p>
                This build loads no analytics, advertising or tracking scripts. No social
                profiles are linked, because no verified social URLs have been supplied.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">Before production launch</h2>
              <p>
                The agency and its legal counsel must supply the official privacy policy, terms
                of service and company jurisdiction statements to replace this draft. If a
                production email delivery service is connected, this page must be updated to
                describe what is collected and how long it is kept.
              </p>
            </section>
          </div>

          <div className="border-t border-border/60 pt-8">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to homepage</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
