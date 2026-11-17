import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { CreatorApplicationForm } from "@/components/forms/creator-application-form";
import { Badge } from "@/components/ui/badge";
import { Users, Lock, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function CreatorApplicationSection() {
  return (
    <section id="for-creators" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-white/95 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[550px] bg-primary/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-subtle-grid opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="subtle" className="py-2 px-3">
            <Users className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-gray-600">Creator Network</span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Create with{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-violet-500 bg-clip-text text-transparent">
              GrowthiveMedia
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Are you creating content around AI, technology or software? Tell us about your channel and apply to be considered for future opportunities.
          </p>
        </div>

        {/* Creator Application Form */}
        <div className="mt-10">
          <CreatorApplicationForm />
        </div>

        {/* Confidentiality & Ethics Indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-500 text-center">
          <div className="p-3 rounded-xl border border-gray-100 bg-white">
            <Lock className="w-4 h-4 mx-auto mb-1.5 text-gray-500" />
            <span className="text-gray-700 font-medium block">100% Confidential</span>
            <span>No public creator listings or directory display</span>
          </div>
          <div className="p-3 rounded-xl border border-gray-100 bg-white">
            <Compass className="w-4 h-4 mx-auto mb-1.5 text-gray-500" />
            <span className="text-gray-700 font-medium block">Targeted Alignments</span>
            <span>Only relevant AI & software brand collaborations</span>
          </div>
          <div className="p-3 rounded-xl border border-gray-100 bg-white">
            <Sparkles className="w-4 h-4 mx-auto mb-1.5 text-gray-500" />
            <span className="text-gray-700 font-medium block">Editorial Freedom</span>
            <span>Honest, creator-driven perspectives preserved</span>
          </div>
        </div>
      </div>
    </section>
  );
}