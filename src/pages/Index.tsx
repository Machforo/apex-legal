import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyIIMTSection from "@/components/WhyIIMTSection";
import PlacementsSection from "@/components/PlacementsSection";
import CampusExperience from "@/components/CampusExperience";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccreditationsSection from "@/components/AccreditationsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ProgramsSection />
      <WhyIIMTSection />
      <PlacementsSection />
      <CampusExperience />
      <NewsSection />
      <TestimonialsSection />
      <AccreditationsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
