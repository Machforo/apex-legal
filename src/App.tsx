import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect, Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: any, errorInfo: any) { console.error("Uncaught error:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-navy text-white rounded-lg"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all inner pages
const About = lazy(() => import("./pages/About"));
const PrincipalMessage = lazy(() => import("./pages/PrincipalMessage"));
const MissionVision = lazy(() => import("./pages/MissionVision"));
const Approvals = lazy(() => import("./pages/Approvals"));
const WhyChooseUs = lazy(() => import("./pages/WhyIshanLaw")); // Will update component content
const BestPractices = lazy(() => import("./pages/BestPractices"));
const GreenInitiatives = lazy(() => import("./pages/GreenInitiatives"));
const MandatoryDisclosure = lazy(() => import("./pages/MandatoryDisclosure"));

const DynamicCourse = lazy(() => import("./pages/DynamicCourse"));

const Admissions = lazy(() => import("./pages/Admissions"));
const AdmissionsEnquiry = lazy(() => import("./pages/AdmissionsEnquiry"));
const Consultation = lazy(() => import("./pages/Consultation"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const FAQs = lazy(() => import("./pages/FAQs"));
const ProgramsOverview = lazy(() => import("./pages/EducationOverview")); // Renamed in nav

const Faculty = lazy(() => import("./pages/Faculty"));
const VisitingFaculty = lazy(() => import("./pages/VisitingFaculty"));

const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const CertificatePrograms = lazy(() => import("./pages/CertificatePrograms"));
const SkillDevelopment = lazy(() => import("./pages/SkillDevelopment"));
const CulturalActivities = lazy(() => import("./pages/CulturalActivities"));
const Sports = lazy(() => import("./pages/Sports"));

const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const ITLab = lazy(() => import("./pages/ITLab"));
const Library = lazy(() => import("./pages/Library"));
const Auditorium = lazy(() => import("./pages/Auditorium"));
const Hostel = lazy(() => import("./pages/Hostel"));

const PhotoGallery = lazy(() => import("./pages/PhotoGallery"));
const VideoGallery = lazy(() => import("./pages/VideoGallery"));
const PressCoverage = lazy(() => import("./pages/PressCoverage"));

const Downloads = lazy(() => import("./pages/Downloads"));
const PastPapers = lazy(() => import("./pages/PastPapers"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const FeePayment = lazy(() => import("./pages/FeePayment"));
const StudentPortal = lazy(() => import("./pages/StudentPortal"));

const Placements = lazy(() => import("./pages/Placements"));
const ResearchJournal = lazy(() => import("./pages/ResearchJournal"));
const Publications = lazy(() => import("./pages/Publications"));
const AlumniNetwork = lazy(() => import("./pages/AlumniNetwork"));

const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Feedback = lazy(() => import("./pages/Feedback"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const AntiRagging = lazy(() => import("./pages/AntiRagging"));
const GrievanceRedressal = lazy(() => import("./pages/GrievanceRedressal"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const MootCourt = lazy(() => import("./pages/MootCourt"));
const LegalAidCell = lazy(() => import("./pages/LegalAidCell"));
const CourtJailVisits = lazy(() => import("./pages/IndustrialVisits"));
const GuestLectures = lazy(() => import("./pages/GuestLectures"));
const DebatesGD = lazy(() => import("./pages/DebatesGD"));
const InternshipExternship = lazy(() => import("./pages/InternshipExternship"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-[hsl(var(--gold))] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Intercepts clicks to course/admissions pages for the pop-under consultation flow
import { useNavigate } from "react-router-dom";
function GlobalClickInterceptor() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Check if it's a course or admissions link
      if (href.startsWith('/courses/') || href === '/admissions' || href === '/admissions-education') {
        // Prevent default navigation
        e.preventDefault();

        // Open the target (Course/Admissions) in a NEW tab
        window.open(href, '_blank');

        // Redirect the CURRENT tab to the consultation page
        navigate('/consultation');
      }
    };

    // Use capture phase to intercept before normal link behavior
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [navigate]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <GlobalClickInterceptor />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* 301 Redirects */}
              <Route path="/application-form" element={<Navigate to="/admissions" replace />} />
              <Route path="/join-us" element={<Navigate to="/careers" replace />} />
              <Route path="/director-message" element={<Navigate to="/principal-message" replace />} />
              <Route path="/why-ishan-law-institute" element={<Navigate to="/why-choose-us" replace />} />
              <Route path="/education-overview" element={<Navigate to="/programs-overview" replace />} />
              <Route path="/industrial-visits" element={<Navigate to="/court-jail-visits" replace />} />
              <Route path="/pedagogy-labs" element={<Navigate to="/moot-court" replace />} />

              <Route path="/" element={<Index />} />

              {/* About */}
              <Route path="/about" element={<About />} />
              <Route path="/principal-message" element={<PrincipalMessage />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/approvals" element={<Approvals />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/best-practices" element={<BestPractices />} />
              <Route path="/green-initiatives" element={<GreenInitiatives />} />
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />

              {/* Courses */}
              <Route path="/courses/:courseId" element={<DynamicCourse />} />
              <Route path="/programs-overview" element={<ProgramsOverview />} />
              <Route path="/internship-externship" element={<InternshipExternship />} />

              {/* Admissions & Consultation */}
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions-enquiry" element={<AdmissionsEnquiry />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/faqs" element={<FAQs />} />

              {/* Faculty */}
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/visiting-faculty" element={<VisitingFaculty />} />

              {/* Learning */}
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/certificate-programs" element={<CertificatePrograms />} />
              <Route path="/skill-development" element={<SkillDevelopment />} />
              <Route path="/cultural-activities" element={<CulturalActivities />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/moot-court" element={<MootCourt />} />
              <Route path="/legal-aid-cell" element={<LegalAidCell />} />
              <Route path="/court-jail-visits" element={<CourtJailVisits />} />
              <Route path="/guest-lectures" element={<GuestLectures />} />
              <Route path="/debates-gd" element={<DebatesGD />} />

              {/* Campus */}
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/it-lab" element={<ITLab />} />
              <Route path="/library" element={<Library />} />
              <Route path="/auditorium" element={<Auditorium />} />
              <Route path="/hostel" element={<Hostel />} />

              {/* Gallery */}
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route path="/video-gallery" element={<VideoGallery />} />
              <Route path="/press-coverage" element={<PressCoverage />} />

              {/* Students */}
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/past-papers" element={<PastPapers />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/fee-payment" element={<FeePayment />} />
              <Route path="/student-portal" element={<StudentPortal />} />

              {/* Research & Placements */}
              <Route path="/placements" element={<Placements />} />
              <Route path="/alumni-network" element={<AlumniNetwork />} />
              <Route path="/research-journal" element={<ResearchJournal />} />
              <Route path="/publications" element={<Publications />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/thank-you" element={<ThankYou />} />

              {/* Policies */}
              <Route path="/anti-ragging" element={<AntiRagging />} />
              <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
