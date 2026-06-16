import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import auditoriumImg from "@/assets/auditorium.jpg";

export default function AuditoriumPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("facilities");
  const defaultImage = auditoriumImg;
  const facility = Array.isArray(data) ? data.find((d: any) => d.slug === 'auditorium') : null;
  
  const title = facility?.title || "Auditorium";
  const subtitle = facility?.subtitle || "A modern venue for convocations, seminars, and cultural events";
  const overviewHeading = facility?.overviewHeading || "Spaces for Intellectual Discourse";
  const content = facility?.overviewContent || "The Ishan Law Institute auditorium is a 500+ seat multipurpose venue equipped with professional audio-visual systems, stage lighting, and climate control. It serves as the primary venue for convocation ceremonies, national seminars, guest lectures, cultural performances during Kshitiz fest, and institutional functions.\n\nThe facility includes a large stage, green rooms for performers, separate entry/exit points for crowd management, and modern projection equipment for presentations and film screenings.";
  const image = facility?.image || defaultImage;

  const specs = facility?.highlights?.length > 0 ? facility.highlights : [
    { title: "Seating", description: "500+ seats" },
    { title: "AV Equipment", description: "Professional setup" },
    { title: "Events Hosted", description: "Convocations, Seminars, Kshitiz" }
  ];

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Auditorium" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)] mb-10 border">
              <img src={image} alt={title} className="w-full h-[400px] object-cover" />
            </div>
            <div className="reveal delay-100 space-y-5 mb-12">
              <h2 className="text-2xl font-bold">{overviewHeading}</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div className="reveal delay-200 grid sm:grid-cols-3 gap-4">
              {specs.map((s: any, i: number) => (
                <div key={s.title || i} className="p-5 rounded-xl border bg-card text-center">
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
