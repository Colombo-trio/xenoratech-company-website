"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

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
      <HeroSection  scrollToContact={scrollToContact} />
      <ServicesSection />
      <TechnologiesSection />
      <TestimonialsSection />
    </>
  );
}
