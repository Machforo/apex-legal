import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Building2, Users2, Star, CheckCircle2 } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultStats = [
  { icon: TrendingUp, value: "100%", label: "Internship Support" },
  { icon: Building2, value: "50+", label: "Law Firm Partners" },
  { icon: Users2, value: "500+", label: "Advocates Produced" },
  { icon: Star, value: "10+", label: "Judicial Selections" },
];

const defaultRecruiters = [
  "Shardul Amarchand Mangaldas", "AZB & Partners", "Khaitan & Co.", "JSA Law", "Trilegal", 
  "Luthra and Luthra", "Dua Associates", "Fox Mandal", "Lakshmikumaran & Sridharan", 
  "Supreme Court of India (Clerkships)", "Delhi High Court", "Allahabad High Court", 
  "District Courts (NCR)", "HDFC Legal Dept.", "ICICI Bank Legal"
];

const defaultTestimonials = [
  { name: "Rahul Deshmukh", program: "BA LLB 2022", company: "Delhi High Court", quote: "The clinical training and moot court exposure at Ishan Law were instrumental in my transition to advocacy. I felt courtroom-ready from day one of my practice." },
  { name: "Sanya Malhotra", program: "LLB 2021", company: "JSA Law", quote: "The placement cell's focus on corporate law internships helped me secure a role at a top-tier firm. The digital research skills I learned here are invaluable." },
  { name: "Priyanka Singh", program: "BA LLB 2023", company: "Judicial Services", quote: "The dedicated Judicial Services Cell provided me with the structured guidance and mock tests that helped me clear the preliminary examinations in my first attempt." },
  { name: "Arjun Verma", program: "LLB 2022", company: "Corporate Legal Cell", quote: "Ishan Law's faculty, many of whom are practicing advocates, gave me a real-world perspective that you can't find in textbooks. Highly recommended for serious legal aspirants." },
];

export default function PlacementsPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("placements");

  // Schema field names: placementNumbers, recruitingPartners, successStories, placementProcess
  const stats = data?.placementNumbers?.length > 0 ? data.placementNumbers : defaultStats;
  const recruiters: string[] = data?.recruitingPartners?.length > 0
    ? data.recruitingPartners.map((r: any) => r.name || r)
    : defaultRecruiters;
  const testimonials = data?.successStories?.length > 0 ? data.successStories : defaultTestimonials;
  const placementProcess: Array<{step:string;desc:string}> = data?.placementProcess?.length > 0 ? data.placementProcess : [
    { step: "1", desc: "Pre-placement training: resume building, aptitude, group discussion, mock interviews" },
    { step: "2", desc: "Company registration and job description sharing with students" },
    { step: "3", desc: "Aptitude test and/or technical assessment by the recruiter" },
    { step: "4", desc: "Group discussion and personal interview rounds" },
    { step: "5", desc: "Offer letter issuance and onboarding support" },
  ];

  return (
    <Layout>
      <PageHeader title="Career Outcomes" subtitle="Consistent record of placements in top-tier law firms, corporate legal cells, and judicial services" breadcrumbs={[{ label: "Career Outcomes" }]} />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {/* Stats */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s: any, i: number) => {
              const Icon = s.icon && typeof s.icon !== 'string' ? s.icon : TrendingUp;
              return (
                <div key={s.label || i} className="text-center p-6 rounded-xl bg-section-alt border">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-light flex items-center justify-center"><Icon className="w-6 h-6 text-navy" /></div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-navy">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
                </div>
              );
            })}
          </div>

          {/* Process */}
          <div className="reveal delay-100 max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Placement Process</h2>
            <div className="space-y-4">
              {placementProcess.map((step: any, i: number) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-lg border bg-card">
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center shrink-0"><span className="text-xs font-bold text-primary-foreground">{step.step || i+1}</span></div>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div className="reveal delay-200 mb-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Our Recruiting Partners</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {recruiters.map((r: string, i: number) => (
                <div key={r || i} className="px-6 py-3 rounded-lg border bg-card text-sm font-medium text-foreground/60">{r}</div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="reveal delay-300">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Student Success Stories</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t: any, i: number) => (
                <div key={t.name || i} className="p-6 rounded-xl border bg-card">
                  {(t.quote || t.message) && <p className="text-sm text-foreground/70 leading-relaxed italic mb-4">"{t.quote || t.message}"</p>}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center">
                      {t.image ? <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover" /> : <span className="text-sm font-bold text-navy">{t.name?.[0]}</span>}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.program}{t.program && t.company ? " → " : ""}{t.company}</p>
                      {t.package && <p className="text-xs font-medium text-gold">{t.package}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
