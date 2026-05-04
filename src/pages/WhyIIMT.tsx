import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultReasons = [
  { icon: Shield, title: "BCI Approved & NAAC Accredited", description: "Ishan Institute of Law is fully recognized by the Bar Council of India (BCI) and NAAC accredited, ensuring that your professional degree is globally valid and meets the highest regulatory standards." },
  { icon: Building, title: "Clinical Legal Education Focus", description: "We bridge the gap between classroom theory and courtroom reality through an integrated clinical legal education model, prioritizing practical skills over rote memorization." },
  { icon: Award, title: "Mandatory Court & Jail Exposure", description: "From the very first semester, our students undergo structured visits to District Courts, High Courts, and the Supreme Court, providing them with firsthand insight into the judicial process." },
  { icon: Users, title: "Expert Advocate Faculty", description: "Learn from a distinguished faculty of practicing advocates, legal scholars, and retired judicial officers who bring live cases and contemporary legal challenges into the classroom." },
  { icon: GraduationCap, title: "Dedicated Judicial Services Cell", description: "For students aspiring to enter the judiciary, we provide specialized coaching, guest lectures from judges, and competitive exam preparation starting from the early years of the program." },
  { icon: BookOpen, title: "State-of-the-Art Moot Court Hall", description: "Our specialized moot court hall provides a professional environment for students to sharpen their advocacy skills, research complex cases, and participate in national competitions." },
  { icon: Lightbulb, title: "Digital Research Terminals", description: "Students have 24/7 access to premier legal databases like Manupatra, SCC Online, and LexisNexis, ensuring they are proficient in modern legal research techniques." },
  { icon: Heart, title: "Legal Aid & Community Service", description: "Through our Legal Aid Cell, students provide free legal assistance to the underprivileged, developing a strong sense of social responsibility and ethical legal practice." },
];

export default function WhyIIMTPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("aboutus");
  // Schema: whyIimt = { content: string }. Render as text content, fall back to card grid.
  const whyContent: string | undefined = data?.whyIimt?.content;

  return (
    <Layout>
      <PageHeader
        title="Why Ishan Law?"
        subtitle="8 reasons why students choose Ishan Institute of Law for a career in advocacy and judiciary"
        breadcrumbs={[{ label: "Why Ishan Law?" }]}
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
