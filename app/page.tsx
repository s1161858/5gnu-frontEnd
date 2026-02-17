import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { FeaturesSection } from "@/components/features-section";
import { SpecsSection } from "@/components/specs-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <SpecsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
