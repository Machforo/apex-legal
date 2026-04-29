import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";

const disclosureItems = [
  { category: "Institution Details", items: ["Name of Institution", "Address", "Year of Establishment — 1994", "Status of Institution — Private", "Type of Institution — Co-education"] },
  { category: "Academic Information", items: ["Programs offered: BBA, B.Com, BCA, M.Com, B.Ed, M.Ed", "Annual intake per program", "Faculty-student ratio", "Pass percentage (last 5 years)"] },
  { category: "Financial Information", items: ["Fee structure per program", "Scholarship details", "Audited financial statements (annual)"] },
  { category: "Infrastructure", items: ["Total campus area", "Built-up area", "Library resources", "Computer labs and IT infrastructure"] },
  { category: "Faculty", items: ["Permanent faculty list with qualifications", "Visiting faculty details", "Faculty development programs"] },
];

export default function MandatoryDisclosurePage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHeader
        title="Mandatory Disclosure"
        subtitle="AICTE / UGC format mandatory disclosure document — updated annually"
        breadcrumbs={[{ label: "Mandatory Disclosure" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal bg-gold-light rounded-xl p-6 mb-12 flex items-start gap-4">
              <FileText className="w-6 h-6 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Compliance Statement</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  The information provided below is submitted as required by the All India Council for Technical Education (AICTE) and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Admissions Office at Knowledge Park, Greater Noida.
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed mt-4">
                  AICTE mandates public disclosure for the benefit of current and prospective students, parents, and regulatory authorities. It serves as a comprehensive record of the institution's facilities, faculty, and academic standards, ensuring accountability in the delivery of professional education.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {disclosureItems.map((section, i) => (
                <div key={section.category} className={`reveal delay-${Math.min(i, 4)}00 rounded-xl border bg-card p-6`}>
                  <h3 className="font-display font-bold text-foreground mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">
                <Download className="w-4 h-4" />
                Download Full Disclosure PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
