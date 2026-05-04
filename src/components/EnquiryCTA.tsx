import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function EnquiryCTA({ title = "Ready to Begin Your Journey?", subtitle = "Connect with our admissions team for guidance on programs, eligibility, and scholarships." }: { title?: string; subtitle?: string }) {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-20 bg-navy" ref={ref}>
      <div className="container-wide text-center">
        <h2 className="reveal font-bold text-primary-foreground">{title}</h2>
        <p className="reveal delay-100 mt-3 text-primary-foreground/60 max-w-xl mx-auto">{subtitle}</p>
        <div className="reveal delay-200 flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-gold text-foreground rounded-lg shadow-[0_4px_16px_hsl(var(--gold)/0.35)] hover:shadow-[0_6px_24px_hsl(var(--gold)/0.45)] transition-shadow active:scale-[0.97]">
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:+918448797700" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary-foreground border border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/5 transition-colors active:scale-[0.97]">
            Call: 8448797700
          </a>
        </div>
      </div>
    </section>
  );
}
