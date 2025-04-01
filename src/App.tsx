import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { ContactPage } from "@/pages/ContactPage";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "contact">("home");

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.hash;
      setCurrentPage(path === "#contact" ? "contact" : "home");
    };

    window.addEventListener("hashchange", handleNavigation);
    handleNavigation(); // Handle initial load

    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {currentPage === "home" ? (
        <>
          <HeroSection />
          <ServicesSection />
          <BenefitsSection />
          <PortfolioSection />
          <AboutSection />
          <FaqSection />
        </>
      ) : (
        <ContactPage />
      )}
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;