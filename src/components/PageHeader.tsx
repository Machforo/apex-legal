import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  const ref = useScrollReveal();

  return (
    <section className="bg-navy relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--gold) / 0.3) 0%, transparent 50%)" }} />
      </div>
      <div className="relative container-wide py-16 md:py-24">
        {breadcrumbs && (
          <nav className="reveal flex items-center gap-1.5 text-sm text-primary-foreground/50 mb-4 flex-wrap">
            <Link to="/" className="hover:text-primary-foreground/80 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-primary-foreground/80 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-primary-foreground/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal delay-200 mt-4 text-lg text-primary-foreground/60 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
