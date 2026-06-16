import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function AntiRaggingPage() {
  const { data } = useIshanLawData("mandatorydisclosure");
  const ref = useScrollReveal([data]);
  const ar = data?.antiRagging;
  const helpline = ar?.helpline || "1800-180-5522";
  const content = ar?.content || "As per the directions of the Hon'ble Supreme Court of India and the Bar Council of India (BCI) / UGC Regulations, Ishan Law Institute maintains an absolute zero-tolerance policy against ragging in any form. Ragging is a criminal offence and can lead to immediate expulsion, criminal prosecution, and permanent debarment from legal practice.";
  const image = ar?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg";
  const committeeText = ar?.committeeText || "Our committee comprises senior faculty advocates, administrative officers, and student representatives who maintain 24/7 vigil across the campus and hostels. The committee ensures that every new student feels secure and welcomed into the legal fraternity.";
  const reportMethods = ar?.reportMethods?.length > 0 ? ar.reportMethods : [
    { method: "Call the National Anti-Ragging Helpline: 1800-180-5522 (toll-free, 24x7)" },
    { method: "Email: registrar@ishan.ac" },
    { method: "Submit a written complaint to the Anti-Ragging Committee (Strictly Confidential)" },
    { method: "Visit the Principal's office during working hours" },
    { method: "Report online at www.antiragging.in" }
  ];
  return (
    <Layout>
      <PageHeader title="Anti-Ragging Zone" subtitle="Zero tolerance policy — BCI & UGC mandate for student safety" breadcrumbs={[{ label: "Governance" }, { label: "Anti-Ragging" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-6">
              <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                <p className="text-sm font-semibold text-destructive mb-2">24x7 Anti-Ragging Helpline</p>
                <p className="text-2xl font-bold text-foreground">{helpline}</p>
                <p className="text-xs text-muted-foreground mt-1">Toll-free | National Helpline available round the clock</p>
              </div>
              <div 
                className="text-foreground/70 leading-relaxed text-sm format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="rounded-2xl overflow-hidden shadow-2xl border mt-8">
                <img src={image} alt="Ishan Law Campus" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6">
              <h2 className="text-lg font-bold text-foreground">Anti-Ragging Committee</h2>
              <div 
                className="text-foreground/70 leading-relaxed text-sm format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: committeeText }}
              />
              <h2 className="text-lg font-bold text-foreground">How to Report</h2>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                {reportMethods.map((m: any, i: number) => (
                  <li key={i}>{m.method}</li>
                ))}
              </ol>
              <h2 className="text-lg font-bold text-foreground">The Legal Fraternity Pledge</h2>
              <p className="text-foreground/70 leading-relaxed text-sm">Every student at Ishan Law is required to sign an undertaking at the time of admission. This pledge confirms the student's commitment to maintaining the dignity of the profession and ensuring a safe, respectful environment for all peers.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
