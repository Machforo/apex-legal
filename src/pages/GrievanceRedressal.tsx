import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function GrievanceRedressalPage() {
  const { data } = useIshanLawData("mandatorydisclosure");
  const ref = useScrollReveal([data]);
  const gr = data?.grievanceRedressal;
  const content = gr?.content || "Ishan Law Institute is committed to providing a safe, fair, and harmonious environment for all students and staff. Our Grievance Redressal mechanism is designed to address complaints promptly and transparently in accordance with UGC and BCI guidelines.";
  const image = gr?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg";
  const portalLink = gr?.portalLink || "https://forms.google.com/grievance-form";
  const process = gr?.process?.length > 0 ? gr.process : [
    { step: "Step 1: Submission", description: "Students or staff can submit their grievances through the online portal or submit a written application to the Grievance Cell." },
    { step: "Step 2: Preliminary Review", description: "The Grievance Redressal Committee acknowledges receipt within 48 hours and conducts a preliminary review." },
    { step: "Step 3: Hearing & Resolution", description: "A formal hearing is scheduled if necessary, and a resolution is provided within 7-14 working days." },
    { step: "Step 4: Appeal", description: "If unsatisfied with the resolution, the complainant may appeal to the Appellate Authority (Principal)." }
  ];

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <div key="header">
        <PageHeader 
          title={gr?.title || "Grievance Redressal"} 
          subtitle={gr?.subtitle || "Structured process for addressing student and stakeholder concerns"} 
          breadcrumbs={[{ label: "Governance" }, { label: "Grievance Redressal" }]} 
        />
        {gr?.bannerImage && (
          <div className="container-wide mt-12">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[380px]">
              <img src={gr.bannerImage} alt="Grievance Banner" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
    ),
    grievance_content: (
      <section key="grievance_content" className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-6">
              <div 
                className="text-foreground/70 leading-relaxed text-lg format-rich-text"
                dangerouslySetInnerHTML={{ __html: rt(content) }}
              />
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={image} alt="Ishan Law Administration" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6">
              <a href={portalLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-xl bg-gold text-white font-bold hover:bg-navy transition-colors shadow-md">
                Access Grievance Portal
              </a>
              <h2 className="text-lg font-bold text-foreground">Redressal Process</h2>
              <ol className="space-y-3 text-sm">
                {process.map((p: any, i: number) => (
                  <li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-navy flex items-center justify-center shrink-0 text-xs font-bold text-primary-foreground">{i + 1}</span> <div><p className="font-semibold">{p.step}</p><div className="text-foreground/70 format-rich-text" dangerouslySetInnerHTML={{ __html: rt(p.description || "") }} /></div></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    ),
    contact_form: (
      <div key="contact_form" className="container-wide pb-20">
        <div className="max-w-5xl mx-auto p-8 rounded-2xl border bg-section-alt shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-3">Internal Complaints Committee Contacts</h3>
          <p className="text-sm text-foreground/70 mb-4">
            For confidential complaints, student disputes, or procedural appeals, please reach the coordinator directly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border">
              <p className="text-xs text-muted-foreground uppercase font-bold">Email Support</p>
              <a href="mailto:registrar@ishan.ac" className="text-navy font-semibold hover:underline">registrar@ishan.ac</a>
            </div>
            <div className="p-4 rounded-xl bg-card border">
              <p className="text-xs text-muted-foreground uppercase font-bold">Direct Telephone</p>
              <a href="tel:+918448797700" className="text-navy font-semibold hover:underline">+91 8448797700</a>
            </div>
          </div>
        </div>
      </div>
    )
  };

  const defaultOrder = ["header", "grievance_content", "contact_form"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="grievance_redressal"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
