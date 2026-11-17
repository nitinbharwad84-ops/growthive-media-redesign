import * as React from "react";
import Link from "next/link";
import { GrowthiveLogo } from "@/components/brand/logo";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy (Draft Demo) — GrowthiveMedia",
  description: "GrowthiveMedia privacy policy draft placeholder pending client legal counsel approval.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08080C] text-foreground flex flex-col justify-between">
      <header className="border-b border-white/[0.08] bg-[#08080C]/80 backdrop-blur-md py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <GrowthiveLogo size="sm" />
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="inline-flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Demo</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex-1">
        <div className="rounded-2xl border border-violet-500/20 bg-secondary/30 p-8 sm:p-12 backdrop-blur-md space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <ShieldAlert className="w-4 h-4 text-violet-400" />
            <span>Client Review Status: Pending Legal Verification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy (Draft Demonstration)
          </h1>

          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed border-t border-white/[0.08] pt-6">
            <p>
              This draft privacy document represents a demonstration placeholder for the GrowthiveMedia website demo. In accordance with the Project Requirements Document (PRD), no invented corporate registration details, jurisdiction claims, or legal terms are fabricated.
            </p>
            <h2 className="text-lg font-bold text-white pt-2">Data Collection & Use</h2>
            <p>
              Information submitted through the Brand Campaign Enquiry form or Creator Application form during active client engagements is transmitted directly to <strong>hello@growthivemedia.in</strong> solely for campaign evaluation and communication purposes. No applicant data or creator submissions are shared with third parties or published publicly.
            </p>
            <h2 className="text-lg font-bold text-white pt-2">Client Production Handoff Note</h2>
            <p>
              Before launching this website to production, the GrowthiveMedia executive team and appointed legal counsel must supply their official privacy policy, terms of service, and company jurisdiction statements to replace this temporary notice.
            </p>
          </div>

          <div className="pt-4">
            <Button variant="default" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/[0.08] py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GrowthiveMedia. Demonstration environment.
      </footer>
    </div>
  );
}
