import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIIMTData } from "@/hooks/useIIMTData";

export default function BestPracticesPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("aboutus");
  // Schema: bestPractices is an array of { title, content }
  const practices: Array<{title:string;content:string}> = data?.bestPractices?.length > 0 ? data.bestPractices : [];
  const legacyContent = practices.length === 0 ? null : null; // just to keep clarity

  return (
    <Layout>
      <PageHeader
        title="Best Practices"
        subtitle="NAAC-documented institutional best practices that set IIMT apart"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Best Practices" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-foreground">
            <div className="reveal space-y-8">
              {practices.length > 0 ? (
                practices.map((p, i) => (
                  <div key={p.title || i} className="p-6 rounded-xl border bg-card">
                    <h2 className="text-xl font-display font-bold text-foreground mb-3">{i+1}. {p.title}</h2>
                    <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{p.content}</p>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-foreground/70 leading-relaxed">Ishan Institute of Management &amp; Technology has established a culture of continuous improvement guided by NAAC best practices.</p>
                  <div className="p-6 rounded-xl border bg-card"><h2 className="text-xl font-display font-bold text-foreground mb-3">1. Industry Interface Program</h2><p className="text-foreground/70 leading-relaxed">IIMT maintains active partnerships with over 150 companies through regular MoUs and industry engagement programmes...</p></div>
                  <div className="p-6 rounded-xl border bg-card"><h2 className="text-xl font-display font-bold text-foreground mb-3">2. Skill Enhancement Labs</h2><p className="text-foreground/70 leading-relaxed">Beyond the regular degree curriculum, IIMT offers structured certificate programs in Tally, GST, Digital Marketing, Python and Stock Markets...</p></div>
                  <div className="p-6 rounded-xl border bg-card"><h2 className="text-xl font-display font-bold text-foreground mb-3">3. Entrepreneurship Development Cell</h2><p className="text-foreground/70 leading-relaxed">The Entrepreneurship Cell encourages students to think beyond employment and develop business ventures with mentoring support...</p></div>
                  <div className="p-6 rounded-xl border bg-card"><h2 className="text-xl font-display font-bold text-foreground mb-3">4. Mentoring &amp; Student Support</h2><p className="text-foreground/70 leading-relaxed">Each student at IIMT is assigned a faculty mentor who tracks academic progress and provides career guidance...</p></div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
