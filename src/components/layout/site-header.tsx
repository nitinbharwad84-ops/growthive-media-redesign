"use client";

import * as React from "react";
import Link from "next/link";
import { GrowthiveLogo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape closes the drawer and returns focus to the toggle that opened it.
  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <GrowthiveLogo size="md" />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/70 px-2 py-1.5 backdrop-blur-md md:flex"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="default" className="group rounded-full px-5">
            <Link href="/contact">
              <span>Work With Us</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 pb-8 pt-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-border/40 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6">
              <Button asChild size="lg" className="w-full justify-center rounded-xl">
                <Link href="/contact" onClick={closeMenu}>
                  <span>Work With Us</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
