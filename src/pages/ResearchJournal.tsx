import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

export default function ResearchJournalPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Research Journal" subtitle="Management Stream — UGC CARE listed peer-reviewed journal" breadcrumbs={[{ label: "Research" }, { label: "Journal" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide"><div className="max-w-3xl mx-auto reveal space-y-6">
          <p className="text-foreground/70 leading-relaxed">Management Stream (ISSN: 0974-0554) is the peer-reviewed research journal published by Ishan Institute of Management & Technology. Listed in the UGC CARE list, the journal publishes original research papers in areas of management, commerce, economics, and allied social sciences. The journal is published bi-annually and invites contributions from researchers, academicians, and practitioners.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[{ label: "ISSN", value: "0974-0554" }, { label: "Frequency", value: "Bi-annual" }, { label: "UGC CARE", value: "Listed" }, { label: "Peer Reviewed", value: "Yes" }].map((s) => (
              <div key={s.label} className="p-4 rounded-xl border bg-card">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-semibold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
          <a href="https://ms.ishan.ac" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">
            Visit Journal Website <ExternalLink className="w-4 h-4" />
          </a>
        </div></div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
