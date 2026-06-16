import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function InternshipExternshipPage() {
  const { data } = useIshanLawData("internshipexternship");
  const ref = useScrollReveal([data]);

  const title = data?.title || "Internship & Externship";
  const subtitle = data?.subtitle || "Bridging the gap between legal theory and practical courtroom application";
  const overview = data?.overview || "At Ishan Law Institute, clinical legal education is central to our pedagogy. Our structured Internship & Externship programs connect students with reputed law firms, senior advocates, NGOs, and corporate legal departments. Starting from the second year, students are mandated to complete internships to gain hands-on experience in drafting, pleading, legal research, and courtroom procedures.";
  const image = data?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-4.jpg";
  const opportunities = data?.opportunities?.length > 0 ? data.opportunities : [
    { title: "Judicial Clerkships", desc: "Assist honorable judges with legal research and case analysis." },
    { title: "Law Firm Internships", desc: "Gain exposure to corporate law, mergers, and dispute resolution at top firms." },
    { title: "Litigation Externships", desc: "Shadow senior advocates in District Courts and High Courts." },
    { title: "NGO & Legal Aid", desc: "Work with our Legal Aid Cell and partnered NGOs for public interest matters." }
  ];

  return (
    <Layout>
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Our Courses" }, { label: "Internship & Externship" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal space-y-6">
              <h2 className="text-3xl font-bold text-navy mb-4 text-gold-underline">Practical Legal Training</h2>
              <div 
                className="text-foreground/80 leading-relaxed whitespace-pre-wrap format-rich-text text-lg"
                dangerouslySetInnerHTML={{ __html: overview }}
              />
            </div>
            <div className="reveal rounded-2xl overflow-hidden border shadow-lg">
              <img src={image} alt={title} className="w-full h-96 object-cover" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="reveal text-2xl font-bold text-center mb-10">Key Opportunities</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {opportunities.map((opp: any, i: number) => (
                <div key={opp.title || i} className={`reveal delay-${Math.min(i, 5)}00 bg-card border rounded-xl p-6 hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{opp.title}</h4>
                      <div 
                        className="text-sm text-muted-foreground leading-relaxed format-rich-text whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: opp.desc }}
                      />
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
