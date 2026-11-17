"use client";

import * as React from "react";
import { GrowthiveLogo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200/60 py-3.5 shadow-sm"
          : "bg-white/70 backdrop-blur-md py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <GrowthiveLogo size="md" />

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-gray-200/60 backdrop-blur-md"
        >
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="default"
            variant="default"
            onClick={() => {
              const el = document.querySelector("#brand-enquiry");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group font-medium rounded-full px-5"
          >
            <span>Work With Us</span>
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-gray-200 px-6 py-8 shadow-sm transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button
                size="lg"
                variant="default"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector("#brand-enquiry");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full justify-center rounded-xl"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>

              <a
                href="#for-creators"
                onClick={(e) => handleNavClick(e, "#for-creators")}
                className="text-center text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
              >
                Are you a creator? Apply here →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}