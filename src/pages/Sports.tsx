import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function SportsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("facilities");
  const facility = Array.isArray(data) ? data.find((d: any) => d.slug === 'sports') : null;
  
  const title = facility?.title || "Sports";
  const subtitle = facility?.subtitle || "Inter-college competitions, annual sports meet, and campus recreational facilities";
  const overviewHeading = facility?.overviewHeading || "Fitness & Sportsmanship";
  const content = facility?.overviewContent || "Ishan Law promotes physical fitness and sportsmanship through a comprehensive sports program. The campus features facilities for cricket, basketball, badminton, volleyball, table tennis, and athletics. The annual sports meet is a highlight of the academic calendar, bringing together students from across the Ishan Group in a spirit of healthy competition.";
  const image = facility?.image || "https://law.ishan.ac/all-law/gallery-photos/events/events-1.jpeg";

  const specs = facility?.highlights?.length > 0 ? facility.highlights : [
    { title: "Outdoor", description: "Cricket Ground, Basketball Court" },
    { title: "Indoor", description: "Table Tennis, Badminton, Chess" },
    { title: "Annual Event", description: "Sports Meet" },
    { title: "Teams", description: "Inter-College Tournaments" }
  ];

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Sports" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                <img src={image} alt="Sports Meet" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-4 rounded-xl shadow-xl font-bold hidden md:block">
                ANNUAL SPORTS MEET
              </div>
            </div>
            <div className="reveal-right space-y-6">
              <h2 className="text-3xl font-bold text-foreground leading-tight">{overviewHeading}</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
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
      <EnquiryCTA />
    </Layout>
  );
}
