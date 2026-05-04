import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";
import libraryImg from "@/assets/students-library.jpg";

const defaultHighlights = [
  "BCI Approved & CCS University Affiliated",
  "NAAC Accredited Institution",
  "Integrated Clinical Legal Education",
  "Dedicated Moot Court & Legal Aid Cell",
];

export default function AboutSection() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("homepage");
  const apiAbout = data?.aboutIimt;
  const about = {
    title: apiAbout?.title || "Excellence in Legal Education & Professional Practice",
    description: apiAbout?.description || "Ishan Institute of Law, established as a premier center for legal studies, is dedicated to producing ethical and skilled advocates. Recognized by the Bar Council of India (BCI) and affiliated to CCS University, Meerut, we combine rigorous academic curriculum with mandatory court exposure and community legal service.",
    image: (apiAbout?.image && apiAbout.image.length > 5) ? apiAbout.image : "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg"
  };

  return (
    <section id="about" className="py-12 md:py-20" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)] bg-muted border">
              <img
                src={about.image}
                alt="Ishan Law Campus"
                className="w-full h-[400px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-xl shadow-[0_4px_24px_hsl(var(--navy)/0.12)] p-5 border">
              <p className="text-3xl font-display font-bold text-navy">BCI</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Approved</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Ishan Law</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              A Legacy of Legal Excellence in Greater Noida
            </h2>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
              {about.description}
            </p>
            <div className="space-y-3 pt-2">
              {defaultHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-navy hover:text-navy/80 transition-colors group"
            >
              Learn More About Us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
