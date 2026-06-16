import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { Download, FileText, Search } from "lucide-react";
import { useState } from "react";

export default function PastPapersPage() {
  const { data } = useIshanLawData("pastpapers");
  const ref = useScrollReveal([data]);
  const [searchTerm, setSearchTerm] = useState("");

  const fallbackPapers = [
    { program: "BA LLB", year: "2023", semester: "Sem 1", subject: "Constitutional Law — I", size: "450 KB", fileType: "PDF" },
    { program: "BA LLB", year: "2023", semester: "Sem 1", subject: "Law of Contract", size: "380 KB", fileType: "PDF" },
    { program: "LLB", year: "2022", semester: "Sem 3", subject: "Law of Crimes (IPC)", size: "510 KB", fileType: "PDF" },
    { program: "LLB", year: "2022", semester: "Sem 3", subject: "Family Law — II", size: "420 KB", fileType: "PDF" },
    { program: "LLM", year: "2023", semester: "Sem 2", subject: "Jurisprudence", size: "600 KB", fileType: "PDF" },
    { program: "BA LLB", year: "2021", semester: "Sem 5", subject: "Company Law", size: "490 KB", fileType: "PDF" },
    { program: "LLB", year: "2023", semester: "Sem 4", subject: "Environmental Law", size: "410 KB", fileType: "PDF" },
    { program: "BA LLB", year: "2022", semester: "Sem 2", subject: "Special Contracts", size: "460 KB", fileType: "PDF" },
  ];

  const title = data?.title || "Past Exam Papers";
  const subtitle = data?.subtitle || "University examination archives to aid student preparation";
  const overview = data?.overview || "Browse through previous university examination papers to understand question patterns, weightage of topics, and examination trends. Papers are categorized by program and subject for easy access.";
  const image = data?.image || "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg";
  
  // Transform CMS files to match component structure if necessary
  const papers = data?.files?.length > 0 ? data.files.map((f: any) => {
    const parts = f.category ? f.category.split('|').map((s: string) => s.trim()) : [];
    return {
      subject: f.name,
      fileType: f.fileType || "PDF",
      program: parts[0] || "General",
      year: parts[1] || "",
      semester: parts[2] || "",
      size: f.size || "Unknown",
      url: f.url
    };
  }) : fallbackPapers;

  const filteredPapers = papers.filter((p: any) => 
    p.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: "Students" }, { label: "Past Papers" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 reveal space-y-8">
              <div 
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: overview }}
              />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search by subject, program, or year..." 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border hidden lg:block">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
              </div>
            </div>
            
            <div className="lg:col-span-7 reveal-up delay-100">
              <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-muted border-b">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Programme</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Year / Sem</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredPapers.map((p, i) => (
                        <tr key={i} className="hover:bg-muted/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-navy">{p.program}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-gold" />
                              <span className="text-sm text-foreground/80">{p.subject}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs">{p.year} | {p.semester}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            {p.url ? (
                              <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors font-bold text-xs uppercase tracking-wider">
                                <Download className="w-4 h-4" />
                                {p.size}
                              </a>
                            ) : (
                              <button className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors font-bold text-xs uppercase tracking-wider">
                                <Download className="w-4 h-4" />
                                {p.size}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                      {filteredPapers.length === 0 && (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-foreground/50">
                            No papers found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-6 text-center text-xs text-foreground/50">
                New papers are added after each CCS University examination cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
