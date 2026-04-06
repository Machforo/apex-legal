import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import studentsImg from "@/assets/students-library.jpg";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultMilestones = [
  { year: "1994", event: "Ishan Institute of Management & Technology established as the first college under the group" },
  { year: "2002", event: "Ishan Institute of Engineering & Technology (later renamed Ishan College of Engineering & Technology)" },
  { year: "2008", event: "Ishan Law College established with Bar Council of India approval" },
  { year: "2012", event: "Ishan Institute of Medical Sciences launched — Pharmacy, Nursing and Allied Health Sciences" },
  { year: "2018", event: "NAAC Accreditation granted to IIMT — a testament to quality education" },
  { year: "2023", event: "Ishan Group crosses 10,000+ alumni and expands to 5 colleges across Greater Noida" },
];

export default function AboutPage() {
  const ref = useScrollReveal();
  const { data, isLoading } = useIIMTData("aboutus");
  const fallback = "Ishan Institute of Management & Technology (IIMT), established in 1994, is the flagship institution of Ishan Educational Group. Located in the educational hub of Greater Noida, Delhi NCR, IIMT is affiliated to Chaudhary Charan Singh University, Meerut and is approved by UGC, AICTE, and NCTE.";
  // Schema: aboutus.ourStory = { title, content } | aboutus.keyDifferentiators = [{title, description}]
  const ourStory = data?.ourStory;
  const milestones = data?.milestones?.length > 0 ? data.milestones : defaultMilestones;
  const keyDiffRaw = data?.keyDifferentiators;
  const keyDifferentiators: string[] = keyDiffRaw?.length > 0
    ? keyDiffRaw.map((k: any) => typeof k === 'string' ? k : k.title)
    : [
      "NAAC Accredited institution",
      "Affiliated to CCS University, Meerut",
      "UGC, AICTE & NCTE approved",
      "90%+ consistent placement record",
      "Industry-integrated curriculum",
      "Modern campus with smart classrooms",
      "Active placement cell with 150+ recruiters",
      "Certificate programs in Tally, GST, Digital Marketing",
    ];

  return (
    <Layout>
        <PageHeader
        title={ourStory?.title || "About IIMT"}
        subtitle="Ishan's founding college, shaping professionals in management, commerce, IT and education since 1994."
        breadcrumbs={[{ label: "About IIMT" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)]">
                <img src={studentsImg} alt="Students at IIMT campus" className="w-full h-[400px] object-cover" />
              </div>
            </div>

            <div className="reveal-right space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                {ourStory?.title || "Greater Noida's First Multi-Disciplinary Institution"}
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
