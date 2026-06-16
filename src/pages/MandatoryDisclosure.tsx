import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function MandatoryDisclosurePage() {
  const { data } = useIshanLawData("mandatorydisclosure");
  const ref = useScrollReveal([data]);

  const statement = data?.statement || `<p>The information provided below is submitted as required by the Bar Council of India (BCI) and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Registrar at Ishan Law Institute, Knowledge Park, Greater Noida.</p><p>BCI mandates public disclosure for the benefit of current and prospective students, legal practitioners, and regulatory authorities. It serves as a comprehensive record of the institution's legal aid services, moot court facilities, and faculty expertise, ensuring accountability in legal education.</p>`;

  const disclosureItems = data?.disclosureItems?.length > 0 ? data.disclosureItems.map((item: any) => ({
    category: item.category,
    itemsHTML: item.items || ""
  })) : [
    { category: "Institution Details", itemsHTML: "<ul><li>Name: Ishan Law Institute</li><li>Address: Knowledge Park-III, Greater Noida</li><li>Year of Establishment: 2008</li><li>Status: Private Self-Financing</li><li>Type: Co-educational Professional Institution</li></ul>" },
    { category: "Academic Information", itemsHTML: "<ul><li>Programs Offered: BA LLB (Hons), LLB</li><li>BCI Approval Status — Current</li><li>Annual Intake per Program</li><li>Faculty-Student Ratio</li><li>Student Success Rate (Last 5 Years)</li></ul>" },
    { category: "Regulatory Information", itemsHTML: "<ul><li>BCI Approval Letters</li><li>CCS University Affiliation Documents</li><li>Anti-Ragging Committee Constitution</li><li>Grievance Redressal Mechanism</li></ul>" },
    { category: "Infrastructure", itemsHTML: "<ul><li>Moot Court Hall Specifications</li><li>Legal Library — Titles, Journals & Digital Resources</li><li>IT Lab — Manupatra & SCC Online Access</li><li>Legal Aid Clinic — Community Reach</li></ul>" },
    { category: "Faculty & Staff", itemsHTML: "<ul><li>List of Core Faculty with BCI-mandated Qualifications</li><li>Visiting Senior Advocates Profile</li><li>Administrative Staff Details</li></ul>" },
  ];

  return (
    <Layout>
      <PageHeader
        title="Mandatory Disclosure"
        subtitle="BCI / CCS University format mandatory disclosure document — updated annually"
        breadcrumbs={[{ label: "Mandatory Disclosure" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal bg-gold-light rounded-xl p-6 mb-12 flex items-start gap-4">
              <FileText className="w-6 h-6 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">BCI Compliance Statement</p>
                <div 
                  className="text-sm leading-relaxed whitespace-pre-wrap format-rich-text"
                  dangerouslySetInnerHTML={{ __html: statement }}
                />
              </div>
            </div>

            <div className="space-y-6">
              {disclosureItems.map((section, i) => (
                <div key={section.category} className={`reveal delay-${Math.min(i, 4)}00 rounded-xl border bg-card p-6`}>
                  <h3 className="font-bold text-foreground mb-4">{section.category}</h3>
                  <div 
                    className="space-y-2 text-sm text-foreground/80 format-rich-text custom-bullet-list"
                    dangerouslySetInnerHTML={{ __html: section.itemsHTML }}
                  />
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
