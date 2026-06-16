import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
export default function LibraryPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("facilities");
  const facility = Array.isArray(data) ? data.find((d: any) => d.slug === 'library') : null;
  
  const title = facility?.title || "Legal Library";
  const subtitle = facility?.subtitle || "A specialized resource centre for legal scholarship and research";
  const overviewHeading = facility?.overviewHeading || "The Heart of Legal Research";
  const content = facility?.overviewContent || "The Legal Library at Ishan Law Institute is the academic cornerstone of our institution, meticulously curated to support the research needs of aspiring advocates and legal scholars. Our collection includes an extensive range of legal treatises, commentaries, and encyclopedias across diverse branches of law.\n\nWe maintain complete sets of the All India Reporter (AIR), Supreme Court Cases (SCC), and Supreme Court Reports (SCR).";
  const image = facility?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-10.jpg";

  const specs = facility?.highlights?.length > 0 ? facility.highlights : [
    { title: "Total Titles", description: "10,000+" },
    { title: "Law Reports", description: "AIR, SCC, SCR" },
    { title: "Digital Access", description: "Manupatra, SCC Online" },
    { title: "Reading Room", description: "150+ seats" }
  ];

  return (
    <Layout>
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Library" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)] mb-10 border">
              <img src={image} alt={title} className="w-full h-[400px] object-cover" />
            </div>
            <div className="reveal space-y-5 mb-12">
              <h2 className="text-2xl font-bold">{overviewHeading}</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {specs.map((s: any, i: number) => (
                <div key={s.title || i} className="p-4 rounded-xl border bg-card">
                  <p className="text-xs text-muted-foreground mb-1">{s.title}</p>
                  <p className="text-sm font-semibold text-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
