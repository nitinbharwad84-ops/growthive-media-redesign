"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Play, Radio } from "lucide-react";
import { CreatorMatchScene } from "@/stageshow/scenes/creator-match";
import { FlightPlanScene } from "@/stageshow/scenes/flight-plan";
import { cn } from "@/lib/utils";

/**
 * The format library: the video shapes we build campaigns in.
 *
 * These are formats, not a creator directory — no names, no channels, no
 * audience figures. A tile states the format, the shape and the running time.
 */
export function ShowcaseSection() {
  const [activeFrameId, setActiveFrameId] = React.useState<string | null>(null);

  const features = [
    { id: "creator-match", label: "Audience match" },
    { id: "flight-plan", label: "Release waves" },
  ];

  return (
    <section
      id="showcase"
      className="relative overflow-hidden border-b border-border/50 bg-surface/30 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[460px] w-[680px] translate-x-1/3 rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl space-y-5 text-center">
          <Badge variant="glow" className="px-4 py-2">
            <Radio className="h-4 w-4 text-primary" />
            <span className="text-accent">Creator-led formats</span>
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            High-impact content designed for{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              technical audiences
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            From deep-dive architectural tutorials to high-velocity launch reviews, these are
            the storytelling formats that land with software engineers, founders and AI early
            adopters.
          </p>
        </div>

        {/* Two product frames, then the format library */}
        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card/60">
            <div data-scene="creator-match">
              <CreatorMatchScene />
            </div>
            <figcaption className="border-t border-border/60 px-5 py-4 text-sm text-muted-foreground">
              {features[0].label} — the segment a campaign is aimed at, chosen against the brief.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card/60">
            <div data-scene="flight-plan">
              <FlightPlanScene />
            </div>
            <figcaption className="border-t border-border/60 px-5 py-4 text-sm text-muted-foreground">
              {features[1].label} — how formats are scheduled around a launch window.
            </figcaption>
          </figure>
        </div>

        {/* The format library */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteConfig.montageItems.map((item) => {
            const isPortrait = item.aspect === "portrait";
            const isActive = activeFrameId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveFrameId(item.id)}
                onMouseLeave={() => setActiveFrameId(null)}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors duration-300 hover:border-primary/40",
                  isPortrait && "sm:row-span-2 min-h-[280px]"
                )}
              >
                <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-surface-2 via-card to-background">
                  <div
                    className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${item.accentColor}22, transparent 65%)`,
                    }}
                    aria-hidden
                  />
                  <div className="relative flex h-full min-h-[150px] flex-col justify-between p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-md border border-border/70 bg-background/70 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/85 backdrop-blur">
                        {item.category}
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground/80 backdrop-blur transition-all duration-300",
                          isActive && "scale-110 border-primary/60 bg-primary/20 text-accent"
                        )}
                        aria-hidden
                      >
                        <Play className="h-4 w-4 fill-current" />
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                        {item.format}
                      </p>
                      <h3 className="mt-1.5 text-sm font-semibold leading-snug text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/60 px-5 py-3 font-mono text-[11px] text-muted-foreground">
                  <span>{item.aspect === "portrait" ? "9:16" : item.aspect === "square" ? "1:1" : "16:9"}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80">
          A working library of the formats we produce for AI and technology brands. These are
          formats, not a creator directory: no channel names, no audience statistics. Creator
          matching happens per campaign, against the brief you send us.
        </p>
      </div>
    </section>
  );
}
