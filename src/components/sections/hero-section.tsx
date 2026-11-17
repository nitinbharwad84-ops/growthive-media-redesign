"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroStage } from "@/stageshow/hero-stage";
import { ArrowDown, ArrowUpRight } from "lucide-react";

/**
 * The hero. One headline, one description, two ways in — and the delivery
 * console as the focal object.
 *
 * There are no figures here on purpose: the client has not substantiated any
 * statistics, so none are published (PRD §5.3).
 */
export function HeroSection() {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (!el) return;
    // Honour the OS motion preference: CSS cannot override a scripted smooth
    // scroll, so the check has to happen here.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const capabilities = [
    { label: "End-to-end campaign delivery", hint: "Brief to published content" },
    { label: "Built for technical audiences", hint: "AI, developer and software" },
    { label: "Five campaign formats", hint: "Chosen to fit the objective" },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-surface/50 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl">
          <Badge variant="glow" className="mb-7 px-4 py-2">
            <span className="text-accent">AI &amp; Technology Influencer Marketing</span>
          </Badge>

          <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            The next big thing has a{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              creator behind it.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group rounded-full px-9"
              onClick={() => scrollTo("#brand-enquiry")}
            >
              <span>Work With Us</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-9"
              onClick={() => scrollTo("#services")}
            >
              <span>Explore Services</span>
              <ArrowDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border/60 pt-8 sm:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{item.hint}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The product frame */}
        <div className="relative min-w-0">
          <div data-scene="campaign-architecture">
            <HeroStage poster="/stageshow/hero-poster.png" />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground/80">
            Illustration of the GrowthiveMedia delivery workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
