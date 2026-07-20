import Navbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import OverviewSection from "../../components/landing/OverviewSection";
import HowItWorks from "../../components/landing/HowItWorks";
import FeaturesSection from "../../components/landing/FeaturesSection";
import StatisticsSection from "../../components/landing/StatisticsSection";
import DepartmentsSection from "../../components/landing/DepartmentsSection";
import ContactSection from "../../components/landing/ContactSection";
import Footer from "../../components/landing/Footer";
import ScrollTop from "../../components/common/ScrollTop";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <OverviewSection />
        <HowItWorks />
        <FeaturesSection />
        <StatisticsSection />
        <DepartmentsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}

export default LandingPage;