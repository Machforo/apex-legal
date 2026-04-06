import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgramsSection() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("homepage");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fallbackPrograms = [
    { 
      name: "BBA", 
      description: "Bachelor of Business Administration. 3 Years.", 
      link: "/courses/bba",
      overview: "Develop essential management skills and business perspective. Focuses on marketing, HR, and finance fundamentals.",
      outcomes: ["Sales Manager", "Business Development Executive", "HR Generalist", "Management Trainee"]
    },
    { 
      name: "B.Com", 
      description: "Bachelor of Commerce. 3 Years.", 
      link: "/courses/bcom",
      overview: "Comprehensive study of accounting, finance, and taxation. Prepares students for professional roles in the financial sector.",
      outcomes: ["Accountant", "Tax Consultant", "Financial Analyst", "Audit Assistant"]
    },
    { 
      name: "BCA", 
      description: "Bachelor of Computer Applications. 3 Years.", 
      link: "/courses/bca",
      overview: "Technical course covering software development, database management, and emerging technologies like AI/ML.",
      outcomes: ["Software Developer", "Web Designer", "System Analyst", "Technical Support"]
    },
    { 
      name: "M.Com", 
      description: "Master of Commerce. 2 Years.", 
      link: "/courses/mcom",
      overview: "Advanced study in commerce, ideal for those seeking leadership roles in business or academic research.",
      outcomes: ["Finance Manager", "Senior Auditor", "Business Consultant", "Bank Manager"]
    },
    { 
      name: "B.Ed", 
      description: "Bachelor of Education. 2 Years.", 
      link: "/courses/bed",
      overview: "Professional training for aspiring teachers. Focuses on pedagogy, child psychology, and classroom management.",
      outcomes: ["School Teacher", "Education Counselor", "Curriculum Designer", "School Administrator"]
    },
    { 
      name: "M.Ed", 
      description: "Master of Education. 2 Years.", 
      link: "/courses/med",
      overview: "Advanced pedagogical research and leadership development for senior educational roles.",
      outcomes: ["Principal/HOD", "Education Consultant", "Lecturer", "Policy Analyst"]
    }
  ];
  
  const programs = data?.academicPrograms?.length > 0 ? data.academicPrograms : fallbackPrograms;

  return (
    <section id="programs" className="py-12 md:py-20 bg-section-alt overflow-hidden" ref={ref}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Academic Excellence</p>
          <h2 className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Programs Designed for Real-World Success
          </h2>
          <p className="reveal delay-200 mt-5 text-foreground/60 leading-relaxed">
            CCS University affiliated programs approved by UGC &amp; AICTE, blending theoretical depth with intensive industry exposure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program: any, i: number) => {
            return (
              <motion.div
                key={program.name || i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`reveal delay-${Math.min(i, 5)}00 group relative bg-card rounded-2xl border p-8 shadow-[0_4px_20px_hsl(var(--navy)/0.04)] hover:shadow-[0_20px_40px_hsl(var(--navy)/0.08)] transition-all duration-500 overflow-hidden`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/5 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                    <BookOpen className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-navy">{program.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-gold mt-1 font-semibold">{program.description.split('.')[1]?.trim() || "Full Time"}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Overview</p>
                    <p className="text-sm text-foreground/70 leading-relaxed italic">
                      "{program.overview || program.description}"
                    </p>
                  </div>

                  <AnimatePresence>
                    {(hoveredIndex === i) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Career Outcomes</p>
                        <div className="flex flex-wrap gap-2">
                          {(program.outcomes || ["Management Professional", "Industry Expert"]).map((outcome: string) => (
                            <span key={outcome} className="px-2.5 py-1 bg-muted rounded-full text-[10px] font-medium text-foreground/70">
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-6 border-t flex items-center justify-between">
                    <Link to={program.link || "#"} className="flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors group/btn">
                      Explore Program
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
