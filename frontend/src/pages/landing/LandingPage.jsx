import Navbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import OverviewSection from "../../components/landing/OverviewSection";
import howitworks from "../../components/landing/howitworks";
import featuressection from "../../components/landing/featuressection";
import StatisticsSection from "../../components/landing/StatisticsSection";
import departmentssection from "../../components/landing/departmentssection";
import ContactSection from "../../components/landing/ContactSection";
import footer from "../../components/landing/footer";
import ScrollTop from "../../components/common/ScrollTop";

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
      <ScrollTop />
    </>
  );
}

export default LandingPage;