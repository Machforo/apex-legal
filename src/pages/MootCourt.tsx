import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, Users, Gavel, GraduationCap } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function MootCourtPage() {
  const { data } = useIshanLawData("mootcourt");
  const ref = useScrollReveal([data]);

  const title = data?.title || "Moot Court Hall";
  const subtitle = data?.subtitle || "Where legal theory meets the art of advocacy";
  const content = data?.content || "The Moot Court Hall at Ishan Law Institute is the heart of our clinical legal education program. It is designed to provide students with a realistic courtroom experience, bridging the gap between classroom lectures and professional practice.\n\nParticipation in moot courts is mandatory for all students, ensuring they develop essential skills such as case analysis, legal research, memorial drafting, and oral presentation. Our students are trained to handle pressure, think on their feet, and respect the decorum of the judicial process.";
  const image = data?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg";
  const features = data?.items?.length > 0 ? data.items : [
    {
      icon: "Gavel",
      title: "Simulated Court Environment",
      desc: "A meticulously designed hall that replicates the atmosphere of a High Court, complete with judicial benches, witness boxes, and advocacy podia."
    },
    {
      icon: "Users",
      title: "Regular Practice Sessions",
      desc: "Weekly moot court sessions are integrated into the curriculum, allowing students to sharpen their oral advocacy and legal reasoning skills."
    },
    {
      icon: "Scale",
      title: "National Competitions",
      desc: "Ishan Law hosts and participates in prestigious National Moot Court Competitions, providing students with exposure to complex legal debates."
    },
    {
      icon: "GraduationCap",
      title: "Expert Mentorship",
      desc: "Sessions are presided over by practicing senior advocates and retired judges who provide invaluable feedback on courtroom etiquette and legal strategy."
    }
  ];

  // Helper to map icon string to lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Gavel": return Gavel;
      case "Users": return Users;
      case "Scale": return Scale;
      case "GraduationCap": return GraduationCap;
      default: return Scale;
    }
  };

  return (
    <Layout>
      <PageHeader 
        title={title} 
        subtitle={subtitle} 
        breadcrumbs={[{ label: "Infrastructure" }, { label: "Moot Court Hall" }]} 
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="reveal-left relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold text-gold">100%</p>
                <p className="text-xs uppercase tracking-wider font-semibold">Clinical Training</p>
              </div>
            </div>

            <div className="reveal order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold text-navy mb-4 text-gold-underline">Real Courtroom Experience</h2>
              <div 
                className="text-foreground/80 leading-relaxed whitespace-pre-wrap format-rich-text text-lg"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f: any, i: number) => {
              const IconComp = typeof f.icon === 'string' ? getIcon(f.icon) : f.icon;
              return (
                <div key={f.title || i} className="reveal p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <IconComp className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <div 
                    className="text-sm leading-relaxed text-foreground/80 format-rich-text whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: f.desc }}
                  />
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
