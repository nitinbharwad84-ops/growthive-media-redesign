import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEnquiryForm } from "@/components/forms/brand-enquiry-form";
import { Badge } from "@/components/ui/badge";
import { Send, ShieldCheck } from "lucide-react";

export function BrandEnquirySection() {
  return (
    <section
      id="brand-enquiry"
      className="relative overflow-hidden border-b border-border/50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[460px] w-[640px] translate-x-1/4 rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl space-y-5 text-center">
          <Badge variant="glow" className="px-4 py-2">
            <Send className="h-4 w-4 text-primary" />
            <span className="text-accent">Brand partnerships</span>
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Have a product worth putting in front of the{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              right audience?
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us about your product and campaign goals. Let&apos;s explore how GrowthiveMedia
            can help.
          </p>
        </div>

        <BrandEnquiryForm />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-xs text-muted-foreground/80 lg:flex-row lg:gap-6">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Confidential campaign strategy
          </span>
          <span className="hidden text-border/60 lg:inline">•</span>
          <span>
            Enquiries are read by the agency. Nothing is sent or stored automatically in this
            presentation build.
          </span>
        </div>
      </div>
    </section>
  );
}
