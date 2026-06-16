import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, Users, Mic2, Briefcase, Trophy } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function DebatesGDPage() {
  const { data } = useIshanLawData("debatesgd");
  const ref = useScrollReveal([data]);

  const title = data?.title || "Debates & Group Discussions";
  const subtitle = data?.subtitle || "Articulating legal arguments, defending perspectives, and building the foundations of advocacy.";
  const content = data?.content || "At Ishan Law, we believe the ability to articulate and defend legal arguments is as important as academic excellence. Regular debates and GD sessions prepare students for litigation, corporate legal practice, and competitive exams like the Judiciary.";
  const image = data?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg";

  const activities = data?.items?.length > 0 ? data.items : [
    { title: "Parliamentary Debates", desc: "Structured debates simulating legislative sessions, allowing students to debate proposed bills and national policies.", icon: "Mic" },
    { title: "Group Discussions", desc: "Moderated GDs on current legal affairs to improve collaborative problem-solving and communication skills.", icon: "Users" },
    { title: "National Competitions", desc: "Ishan Law's debate society actively trains and sponsors students to represent the institute at national law university debate tournaments.", icon: "Trophy" },
    { title: "Extempore Speaking", desc: "On-the-spot speaking challenges to enhance quick thinking and the ability to formulate arguments under time pressure.", icon: "MessageSquare" },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Mic": return Mic2;
      case "Briefcase": return Briefcase;
      case "Trophy": return Trophy;
      case "MessageSquare": return MessageSquare;
      case "Users": return Users;
      case "Brain": return Users;
      default: return Mic2;
    }
  };

  return (
    <Layout>
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Learning" }, { label: "Debates & GD" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <div className="reveal-left">
              <div className="rounded-2xl overflow-hidden border shadow-lg">
                <img src={image} alt={title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div className="reveal-right space-y-6">
              <h2 className="text-3xl font-bold text-navy text-gold-underline">
                {title}
              </h2>
              <div
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap text-lg"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>

          {/* Activity Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a: any, i: number) => {
              const IconComp = getIcon(a.icon || "Mic");
              return (
                <div key={a.title || i} className="reveal p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <IconComp className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
                  <div
                    className="text-sm text-muted-foreground format-rich-text whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: a.desc || a.description }}
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
