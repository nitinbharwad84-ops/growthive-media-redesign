import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { VideoMontageSection } from "@/components/sections/video-montage";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { BrandEnquirySection } from "@/components/sections/brand-enquiry-section";
import { CreatorApplicationSection } from "@/components/sections/creator-application-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/15 selection:text-primary">
      {/* Top Fixed Header */}
      <SiteHeader />

      {/* Main Single-Page Agency Content */}
      <main className="flex-1">
        {/* 1. Brand Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* 2. Creator-Led Video Montage (12 Curated Frames) */}
        <div id="showcase">
          <VideoMontageSection />
        </div>

        {/* 3. Five Distinct Core Services */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* 4. Four-Step Connected Campaign Process */}
        <div id="how-it-works">
          <ProcessSection />
        </div>

        {/* 5. Brand Campaign Enquiry CTA & Form */}
        <div id="brand-enquiry">
          <BrandEnquirySection />
        </div>

        {/* 6. Creator Application CTA & Form */}
        <div id="for-creators">
          <CreatorApplicationSection />
        </div>
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}
