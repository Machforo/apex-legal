import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultReasons = [
  { title: "Clinical Approach", description: "Learn by doing with our advanced Moot Court setups.", icon: "Gavel" },
  { title: "Expert Faculty", description: "Learn from top advocates and legal scholars.", icon: "Users" },
  { title: "BCI Approved", description: "All our programs are fully recognized by the Bar Council of India.", icon: "Shield" },
  { title: "Moot Court Hall", description: "High-tech courtroom simulations to prepare you for practice.", icon: "Building" },
  { title: "Legal Aid Clinic", description: "Hands-on experience helping the community.", icon: "Heart" },
  { title: "Judicial Services Cell", description: "Dedicated preparation for judicial exams.", icon: "BookOpen" }
];

export default function WhyIshanLawPage() {
  const { data } = useIshanLawData("aboutus");
  const ref = useScrollReveal([data]);
  // Schema: WhyIshanLaw = { content: string, reasons: [{title, description, icon}] }.
  const whyContent = data?.WhyIshanLaw?.content || "Ishan Law Institute is not just an educational centre; it's a launchpad for judicial leaders and advocates. Our commitment to clinical training, moral ethics, and professional excellence sets us apart in the field of legal education.";
  const image = data?.WhyIshanLaw?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg";
  const reasons = data?.WhyIshanLaw?.reasons?.length > 0 ? data.WhyIshanLaw.reasons : defaultReasons;

  const getIcon = (name: string) => {
    switch (name) {
      case "Gavel": return Award;
      case "Users": return Users;
      case "Globe": return Globe;
      case "Shield": return Shield;
      case "Building": return Building;
      case "Heart": return Heart;
      case "BookOpen": return BookOpen;
      case "GraduationCap": return GraduationCap;
      case "Lightbulb": return Lightbulb;
      case "TrendingUp": return TrendingUp;
      default: return CheckCircle;
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Why Ishan Law?"
        subtitle="8 reasons why students choose Ishan Law Institute for a career in advocacy and judiciary"
        breadcrumbs={[{ label: "Why Ishan Law?" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
            <div className="reveal space-y-8">
              <div 
                className="text-foreground/70 leading-relaxed text-lg format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: whyContent }}
              />
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={image} alt="Ishan Law Excellence" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              {reasons.slice(0, 4).map((r: any, i: number) => {
                const Icon = getIcon(r.icon);
                return (
                  <div key={r.title} className={`reveal delay-${Math.min(i % 3, 2)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}>
                    <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2">{i + 1}. {r.title}</h3>
                      <p className="text-sm leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-6xl mx-auto space-y-6">
            {reasons.slice(4).map((r: any, i: number) => {
              const Icon = getIcon(r.icon);
              return (
                <div key={r.title} className={`reveal delay-${Math.min(i % 3, 2)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{i + 5}. {r.title}</h3>
                    <p className="text-sm leading-relaxed">{r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EnquiryCTA title="Convinced? Take the Next Step" subtitle="Schedule a campus visit or speak with our admissions counsellor today." />
    </Layout>
  );
}
