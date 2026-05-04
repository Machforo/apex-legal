import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CodeOfConductPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Code of Conduct" subtitle="Student rules, dress code, and academic integrity guidelines" breadcrumbs={[{ label: "Students" }, { label: "Code of Conduct" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start max-w-6xl mx-auto">
            <div className="reveal space-y-8">
              {[
                { title: "1. Professional Conduct", content: "Law students are expected to maintain the highest standards of decorum and dignity, reflecting the noble nature of the legal profession. Respectful behavior towards faculty, staff, and fellow students is mandatory. Any form of misconduct, including bullying, verbal abuse, or physical altercation, will result in immediate disciplinary action." },
                { title: "2. Dress Code (Lawyer's Uniform)", content: "As per BCI standards, students must adhere to the prescribed professional dress code: White Shirt, Black Trousers/Skirt, and Black Coat. A black tie or band may be required for specific formal events. Clean and formal attire is mandatory during academic hours, moot courts, and court visits." },
                { title: "3. Attendance (BCI Regulations)", content: "A strict minimum of 75% attendance is mandatory for each subject as per Bar Council of India (BCI) and CCS University regulations. Students falling below this threshold will not be permitted to appear for university examinations. Medical leave must be supported by valid documentation submitted within 48 hours." },
                { title: "4. Academic Integrity & Research Ethics", content: "Plagiarism, cheating, or any form of academic dishonesty is strictly prohibited, especially in legal research and memorial drafting. Students found engaging in unfair means will face immediate disqualification and potential expulsion, as these acts are contrary to the ethics of the legal profession." },
                { title: "5. Moot Court & Library Decorum", content: "Students must maintain absolute silence and decorum in the Moot Court Hall and the Legal Library. Use of mobile phones is strictly prohibited in these areas. Respect for library resources and research terminals is expected from every student." },
                { title: "6. Zero Tolerance for Ragging", content: "As per UGC regulations and Supreme Court directives, ragging in any form is a criminal offense. Ishan Law maintains zero tolerance towards ragging. Offenders will face immediate expulsion, FIR registration, and criminal prosecution." },
              ].map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-sm leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
            <div className="reveal hidden lg:block sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border mb-6">
                <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" alt="Ishan Law Professionalism" className="w-full h-[500px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
