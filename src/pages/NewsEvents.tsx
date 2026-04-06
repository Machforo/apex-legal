import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultEvents = [
  { title: "Awareness Program on Gynecological Disorder", date: "April 15, 2025", category: "Seminar", excerpt: "A health awareness session organized for students featuring expert medical practitioners discussing women's health issues.", image: "https://iimt.ishan.ac/images/news/news-1.jpg" },
  { title: "Vyaparniti: The Art of Business and Innovation", date: "April 3, 2025", category: "Event", excerpt: "Annual business competition where students showcase entrepreneurial skills through business plans and case study presentations.", image: "https://iimt.ishan.ac/images/news/news-2.jpg" },
  { title: "Ishan Cultural Fest Kshitiz-2025", date: "March 26, 2025", category: "Cultural", excerpt: "The flagship cultural festival featuring music, dance, drama, art, and inter-college competitions across three days.", image: "https://iimt.ishan.ac/images/news/news-3.jpg" },
  { title: "Digi-Udaya: Seminar on Digital Currency", date: "March 6, 2025", category: "Seminar", excerpt: "Expert-led seminar exploring the future of digital currencies, blockchain technology, and their impact on financial systems.", image: "https://iimt.ishan.ac/images/news/news-4.jpg" },
  { title: "Annual Sports Meet 2025", date: "February 20, 2025", category: "Sports", excerpt: "Inter-department sports competition featuring cricket, basketball, badminton, athletics and more.", image: "" },
  { title: "Industrial Visit to Reserve Bank of India", date: "February 8, 2025", category: "Industrial Visit", excerpt: "B.Com and BBA students visited the RBI facility to understand monetary policy, currency management, and central banking operations.", image: "" },
  { title: "Guest Lecture: Career in Data Science", date: "January 22, 2025", category: "Guest Lecture", excerpt: "Mr. Amit Sharma from Infosys delivered an insightful session on career opportunities in data science and AI for BCA students.", image: "" },
  { title: "Republic Day Celebration", date: "January 26, 2025", category: "Event", excerpt: "Flag hoisting ceremony followed by cultural performances celebrating India's Republic Day with the entire IIMT family.", image: "" },
];

export default function NewsEventsPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("newsevent");
  const events = data?.events?.length > 0 
    ? data.events.map((e: any) => ({ ...e, excerpt: e.description })) 
    : defaultEvents;

  return (
    <Layout>
      <PageHeader
        title="News & Events"
        subtitle="Stay updated with the latest happenings at IIMT — seminars, festivals, sports, and more"
        breadcrumbs={[{ label: "News & Events" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((item: any, i: number) => (
              <article key={item.title || i} className={`reveal delay-${Math.min(i % 3, 2)}00 group bg-card rounded-xl border overflow-hidden shadow-sm hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow cursor-pointer`}>
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-muted-foreground/20">{(item.category || item.title || "N")?.[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    {item.category && <span className="px-2.5 py-1 rounded-md bg-gold-light text-xs font-medium text-navy">{item.category}</span>}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug mb-2 group-hover:text-navy transition-colors">{item.title}</h3>
                  {item.excerpt && <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2">{item.excerpt}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
