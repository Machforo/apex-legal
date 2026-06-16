import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function CulturalActivitiesPage() {
  const { data } = useIshanLawData("culturalactivities");
  const ref = useScrollReveal([data]);

  const title = data?.title || "Cultural Activities";
  const subtitle = data?.subtitle || "Kshitiz fest, drama, music, dance, and creative expression at Ishan Law Institute";
  const content = data?.content || "Cultural activities at Ishan Law Institute are anchored by Kshitiz — the annual inter-college cultural festival that draws participation from across the Delhi NCR region. Spanning three days of music, dance, drama, fashion, art, and literary competitions, Kshitiz is a platform for students to showcase their talents beyond the classroom.\n\nThroughout the year, Ishan Law Institute organizes cultural events including Republic Day and Independence Day celebrations, talent shows, photography contests, rangoli competitions, and departmental cultural programs.";
  const image = data?.image || "https://law.ishan.ac/all-law/gallery-photos/cultural-activities/cultural-11.jpg";
  const items = data?.items?.length > 0 ? data.items : [
    { title: "Annual Fest (Ishan Utsav)", desc: "A multi-day extravaganza featuring inter-college competitions in dance, music, drama, and fine arts." },
    { title: "Talent Hunts", desc: "Freshers' events designed to discover and nurture the creative talents of newly admitted batches." },
    { title: "Festival Celebrations", desc: "Campus-wide celebrations of Diwali, Holi, Eid, and Christmas, promoting cultural harmony and inclusion." },
    { title: "Arts & Theatre Society", desc: "Student-led clubs organizing Nukkad Nataks (street plays) and art exhibitions focused on legal awareness and social issues." }
  ];

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Learning" }, { label: "Cultural Activities" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-4 rounded-xl shadow-xl font-bold hidden md:block">
                KSHITIZ FEST
              </div>
            </div>
            <div className="reveal-right space-y-6">
              <h2 className="text-3xl font-bold text-foreground leading-tight">Celebrating Creative Excellence</h2>
              <div 
                className="text-foreground/70 leading-relaxed whitespace-pre-wrap format-rich-text"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            
            <h2 className="text-xl font-bold text-foreground">Cultural Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((s: any, i: number) => (
                <div key={s.title || i} className="px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80 flex flex-col justify-center">
                   <span className="font-semibold text-foreground mb-1">{s.title}</span>
                   <span 
                     className="text-xs text-muted-foreground leading-relaxed format-rich-text whitespace-pre-wrap"
                     dangerouslySetInnerHTML={{ __html: s.desc }}
                   />
                </div>
              ))}
            </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl overflow-hidden border">
                <img src="https://law.ishan.ac/all-law/gallery-photos/cultural-activities/cultural-21.jpg" alt="Dance Performance" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border">
                <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-13.jpg" alt="Cultural Event" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
