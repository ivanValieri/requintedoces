import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import PortfolioSection from "@/components/PortfolioSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">
      <Header />
      <ImageSlider />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <PortfolioSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
