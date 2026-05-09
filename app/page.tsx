import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechnologiesSection from "@/components/TechnologiesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ScrollToTop from "@/components/ScrollToTop";
import { ServicesSkeleton, PortfolioSkeleton } from "@/components/skeletons/HomeSkeletons";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesPreview />
      </Suspense>

      <Suspense fallback={<PortfolioSkeleton />}>
        <PortfolioPreview />
      </Suspense>

      <WhyChooseUs />
      <TechnologiesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ScrollToTop />
    </>
  );
}
