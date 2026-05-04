import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, ArrowRight, X, MapPin, Tag, Share2 } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";
import { motion, AnimatePresence } from "framer-motion";

const defaultNews = [
  {
    title: "National Moot Court Competition 2025: Grand Finale",
    date: "April 15, 2025",
    category: "Clinical",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    description: "Ishan Law hosted its flagship National Moot Court Competition, where teams from top law schools across India debated complex constitutional issues. The final round was presided over by a bench of sitting High Court judges, providing students with invaluable feedback and judicial insight.",
    location: "Moot Court Hall, Ishan Law"
  },
  {
    title: "Legal Aid Awareness Camp in Rural Gautam Budh Nagar",
    date: "April 3, 2025",
    category: "Social Service",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    description: "Our Legal Aid Cell organized a community outreach program to provide free legal counseling to villagers. Students, under the supervision of faculty and practicing advocates, addressed issues related to land rights, family law, and government welfare schemes, fulfilling our commitment to social justice.",
    location: "Gautam Budh Nagar District"
  },
  {
    title: "Final Year Students Visit the Supreme Court of India",
    date: "March 26, 2025",
    category: "Institutional",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    description: "Students of the 5th Year BA LLB and 3rd Year LLB programs visited the Supreme Court of India. They observed live proceedings in the Chief Justice's courtroom and interacted with registry officials to understand the judicial administration of the apex court.",
    location: "Supreme Court, New Delhi"
  },
  {
    title: "Expert Lecture on Emerging Trends in Intellectual Property Rights",
    date: "March 6, 2025",
    category: "Guest Lecture",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    description: "Eminent IPR expert and Senior Advocate delivered a comprehensive lecture on the challenges of IP protection in the age of Artificial Intelligence. The session covered global patent trends and the evolving digital copyright landscape in India.",
    location: "Seminar Hall, Ishan Law"
  },
];

export default function NewsSection() {
  const ref = useScrollReveal();
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const { data } = useIIMTData("homepage");
  const news = data?.newsEvents?.length > 0 ? data.newsEvents : defaultNews;

  return (
    <section className="py-20 md:py-28 bg-section-alt" ref={ref}>
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Latest Updates</p>
            <h2 className="reveal delay-100 text-3xl md:text-4xl font-display font-bold text-foreground">
              News &amp; Events
            </h2>
          </div>
          <a href="/news" className="reveal delay-200 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group">
            View All News
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item: any, i: number) => (
            <article
              key={item.title || i}
              onClick={() => setSelectedNews(item)}
              className={`reveal delay-${Math.min(i, 4)}00 group bg-card rounded-xl border overflow-hidden shadow-[0_2px_12px_hsl(var(--navy)/0.04)] hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow cursor-pointer`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-navy rounded-full uppercase tracking-wider">
                    {item.category || "General"}
                  </span>
                </div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="font-semibold text-sm text-foreground leading-snug line-clamp-2 group-hover:text-navy transition-colors">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* ── News Detail Modal ── */}
        <AnimatePresence>
          {selectedNews && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedNews(null)}
                className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
              >
                <button 
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/20 hover:bg-gold text-navy hover:text-white transition-all shadow-lg backdrop-blur-md"
                >
                  <X size={20} />
                </button>

                {/* Left: Image Side */}
                <div className="w-full md:w-5/12 h-60 md:h-auto relative overflow-hidden bg-navy">
                  <img 
                    src={selectedNews.image} 
                    alt={selectedNews.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-gold text-white text-[10px] font-bold rounded-md uppercase tracking-widest">
                      {selectedNews.category || "General"}
                    </span>
                  </div>
                </div>

                {/* Right: Content Side */}
                <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gold" />
                        {selectedNews.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-gold" />
                        {selectedNews.location || "IIMT Campus"}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-navy leading-tight">
                      {selectedNews.title}
                    </h2>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="prose prose-sm prose-navy max-w-none">
                      <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                        {selectedNews.description || "Stay tuned for more updates regarding this event. Detailed coverage and media highlights will be shared soon."}
                      </p>
                    </div>
                    
                    <div className="pt-8 mt-auto border-t border-muted flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg bg-muted text-navy hover:bg-gold hover:text-white transition-all shadow-sm">
                          <Share2 size={16} />
                        </button>
                        <button className="p-2 rounded-lg bg-muted text-navy hover:bg-gold hover:text-white transition-all shadow-sm">
                          <Tag size={16} />
                        </button>
                      </div>
                      <button className="px-8 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-gold transition-all shadow-lg active:scale-95">
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
