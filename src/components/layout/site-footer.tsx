import * as React from "react";
import Link from "next/link";
import { GrowthiveLogo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border/60 bg-surface/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-border/60 pb-14 md:grid-cols-12">
          <div className="flex flex-col justify-between gap-6 md:col-span-5">
            <div className="space-y-4">
              <GrowthiveLogo size="lg" />
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Direct communication
              </span>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-mono">{siteConfig.contactEmail}</span>
                  <span className="text-xs text-muted-foreground">(Campaign enquiries)</span>
                </a>
                <a
                  href={`mailto:${siteConfig.agencyEmail}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono">{siteConfig.agencyEmail}</span>
                  <span className="text-xs text-muted-foreground/80">(Agency contact)</span>
                </a>
              </div>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 translate-y-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Campaign capabilities" className="md:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Campaign capabilities
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="group flex items-center justify-between py-1 transition-colors hover:text-foreground"
                  >
                    <span className="truncate pr-2">{service.title}</span>
                    <span className="font-mono text-xs text-muted-foreground/80 group-hover:text-accent">
                      {service.number}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} GrowthiveMedia. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Privacy Policy (draft)</span>
            </Link>
            <span className="text-muted-foreground/40">•</span>
            <span>Presentation build</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
