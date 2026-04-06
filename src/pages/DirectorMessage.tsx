import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIIMTData } from "@/hooks/useIIMTData";

export default function DirectorMessagePage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("aboutus");
  const defaultImage = "/assets/director.jpg"; // Placeholder path for now
  const msg = data?.directorMessage || {
      name: "Dr. Priya Sharma",
      designation: "Director, IIMT",
      message: "At IIMT, we believe that education is not just about degrees — it is about developing individuals who are ready to lead, innovate, and contribute meaningfully to society. Our institution stands on three pillars: academic rigour, industry relevance, and character formation.",
      image: defaultImage
  };

  return (
    <Layout>
      <PageHeader
        title="Director's Message"
        subtitle="A vision for academic excellence and student success"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Director's Message" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14">
              <div className="reveal-left">
                <div className="rounded-2xl overflow-hidden shadow-[0_4px_24px_hsl(var(--navy)/0.1)] border bg-card">
                  {msg.image ? (
                      <img src={msg.image} alt={msg.name} className="w-full h-auto object-cover" />
                  ) : (
                      <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto rounded-full bg-gold-light flex items-center justify-center mb-3">
                            <span className="text-3xl font-display font-bold text-navy">{msg.name ? msg.name.charAt(0) : "D"}</span>
                          </div>
                          <p className="text-sm font-semibold text-foreground">{msg.name}</p>
                          <p className="text-xs text-muted-foreground">{msg.designation}</p>
                        </div>
                      </div>
                  )}
                </div>
              </div>

              <div className="reveal-right space-y-6">
                <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                   {msg.message}
                </p>

                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">{msg.name}</p>
                  <p className="text-sm text-muted-foreground">{msg.designation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
