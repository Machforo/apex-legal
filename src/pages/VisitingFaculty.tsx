import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { Award, UserCheck } from "lucide-react";


const defaultVisitingFaculty = [
  { 
    name: "Adv. Rahul Verma", 
    org: "Senior Advocate", 
    specialisation: "Constitutional Litigation & Writ Petitions", 
    impact: "Provides practical insights into drafting writ petitions and arguing before constitutional benches.", 
    bar: "D/124/1998",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Hon'ble Justice S.K. Gupta (Retd.)", 
    org: "Retired Judicial Officer", 
    specialisation: "Criminal Jurisprudence & Judicial Ethics", 
    impact: "Brings decades of bench experience, training students in judicial reasoning and ethics.", 
    bar: "Judicial Bench",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Ms. Priyanka Iyer", 
    org: "Corporate Counsel", 
    specialisation: "Mergers & Acquisitions / Corporate Law", 
    impact: "Guides students on corporate compliance, due diligence, and commercial contract drafting.", 
    bar: "MAH/456/2005",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Adv. Meenakshi Lekhi", 
    org: "Senior Advocate", 
    specialisation: "Gender Justice & Human Rights", 
    impact: "Mentors students in public interest litigation and human rights advocacy strategies.", 
    bar: "D/89/1990",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Mr. Alok Prasanna", 
    org: "Legal Academic", 
    specialisation: "Legal Research & Policy Drafting", 
    impact: "Equips students with advanced methodologies for legal research and policy analysis.", 
    bar: "KAR/234/2010",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Adv. Vikram Singh", 
    org: "IPR Specialist", 
    specialisation: "Patent Prosecution & Copyright Law", 
    impact: "Demonstrates practical applications of intellectual property protection for emerging tech startups.", 
    bar: "UP/789/2008",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Ms. Shreya Dhull", 
    org: "Cyber Law Expert", 
    specialisation: "Digital Evidence & IT Act Compliance", 
    impact: "Trains students in handling electronic evidence and navigating modern cyber regulations.", 
    bar: "D/321/2012",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
  },
  { 
    name: "Adv. Amit Bansal", 
    org: "Senior Advocate", 
    specialisation: "Commercial Arbitration & Mediation", 
    impact: "Conducts hands-on simulation sessions for alternate dispute resolution and commercial mediation.", 
    bar: "D/567/2001",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
];

const fallbackAvatars = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
];

export default function VisitingFacultyPage() {
  const { data } = useIshanLawData("visitingfaculty");
  const ref = useScrollReveal([data]);

  const visitingFaculty = Array.isArray(data) && data.length > 0 ? data : defaultVisitingFaculty;

  return (
    <Layout>
      <PageHeader
        title="Visiting Faculty"
        subtitle="Distinguished advocates, legal scholars, and retired judges who bring courtroom insights to the classroom"
        breadcrumbs={[{ label: "Faculty", href: "/faculty" }, { label: "Visiting Faculty" }]}
      />

      <section className="py-20 md:py-28 bg-background" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider border border-gold/20">
              <UserCheck className="w-3.5 h-3.5" /> Eminent Judicial & Practice Leaders
            </div>
            <p className="reveal leading-relaxed text-foreground/80 text-lg">
              Ishan Law invites distinguished visiting faculty — practising Senior Advocates from Allahabad High Court and Delhi High Court, retired judicial officers, corporate counsel from leading companies, and legal academics from premier law schools; students gain direct access to legal minds shaping India's legal landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitingFaculty.map((f: any, i: number) => {
              const memberImage = f.image || f.photo || f.avatar || defaultVisitingFaculty[i % defaultVisitingFaculty.length]?.image || fallbackAvatars[i % fallbackAvatars.length];
              return (
                <div key={f.name || i} className={`reveal delay-${Math.min(i % 4, 3)}00 bg-card rounded-2xl border p-6 hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-all flex flex-col justify-between group`}>
                  <div>
                    <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-5 overflow-hidden border-2 border-gold/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={memberImage} 
                        alt={f.name} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallbackAvatars[i % fallbackAvatars.length];
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-base text-center leading-snug">{f.name}</h3>
                    <p className="text-xs text-gold font-semibold text-center mt-1 uppercase tracking-wider">{f.org}</p>
                    <div className="mt-4 pt-4 border-t border-border/60 space-y-2">
                      <p className="text-xs font-semibold text-navy flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{f.specialisation || f.specialization}</span>
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed text-left">{f.impact || f.bio}</p>
                    </div>
                  </div>
                  {f.bar && (
                    <div className="mt-4 pt-3 text-left border-t border-border/40">
                      <span className="px-2.5 py-1 rounded-md bg-muted text-[11px] font-medium text-muted-foreground border">
                        Reg: {f.bar}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

