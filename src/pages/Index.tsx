import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyIshanLawSection from "@/components/WhyIshanLawSection";
import PlacementsSection from "@/components/PlacementsSection";
import CampusExperience from "@/components/CampusExperience";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FacultySection from "@/components/FacultySection";
import CTASection from "@/components/CTASection";
import DynamicPageSections from "@/components/DynamicPageSections";

const Index = () => {
  const defaultSections: Record<string, React.ReactNode> = {
    hero: <HeroSection key="hero" />,
    stats: <StatsBar key="stats" />,
    about: <div id="about" key="about"><AboutSection /></div>,
    programs: <div id="programs" key="programs"><ProgramsSection /></div>,
    why_ishan_law: <div id="why-ishan-law" key="why_ishan_law"><WhyIshanLawSection /></div>,
    placements: <div id="placements" key="placements"><PlacementsSection /></div>,
    faculty: <FacultySection key="faculty" />,
    campus: <div id="campus" key="campus"><CampusExperience /></div>,
    news: <div id="news" key="news"><NewsSection /></div>,
    testimonials: <TestimonialsSection key="testimonials" />,
    faqs: <FAQSection key="faqs" />,
    cta: <CTASection key="cta" />
  };

  const defaultOrder = [
    'hero',
    'stats',
    'about',
    'programs',
    'why_ishan_law',
    'placements',
    'faculty',
    'campus',
    'news',
    'testimonials',
    'faqs',
    'cta'
  ];

  return (
    <Layout>
      <DynamicPageSections
        pageId="homepage"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
};

export default Index;
