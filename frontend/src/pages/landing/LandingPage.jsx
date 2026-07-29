import Navbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import OverviewSection from "../../components/landing/OverviewSection";
import HowItWorks from "../../components/landing/HowItWorks";
import FeaturesSection from "../../components/landing/FeaturesSection";
import DepartmentsSection from "../../components/landing/DepartmentsSection";
import ContactSection from "../../components/landing/ContactSection";
import Footer from "../../components/landing/Footer";
import ScrollTop from "../../components/common/ScrollTop";
import StatsCounter from "../../components/landing/StatsCounter";
import TestimonialsSection from "../../components/landing/TestimonialsSection";
import FAQSection from "../../components/landing/FAQSection";
function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsCounter />
        <OverviewSection />
        <HowItWorks />
        <FeaturesSection />
        <DepartmentsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    
      <ScrollTop />
    </>
  );
}

export default LandingPage;