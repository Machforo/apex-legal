import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";


const defaultDepartments = [];

const defaultFaculty = [
  {
    name: "Dr. Arvind Kumar Sharma",
    designation: "Principal & Professor of Law",
    qualification: "LL.M., Ph.D. (Constitutional Law)",
    department: "Constitutional & Civil Law",
    specialization: "Constitutional Jurisprudence & Public Law",
    bio: "Over 22 years of academic and judicial research experience. Formerly senior fellow at Indian Law Institute.",
    image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg"
  },
  {
    name: "Prof. Sunita Deshmukh",
    designation: "Associate Professor",
    qualification: "LL.M. (Corporate Law), UGC-NET",
    department: "Corporate & Commercial Law",
    specialization: "IPR, Insolvency & Company Law",
    bio: "Spearheads the Centre for Commercial & Intellectual Property Studies. Consultant to corporate legal firms.",
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg"
  },
  {
    name: "Adv. Rajesh V. Chauhan",
    designation: "Assistant Professor & Moot Court Director",
    qualification: "LL.M. (Criminal Law), High Court Advocate",
    department: "Criminal & Procedural Law",
    specialization: "Criminal Procedure, Evidence & Forensic Science",
    bio: "Practicing advocate with 14 years at Supreme Court & Delhi High Court. Directs Ishan Clinical Legal Training.",
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg"
  },
  {
    name: "Dr. Meenakshi Sundaram",
    designation: "Assistant Professor",
    qualification: "Ph.D., LL.M. (Human Rights & International Law)",
    department: "Human Rights & Public Law",
    specialization: "Environmental Law & Humanitarian Jurisprudence",
    bio: "Published author in international law journals. Heads the Community Legal Aid Clinic.",
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg"
  }
];

export default function FacultyPage() {
  const { data } = useIshanLawData("faculty");
  const ref = useScrollReveal([data]);

  const faculty = Array.isArray(data) && data.length > 0 ? data : defaultFaculty;
  const departments = ["All", ...Array.from(new Set(faculty.map((f: any) => f.dept || f.department || "General"))).filter(Boolean) as string[]];

  const [filter, setFilter] = useState("All");
  const [facultySearch, setFacultySearch] = useState("");

  const filtered = faculty.filter((f: any) => {
    const matchesDept = filter === "All" || (f.dept || f.department) === filter;
    const matchesSearch = facultySearch.trim() === "" || 
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) || 
      (f.specialisation || f.specialization || "").toLowerCase().includes(facultySearch.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <Layout>
      <PageHeader
        title="Faculty Directory"
        subtitle="Distinguished legal scholars and practicing advocates shaping future judicial leaders"
        breadcrumbs={[{ label: "Faculty" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Academic Excellence</p>
              <h2 className="font-bold text-foreground leading-tight">Guided by Expert Mentors</h2>
              <p className="text-foreground/70 leading-relaxed">
                Ishan Law's faculty combines academic scholarship with courtroom experience — permanent faculty hold LLM and PhD qualifications in specialised areas of law; visiting advocates bring current practice insights; together they prepare students not just to understand law but to argue it.
              </p>
            </div>
            <div className="reveal hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-4.jpg" alt="Ishan Law Faculty" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>

          <div className="reveal max-w-2xl mx-auto mb-12 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Search faculty by name or specialization..."
              value={facultySearch}
              onChange={(e) => setFacultySearch(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-card border rounded-2xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-sm"
            />
            {facultySearch && (
              <button 
                onClick={() => setFacultySearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="reveal flex flex-wrap gap-2 mb-10 justify-center">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors active:scale-[0.97] ${
                  filter === d ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((f: any, i: number) => {
              const defaultAvatars = [
                "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg",
                "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg",
                "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg",
                "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg"
              ];
              const facultyImage = f.image || f.photo || f.avatar || defaultAvatars[i % defaultAvatars.length];
              return (
                <div key={f.name || i} className={`reveal delay-${Math.min(i % 4, 3)}00 bg-card rounded-2xl border p-6 text-center hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-all flex flex-col justify-between group`}>
                  <div>
                    <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 overflow-hidden border-2 border-gold/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={facultyImage} 
                        alt={f.name} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = defaultAvatars[i % defaultAvatars.length];
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-base leading-snug">{f.name}</h3>
                    <p className="text-xs text-gold font-semibold mt-1">{f.designation}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{f.qualification}</p>
                    <div className="mt-4 pt-3 border-t border-border/60">
                      <p className="text-xs font-semibold text-navy mb-2">{f.specialisation || f.specialization}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed text-left line-clamp-3">{f.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/40">
                    <span className="px-2.5 py-1 rounded-md bg-muted text-[11px] font-medium text-muted-foreground">{f.dept || f.department}</span>
                    {f.publications && <span className="text-xs font-semibold text-gold">{f.publications} Publications</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
