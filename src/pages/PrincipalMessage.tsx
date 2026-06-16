import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function PrincipalMessagePage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
  
  const pm = data?.principalMessage;

  const msg = {
      name: pm?.name || "Dr. Arvind Singh",
      designation: pm?.designation || "Principal, Ishan Law Institute",
      message: pm?.message || `Welcome to Ishan Law Institute, where we transform legal aspirants into practice-ready professionals. In an era where the legal landscape is rapidly evolving, our mission is to produce advocates and judicial leaders who are not only masters of legal theory but also deeply committed to the ethical pursuit of justice.

What distinguishes Ishan Law is our unwavering focus on Clinical Legal Education. We believe that law is a living discipline, best mastered through immersion. Our curriculum is purposefully structured to integrate rigorous academic scholarship with mandatory court exposure from the very first semester. Whether it is arguing complex cases in our state-of-the-art Moot Court Hall or providing real-world assistance through our Legal Aid Cell, our students learn by doing.

We provide our scholars with premier resources, including access to leading digital legal databases like Manupatra and SCC Online, and mentorship from a faculty composed of distinguished legal practitioners and scholars. Our dedicated Judicial Services Cell further ensures that students aspiring for the bench receive specialized guidance from day one.

I invite you to join our community and embark on a journey that will build a formidable foundation for your legal career. At Ishan Law, we don't just teach the law; we prepare you to practice it with excellence and integrity.`,
      image: pm?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg"
  };

  return (
    <Layout>
      <PageHeader
        title="Principal's Message"
        subtitle="Producing ethical and practice-ready legal professionals"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Principal's Message" }]}
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
                        <div className="text-center p-6">
                          <div className="w-24 h-24 mx-auto rounded-full bg-gold-light flex items-center justify-center mb-3">
                            <span className="text-3xl font-bold text-navy">{msg.name ? msg.name.charAt(0) : "P"}</span>
                          </div>
                          <p className="text-sm font-semibold text-foreground">{msg.name}</p>
                          <p className="text-xs text-muted-foreground">{msg.designation}</p>
                        </div>
                      </div>
                  )}
                </div>
              </div>

              <div className="reveal-right space-y-8">
                <div 
                  className="text-foreground/70 leading-relaxed whitespace-pre-wrap format-rich-text"
                  dangerouslySetInnerHTML={{ __html: msg.message }}
                />

                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">{msg.name}</p>
                  <p className="text-sm text-muted-foreground">{msg.designation}</p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl border">
                  <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" alt="Ishan Law Academics" className="w-full h-64 object-cover" />
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
