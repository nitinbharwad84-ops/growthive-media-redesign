import * as React from "react";
import Link from "next/link";
import { GrowthiveLogo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/[0.08] bg-[#07070A] pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <GrowthiveLogo size="lg" />
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                GrowthiveMedia connects AI and technology brands with creators to bring products, tools and ideas to the right audiences through influencer marketing campaigns.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Direct Communication
              </span>
              <div className="flex flex-col space-y-1.5 text-sm">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span className="font-mono">{siteConfig.contactEmail}</span>
                  <span className="text-xs text-muted-foreground">(Campaign Enquiries)</span>
                </a>
                <a
                  href={`mailto:${siteConfig.agencyEmail}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono">{siteConfig.agencyEmail}</span>
                  <span className="text-xs text-muted-foreground/80">(Agency Contact)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-violet-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Campaign Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-violet-300 transition-colors flex items-center justify-between group py-1"
                  >
                    <span className="truncate pr-2">{service.title}</span>
                    <span className="text-xs font-mono text-muted-foreground/60 group-hover:text-violet-400">
                      {service.number}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} GrowthiveMedia. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
              <span>Privacy Policy (Draft Demo)</span>
            </Link>
            <span className="text-muted-foreground/40">•</span>
            <span>Presentation Demo Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
