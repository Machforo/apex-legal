import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Monitor, Wifi, Clock, Shield } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";



export default function ITLabPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("facilities");
  const facility = Array.isArray(data) ? data.find((d: any) => d.slug === 'it-lab') : null;
  
  const title = facility?.title || "Digital Research Lab";
  const subtitle = facility?.subtitle || "State-of-the-art computing facilities for comprehensive legal research and drafting";
  const overviewHeading = facility?.overviewHeading || "Technology in Legal Practice";
  const content = facility?.overviewContent || "The Digital Research Lab at Ishan Law Institute is designed to provide students with the technological tools essential for modern legal practice. In an era where case law research and memorial drafting have become digitized, our lab ensures that students are proficient in using premier legal databases.\n\nThe lab is equipped with 60+ high-end terminals featuring 24/7 access to Manupatra, SCC Online, and LexisNexis. Beyond research, the facility supports students in mastering legal drafting software, document management, and academic writing tools.";
  const image = facility?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-12.jpg";

  const specs = facility?.highlights?.length > 0 ? facility.highlights : [
    { title: "Systems", description: "60+ Terminals" }, 
    { title: "Databases", description: "SCC Online, Manupatra" }, 
    { title: "Internet", description: "High-speed Wi-Fi" }
  ];

  return (
    <Layout>
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Research Lab" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden border mb-12 shadow-sm">
              <img src={image} alt={title} className="w-full h-80 object-cover" />
            </div>
            <div className="reveal space-y-5 mb-12">
              <h2 className="text-2xl font-bold">{overviewHeading}</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {specs.map((s: any, i: number) => (
                <div key={s.title || i} className="p-4 rounded-xl border bg-card">
                  <p className="text-xs text-muted-foreground mb-1">{s.title}</p>
                  <p className="text-sm font-semibold text-foreground">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="reveal delay-200 rounded-xl border bg-section-alt p-6">
              <h3 className="font-semibold text-foreground mb-3">Lab Rules</h3>
              <ul className="space-y-2 text-sm">
                <li>• Students must carry their ID card to access the lab</li>
                <li>• No food or beverages inside the lab area</li>
                <li>• Personal USB drives require prior scanning approval</li>
                <li>• Report any hardware/software issues to the lab attendant immediately</li>
                <li>• Save work regularly — the institute is not responsible for data loss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
