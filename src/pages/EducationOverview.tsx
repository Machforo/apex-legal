import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { GraduationCap, Scale, ArrowRight, CheckCircle2 } from "lucide-react";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function EducationOverviewPage() {
  const { data: overviewData } = useIshanLawData("programsoverview");
  const { data: programsData } = useIshanLawData("programs");
  const ref = useScrollReveal([overviewData, programsData]);

  const content = overviewData?.content || "The Ishan Law Institute offers Bar Council of India (BCI) approved Integrated BA LLB (5 Years) and LLB (3 Years) programs affiliated with CCS University, Meerut. Our pedagogical approach focuses on clinical legal education, ensuring students develop strong analytical, research, and advocacy skills. With a state-of-the-art Moot Court Hall, dedicated Legal Aid Cell, and mandatory court visits, Ishan Law provides a comprehensive platform for students to excel in litigation, corporate law, and judicial services.";
  const image = overviewData?.image || "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg";
  const keyPoints = overviewData?.keyPoints?.length > 0 ? overviewData.keyPoints : [
    { point: "BCI approved institution" }, { point: "NAAC Accredited" }, { point: "CCS University affiliated" },
    { point: "Clinical Legal Education focus" }, { point: "Mandatory Court & Jail visits" }, { point: "Specialized Moot Court training" },
    { point: "Dedicated Judicial Services Cell" }, { point: "Access to SCC Online & Manupatra" }
  ];
  const programs = Array.isArray(programsData) && programsData.length > 0 ? programsData : [];

  return (
    <Layout>
      <PageHeader
        title="Legal Programs"
        subtitle="BCI-approved BA LLB and LLB programs preparing future advocates and judicial officers"
        breadcrumbs={[{ label: "Programs Overview" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden border mb-12 shadow-md">
              <img src={image} alt="Academics at Ishan Law" className="w-full h-96 object-cover" />
            </div>
            <div className="reveal space-y-5 mb-16">
              <p className="text-foreground/70 leading-relaxed">
                {content}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {keyPoints.map((item: any, i: number) => (
                  <div key={item.point || i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {item.point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {programs.length > 0 ? programs.map((prog: any, idx: number) => (
                <Link key={prog._id || prog.slug} to={`/courses/${prog.slug}`} className={`reveal delay-${idx * 100} group block p-8 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow`}>
                  <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    {prog.slug === 'llb' ? <Scale className="w-7 h-7 text-navy" /> : <GraduationCap className="w-7 h-7 text-navy" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{prog.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{prog.duration} Program</p>
                  <div 
                    className="text-sm mb-4 line-clamp-2 format-rich-text-preview" 
                    dangerouslySetInnerHTML={{ __html: prog.overview }} 
                  />
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )) : (
                <p>Programs will be listed here soon.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
