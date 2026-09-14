import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Compass } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function MissionVisionPage() {
  const { data } = useIshanLawData("aboutus");
  const ref = useScrollReveal([data]);
  
  const mv = data?.missionVision;
  
  const vision = mv?.vision || `<p>To be a global center of excellence in legal education, recognized for producing ethical advocates, judicial leaders, and legal scholars who uphold the rule of law and serve the cause of justice with integrity.</p>`;
  
  const mission = mv?.mission || `<ul>
    <li>To provide practice-oriented legal education that integrates rigorous academic scholarship with structured clinical training and court exposure.</li>
    <li>To foster critical thinking, ethical legal reasoning, and a profound understanding of social justice among our students.</li>
    <li>To serve the community through active legal aid clinics and awareness programs, bridging the gap between law and society.</li>
    <li>To prepare students for diverse legal careers in litigation, judiciary, corporate sectors, and public service through expert mentorship.</li>
  </ul>`;

  let coreValues = mv?.coreValues; 
  if (coreValues && !coreValues.includes("<ul")) { 
    const lines = coreValues.split("\n").filter((line: string) => line.trim().length > 0); 
    if (lines.length > 0) { 
      coreValues = "<ul class=\"list-disc pl-5 space-y-2\">" + lines.map((line: string) => "<li>" + line.trim() + "</li>").join("") + "</ul>"; 
    } 
  } 
  if (!coreValues) { 
    coreValues = `<ul><li><b>Excellence</b>: In every aspect of legal education.</li><li><b>Integrity</b>: Upholding the highest ethical standards.</li><li><b>Justice</b>: Serving the community with fairness.</li><li><b>Service</b>: Commitment to public good.</li></ul>`; 
  }

  const image1 = mv?.image1 || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg";
  const image2 = mv?.image2 || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg";

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="Mission & Vision"
        subtitle="Guiding principles that drive legal excellence and ethical practice at Ishan Law"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Mission & Vision" }]}
      />
    ),
    banner_image: (
      <div key="banner_image" className="container-wide mt-12">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9]">
            <img src={image1} alt="Ishan Law Excellence" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9] hidden sm:block">
            <img src={image2} alt="Ishan Law Campus" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    ),
    vision: (
      <section key="vision" className="py-12 md:py-16" ref={ref}>
        <div className="container-wide max-w-4xl mx-auto">
          <div className="reveal grid md:grid-cols-[80px_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
              <Eye className="w-8 h-8 text-navy" />
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-4 text-2xl">Our Vision</h2>
              <div 
                className="text-lg leading-relaxed format-rich-text"
                dangerouslySetInnerHTML={{ __html: rt(vision) }}
              />
            </div>
          </div>
        </div>
      </section>
    ),
    mission: (
      <section key="mission" className="py-12 md:py-16 bg-slate-50/50">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="reveal delay-100 grid md:grid-cols-[80px_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 text-navy" />
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-4 text-2xl">Our Mission</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text mission-list"
                dangerouslySetInnerHTML={{ __html: rt(mission) }}
              />
            </div>
          </div>
        </div>
      </section>
    ),
    core_values: (
      <section key="core_values" className="py-12 md:py-16">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="reveal delay-200 grid md:grid-cols-[80px_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
              <Compass className="w-8 h-8 text-navy" />
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-4 text-2xl">Core Values</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text core-values-list"
                dangerouslySetInnerHTML={{ __html: rt(coreValues) }}
              />
            </div>
          </div>
        </div>
      </section>
    ),
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "banner_image", "vision", "mission", "core_values", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="mission_vision"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
