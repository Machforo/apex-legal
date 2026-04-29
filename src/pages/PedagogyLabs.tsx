import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, Beaker, Video, Monitor, BookOpen, GraduationCap } from "lucide-react";

export default function PedagogyLabsPage() {
  const ref = useScrollReveal();

  const facilities = [
    {
      title: "Micro-teaching Studio",
      description: "Equipped with recording and playback facilities for self-evaluation and peer feedback.",
      icon: <Video className="w-6 h-6 text-gold" />,
    },
    {
      title: "Language Lab",
      description: "Focuses on communication skills and linguistic proficiency for trainee teachers.",
      icon: <Monitor className="w-6 h-6 text-gold" />,
    },
    {
      title: "Science Teaching Lab",
      description: "Equipped with apparatus for demonstrating scientific concepts in school settings.",
      icon: <Beaker className="w-6 h-6 text-gold" />,
    },
    {
      title: "ICT Integration Lab",
      description: "Training in using digital tools, smart boards, and educational software.",
      icon: <Monitor className="w-6 h-6 text-gold" />,
    },
    {
      title: "Resource Material Library",
      description: "A collection of teaching aids, charts, and models developed by students.",
      icon: <BookOpen className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Demo Teaching & Pedagogy Labs"
        subtitle="Dedicated facilities for nurturing professional teaching skills and practical pedagogy."
        breadcrumbs={[{ label: "Pedagogy Labs" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Facility Overview</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Simulated Classrooms for Future Educators
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                IIMT provides dedicated labs with micro-teaching setups, video recording for self-evaluation, and simulated classroom environments for trainee teachers. These facilities allow students to practice their teaching methodology in a controlled, supportive environment before entering real schools for internships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p className="text-foreground/80 font-medium">Confidence building before school internships</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p className="text-foreground/80 font-medium">Systematic lesson plan development and testing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p className="text-foreground/80 font-medium">Culture of peer feedback and reflective practice</p>
                </div>
              </div>
            </div>

            <div className="reveal-right grid sm:grid-cols-2 gap-6">
              {facilities.map((f, i) => (
                <div key={i} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-foreground/60">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <GraduationCap className="w-12 h-12 text-gold mx-auto" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Practice Teaching Programme</h2>
            <p className="text-foreground/70 leading-relaxed">
              Our 20-week supervised placement at partner schools is a cornerstone of the B.Ed and M.Ed programmes. Students engage in lesson plan development, reflective journal maintenance, and receive regular faculty supervision to ensure high standards of pedagogical practice.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
