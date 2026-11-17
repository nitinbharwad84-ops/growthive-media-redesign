"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Radio, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoMontageSection() {
  const [activeFrameId, setActiveFrameId] = React.useState<string | null>(null);

  return (
    <section id="showcase" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-t border-gray-200/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-gray-200/40 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="py-2 px-4">
            <Radio className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Creator-Led Formats</span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            High-Impact Content Designed for{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-violet-500 bg-clip-text text-transparent">
              Technical Audiences
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From deep-dive architectural tutorials to high-velocity launch reviews, see the types of video storytelling that resonate with software engineers, founders, and AI early adopters.
          </p>
          <div className="text-xs text-gray-400 italic">
            *Visual representation of creator formats and campaign video styles relevant to the technology sector.
          </div>
        </div>

        {/* Dynamic Multi-Aspect Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {siteConfig.montageItems.map((item, index) => {
            const isLandscape = item.aspect === "landscape";
            const isPortrait = item.aspect === "portrait";
            const isActive = activeFrameId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveFrameId(item.id)}
                onMouseLeave={() => setActiveFrameId(null)}
                className={cn(
                  "group relative rounded-2xl overflow-hidden border border-gray-200/50 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg",
                  isPortrait && "sm:col-span-2 sm:row-span-2 min-h-[300px]",
                  isLandscape && "min-h-[220px]",
                  !isLandscape && !isPortrait && "min-h-[260px]"
                )}
              >
                {/* Gradient Background */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-all duration-500 group-hover:scale-105",
                    item.gradient
                  )}
                />

                {/* Subtle Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(107,114,128,0.15),transparent_70%)] opacity-50 group-hover:opacity-70 transition-opacity" />

                {/* Top Bar */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-gray-900/60 backdrop-blur-md border border-gray-700 text-[11px] font-mono font-medium text-white/90">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gray-900/50 backdrop-blur-sm text-[10px] text-gray-400">
                    <Eye className="w-3 h-3 text-gray-400" />
                    <span>{item.viewsEstimate}</span>
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="relative z-10 p-4 flex flex-col items-center justify-center my-auto">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full bg-gray-500/80 backdrop-blur-md border border-gray-400/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-400",
                      isActive && "scale-110 bg-gray-400 ring-4 ring-gray-400/20"
                    )}
                  >
                    <Play className="w-5 h-5 ml-0.5 fill-white text-white" />
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="relative z-10 p-4 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent pt-6">
                  <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Eye className="w-3 h-3 text-gray-500" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PRD Compliance Banner */}
        <div className="mt-12 p-4 rounded-xl border border-gray-200/50 bg-white/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-500 shrink-0" />
            <span>
              Every campaign format is custom-matched to your product architecture, target audience, and release timeline.
            </span>
          </div>
          <a
            href="#brand-enquiry"
            className="text-gray-600 hover:text-gray-700 font-medium whitespace-nowrap transition-colors"
          >
            Discuss Format Strategy →
          </a>
        </div>
      </div>
    </section>
  );
}