import * as React from "react";
import { CreatorApplicationForm } from "@/components/forms/creator-application-form";
import { Badge } from "@/components/ui/badge";
import { Users, Lock, Compass, Feather } from "lucide-react";

const assurances = [
  {
    icon: Lock,
    title: "Applications stay private",
    body: "Nothing you send is displayed publicly or shared with other applicants.",
  },
  {
    icon: Compass,
    title: "Relevant briefs only",
    body: "Campaigns are aimed at AI, developer and software audiences.",
  },
  {
    icon: Feather,
    title: "Your editorial voice",
    body: "We set the brief and the format. How you present the product stays yours.",
  },
];

export function CreatorApplicationSection() {
  return (
    <section
      id="for-creators"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[440px] w-[620px] rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-3xl space-y-5 text-center">
          <Badge variant="glow" className="px-4 py-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-accent">Creator network</span>
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Create with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              GrowthiveMedia
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Are you creating content around AI, technology or software? Tell us about your
            channel and apply to be considered for future opportunities.
          </p>
        </div>

        <CreatorApplicationForm />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {assurances.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border/60 bg-card/60 p-4 text-center"
            >
              <Icon className="mx-auto mb-2 h-4 w-4 text-primary" />
              <span className="block text-sm font-medium text-foreground">{title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                {body}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
