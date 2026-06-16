import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mic2, Calendar } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function GuestLecturesPage() {
  const { data: pageData } = useIshanLawData("guestlecturespage");
  const { data: lecturesData } = useIshanLawData("guestlectures");
  const ref = useScrollReveal([pageData, lecturesData]);

  const title = pageData?.title || "Guest Lectures & Seminars";
  const subtitle = pageData?.subtitle || "Insights from Judges, Senior Advocates & Industry Leaders";
  const overview = pageData?.overview || "Ishan Law Institute regularly invites distinguished legal practitioners, retired judges, corporate counsel, and academic experts to share their insights with students. These sessions bridge the gap between legal theory and professional practice.";
  const image = pageData?.image || "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg";

  const defaultLectures = [
    { speaker: "Justice (Retd.) V.K. Shukla", designation: "Former Judge, Allahabad High Court", title: "Judgment Writing & Judicial Reasoning", date: "March 2024", description: "An in-depth session on the craft of writing clear, reasoned, and legally sound judgments — essential for PCS-J aspirants." },
    { speaker: "Adv. Deepika Nair", designation: "Partner, Nair & Co., Supreme Court", title: "Supreme Court Practice: Tips & Strategies", date: "February 2024", description: "Practical insights into filing SLPs, writ petitions, and preparing for Supreme Court hearings from a seasoned practitioner." },
    { speaker: "Mr. Vikram Mehta", designation: "Chief Legal Officer, Tata Consultancy Services", title: "In-House Legal Career: From Law School to C-Suite", date: "January 2024", description: "An inspiring session on building a corporate legal career, covering contract negotiation, IP management, and SEBI compliance." },
  ];

  const lectures = Array.isArray(lecturesData) && lecturesData.length > 0 ? lecturesData : defaultLectures;

  return (
    <Layout>
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Events" }, { label: "Guest Lectures" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="reveal-left">
              <div className="rounded-2xl overflow-hidden border shadow-lg">
                <img src={image} alt={title} className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal-right space-y-5">
              <h2 className="text-3xl font-bold text-navy text-gold-underline">Engaging with Legal Pioneers</h2>
              <div
                className="text-foreground/70 leading-relaxed format-rich-text whitespace-pre-wrap text-lg"
                dangerouslySetInnerHTML={{ __html: overview }}
              />
            </div>
          </div>

          {/* Lecture Cards */}
          <h3 className="text-2xl font-bold text-center mb-10">Recent Lectures & Seminars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectures.map((e: any, i: number) => (
              <div key={i} className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors overflow-hidden shrink-0">
                    {e.image ? (
                      <img src={e.image} alt={e.speaker} className="w-full h-full object-cover" />
                    ) : (
                      <Mic2 className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{e.speaker}</h4>
                    <p className="text-xs text-muted-foreground">{e.designation}</p>
                  </div>
                </div>
                <h5 className="text-sm font-bold text-navy leading-tight mb-3">{e.title || e.topic}</h5>
                <div
                  className="text-xs leading-relaxed text-foreground/70 format-rich-text whitespace-pre-wrap flex-1"
                  dangerouslySetInnerHTML={{ __html: e.description || e.takeaways || e.topics }}
                />
                {e.date && (
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t text-xs font-bold text-gold uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    <span>{e.date}</span>
                  </div>
                )}
                {e.topics && (
                  <p className="text-xs text-muted-foreground mt-2 italic">Topics: {e.topics}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
