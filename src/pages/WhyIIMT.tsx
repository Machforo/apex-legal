import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultReasons = [
  { icon: Award, title: "30 Years of Academic Legacy", description: "Established in 1994, IIMT has three decades of experience in producing industry-ready professionals. Our legacy is built on a foundation of trust, quality, and a proven track record of transforming students into leaders in Knowledge Park, Greater Noida." },
  { icon: Users, title: "Experienced & Mentoring Faculty", description: "Our faculty is a rich blend of academic researchers and industry practitioners. With qualifications from top universities, they bring real-world context to the classroom and maintain a strong mentoring culture for every student." },
  { icon: Lightbulb, title: "Practical & Experiential Learning", description: "Education at IIMT goes beyond theory. We emphasize case studies, live projects, industrial visits, and hands-on training through our E-Cell and skill development workshops to ensure practical proficiency." },
  { icon: TrendingUp, title: "Dedicated Placement Support", description: "Our active placement cell works year-round to build corporate tie-ups and organize placement drives. We provide comprehensive interview preparation, aptitude training, and communication workshops to ensure students are career-ready." },
  { icon: Building, title: "Modern Campus & Facilities", description: "Located in the educational hub of Knowledge Park I, our campus features smart classrooms, well-equipped IT labs, a vast library, and a professional auditorium, all designed to enhance the student experience." },
  { icon: Heart, title: "Vibrant Student Life", description: "From the flagship 'Kshitiz' annual fest to NSS activities and sports meets, IIMT offers a vibrant campus life that encourages talent, teamwork, and overall personality development." },
  { icon: Shield, title: "Regulatory Excellence", description: "NAAC accredited and fully approved by AICTE and NCTE, with affiliation to CCS University, Meerut. We maintain the highest standards of regulatory compliance for student peace of mind." },
  { icon: GraduationCap, title: "Holistic Development Focus", description: "We focus on the all-round development of our students, integrating soft skills, professional etiquette, and ethical values into the core academic experience." },
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
