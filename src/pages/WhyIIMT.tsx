import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultReasons = [
  { icon: Award, title: "NAAC Accredited", description: "IIMT holds NAAC accreditation, a nationally recognized quality benchmark that validates our teaching, infrastructure, and governance standards. This places IIMT among select institutions in the region committed to continuous improvement." },
  { icon: TrendingUp, title: "90%+ Placement Record", description: "Our dedicated placement cell maintains a consistent track record of placing over 90% of eligible students every year. With 150+ recruiting partners spanning banking, IT, finance, and education sectors, students graduate with real career prospects." },
  { icon: BookOpen, title: "Industry-Integrated Curriculum", description: "Programs at IIMT go beyond textbooks. Our curriculum is designed with inputs from industry professionals and includes case studies, live projects, and internships that ensure students are job-ready from day one." },
  { icon: Lightbulb, title: "Add-on Certifications", description: "Students pursue certificate programs in Tally, GST, Digital Marketing, Stock Market, and Advanced Excel alongside their degrees — giving them a competitive edge that most colleges don't offer." },
  { icon: Building, title: "Modern Infrastructure", description: "Smart classrooms, high-speed internet, well-equipped IT labs, a comprehensive library with INFLIBNET N-LIST access, and a 500+ seat auditorium create an environment conducive to serious learning." },
  { icon: Users, title: "Expert Faculty", description: "Our faculty comprises experienced academicians with PhDs, MBAs, and industry certifications. Complemented by visiting professionals — CAs, CFAs, and corporate leaders — who bring real-world insights to the classroom." },
  { icon: Globe, title: "Holistic Development", description: "Beyond academics, IIMT fosters well-rounded personalities through Kshitiz cultural fest, inter-college sports, debate competitions, industrial visits, and community outreach programs." },
  { icon: Shield, title: "Regulatory Recognition", description: "Fully approved by UGC, AICTE, and NCTE and affiliated to CCS University, Meerut. IIMT meets every regulatory requirement — students and parents can trust the validity of every degree awarded." },
  { icon: GraduationCap, title: "31+ Years of Legacy", description: "Established in 1994 as the flagship college of Ishan Educational Group, IIMT has a proven track record spanning three decades with 5000+ successful alumni across diverse industries." },
  { icon: Heart, title: "Student-Centric Approach", description: "From personalized mentoring and scholarship support to anti-ragging measures and grievance redressal, IIMT prioritizes student welfare and creates a safe, supportive campus environment." },
];

export default function WhyIIMTPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("aboutus");
  // Schema: whyIimt = { content: string }. Render as text content, fall back to card grid.
  const whyContent: string | undefined = data?.whyIimt?.content;

  return (
    <Layout>
      <PageHeader
        title="Why IIMT?"
        subtitle="10 reasons why students and parents choose IIMT for quality education in Delhi NCR"
        breadcrumbs={[{ label: "Why IIMT?" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {whyContent ? (
              <div className="reveal prose max-w-none">
                {whyContent.split('\n').filter((l: string) => l.trim()).map((line: string, i: number) => (
                  <p key={i} className="text-foreground/70 leading-relaxed mb-3">{line}</p>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {defaultReasons.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.title} className={`reveal delay-${Math.min(i % 3, 2)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}>
                      <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-lg mb-2">{i + 1}. {r.title}</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">{r.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <EnquiryCTA title="Convinced? Take the Next Step" subtitle="Schedule a campus visit or speak with our admissions counsellor today." />
    </Layout>
  );
}
