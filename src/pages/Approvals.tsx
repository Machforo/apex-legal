import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, ExternalLink } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultAccreditations = [
  {
    title: "Bar Council of India (BCI)",
    description: "Approved for BA LLB and LLB programs.",
    logo: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg"
  },
  {
    title: "CCS University",
    description: "Affiliated for all academic degrees.",
    logo: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg"
  }
];

export default function ApprovalsPage() {
  const { data } = useIshanLawData("aboutus");
  const ref = useScrollReveal([data]);
  const accreditations = data?.approvals?.length > 0 ? data.approvals : defaultAccreditations;

  return (
    <Layout>
      <PageHeader
        title="Approvals & Affiliations"
        subtitle="Ishan Law is fully recognized by the Bar Council of India, ensuring the highest professional standards."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Approvals & Affiliations" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-16 space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Regulatory Compliance</p>
            <h2 className="font-bold text-foreground">A Fully Accredited Institution</h2>
            <p className="text-foreground/70 leading-relaxed">
              Legal education in India is strictly regulated to ensure that practicing advocates meet the highest standards of professional ethics and competence. Ishan Law Institute holds all mandatory approvals from the Bar Council of India (BCI) and is affiliated with Chaudhary Charan Singh University, Meerut. These certifications ensure that our degrees are fully recognized for enrollment as an Advocate with any State Bar Council and for appearing in judicial services examinations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {accreditations.map((acc: any, i: number) => (
              <div key={acc.title || acc.name || i} className={`reveal delay-${Math.min(i, 5)}00 bg-card rounded-xl border p-6 text-center shadow-sm hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-shadow`}>
                {acc.logo ? (
                  <img src={acc.logo} alt={acc.title || acc.name} className="h-28 md:h-32 mx-auto object-contain mb-6 transition-transform hover:scale-110 duration-500" loading="lazy" />
                ) : (
                  <div className="h-28 md:h-32 flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-navy">{acc.title || acc.name}</span>
                  </div>
                )}
                <h3 className="font-semibold text-foreground text-sm">{acc.title || acc.name}</h3>
                <div 
                  className="text-xs mt-2 format-rich-text text-foreground/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: acc.description || acc.desc || "" }}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold-light border border-[hsl(var(--gold)/0.2)]">
              <FileText className="w-4 h-4 text-navy" />
              <span className="text-sm font-medium text-foreground/80">
                For approval letters and detailed disclosure documents, visit the{" "}
                <a href="/mandatory-disclosure" className="text-navy font-semibold hover:underline">Mandatory Disclosure</a> page.
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
