import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About IIMT", href: "/about" },
  { label: "Programs", href: "/courses/bba" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Gallery", href: "/photo-gallery" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Downloads", href: "/downloads" },
];

const programs = [
  { label: "BBA", href: "/courses/bba" },
  { label: "B.Com", href: "/courses/bcom" },
  { label: "BCA", href: "/courses/bca" },
  { label: "M.Com", href: "/courses/mcom" },
  { label: "B.Ed", href: "/courses/bed" },
  { label: "M.Ed", href: "/courses/med" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="IIMT Logo" className="h-12 w-auto" />
              <div>
                <p className="font-display font-bold text-xl">ISHAN</p>
                <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/50">Institute of Management & Technology</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">NAAC Accredited | Affiliated to CCS University, Meerut | Approved by UGC & AICTE</p>
            <div className="flex gap-3 pt-1">
              {["Facebook", "YouTube", "Instagram"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 flex items-center justify-center text-xs font-medium text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">{s[0]}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}><Link to={l.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.label}><Link to={p.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">{p.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold" /><span className="text-sm text-primary-foreground/50">Knowledge Park-III, Greater Noida, UP 201308</span></div>
              <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 shrink-0 text-gold" /><a href="tel:+918448797700" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">8448797700</a></div>
              <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 shrink-0 text-gold" /><a href="mailto:info@ishan.ac" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">info@ishan.ac</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/30">© {new Date().getFullYear()} Ishan Institute of Management & Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">Privacy Policy</Link>
            <Link to="/anti-ragging" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">Anti-Ragging</Link>
            <Link to="/grievance-redressal" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">Grievance Redressal</Link>
            <Link to="/mandatory-disclosure" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">Mandatory Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
