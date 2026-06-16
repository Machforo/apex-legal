import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";

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
  return (
    <Layout>
      <PageHeader title="Grievance Redressal" subtitle="Structured process for addressing student and stakeholder concerns" breadcrumbs={[{ label: "Governance" }, { label: "Grievance Redressal" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-6">
              <div 
                className="text-foreground/70 leading-relaxed text-lg format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={image} alt="Ishan Law Administration" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6">
              <a href={portalLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-xl bg-gold text-white font-bold hover:bg-navy transition-colors">
                Access Grievance Portal
              </a>
              <h2 className="text-lg font-bold text-foreground">Redressal Process</h2>
              <ol className="space-y-3 text-sm">
                {process.map((p: any, i: number) => (
                  <li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-navy flex items-center justify-center shrink-0 text-xs font-bold text-primary-foreground">{i + 1}</span> <div><p className="font-semibold">{p.step}</p><div className="text-foreground/70 format-rich-text whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: p.description || "" }} /></div></li>
                ))}
              </ol>
              <div className="p-5 rounded-xl border bg-section-alt">
                <h3 className="font-semibold text-foreground mb-2">Internal Complaints Committee</h3>
                <p className="text-sm">Email: <a href="mailto:registrar@ishan.ac" className="text-navy font-semibold">registrar@ishan.ac</a></p>
                <p className="text-sm">Phone: <a href="tel:+918448797700" className="text-navy font-semibold">8448797700</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
