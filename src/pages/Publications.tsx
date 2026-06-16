import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { BookOpen, ExternalLink, Calendar, Star } from "lucide-react";

export default function PublicationsPage() {
  const { data } = useIshanLawData("publications");
  const ref = useScrollReveal([data]);

  const fallbackPublications = [
    { title: "The Evolution of Cyber Law in the Context of Data Privacy in India", authors: "Dr. Alok Nath, Prof. S. Sharma", journal: "Journal of Cyber Law and Policy", year: "2023", impactFactor: "2.5", link: "#" },
    { title: "Analyzing the Efficacy of Alternate Dispute Resolution Mechanisms in Commercial Contracts", authors: "Prof. Neha Gupta", journal: "Indian Journal of Arbitration", year: "2022", impactFactor: "1.8", link: "#" }
  ];

  const publications = Array.isArray(data) && data.length > 0 ? data : fallbackPublications;

  return (
    <Layout>
      <PageHeader 
        title="Faculty Publications" 
        subtitle="Exploring the frontiers of legal knowledge through impactful research and publications." 
        breadcrumbs={[{ label: "Career & Research" }, { label: "Publications" }]} 
      />
      
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Recent Academic Publications</h2>
            
            <div className="grid gap-6">
              {publications.map((pub: any, i: number) => (
                <div key={i} className={`reveal delay-${Math.min(i % 5, 4)}00 flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow`}>
                  <div className="w-16 h-16 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 hidden md:flex">
                    <BookOpen className="w-8 h-8 text-navy" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-foreground leading-tight">{pub.title}</h3>
                    <p className="text-sm font-medium text-foreground/80">By {pub.authors}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded text-xs uppercase tracking-wider">{pub.journal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                      {pub.impactFactor && (
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-gold" />
                          <span>IF: {pub.impactFactor}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {pub.link && pub.link !== "#" && (
                    <div className="shrink-0 flex items-center md:items-start pt-2">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy bg-navy/5 hover:bg-navy hover:text-white rounded-lg transition-colors w-full md:w-auto justify-center"
                      >
                        Read Paper <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {publications.length === 0 && (
              <div className="text-center py-16 bg-muted/30 rounded-2xl border border-dashed">
                <p className="text-muted-foreground text-lg">New publications are being updated.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <EnquiryCTA />
    </Layout>
  );
}
