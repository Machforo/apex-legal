import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import MediaGallery from "@/components/MediaGallery";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";
import { rt } from "@/lib/richText";


export default function SportsPage() {
  const { data } = useIshanLawData("facilities");
  const ref = useScrollReveal([data]);
  const facility = Array.isArray(data) ? data.find((d: any) => d.slug === 'sports') : null;
  
  const title = facility?.title || "Sports";
  const subtitle = facility?.subtitle || "Inter-college competitions, annual sports meet, and campus recreational facilities";
  const overviewHeading = facility?.overviewHeading || "Fitness & Sportsmanship";
  const content = facility?.overviewContent || "Ishan Law promotes physical fitness and sportsmanship through a comprehensive sports program. The campus features facilities for cricket, basketball, badminton, volleyball, table tennis, and athletics. The annual sports meet is a highlight of the academic calendar, bringing together students from across the Ishan Group in a spirit of healthy competition.";
  const image = facility?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-6.jpg";

  const specs = facility?.highlights?.length > 0 ? facility.highlights : [
    { title: "Outdoor", description: "Cricket Ground, Basketball Court" },
    { title: "Indoor", description: "Table Tennis, Badminton, Chess" },
    { title: "Annual Event", description: "Sports Meet" },
    { title: "Teams", description: "Inter-College Tournaments" }
  ];

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Sports" }]} />
      
      {facility?.bannerImage && (
        <div className="container-wide mt-12">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[380px]">
            <img src={facility.bannerImage} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                <img 
                  src={image} 
                  alt="Sports Meet" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-6.jpg"; }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-4 rounded-xl shadow-xl font-bold hidden md:block">
                ANNUAL SPORTS MEET
              </div>
            </div>
            <div className="reveal-right space-y-6">
              <h2 className="text-3xl font-bold text-foreground leading-tight">{overviewHeading}</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text"
                dangerouslySetInnerHTML={{ __html: rt(content) }}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {specs.map((s: any, i: number) => (
                  <div key={s.title || i} className="px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{s.title}</span>
                    <span className="font-semibold">{s.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {facility?.images?.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="container-wide max-w-6xl mx-auto">
            <MediaGallery images={facility.images} altPrefix={facility?.title || "Facility photo"} />
          </div>
        </section>
      )}
      <EnquiryCTA />
    </Layout>
  );
}
