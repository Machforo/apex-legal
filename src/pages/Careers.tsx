import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function CareersPage() {
  const { data } = useIshanLawData("careers");
  const ref = useScrollReveal();
  const fallbackJobs = [
    { title: "Professor / Associate Professor — Law", qualification: "LLM with PhD", experience: "10+ Years", dept: "Law", type: "Full-time" },
    { title: "Assistant Professor — Law", qualification: "LLM with UGC NET / PhD", experience: "0–5 Years", dept: "Law", type: "Full-time" },
    { title: "Clinical Instructor — Moot Court", qualification: "LLM", experience: "3+ Years Litigation", dept: "Clinical Education", type: "Full-time" },
    { title: "Academic Coordinator", qualification: "Graduate", experience: "5+ Years Administration", dept: "Academic Office", type: "Full-time" },
  ];

  const jobs = Array.isArray(data) && data.length > 0 
    ? data.map((j: any) => ({
        title: j.title,
        qualification: j.requirements || "N/A",
        experience: j.description || "N/A",
        dept: j.department || "Law",
        type: j.type || "Full-time"
      }))
    : fallbackJobs;

  return (
    <Layout>
      <PageHeader title="Careers at Ishan Law" subtitle="Join a community of legal scholars and practitioners dedicated to excellence" breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Careers" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-10">
              <p className="text-foreground/70 leading-relaxed text-lg">
                Ishan Law invites qualified legal educators, practising advocates, and administrative professionals to join our institution — contributing to producing the next generation of India's legal professionals. We offer a highly professional environment, strong research support, and competitive compensation to foster academic growth and career advancement.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg" alt="Ishan Law Campus" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">Current Openings</h2>
            {jobs.map((j, i) => (
              <div key={j.title} className={`reveal delay-${Math.min(i, 3)}00 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{j.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                       <span><strong>Qual:</strong> {j.qualification}</span>
                       <span className="w-1 h-1 rounded-full bg-border" />
                       <span><strong>Exp:</strong> {j.experience}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">{j.dept}</span>
                      <span className="px-2.5 py-1 rounded-md bg-gold-light text-xs font-medium text-navy">{j.type}</span>
                    </div>
                  </div>
                  <a href="mailto:careers@ishan.ac" className="shrink-0 text-center sm:w-auto w-full px-6 py-2.5 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-muted rounded-xl border reveal text-center">
             <h3 className="text-lg font-bold text-foreground mb-2">How to Apply</h3>
             <p className="text-sm leading-relaxed max-w-xl mx-auto">
               Please send your updated CV, along with a cover letter detailing your relevant experience and academic interests, to <a href="mailto:careers@ishan.ac" className="text-navy font-bold hover:underline">careers@ishan.ac</a>. Shortlisted candidates will be contacted by the HR department within 14 working days for the interview process.
             </p>
          </div>
        </div></div>
      </section>
    </Layout>
  );
}
