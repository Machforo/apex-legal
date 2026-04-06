import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, ArrowRight } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultNews = [
  {
    title: "Awareness Program on Gynecological Disorder",
    date: "April 15, 2025",
    image: "https://iimt.ishan.ac/images/news/news-1.jpg",
  },
  {
    title: "Vyaparniti: The Art of Business and Innovation",
    date: "April 3, 2025",
    image: "https://iimt.ishan.ac/images/news/news-2.jpg",
  },
  {
    title: "Ishan Cultural Fest Kshitiz-2025",
    date: "March 26, 2025",
    image: "https://iimt.ishan.ac/images/news/news-3.jpg",
  },
  {
    title: "Digi-Udaya: Seminar on Digital Currency",
    date: "March 6, 2025",
    image: "https://iimt.ishan.ac/images/news/news-4.jpg",
  },
];

export default function NewsSection() {
  const ref = useScrollReveal();
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
          <a href="#" className="reveal delay-200 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group">
            View All News
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item: any, i: number) => (
            <article
              key={item.title || i}
              className={`reveal delay-${Math.min(i, 4)}00 group bg-card rounded-xl border overflow-hidden shadow-[0_2px_12px_hsl(var(--navy)/0.04)] hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow cursor-pointer`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
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
      </div>
    </section>
  );
}
