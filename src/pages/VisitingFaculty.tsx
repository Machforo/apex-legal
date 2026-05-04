import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const visitingFaculty = [
  { name: "Adv. Rahul Verma", org: "Senior Advocate", specialisation: "Constitutional Litigation & Writ Petitions", impact: "Provides practical insights into drafting writ petitions and arguing before constitutional benches.", bar: "D/124/1998" },
  { name: "Hon'ble Justice S.K. Gupta (Retd.)", org: "Retired Judicial Officer", specialisation: "Criminal Jurisprudence & Judicial Ethics", impact: "Brings decades of bench experience, training students in judicial reasoning and ethics.", bar: "" },
  { name: "Ms. Priyanka Iyer", org: "Corporate Counsel", specialisation: "Mergers & Acquisitions / Corporate Law", impact: "Guides students on corporate compliance, due diligence, and commercial contract drafting.", bar: "MAH/456/2005" },
  { name: "Adv. Meenakshi Lekhi", org: "Senior Advocate", specialisation: "Gender Justice & Human Rights", impact: "Mentors students in public interest litigation and human rights advocacy strategies.", bar: "D/89/1990" },
  { name: "Mr. Alok Prasanna", org: "Legal Academic", specialisation: "Legal Research & Policy Drafting", impact: "Equips students with advanced methodologies for legal research and policy analysis.", bar: "KAR/234/2010" },
  { name: "Adv. Vikram Singh", org: "IPR Specialist", specialisation: "Patent Prosecution & Copyright Law", impact: "Demonstrates practical applications of intellectual property protection for emerging tech startups.", bar: "UP/789/2008" },
  { name: "Ms. Shreya Dhull", org: "Cyber Law Expert", specialisation: "Digital Evidence & IT Act Compliance", impact: "Trains students in handling electronic evidence and navigating modern cyber regulations.", bar: "D/321/2012" },
  { name: "Adv. Amit Bansal", org: "Senior Advocate", specialisation: "Commercial Arbitration & Mediation", impact: "Conducts hands-on simulation sessions for alternate dispute resolution and commercial mediation.", bar: "D/567/2001" },
];

export default function VisitingFacultyPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHeader
        title="Visiting Faculty"
        subtitle="Distinguished advocates, legal scholars, and retired judges who bring courtroom insights to the classroom"
        breadcrumbs={[{ label: "Faculty", href: "/faculty" }, { label: "Visiting Faculty" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <p className="reveal text-foreground/70 leading-relaxed max-w-4xl mx-auto text-center mb-16 text-lg">
            Ishan Law invites distinguished visiting faculty — practising Senior Advocates from Allahabad High Court and Delhi High Court, retired judicial officers, corporate counsel from leading companies, and legal academics from premier law schools; students gain direct access to legal minds shaping India's legal landscape.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitingFaculty.map((f, i) => (
              <div key={f.name} className={`reveal delay-${Math.min(i % 4, 3)}00 bg-card rounded-xl border p-6 hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-primary-foreground">
                    {f.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">{f.name}</h3>
                <p className="text-xs text-gold font-medium mt-1">{f.org}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs font-semibold text-foreground/80 mb-2">{f.specialisation}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed text-left">{f.impact}</p>
                </div>
                {f.bar && (
                  <div className="mt-3 text-left">
                    <span className="px-2 py-1 rounded bg-muted text-[10px] font-medium text-muted-foreground border">
                      Reg: {f.bar}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
