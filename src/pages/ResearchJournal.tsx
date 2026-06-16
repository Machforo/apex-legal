import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function ResearchJournalPage() {
  const { data } = useIshanLawData("researchjournal");
  const ref = useScrollReveal([data]);

  const defaultStats = [
    { label: "Journal Name", value: "Ishan Law Review" },
    { label: "Frequency", value: "Bi-annual" },
    { label: "Format", value: "Peer-Reviewed" },
    { label: "Focus", value: "Contemporary Legal Issues" }
  ];

  const title = data?.title || "Ishan Law Review";
  const subtitle = data?.subtitle || "A peer-reviewed legal journal dedicated to contemporary legal scholarship";
  const content = data?.content || "<p>Ishan Law Review is the flagship peer-reviewed research journal published by the Ishan Law Institute. Dedicated to fostering high-quality legal scholarship, the journal publishes original research papers, case comments, and book reviews on contemporary legal issues, constitutional developments, and international law. Published bi-annually, it serves as a platform for academicians, legal practitioners, and students to contribute to the evolving legal discourse in India and abroad.</p>";
  const image = data?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg";
  const stats = data?.stats?.length > 0 ? data.stats : defaultStats;
  const guidelinesLink = data?.guidelinesLink || "#";

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Research" }, { label: "Research Journal" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-6">
              <div className="text-foreground/70 leading-relaxed format-rich-text" dangerouslySetInnerHTML={{ __html: content }} />
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={image} alt={title} className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((s: any) => (
                  <div key={s.label} className="p-4 rounded-xl border bg-card">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-sm font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
              <a href={guidelinesLink} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">
                Submission Guidelines <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
