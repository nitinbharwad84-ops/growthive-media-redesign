import { SiteLayout } from "@/components/layout/site-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { BrandEnquirySection } from "@/components/sections/brand-enquiry-section";
import { CreatorApplicationSection } from "@/components/sections/creator-application-section";

export default function Home() {
  return (
    <SiteLayout>
      {/* 1. Brand hero */}
      <HeroSection />

      {/* 2. Creator-led format library */}
      <ShowcaseSection />

      {/* 3. Five core campaign services */}
      <ServicesSection />

      {/* 4. Four-step connected campaign process */}
      <ProcessSection />

      {/* 5. Brand campaign enquiry */}
      <BrandEnquirySection />

      {/* 6. Creator application */}
      <CreatorApplicationSection />
    </SiteLayout>
  );
}
