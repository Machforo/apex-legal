import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useIIMTData } from "@/hooks/useIIMTData";

const albums = [
  { category: "Campus Life", images: Array.from({ length: 8 }, (_, i) => ({ id: `cl-${i}`, alt: `Campus life ${i + 1}` })) },
  { category: "Kshitiz Fest", images: Array.from({ length: 6 }, (_, i) => ({ id: `kf-${i}`, alt: `Kshitiz fest ${i + 1}` })) },
  { category: "Seminars", images: Array.from({ length: 6 }, (_, i) => ({ id: `sm-${i}`, alt: `Seminar ${i + 1}` })) },
  { category: "Sports", images: Array.from({ length: 4 }, (_, i) => ({ id: `sp-${i}`, alt: `Sports ${i + 1}` })) },
  { category: "Industrial Visits", images: Array.from({ length: 4 }, (_, i) => ({ id: `iv-${i}`, alt: `Industrial visit ${i + 1}` })) },
];

const categories = ["All", ...albums.map((a) => a.category)];

export default function PhotoGalleryPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("gallery");

  // Dynamic albums from CMS or fallback to static placeholders
  // Schema: gallery.photos = [{title, url}] (flat, no categories)
  const photos: Array<{title:string;url:string}> = data?.photos?.length > 0 ? data.photos : [];
  
  const defaultAlbums = [
    { category: "Campus Life", images: Array.from({ length: 8 }, (_, i) => ({ id: `cl-${i}`, alt: `Campus life ${i + 1}`, url: "" })) },
    { category: "Kshitiz Fest", images: Array.from({ length: 6 }, (_, i) => ({ id: `kf-${i}`, alt: `Kshitiz fest ${i + 1}`, url: "" })) },
    { category: "Seminars", images: Array.from({ length: 6 }, (_, i) => ({ id: `sm-${i}`, alt: `Seminar ${i + 1}`, url: "" })) },
    { category: "Sports", images: Array.from({ length: 4 }, (_, i) => ({ id: `sp-${i}`, alt: `Sports ${i + 1}`, url: "" })) },
  ];

  const [filter, setFilter] = useState("All");
  
  // If CMS has flat photos, display them as a simple grid
  const usingCMS = photos.length > 0;
  const albums = usingCMS ? [] : defaultAlbums;
  const categories = usingCMS ? ["All"] : ["All", ...defaultAlbums.map(a => a.category)];
  const filtered = usingCMS ? photos : (filter === "All" ? albums : albums.filter(a => a.category === filter));


  return (
    <Layout>
      <PageHeader title="Photo Gallery" subtitle="Capturing moments from campus life, events, and academic activities" breadcrumbs={[{ label: "Gallery" }, { label: "Photos" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="reveal flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors active:scale-[0.97] ${filter === c ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{c}</button>
            ))}
          </div>
          {usingCMS ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {(filtered as Array<{title:string;url:string}>).map((photo, i) => (
                <div key={photo.url || i} className={`reveal delay-${Math.min(i % 4, 3)}00 aspect-[4/3] rounded-xl bg-muted border overflow-hidden group cursor-pointer`}>
                  {photo.url ? (
                    <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 gap-2">
                      <span className="text-muted-foreground/20 text-3xl font-bold">📷</span>
                      <span className="text-xs text-muted-foreground/40 text-center px-2">{photo.title}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            (filtered as typeof defaultAlbums).map((album) => (
              <div key={album.category} className="mb-12">
                <h2 className="text-xl font-display font-bold text-foreground mb-5">{album.category}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {album.images.map((img, i) => (
                    <div key={img.id} className={`reveal delay-${Math.min(i % 4, 3)}00 aspect-[4/3] rounded-xl bg-muted border overflow-hidden group cursor-pointer`}>
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 group-hover:scale-105 transition-transform duration-500">
                        <span className="text-2xl font-display font-bold text-muted-foreground/20">{album.category[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
          {!usingCMS && <p className="text-center text-sm text-muted-foreground mt-8">Upload photos via the CMS gallery manager to populate this section.</p>}

        </div>
      </section>
    </Layout>
  );
}
