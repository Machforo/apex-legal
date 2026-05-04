import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, ExternalLink } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultAccreditations = [
  { title: "BCI", description: "Mandatory recognition for law programs. Bar Council of India.", logo: "https://law.ishan.ac/all-law/home-page/Logo_of_Bar_Council_of_India.png" },
  { title: "CCS University", description: "Affiliation for BA LLB and LLB degree programs. Chaudhary Charan Singh University, Meerut.", logo: "https://law.ishan.ac/images/home/regulatory-4.png" },
  { title: "NAAC", description: "Institutional quality accreditation benchmark. National Assessment and Accreditation Council.", logo: "https://law.ishan.ac/all-law/home-page/naac-2.png" },
  { title: "UGC", description: "University Grants Commission recognition.", logo: "https://law.ishan.ac/static/about/approvals/UGC_India_Logo.png" },
];

export default function ApprovalsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">A Fully Accredited Institution</h2>
            <p className="text-foreground/70 leading-relaxed">
              Legal education in India is strictly regulated to ensure that practicing advocates meet the highest standards of professional ethics and competence. Ishan Law Institute holds all mandatory approvals from the Bar Council of India (BCI) and is affiliated with Chaudhary Charan Singh University, Meerut. These certifications ensure that our degrees are fully recognized for enrollment as an Advocate with any State Bar Council and for appearing in judicial services examinations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-navy">BCI</h4>
                <p className="text-xs text-foreground/60">The primary regulator of legal education in India, ensuring curriculum relevance and professional standards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-navy">CCS University</h4>
                <p className="text-xs text-foreground/60">Provides academic affiliation, conducts standardized examinations, and awards the final professional degree.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-navy">NAAC</h4>
                <p className="text-xs text-foreground/60">An autonomous body that assesses and accredits institutions on parameters of teaching, research, and infrastructure.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {accreditations.map((acc: any, i: number) => (
              <div key={acc.title || acc.name || i} className={`reveal delay-${Math.min(i, 5)}00 bg-card rounded-xl border p-6 text-center shadow-sm hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-shadow`}>
                {acc.logo ? (
                  <img src={acc.logo} alt={acc.title || acc.name} className="h-28 md:h-32 mx-auto object-contain mb-6 transition-transform hover:scale-110 duration-500" loading="lazy" />
                ) : (
                  <div className="h-28 md:h-32 flex items-center justify-center mb-6">
                    <span className="text-3xl font-display font-bold text-navy">{acc.title || acc.name}</span>
                  </div>
                )}
                <h3 className="font-semibold text-foreground text-sm">{acc.title || acc.name}</h3>
                <p className="text-xs text-foreground/60 mt-2">{acc.description || acc.desc}</p>
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
