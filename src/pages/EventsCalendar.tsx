import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, Share2 } from "lucide-react";
import EnquiryCTA from "@/components/EnquiryCTA";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function EventsCalendarPage() {
  const ref = useScrollReveal();

  const events = [
    {
      name: "National Seminar on Digital Business & Cyber Law",
      date: "May 15, 2024",
      venue: "Main Auditorium",
      category: "Academic",
      description: "A comprehensive seminar on how digital transformation and cyber jurisprudence are reshaping commercial legal practices.",
    },
    {
      name: "Lex Novitas 2024: Annual National Moot Court Competition",
      date: "June 05-07, 2024",
      venue: "High Court Simulation Hall",
      category: "Moot Court",
      description: "Flagship 3-day moot court tournament with teams competing from 40+ premier Indian law universities.",
    },
    {
      name: "Mega Legal Placement & Internship Drive",
      date: "May 20, 2024",
      venue: "Placement Cell & Moot Hall",
      category: "Placement",
      description: "Annual recruitment and apprenticeship drive with leading law firms, corporate houses, and senior advocates.",
    },
    {
      name: "Workshop on Constitutional & Criminal Trial Advocacy",
      date: "May 10, 2024",
      venue: "Seminar Hall 1",
      category: "Workshop",
      description: "Hands-on litigation skill development workshop conducted by designated senior advocates of Allahabad High Court.",
    },
  ];

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="Events Calendar"
        subtitle="Stay updated with academic, cultural, and professional events at Ishan Law Institute."
        breadcrumbs={[{ label: "Events Calendar" }]}
      />
    ),
    calendar_schedule: (
      <section key="calendar_schedule" className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="reveal-up space-y-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">What's Happening</p>
              <h2 className="font-bold text-foreground leading-tight">
                Plan Your Campus Experience
              </h2>
              <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Ishan Law Institute maintains a packed events calendar including national seminars, guest lectures, moot court tournaments, sports meets, and placement drives. This helps students plan their participation and never miss an opportunity for growth.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-xs font-bold text-navy hover:bg-gold hover:text-white transition-all shadow-sm">
                  <Share2 className="w-3 h-3" /> Export to Google Calendar
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-xs font-bold text-navy hover:bg-gold hover:text-white transition-all shadow-sm">
                  <Share2 className="w-3 h-3" /> Download iCal
                </button>
              </div>
            </div>

            <div className="reveal-up grid gap-6">
              {events.map((e, i) => (
                <div key={i} className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-card hover:border-gold transition-all duration-300">
                  <div className="md:w-32 shrink-0 flex flex-col items-center justify-center p-4 bg-muted rounded-xl text-center group-hover:bg-gold group-hover:text-white transition-colors">
                    <Calendar className="w-6 h-6 mb-2" />
                    <span className="text-sm font-bold uppercase tracking-tighter leading-none">{e.date.split(',')[0]}</span>
                    <span className="text-xl font-black leading-none">{e.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-gold/10 text-xs font-bold text-gold uppercase tracking-widest">{e.category}</span>
                      <div className="flex items-center gap-1.5 text-foreground/50 text-xs font-medium">
                        <MapPin className="w-3 h-3" /> {e.venue}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{e.name}</h3>
                      <p className="text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-32 flex items-center justify-end">
                    <button className="px-4 py-2 rounded-lg bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    cta: (
      <EnquiryCTA key="cta" />
    )
  };

  const defaultOrder = ["header", "calendar_schedule", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="events_calendar"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
