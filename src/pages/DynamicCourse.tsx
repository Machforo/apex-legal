import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { Clock, GraduationCap, IndianRupee, Users, Award, Sparkles, Image as ImageIcon } from "lucide-react";
import NotFound from "./NotFound";
import { rt } from "@/lib/richText";

export default function DynamicCourse() {
  const { courseId } = useParams();
  const { data, isLoading } = useIshanLawData("programs");

  if (isLoading) return <div className="min-h-screen flex flex-col"><Navbar /><div className="flex-1 flex items-center justify-center text-xl text-navy animate-pulse">Loading Academic Program...</div></div>;
  
  const fallbackCourses = [
    {
      name: "BA LLB (Hons)", slug: "ba-llb",
      duration: "5 Years (Integrated)",
      eligibility: "10+2 with 45% marks (General), 42% (OBC), 40% (SC/ST). BCI & University Approved.",
      annualIntake: "120 Seats", annualFee: "₹60,000",
      overview: "The integrated BA LLB (Hons) at Ishan Law Institute is a flagship 5-year professional program that seamlessly blends liberal arts with legal scholarship.",
      curriculumStructure: "The program follows the CCS University and BCI curriculum. Initial years focus on pre-law subjects and foundational legal principles followed by specialized law papers.",
      careerScope: "Graduates can enroll as advocates, appear for Judicial Services (PCS-J), work in top-tier Law Firms, or join corporate legal departments.",
      image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
      bannerImage: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
      studentActivityImages: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-2.jpg", caption: "Moot Court Advocacy Practice" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-3.jpg", caption: "Legal Aid Camp & Community Service" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-4.jpg", caption: "Parliamentary Debate Workshop" }
      ],
      placementOutcomeImages: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-1.jpg", caption: "Campus Placement Recruitment Drive" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-2.jpg", caption: "High Court & Law Firm Internships" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-3.jpg", caption: "Corporate Legal Advisory Induction" }
      ],
      facultyTeachingImage: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-5.jpg",
      images: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-6.jpg", caption: "Library Legal Research Section" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-7.jpg", caption: "Guest Lecture Series" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-8.jpg", caption: "Annual Legal Symposium" }
      ]
    },
    {
      name: "LLB", slug: "llb",
      duration: "3 Years (Professional)",
      eligibility: "Graduation in any discipline with 45% marks (General), 42% (OBC), 40% (SC/ST).",
      annualIntake: "120 Seats", annualFee: "₹50,000",
      overview: "The 3-year LLB program is designed for graduates from any field who wish to transition into the legal profession.",
      curriculumStructure: "Covers substantive and procedural laws including Civil Procedure, Criminal Procedure, Evidence, Property Law, and Professional Ethics.",
      careerScope: "LLB graduates can practice in all Indian courts, pursue Corporate Law, LPOs, Legal Research, and government law officer roles.",
      image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg",
      bannerImage: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg",
      studentActivityImages: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-9.jpg", caption: "Court Observation & Trial Practice" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-10.jpg", caption: "Client Counseling Seminar" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-12.jpg", caption: "Legal Drafting Clinic" }
      ],
      placementOutcomeImages: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-1.jpg", caption: "Legal Chambers Placement" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-2.jpg", caption: "District Court Apprenticeships" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-3.jpg", caption: "Corporate Compliance Internship" }
      ],
      facultyTeachingImage: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-5.jpg",
      images: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg", caption: "Substantive Law Discussion" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-2.jpg", caption: "Clinical Education Center" }
      ]
    },
    {
      name: "LLM", slug: "llm",
      duration: "2 Years",
      eligibility: "LLB or BA LLB degree from a recognized university with minimum 50% marks.",
      annualIntake: "30 Seats", annualFee: "₹80,000",
      overview: "The LLM program is a postgraduate degree for law graduates seeking advanced specialization in legal research and scholarship.",
      curriculumStructure: "Specializations in Constitutional Law, Criminal Law, and Corporate Law, with mandatory dissertation under senior faculty.",
      careerScope: "LLM graduates are suited for academic roles, legal research, specialized consulting in MNCs, and UGC NET/JRF competitive exams.",
      image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
      bannerImage: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
      studentActivityImages: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-3.jpg", caption: "Advanced Legal Research Colloquium" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-4.jpg", caption: "Dissertation Defense Session" }
      ],
      placementOutcomeImages: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-2.jpg", caption: "Academic & Research Fellowships" },
        { url: "https://law.ishan.ac/all-law/gallery-photos/placements/placements-3.jpg", caption: "Policy & Consultancy Roles" }
      ],
      facultyTeachingImage: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-5.jpg",
      images: [
        { url: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-6.jpg", caption: "Postgraduate Research Library" }
      ]
    },
  ];

  const courseList = (data && data.length > 0) ? data : fallbackCourses;
  const course = courseList.find((c: any) => {
    const slug = (c.slug || '').toLowerCase().trim();
    const id = (courseId || '').toLowerCase().trim();
    if (!id) return false;
    
    if (slug === id) return true;
    const cleanId = id.replace(/[^a-z0-9]/g, '');
    const cleanSlug = slug.replace(/[^a-z0-9]/g, '');
    const cleanName = (c.name || c.programName || '').toLowerCase().replace(/[^a-z0-9]/g, '');

    if (cleanSlug === cleanId) return true;
    if (cleanName === cleanId) return true;

    if ((cleanId === 'ballb' || cleanId === 'ballbhons') && (cleanSlug.includes('ballb') || cleanName.includes('ballb'))) return true;
    if (cleanId === 'llb' && (cleanSlug === 'llb' || cleanName.startsWith('llb'))) return true;
    if (cleanId === 'llm' && (cleanSlug === 'llm' || cleanName.startsWith('llm'))) return true;

    return false;
  }) || fallbackCourses.find((c: any) => {
    const cleanId = (courseId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return c.slug.replace(/[^a-z0-9]/g, '') === cleanId || c.slug === courseId;
  });

  if (!course) return <NotFound />;

  const bannerImage = course.bannerImage || course.image;
  
  // Normalize Student Activity Images
  const rawActivity = course.studentActivityImages || [];
  const studentActivityImages: {url: string; caption?: string}[] = Array.isArray(rawActivity) && rawActivity.length > 0
    ? rawActivity.map((item: any) => typeof item === 'string' ? { url: item } : { url: item.url || item.image || item, caption: item.caption })
    : (fallbackCourses.find(f => f.slug === course.slug)?.studentActivityImages || []);

  // Normalize Placement Outcome Images (Support multiple images/carousel)
  const rawPlacement = course.placementOutcomeImages || (course.placementOutcomeImage ? [{ url: course.placementOutcomeImage }] : []);
  const placementOutcomeImages: {url: string; caption?: string}[] = Array.isArray(rawPlacement) && rawPlacement.length > 0
    ? rawPlacement.map((item: any) => typeof item === 'string' ? { url: item } : { url: item.url || item.image || item, caption: item.caption })
    : (fallbackCourses.find(f => f.slug === course.slug)?.placementOutcomeImages || []);

  const facultyTeachingImage: string | undefined = course.facultyTeachingImage || fallbackCourses.find(f => f.slug === course.slug)?.facultyTeachingImage;

  // Normalize Campus Gallery Images
  const rawGallery = course.images || course.galleryPhotos || [];
  const galleryImages: {url: string; caption?: string}[] = Array.isArray(rawGallery) && rawGallery.length > 0
    ? rawGallery.map((item: any) => typeof item === 'string' ? { url: item } : { url: item.url || item.image || item, caption: item.caption })
    : (fallbackCourses.find(f => f.slug === course.slug)?.images || []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header Banner */}
      <div className="bg-navy py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src={bannerImage || "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg"} 
             className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-105 transition-transform duration-1000" 
             alt="Course Header Banner"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-gold/30">
              <Sparkles className="w-3.5 h-3.5" /> BCI Approved Degree
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              {course.name || course.programName}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
              Forge your legal career at Ishan Law Institute with our comprehensive {course.duration} curriculum.
            </p>
          </div>
        </div>
      </div>

      {/* Student Activity Photo Grid */}
      {studentActivityImages.length > 0 && (
        <div className="bg-muted/40 py-10 border-b">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm uppercase tracking-wider font-bold text-navy flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-gold" /> Student Activity & Academic Life
              </h3>
              <span className="text-xs text-muted-foreground">{studentActivityImages.length} Highlights</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studentActivityImages.map((img, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md h-52 bg-card border">
                  <img src={img.url} alt={img.caption || `Student activity ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {img.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-4">
                      <p className="text-xs text-white font-medium">{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 container-wide py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Program Overview</h2>
              <div className="text-base text-foreground/80 leading-relaxed format-rich-text" dangerouslySetInnerHTML={{ __html: rt(course.overview || "Program overview details will be updated shortly.") }} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Curriculum Structure</h2>
              <div className="bg-card border rounded-2xl p-6 shadow-sm">
                <div className="text-base text-foreground/80 leading-relaxed format-rich-text" dangerouslySetInnerHTML={{ __html: rt(course.curriculumStructure || "Curriculum structure will be updated shortly.") }} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Career Scope & Opportunities</h2>
              <div className="text-base text-foreground/80 leading-relaxed format-rich-text" dangerouslySetInnerHTML={{ __html: rt(course.careerScope || "Career scope will be updated shortly.") }} />
            </div>

            {/* Faculty & Teaching Photo */}
            {facultyTeachingImage && (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Faculty & Teaching Methodology</h2>
                <div className="rounded-2xl overflow-hidden shadow-lg h-72 relative group border bg-card">
                  <img src={facultyTeachingImage} alt="Faculty teaching at Ishan Law" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-navy/90 backdrop-blur text-gold px-3.5 py-1.5 rounded-full text-xs font-semibold shadow border border-gold/30">
                    Interactive Pedagogy
                  </div>
                </div>
              </div>
            )}

            {/* Placement Outcomes Gallery/Carousel */}
            {placementOutcomeImages.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-navy text-gold-underline flex items-center gap-2.5">
                    <Award className="w-6 h-6 text-gold" /> Placement & Career Outcomes
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {placementOutcomeImages.map((img, i) => (
                    <div key={i} className="group rounded-2xl overflow-hidden shadow-md border bg-card flex flex-col">
                      <div className="h-48 overflow-hidden relative">
                        <img src={img.url} alt={img.caption || `Placement outcome ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      {img.caption && (
                        <div className="p-3.5 text-xs text-foreground/80 font-medium bg-card">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Campus & Infrastructure Gallery */}
            {galleryImages.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Campus & Infrastructure Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-md h-44 border group relative">
                      <img src={img.url} alt={img.caption || `Gallery ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {img.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-navy/80 p-2 text-[11px] text-white font-medium truncate">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-navy text-primary-foreground rounded-2xl p-8 sticky top-32 shadow-[0_8px_30px_hsl(var(--navy)/0.2)] border border-gold/20">
              <h3 className="text-2xl font-bold mb-8 text-gold border-b border-primary-foreground/10 pb-4">Quick Facts</h3>
              <div className="space-y-6">
                {[
                  { icon: Clock, label: "Duration", value: course.duration },
                  { icon: IndianRupee, label: "Annual Fee", value: course.annualFee },
                  { icon: Users, label: "Annual Intake", value: course.annualIntake },
                  { icon: GraduationCap, label: "Eligibility", value: course.eligibility },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0 border border-gold/20">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60 mb-1">{label}</p>
                      <p className="font-semibold">{value || "N/A"}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <a href="/admissions" className="block w-full bg-gold hover:bg-gold-light text-navy text-center font-bold py-4 rounded-xl transition-colors shadow-lg active:scale-[0.98]">
                  Apply For Admission
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
