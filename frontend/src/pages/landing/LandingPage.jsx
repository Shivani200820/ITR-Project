import Navbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import OverviewSection from "../../components/landing/OverviewSection";
import howitworks from "../../components/landing/howitworks";
import featuressection from "../../components/landing/featuressection";
import StatisticsSection from "../../components/landing/StatisticsSection";
import departmentssection from "../../components/landing/departmentssection";
import ContactSection from "../../components/landing/ContactSection";
import footer from "../../components/landing/footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <howitworks />
      <featuressection />
      <StatisticsSection />
      <departmentssection />
      <ContactSection />
      <footer />
    </>
  );
}

export default LandingPage;