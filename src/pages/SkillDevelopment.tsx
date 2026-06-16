import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";
import { FileText, MessageSquare, Monitor, Briefcase } from "lucide-react";

export default function SkillDevelopmentPage() {
  const { data } = useIshanLawData("skilldevelopment");
  const ref = useScrollReveal([data]);

  const title = data?.title || "Skill Development";
  const subtitle = data?.subtitle || "Advocacy skills, legal research, and courtroom etiquette integrated into our curriculum";
  const content = data?.content || "The Skill Development Cell at Ishan Law organizes specialized workshops and clinical training sessions designed to transform legal aspirants into practice-ready advocates. These programs focus on the core competencies required for successful litigation, judicial services, and corporate legal careers.";
  
  const items = data?.items?.length > 0 ? data.items : [
    { title: "Legal Research & Online Databases", desc: "" },
    { title: "Memorial & Legal Drafting", desc: "" },
    { title: "Mooting & Oral Advocacy", desc: "" },
    { title: "Client Counseling & Interviewing", desc: "" }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText": return FileText;
      case "MessageSquare": return MessageSquare;
      case "Monitor": return Monitor;
      case "Briefcase": return Briefcase;
      default: return FileText;
    }
  };

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Learning" }, { label: "Skill Development" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto reveal space-y-10">
            <div 
              className="text-foreground/70 leading-relaxed text-lg whitespace-pre-wrap format-rich-text"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((s: any, i: number) => {
                const IconComp = typeof s.icon === 'string' ? getIcon(s.icon) : getIcon("FileText");
                return (
                  <div key={s.title || i} className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6 text-navy" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                    {s.desc && (
                      <div 
                        className="text-sm leading-relaxed text-foreground/80 format-rich-text whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: s.desc }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
