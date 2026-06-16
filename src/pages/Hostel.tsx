import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const amenities = [
  "Separate boys and girls blocks", "Furnished rooms (2/3 sharing)", "Attached washrooms",
  "Vegetarian mess facility", "CCTV surveillance 24/7", "Wi-Fi connectivity",
  "Common room with TV", "RO water purifier", "Laundry facility",
  "First aid and medical support", "Warden supervision round the clock", "200m from main campus",
];

export default function HostelPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("facilities");
  const facility = Array.isArray(data) ? data.find((d: any) => d.slug === 'hostel') : null;
  
  const title = facility?.title || "Hostel";
  const subtitle = facility?.subtitle || "Safe, comfortable residential facilities for outstation students";
  const overviewHeading = facility?.overviewHeading || "Residential Life at Ishan";
  const content = facility?.overviewContent || "Ishan Law Institute provides comfortable hostel accommodation for both boys and girls in separate residential blocks located within 200 metres of the main campus. The hostel offers a home-away-from-home experience with furnished rooms, nutritious mess meals, and 24/7 security — allowing students to focus on their academics in a safe environment.";
  
  const specs = facility?.highlights?.length > 0 ? facility.highlights : [
    { title: "Accommodation", description: "Well-ventilated, furnished single and double occupancy rooms." },
    { title: "Security", description: "24/7 CCTV surveillance and dedicated security personnel." },
    { title: "Mess Facility", description: "Hygienic, nutritious vegetarian meals served four times a day." },
    { title: "Recreation", description: "Common rooms with TV, indoor games, and reading areas." }
  ];

  const amenities = [
    "Separate boys and girls blocks", "Furnished rooms (2/3 sharing)", "Attached washrooms",
    "Vegetarian mess facility", "CCTV surveillance 24/7", "Wi-Fi connectivity",
    "Common room with TV", "RO water purifier", "Laundry facility",
    "First aid and medical support", "Warden supervision round the clock", "200m from main campus",
  ];

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Hostel" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {facility?.image && (
              <div className="reveal rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)] mb-10 border">
                <img src={facility.image} alt={title} className="w-full h-[400px] object-cover" />
              </div>
            )}
            <div className="reveal space-y-5 mb-12">
              <h2 className="text-2xl font-bold">{overviewHeading}</h2>
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
              {amenities.map((a) => (
                <div key={a} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" /> {a}
                </div>
              ))}
            </div>

            <div className="reveal delay-200 grid sm:grid-cols-2 gap-4 mb-12">
              {specs.map((s: any, i: number) => (
                <div key={s.title || i} className="p-5 rounded-xl border bg-section-alt text-center">
                  <p className="text-xs text-muted-foreground mb-1">{s.title}</p>
                  <p className="text-sm font-semibold text-foreground">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="reveal delay-300 rounded-xl border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-3">Warden Contact</h3>
              <p className="text-sm">For hostel enquiries and applications, contact the admissions office at <a href="tel:+918448797700" className="text-navy font-semibold">8448797700</a> or visit the campus.</p>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
