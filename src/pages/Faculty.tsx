import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultDepartments = ["All", "Management", "Commerce", "IT", "Education"];

const defaultFaculty = [
  { name: "Dr. Ramesh Kumar", designation: "Professor & HoD", dept: "Management", qualification: "PhD, MBA", specialisation: "Strategic Management & Marketing" },
  { name: "Dr. Sunita Sharma", designation: "Associate Professor", dept: "Commerce", qualification: "PhD, M.Com, UGC NET", specialisation: "Financial Accounting & Taxation" },
  { name: "Prof. Anil Verma", designation: "Assistant Professor", dept: "IT", qualification: "MCA, M.Tech", specialisation: "Data Structures & Software Engineering" },
  { name: "Dr. Meena Gupta", designation: "Professor & HoD", dept: "Education", qualification: "PhD, M.Ed", specialisation: "Pedagogy & Curriculum Development" },
  { name: "Dr. Vikash Singh", designation: "Associate Professor", dept: "Management", qualification: "PhD, MBA", specialisation: "Human Resource Management" },
  { name: "Prof. Priya Jain", designation: "Assistant Professor", dept: "Commerce", qualification: "M.Com, CA Inter, UGC NET", specialisation: "Cost Accounting & Auditing" },
  { name: "Dr. Rajesh Tiwari", designation: "Associate Professor", dept: "IT", qualification: "PhD, MCA", specialisation: "Database Systems & Cloud Computing" },
  { name: "Prof. Kavita Yadav", designation: "Assistant Professor", dept: "Education", qualification: "M.Ed, UGC NET", specialisation: "Educational Psychology" },
  { name: "Dr. Sanjay Mishra", designation: "Professor", dept: "Management", qualification: "PhD, MBA, FDP (IIM)", specialisation: "Operations & Supply Chain Management" },
  { name: "Prof. Neha Agarwal", designation: "Assistant Professor", dept: "Commerce", qualification: "M.Com, UGC NET", specialisation: "Banking & Financial Services" },
  { name: "Prof. Amit Chauhan", designation: "Assistant Professor", dept: "IT", qualification: "M.Tech, MCA", specialisation: "Web Technologies & Python" },
  { name: "Dr. Pooja Rawat", designation: "Associate Professor", dept: "Education", qualification: "PhD, M.Ed", specialisation: "Inclusive Education & Assessment" },
];

export default function FacultyPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("campuslife");

  const faculty = data?.faculty?.length > 0 ? data.faculty : defaultFaculty;
  const departments = ["All", ...Array.from(new Set(faculty.map((f: any) => f.dept || f.department || "General"))).filter(Boolean) as string[]];

  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? faculty : faculty.filter((f: any) => (f.dept || f.department) === filter);

  return (
    <Layout>
      <PageHeader
        title="Faculty Directory"
        subtitle="Experienced academicians and industry practitioners shaping future professionals"
        breadcrumbs={[{ label: "Faculty" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="reveal flex flex-wrap gap-2 mb-10">
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
            {filtered.map((f: any, i: number) => (
              <div key={f.name || i} className={`reveal delay-${Math.min(i % 4, 3)}00 bg-card rounded-xl border p-6 text-center hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="w-20 h-20 mx-auto rounded-full bg-gold-light flex items-center justify-center mb-4 overflow-hidden">
                  {f.image ? (
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-display font-bold text-navy">
                      {f.name?.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground text-sm">{f.name}</h3>
                <p className="text-xs text-gold font-medium mt-1">{f.designation}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.qualification}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-foreground/60">{f.specialisation || f.specialization}</p>
                </div>
                <span className="inline-block mt-3 px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">{f.dept || f.department}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
