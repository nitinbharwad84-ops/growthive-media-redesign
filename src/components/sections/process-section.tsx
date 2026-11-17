import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Workflow, ArrowRight } from "lucide-react";
import { BriefReviewScene } from "@/stageshow/scenes/brief-review";

/**
 * The four-step process, drawn as one connected run. The brief frame is the
 * focal object: it is where every campaign starts.
 */
export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-b border-border/50 bg-surface/30 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl space-y-5 text-center">
          <Badge variant="glow" className="px-4 py-2">
            <Workflow className="h-4 w-4 text-primary" />
            <span className="text-accent">Process &amp; execution</span>
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            How campaigns come together
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            A four-step roadmap from first brief to published content, with the deliverable of
            each step written down before the next one starts.
          </p>
        </div>

        {/* Focal frame: the brief */}
        <figure className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-card/60">
          <div data-scene="brief-review">
            <BriefReviewScene />
          </div>
          <figcaption className="border-t border-border/60 px-5 py-4 text-sm text-muted-foreground">
            Step 01 — the brief. Every format decision downstream is made against this document.
          </figcaption>
        </figure>

        <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.processSteps.map((step, index) => (
            <li
              key={step.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 transition-colors duration-300 hover:border-primary/40 sm:p-7"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 font-mono text-sm font-bold text-accent">
                    {step.step}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
                    {step.detail}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5 font-mono text-xs text-muted-foreground/70">
                <span>PHASE {step.step}</span>
                {index < siteConfig.processSteps.length - 1 ? (
                  <ArrowRight className="h-5 w-5 text-muted-foreground/60 transition-transform group-hover:translate-x-1" />
                ) : (
                  <span className="font-semibold text-accent">IN FLIGHT</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
