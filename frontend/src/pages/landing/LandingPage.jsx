import Navbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import OverviewSection from "../../components/landing/OverviewSection";
import HowItWorks from "../../components/landing/HowItWorks";
import FeaturesSection from "../../components/landing/FeaturesSection";
import StatisticsSection from "../../components/landing/StatisticsSection";
import DepartmentsSection from "../../components/landing/DepartmentsSection";
import ContactSection from "../../components/landing/ContactSection";
import Footer from "../../components/landing/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <HowItWorks />
      <FeaturesSection />
      <StatisticsSection />
      <DepartmentsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;