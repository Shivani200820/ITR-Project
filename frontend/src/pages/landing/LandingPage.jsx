import Navbar from "../../Components/landing/Navbar";
import HeroSection from "../../Components/landing/HeroSection";
import OverviewSection from "../../Components/landing/OverviewSection";
import howitworks from "../../Components/landing/howitworks";
import featuressection from "../../Components/landing/featuressection";
import StatisticsSection from "../../Components/landing/StatisticsSection";
import departmentssection from "../../Components/landing/departmentssection";
import ContactSection from "../../Components/landing/ContactSection";
import footer from "../../Components/landing/footer";
import ScrollTop from "../../Components/common/ScrollTop";

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