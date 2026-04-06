import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Compass } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

export default function MissionVisionPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("aboutus");
  
  const mv = data?.missionVision;
  
  const vision = mv?.vision || "To be a premier institution of higher learning in the Delhi NCR region, recognized for producing competent, ethical, and socially responsible professionals who contribute to national development and global progress.";
  
  const missionStr = mv?.mission;
  const missionList = missionStr ? missionStr.split('\n').filter((x: string) => x.trim() !== '') : [
    "To provide quality education in Management, Commerce, Computer Applications, and Education that is accessible, affordable, and aligned with industry needs.",
    "To foster a learning environment that encourages critical thinking, creativity, and ethical values through a blend of theoretical knowledge and practical training.",
    "To maintain strong industry-academia partnerships that enhance curriculum relevance and create meaningful placement opportunities.",
    "To promote holistic development through co-curricular activities, skill development programs, sports, and community service initiatives.",
    "To invest in faculty development, modern infrastructure, and technology integration to continuously improve the quality of educational delivery.",
  ];

  const defaultCoreValues = [
    { title: "Academic Excellence", description: "Maintaining rigorous standards in teaching and assessment" },
    { title: "Integrity & Ethics", description: "Upholding honesty and ethical conduct in all academic pursuits" },
    { title: "Innovation", description: "Embracing new pedagogies and technologies for better learning outcomes" },
    { title: "Inclusivity", description: "Creating equal opportunities for students from diverse backgrounds" },
    { title: "Industry Readiness", description: "Preparing students with skills that employers actually seek" },
    { title: "Social Responsibility", description: "Nurturing citizens who contribute positively to society" },
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
        subtitle="Guiding principles that drive academic excellence and holistic development at IIMT"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Mission & Vision" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
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
