import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "About Us",
    children: [
      { label: "About IIMT", href: "/about" },
      { label: "Director's Message", href: "/director-message" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Approvals & Affiliations", href: "/approvals" },
      { label: "Why IIMT?", href: "/why-iimt" },
      { label: "Best Practices", href: "/best-practices" },
      { label: "Green Initiatives", href: "/green-initiatives" },
    ],
  },
  {
    label: "Courses",
    children: [
      { label: "BBA", href: "/courses/bba" },
      { label: "B.Com", href: "/courses/bcom" },
      { label: "BCA", href: "/courses/bca" },
      { label: "M.Com", href: "/courses/mcom" },
      { label: "B.Ed", href: "/courses/bed" },
      { label: "M.Ed", href: "/courses/med" },
      { label: "Certificate Programs", href: "/certificate-programs" },
    ],
  },
  {
    label: "Campus Life",
    children: [
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "IT Lab", href: "/it-lab" },
      { label: "Library", href: "/library" },
      { label: "Auditorium", href: "/auditorium" },
      { label: "Sports", href: "/sports" },
      { label: "Hostel", href: "/hostel" },
      { label: "Cultural Activities", href: "/cultural-activities" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Placements", href: "/placements" },
  {
    label: "Gallery",
    children: [
      { label: "Photos", href: "/photo-gallery" },
      { label: "Videos", href: "/video-gallery" },
      { label: "Press Coverage", href: "/press-coverage" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-card shadow-lg" : "bg-transparent"}`}>
      {/* Top bar (only visible when not scrolled or on certain pages) */}
      <div className={`bg-navy/10 backdrop-blur-sm text-white text-sm hidden md:block transition-all duration-500 ${scrolled ? "h-0 overflow-hidden" : "py-2 border-b border-white/10"}`}>
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:info@ishan.ac" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="w-3.5 h-3.5" /> info@ishan.ac
            </a>
            <a href="tel:+918448797700" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="w-3.5 h-3.5" /> 8448797700
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link to="/fee-payment" className="opacity-80 hover:opacity-100 transition-opacity">Fee Payment</Link>
            <span className="opacity-30">|</span>
            <Link to="/student-portal" className="opacity-80 hover:opacity-100 transition-opacity">Student Portal</Link>
            <span className="opacity-30">|</span>
            <Link to="/news-events" className="opacity-80 hover:opacity-100 transition-opacity">News</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`container-wide flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 md:h-[64px]" : "h-16 md:h-20"}`}>
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/favicon.png" alt="IIMT Logo" className="h-8 md:h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors duration-500 ${scrolled ? "text-navy" : "text-white drop-shadow-lg"}`}>ISHAN</span>
            <span className={`text-[9px] uppercase font-bold tracking-[0.15em] leading-none transition-colors duration-500 ${scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-md"}`}>Institute of Management & Technology</span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <button className={`flex items-center gap-1 px-3 py-1.5 text-[13px] font-bold transition-all rounded-md ${scrolled ? "text-navy/80 hover:text-navy hover:bg-muted" : "text-white hover:text-white hover:bg-white/10 drop-shadow-lg"}`}>
                  {link.label} <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 animate-slide-in-nav">
                    <div className="bg-card rounded-xl shadow-2xl border py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link key={child.label} to={child.href} className="block px-4 py-2 text-[13px] font-medium text-foreground/70 hover:text-navy hover:bg-muted transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} to={link.href!} className={`px-3 py-1.5 text-[13px] font-bold transition-all rounded-md ${scrolled ? "text-navy/80 hover:text-navy hover:bg-muted" : "text-white hover:text-white hover:bg-white/10 drop-shadow-lg"}`}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/admissions" className={`hidden md:inline-flex items-center px-5 py-2.5 text-[13px] font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] ${scrolled ? "bg-gold text-navy hover:shadow-gold/30 hover:scale-[1.02]" : "bg-white text-navy hover:bg-gold hover:scale-[1.05]"}`}>
            Apply Now
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-xl transition-all ${scrolled ? "hover:bg-muted text-navy" : "text-white hover:bg-white/10"}`} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-card animate-fade-up max-h-[80vh] overflow-y-auto">
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)} className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground/80 rounded-md">
                      {link.label} <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-0.5">
                        {link.children.map((child) => (
                          <Link key={child.label} to={child.href} className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground">{child.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} to={link.href!} className="block px-3 py-2.5 text-sm font-medium text-foreground/80">{link.label}</Link>
                )
              )}
              <Link to="/admissions" className="block mx-3 mt-3 text-center px-5 py-2.5 text-sm font-semibold bg-gold text-foreground rounded-lg">Apply Now</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
