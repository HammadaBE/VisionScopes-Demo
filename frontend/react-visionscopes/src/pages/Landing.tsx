import ContactSection from "@/components/ContactSection";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExamplesSection from "@/components/ExamplesSection";
import PricingSection from "@/components/PricingSection";
import UploadSection from "@/components/UploadSection";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ExamplesSection />
        <UploadSection />
        <PricingSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
