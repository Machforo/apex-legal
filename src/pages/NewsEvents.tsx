import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Calendar, Search, X } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function NewsEventsPage() {
  const ref = useScrollReveal();

  const { data,loading, error } = useIshanLawData("news");

  const [activeCategory, setActiveCategory] = useState("All");
  const [newsSearch, setNewsSearch] = useState("");

  // Transform API data safely
  const events = Array.isArray(data)
    ? data.map((item) => ({
        ...item,
        excerpt: item.description || "",
        title: item.title || "",
        category: item.category || "",
      }))
    : [];

  // Categories
  const categories = [
    "All",
    ...Array.from(
      new Set(
        events
          .map((item) => item.category)
          .filter(Boolean)
      )
    ),
  ];

  // Search + Category Filter
  const filteredEvents = events.filter((event) => {
    const searchTerm = newsSearch.trim().toLowerCase();

    const matchesCategory =
      activeCategory === "All" ||
      event.category === activeCategory;

    const matchesSearch =
      !searchTerm ||
      event.title.toLowerCase().includes(searchTerm) ||
      event.excerpt.toLowerCase().includes(searchTerm) ||
      event.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  console.log("News Data:", data);
  console.log("Filtered Events:", filteredEvents);

  return (
    <Layout>
      <PageHeader
        title="News & Events"
        subtitle="Stay updated with the latest happenings at Ishan Law — moot courts, legal aid camps, seminars, and more"
        breadcrumbs={[{ label: "News & Events" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {/* Search Box */}
          <div className="reveal max-w-2xl mx-auto mb-10 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-gold transition-colors" />

            <input
              type="text"
              placeholder="Search news, events, seminars..."
              value={newsSearch}
              onChange={(e) => setNewsSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-card border rounded-2xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-sm"
            />

            {newsSearch && (
              <button
                onClick={() => setNewsSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="reveal flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all active:scale-[0.97] ${
                  activeCategory === category
                    ? "bg-navy text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-20">
              <p>Loading news and events...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20 text-red-500">
              <p>Failed to load news and events.</p>
            </div>
          )}

          {/* Events Grid */}
          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((item, index) => (
                  <article
                    key={item._id || index}
                    className="group bg-card rounded-xl border overflow-hidden shadow-sm hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow cursor-pointer"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl font-bold text-muted-foreground/20">
                            {(item.category ||
                              item.title ||
                              "N")[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        {item.category && (
                          <span className="px-2.5 py-1 rounded-md bg-gold-light text-xs font-medium text-navy">
                            {item.category}
                          </span>
                        )}

                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="font-semibold text-foreground leading-snug mb-2 group-hover:text-navy transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <h3 className="text-xl font-semibold mb-2">
                    No Results Found
                  </h3>

                  <p className="text-muted-foreground">
                    Try another search term or category.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}