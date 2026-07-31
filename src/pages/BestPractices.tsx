import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import PageGallery from "@/components/PageGallery";

export default function BestPracticesPage() {
  const { data } = useIshanLawData("aboutus");
  const practices: Array<{title:string;content:string;image?:string}> = data?.bestPractices?.length > 0 ? data.bestPractices : [];
  const bannerImage: string | undefined = data?.bestPracticesBanner;
  const ref = useScrollReveal([data]);

  return (
    <Layout>
      <PageHeader
        title="Best Practices"
        subtitle="NAAC-documented institutional best practices that define Ishan Law's excellence"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Best Practices" }]}
      />

      {bannerImage && (
        <div className="container-wide mt-12">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-h-[400px]">
            <img src={bannerImage} alt="Best Practices at Ishan Law" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="reveal space-y-8">
              {practices.length > 0 ? (
                practices.map((p, i) => (
                  <div key={p.title || i} className="rounded-2xl border bg-card overflow-hidden shadow-sm">
                    {p.image && (
                      <div className="h-52 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-foreground mb-3">{i+1}. {p.title}</h2>
                      <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{p.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-foreground/70 leading-relaxed">
                    Ishan Law Institute is committed to bridging the gap between classroom theory and courtroom practice. Our best practices are systematically documented for NAAC peer review, ensuring that every initiative contributes to the professional and ethical development of our aspiring advocates.
                  </p>
                  {[
                    { num: 1, title: "Integrated Clinical Legal Education", body: "Starting from the first year, students are exposed to real-world legal proceedings through structured court visits, jail visits, and police station observations." },
                    { num: 2, title: "Moot Court as a Core Pedagogy", body: "Beyond theoretical lectures, we utilize our high-tech Moot Court Hall for mandatory simulation exercises in memorial drafting and oral advocacy." },
                    { num: 3, title: "Community Legal Aid & Social Advocacy", body: "Our Legal Aid Cell actively organizes awareness camps where students provide free legal counseling under the supervision of faculty advocates." },
                    { num: 4, title: "Institutional Outcomes", body: "These practices have resulted in higher success rates in judicial examinations and a growing reputation for producing practice-ready legal professionals." },
                  ].map(item => (
                    <div key={item.num} className="p-6 rounded-xl border bg-card">
                      <h2 className="text-xl font-bold text-foreground mb-3">{item.num}. {item.title}</h2>
                      <p className="text-foreground/70 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <PageGallery images={data?.pageGallery} />
      <EnquiryCTA />
    </Layout>
  );
}
