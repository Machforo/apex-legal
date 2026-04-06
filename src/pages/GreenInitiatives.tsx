import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Leaf, Sun, Recycle, Droplets, TreePine } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const initiatives = [
  { icon: Sun, title: "Solar Energy", desc: "Rooftop solar panels generate renewable energy, reducing our dependence on conventional power by over 20%. The solar installation serves as a live case study for students studying sustainable business practices.", stat: "20%+ energy offset" },
  { icon: TreePine, title: "Campus Plantation", desc: "Over 1,500 trees and plants across the campus create green corridors, reduce heat islands, and improve air quality. Annual plantation drives engage students, faculty, and local communities in environmental stewardship.", stat: "1,500+ trees planted" },
  { icon: Recycle, title: "Waste Management", desc: "A comprehensive waste segregation and recycling program diverts over 60% of campus waste from landfills. Composting units convert organic waste into fertilizer for campus gardens.", stat: "60% waste diverted" },
  { icon: Droplets, title: "Water Conservation", desc: "Rainwater harvesting systems and efficient fixtures reduce water consumption across the campus. Treated wastewater is used for landscaping, conserving potable water resources.", stat: "Rainwater harvesting active" },
  { icon: Leaf, title: "Awareness Programs", desc: "Regular workshops, seminars, and competitions on environmental themes instill ecological consciousness in students. Green audits are conducted periodically to monitor and improve our environmental performance.", stat: "Annual green audits" },
];

export default function GreenInitiativesPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("aboutus");
  const content = data?.greenInitiatives?.content;

  return (
    <Layout>
      <PageHeader
        title="Green Initiatives"
        subtitle="Our commitment to sustainability through solar energy, waste management, and eco-conscious campus practices"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Green Initiatives" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {content && (
              <div className="reveal space-y-6 mb-12">
                <p className="text-lg text-foreground/70 leading-relaxed whitespace-pre-wrap">{content}</p>
              </div>
            )}
            {initiatives.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`reveal delay-${Math.min(i, 4)}00 grid md:grid-cols-[1fr_auto] gap-6 items-center p-6 rounded-xl border bg-card`}>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--success)/0.1)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" style={{ color: "hsl(var(--success))" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[hsl(var(--success)/0.08)] text-sm font-semibold whitespace-nowrap" style={{ color: "hsl(var(--success))" }}>
                    {item.stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
