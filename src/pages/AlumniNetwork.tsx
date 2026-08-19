import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { GraduationCap, Quote } from "lucide-react";

export default function AlumniNetworkPage() {
  const { data } = useIshanLawData("alumninetwork");
  const ref = useScrollReveal([data]);

  const fallbackAlumni = [
    { name: "Arjun Verma", batch: "Batch of 2020", currentRole: "Corporate Associate, AZB & Partners", quote: "Ishan Law provided me with the perfect launchpad for a corporate law career. The emphasis on commercial law and practical drafting was invaluable.", image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg" },
    { name: "Meera Das", batch: "Batch of 2018", currentRole: "Civil Judge (Junior Division)", quote: "The rigorous mooting culture and guidance from retired judges at Ishan helped me crack the judicial services examination on my first attempt.", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg" }
  ];

  const alumni = Array.isArray(data) && data.length > 0 ? data : fallbackAlumni;

  return (
    <Layout>
      <PageHeader 
        title="Alumni Network" 
        subtitle="A global community of legal professionals, judges, and corporate leaders." 
        breadcrumbs={[{ label: "Career & Research" }, { label: "Alumni Network" }]} 
      />
      
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Pride, Our Ambassadors</h2>
            <p className="text-foreground/70 leading-relaxed">
              Ishan Law graduates are making their mark in diverse fields of law across the globe. From prestigious law firms to the judiciary and civil services, our alumni network is a testament to the quality of education and character building at our institute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alum: any, i: number) => (
              <div key={i} className={`reveal delay-${Math.min(i % 5, 4)}00 group flex flex-col p-8 rounded-3xl border bg-card hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <Quote className="absolute top-8 right-8 w-12 h-12 text-navy/5 -z-10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/20 shadow-sm shrink-0">
                    {alum.image ? (
                      <img src={alum.image} alt={alum.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-navy flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{alum.name?.[0]}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">{alum.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-gold text-sm font-semibold">
                      <GraduationCap className="w-4 h-4" />
                      <span>{alum.batch}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm font-medium text-navy uppercase tracking-wider mb-4 border-b pb-4">
                  {alum.currentRole}
                </p>
                
                <p className="text-foreground/70 leading-relaxed italic text-sm flex-1">
                  "{alum.quote}"
                </p>
              </div>
            ))}
          </div>

          {alumni.length === 0 && (
            <div className="text-center py-16 bg-muted/30 rounded-2xl border border-dashed reveal">
              <p className="text-muted-foreground text-lg">Alumni profiles are being updated.</p>
            </div>
          )}

        </div>
      </section>
      
      <EnquiryCTA />
    </Layout>
  );
}
