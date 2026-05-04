import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Compass } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function MissionVisionPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
  
  const mv = data?.missionVision;
  
  const vision = mv?.vision || `To be a global center of excellence in legal education, recognized for producing ethical advocates, judicial leaders, and legal scholars who uphold the rule of law and serve the cause of justice with integrity.`;
  
  const missionStr = mv?.mission;
  const missionList = missionStr ? missionStr.split('\n').filter((x: string) => x.trim() !== '') : [
    "To provide practice-oriented legal education that integrates rigorous academic scholarship with structured clinical training and court exposure.",
    "To foster critical thinking, ethical legal reasoning, and a profound understanding of social justice among our students.",
    "To serve the community through active legal aid clinics and awareness programs, bridging the gap between law and society.",
    "To prepare students for diverse legal careers in litigation, judiciary, corporate sectors, and public service through expert mentorship.",
  ];

  const defaultCoreValues = [
    { title: "Justice", description: "Upholding the fundamental principles of fairness and the rule of law in all pursuits." },
    { title: "Integrity", description: "Maintaining the highest standards of professional ethics and honesty in legal practice." },
    { title: "Professionalism", description: "Cultivating practice-ready skills and a disciplined approach to legal service." },
    { title: "Social Responsibility", description: "Committing to community service and legal awareness for the underprivileged." },
    { title: "Clinical Excellence", description: "Prioritizing hands-on experience through moot courts, legal aid, and court visits." },
    { title: "Research & Inquiry", description: "Encouraging a deep-seated spirit of investigation and academic contribution." },
    { title: "Advocacy", description: "Empowering students with the skills to effectively represent and argue for justice." },
    { title: "Ethical Reasoning", description: "Developing the ability to navigate complex legal challenges with moral clarity." },
  ];

  // coreValues stored as newline-separated string in DB
  const coreValuesStr = mv?.coreValues;
  const coreValues = coreValuesStr
    ? coreValuesStr.split('\n').filter((x: string) => x.trim() !== '')
        .map((v: string) => ({ title: v.trim(), description: '' }))
    : defaultCoreValues;

  return (
    <Layout>
      <PageHeader
        title="Mission & Vision"
        subtitle="Guiding principles that drive legal excellence and ethical practice at Ishan Law"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Mission & Vision" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="reveal grid sm:grid-cols-2 gap-6 mb-20">
               <div className="rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9]">
                 <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" alt="Ishan Law Excellence" className="w-full h-full object-cover" />
               </div>
               <div className="rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9] hidden sm:block">
                 <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg" alt="Ishan Law Campus" className="w-full h-full object-cover" />
               </div>
            </div>
            {/* Vision */}
            <div className="reveal grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
                <Eye className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-foreground/70 leading-relaxed whitespace-pre-wrap">
                  {vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="reveal delay-100 grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Our Mission</h2>
                <ul className="space-y-3">
                  {missionList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                      <p className="text-foreground/70 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Values */}
            <div className="reveal delay-200 grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
                <Compass className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Core Values</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coreValues.map((v: any, i: number) => (
                    <div key={v.title || i} className="p-4 rounded-xl border bg-card">
                      <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{v.description || v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
