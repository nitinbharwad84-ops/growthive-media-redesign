import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEnquiryForm } from "@/components/forms/brand-enquiry-form";
import { Badge } from "@/components/ui/badge";
import { Send, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrandEnquirySection() {
  return (
    <section id="brand-enquiry" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-subtle-grid opacity-80 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="py-2 px-4">
            <Send className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Brand Partnerships</span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Have a product worth putting in front of the{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-violet-500 bg-clip-text text-transparent">
              right audience?
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Tell us about your product and campaign goals. Let's explore how GrowthiveMedia can help.
          </p>
        </div>

        {/* Brand Enquiry Form */}
        <BrandEnquiryForm />

        {/* Trust & Communication Note */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-500 text-center lg:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-500" />
            <span>Confidential campaign strategy</span>
          </div>
          <span className="text-gray-300/30">•</span>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-gray-500" />
            <span className="hidden lg:inline-block">Direct agency response within 24–48 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}