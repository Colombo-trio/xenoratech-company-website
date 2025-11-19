"use client";

import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechnologiesSection from "@/components/TechnologiesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeroSection scrollToContact={scrollToContact} />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <TechnologiesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
