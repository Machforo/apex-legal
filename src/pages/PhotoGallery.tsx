import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultAlbums = [
  { 
    category: "Moot Court", 
    date: "April 2026", 
    images: [
      { id: "mc-1", alt: "Moot Court 1", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" },
      { id: "mc-2", alt: "Moot Court 2", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg" },
      { id: "mc-3", alt: "Moot Court 3", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-6.jpg" },
      { id: "mc-4", alt: "Moot Court 4", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-9.jpg" },
    ]
  },
  { 
    category: "Court & Jail Visits", 
    date: "March 2026", 
    images: [
      { id: "cv-1", alt: "Court Visit 1", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-10.jpg" },
      { id: "cv-2", alt: "Court Visit 2", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-11.jpg" },
      { id: "cv-3", alt: "Court Visit 3", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-12.jpg" },
      { id: "cv-4", alt: "Court Visit 4", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-14.jpg" },
    ]
  },
  { 
    category: "Campus Life", 
    date: "Ongoing", 
    images: [
      { id: "cl-1", alt: "Infrastructure 1", url: "https://law.ishan.ac/static/gallery/infra/infra-16.jpg" },
      { id: "cl-2", alt: "Infrastructure 2", url: "https://law.ishan.ac/static/gallery/infra/infra-2.png" },
      { id: "cl-3", alt: "Infrastructure 3", url: "https://law.ishan.ac/static/gallery/infra/infra-6.jpeg" },
      { id: "cl-4", alt: "Highlights 13", url: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-13.jpg" },
    ]
  },
];

const cmsCategories = ["Moot Court", "Court & Jail Visits", "Seminars & Conferences", "Cultural Activities", "Sports", "Guest Lectures", "Campus Life", "Legal Aid Cell"];

export default function PhotoGalleryPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("gallery");

  // Dynamic albums from CMS or fallback to static placeholders
  // Schema: gallery.photos = [{title, url}] (flat, no categories)
  const photos: Array<{title:string;url:string}> = data?.photos?.length > 0 ? data.photos : [];
  
  const [filter, setFilter] = useState("All");

  const usingCMS = photos.length > 0;
  const albumsToRender = usingCMS ? [] : defaultAlbums;
  const displayCategories = ["All", ...cmsCategories];
  const filtered = usingCMS ? photos : (filter === "All" ? albumsToRender : albumsToRender.filter(a => a.category === filter));

  return (
    <Layout>
      <PageHeader title="Photo Gallery" subtitle="A visual record of moot court competitions, seminars, and campus life" breadcrumbs={[{ label: "Gallery" }, { label: "Photos" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <p className="reveal text-foreground/70 leading-relaxed max-w-4xl mx-auto text-center mb-16 text-lg">
            Ishan Law's gallery is a visual record — moot court competitions, court visits, seminars, cultural activities, campus life; browse through albums below.
          </p>

          <div className="reveal flex flex-wrap gap-2 mb-10 justify-center">
            {displayCategories.map((c) => (
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
                <div className="flex items-baseline gap-4 mb-5">
                  <h2 className="text-xl font-display font-bold text-foreground">{album.category}</h2>
                  <span className="text-sm text-muted-foreground">{album.date}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {album.images.map((img, i) => (
                    <div className={`reveal delay-${Math.min(i % 4, 3)}00 aspect-[4/3] rounded-xl bg-muted border overflow-hidden group cursor-pointer`}>
                      <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop";
                        }}
                      />
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
