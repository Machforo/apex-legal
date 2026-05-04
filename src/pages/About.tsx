import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultMilestones = [
  { year: "1994", event: "Ishan Institute of Management & Technology established as the foundation of the group" },
  { year: "2008", event: "Ishan Law Institute established with Bar Council of India (BCI) approval" },
  { year: "2010", event: "Launch of specialized Clinical Legal Education programs and Court Visit initiatives" },
  { year: "2015", event: "Establishment of the dedicated Legal Aid Cell for community service" },
  { year: "2018", event: "NAAC Accreditation granted — a testament to quality in higher education" },
  { year: "2023", event: "Crossed 2,000+ legal alumni successfully practicing in various courts and corporate houses" },
];

export default function AboutPage() {
  const ref = useScrollReveal();
  const { data, isLoading } = useIshanLawData("aboutus");
  const fallback = `Established with a vision to revolutionize legal education, Ishan Law Institute stands as a premier center for legal studies in Knowledge Park, Greater Noida. Affiliated with Chaudhary Charan Singh (CCS) University, Meerut, and recognized by the Bar Council of India (BCI), our institution is committed to producing advocates who are not only masters of legal theory but also skilled in the art of practice.

Our curriculum is designed to bridge the gap between classroom learning and courtroom reality. From the very first semester, students are exposed to the living law through mandatory court visits, intensive moot court sessions, and participation in our Legal Aid Cell. We offer two flagship professional programs: the integrated BA LLB (Hons) and the Professional LLB, both structured to meet the demands of modern legal practice.

The Ishan Law campus provides a specialized environment for legal scholarship, featuring a high-tech Moot Court Hall, a comprehensive legal library with digital research terminals (Manupatra, SCC Online), and a dedicated Judicial Services Cell. We invite aspiring legal professionals to join our community and build a formidable foundation for a career in advocacy, judiciary, or corporate legal service.`;

  // Schema: aboutus.ourStory = { title, content } | aboutus.keyDifferentiators = [{title, description}]
  const ourStory = data?.ourStory;
  const milestones = data?.milestones?.length > 0 ? data.milestones : defaultMilestones;
  const keyDiffRaw = data?.keyDifferentiators;
  const keyDifferentiators: string[] = keyDiffRaw?.length > 0
    ? keyDiffRaw.map((k: any) => typeof k === 'string' ? k : k.title)
    : [
      "BCI Approved Professional Programs",
      "NAAC Accredited Institution",
      "Mandatory Court & Jail Visits",
      "Integrated Legal Aid Clinic",
      "High-Tech Moot Court Hall",
      "Digital Legal Research Lab",
      "Judicial Services Preparation Cell",
      "Faculty of Practicing Advocates",
    ];

  return (
    <Layout>
      <PageHeader
        title={ourStory?.title || "About Ishan Law"}
        subtitle="Excellence in legal education and practice-oriented learning since 2008."
        breadcrumbs={[{ label: "About Ishan Law" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)]">
                <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg" alt="Students and faculty at Ishan Law Institute campus" className="w-full h-[400px] object-cover" />
              </div>
            </div>

            <div className="reveal-right space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                {ourStory?.title || "Legacy of Shaping Professional Excellence"}
              </h2>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                {ourStory?.content || fallback}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Milestones of Growth</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0 relative">
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {milestones.map((m: any, i: number) => (
              <div key={m.year || i} className={`relative flex items-start gap-6 py-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-12`}>
                <div className={`shrink-0 w-11 h-11 rounded-full bg-gold flex items-center justify-center z-10 shadow-[0_2px_12px_hsl(var(--gold)/0.3)]`}>
                  <span className="text-xs font-bold text-foreground">{m.year}</span>
                </div>
                <div className={`bg-card rounded-xl border p-5 shadow-sm flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-sm text-foreground/80 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Key Differentiators</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {keyDifferentiators.map((item: string, i: number) => (
                <div key={item || i} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 font-medium">{item}</span>
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
