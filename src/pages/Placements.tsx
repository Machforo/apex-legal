import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Building2, Users2, Star, CheckCircle2 } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultStats = [];

const defaultRecruiters = [];

const defaultTestimonials = [];

export default function PlacementsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("placements");

  // Schema field names: placementNumbers, recruitingPartners, successStories, placementProcess
  const stats = data?.placementNumbers?.length > 0 ? data.placementNumbers : defaultStats;
  const recruiters = data?.recruitingPartners?.length > 0 ? data.recruitingPartners : defaultRecruiters;
  const testimonials = data?.successStories?.length > 0 ? data.successStories : defaultTestimonials;
  const placementProcess = data?.placementProcess?.length > 0 ? data.placementProcess : [
    { step: "1", title: "Pre-placement training", desc: "Resume building, aptitude, group discussion, mock interviews" },
    { step: "2", title: "Registration", desc: "Company registration and job description sharing with students" },
    { step: "3", title: "Assessment", desc: "Aptitude test and/or technical assessment by the recruiter" },
    { step: "4", title: "Interviews", desc: "Group discussion and personal interview rounds" },
    { step: "5", title: "Onboarding", desc: "Offer letter issuance and onboarding support" },
  ];

  return (
    <Layout>
      <PageHeader title={data?.title || "Career Outcomes"} subtitle={data?.subtitle || "Consistent record of placements in top-tier law firms, corporate legal cells, and judicial services"} breadcrumbs={[{ label: "Career Outcomes" }]} />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {/* Stats */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s: any, i: number) => {
              const Icon = s.icon && typeof s.icon !== 'string' ? s.icon : TrendingUp;
              return (
                <div key={s.label || i} className="text-center p-6 rounded-xl bg-section-alt border">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-light flex items-center justify-center"><Icon className="w-6 h-6 text-navy" /></div>
                  <p className="font-bold text-navy text-2xl mb-1">{s.number || s.value}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              );
            })}
          </div>

          {/* Process */}
          <div className="reveal delay-100 max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Placement Process</h2>
            <div className="space-y-4">
              {placementProcess.map((step: any, i: number) => (
                <div key={i} className="flex gap-4 items-start p-5 rounded-lg border bg-card">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0"><span className="text-sm font-bold text-primary-foreground">{step.step || i+1}</span></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div className="reveal delay-200 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">Our Recruiting Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {recruiters.map((r: any, i: number) => (
                <div key={r.name || i} className="flex items-center justify-center p-8 rounded-xl border bg-card hover:shadow-md transition-shadow h-32">
                  {r.logo ? (
                    <img src={r.logo} alt={r.name} className="h-16 md:h-20 w-auto object-contain" />
                  ) : (
                    <span className="text-sm font-semibold text-foreground/70">{r.name || r}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="reveal delay-300">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Student Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t: any, i: number) => (
                <div key={t.name || i} className="p-6 rounded-xl border bg-card flex flex-col justify-between h-full">
                  <div>
                    <Star className="w-5 h-5 text-gold mb-4" />
                    {(t.quote || t.message) && <p className="text-sm leading-relaxed italic mb-6 text-foreground/80">"{t.quote || t.message}"</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center overflow-hidden shrink-0">
                      {t.image ? <img src={t.image} alt={t.name} className="w-full h-full object-cover" /> : <span className="text-sm font-bold text-primary-foreground">{t.name?.[0]}</span>}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}{t.role && t.company ? " at " : ""}{t.company}</p>
                      <p className="text-xs text-navy font-medium">{t.batch}</p>
                    </div>
                  </div>
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
