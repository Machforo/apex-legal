import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIIMTData } from "@/hooks/useIIMTData";
import { Clock, GraduationCap, IndianRupee, Users, CheckCircle2 } from "lucide-react";
import NotFound from "./NotFound";

export default function DynamicCourse() {
  const { courseId } = useParams();
  const { data, isLoading } = useIIMTData("courses");

  if (isLoading) return <div className="min-h-screen flex flex-col"><Navbar /><div className="flex-1 flex items-center justify-center font-display text-xl text-navy animate-pulse">Loading Academic Program...</div></div>;
  
  const courseList = data?.courses || [];
  
  // Clean string to match slugs
  const sanitizeSlug = (str: string) => str?.toLowerCase().replace(/[^a-z0-9]/g, '');
  const course = courseList.find((c: any) => sanitizeSlug(c.programName) === sanitizeSlug(courseId || ''));

  if (!course) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-navy py-20 md:py-32 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              {course.programName}
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed font-light">
              Expand your horizons and build a foundation for success.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container-wide py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6 text-gold-underline">Program Overview</h2>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap">{course.overview || "Program overview details will be updated shortly."}</p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6 text-gold-underline">Curriculum Structure</h2>
              <div className="bg-card border rounded-2xl p-6 shadow-sm">
                 <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">{course.curriculumStructure || "Curriculum structure will be updated shortly."}</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6 text-gold-underline">Career Scope</h2>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap">{course.careerScope || "Career scope will be updated shortly."}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-navy text-primary-foreground rounded-2xl p-8 sticky top-32 shadow-[0_8px_30px_hsl(var(--navy)/0.2)]">
              <h3 className="text-2xl font-display font-bold mb-8">Quick Facts</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Duration</p>
                    <p className="font-semibold text-lg">{course.duration || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Annual Fee</p>
                    <p className="font-semibold text-lg">{course.annualFee || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Annual Intake</p>
                    <p className="font-semibold text-lg">{course.annualIntake || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Eligibility</p>
                    <p className="font-semibold">{course.eligibility || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl transition-colors shadow-lg active:scale-[0.98]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
