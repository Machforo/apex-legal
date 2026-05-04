import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, Phone, Mail, ChevronDown,
  BookOpen, Users, Award, Building2, GraduationCap,
  Camera, Microscope, ArrowRight, FileText, Shield,
  MessageSquare, Briefcase, Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLink { label: string; href: string; }
interface MegaColumn { heading: string; icon: React.ElementType; links: NavLink[]; }
interface FeaturedCard { img: string; title: string; desc: string; href: string; }
interface NavItem {
  label: string;
  featured: FeaturedCard;
  columns: MegaColumn[];
  extraImgs?: { img: string; caption: string; href: string }[];
}

// ─── Navigation Data ──────────────────────────────────────────────────────────
const navLinks: NavItem[] = [
  {
    label: "About Us",
    featured: {
      img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg",
      title: "Excellence in Legal Education",
      desc: "BCI Approved & NAAC Accredited institution in Greater Noida, dedicated to producing ethical legal professionals.",
      href: "/about",
    },
    columns: [
      {
        heading: "Institution",
        icon: Building2,
        links: [
          { label: "About Ishan Law", href: "/about" },
          { label: "Principal's Message", href: "/principal-message" },
          { label: "Mission & Vision", href: "/mission-vision" },
          { label: "Why Choose Us", href: "/why-choose-us" },
          { label: "Best Practices", href: "/best-practices" },
          { label: "Green Initiatives", href: "/green-initiatives" },
          { label: "Approvals & Affiliations", href: "/approvals" },
          { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
        ],
      },
      {
        heading: "Regulatory",
        icon: Shield,
        links: [
          { label: "BCI Compliance", href: "/mandatory-disclosure" },
          { label: "Anti-Ragging", href: "/anti-ragging" },
          { label: "Grievance Redressal", href: "/grievance-redressal" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
    ],
  },
  {
    label: "Our Courses",
    featured: {
      img: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
      title: "Professional Law Programs",
      desc: "Integrated BA LLB and Professional LLB programs designed for modern legal practice.",
      href: "/programs-overview",
    },
    columns: [
      {
        heading: "Law Programs",
        icon: GraduationCap,
        links: [
          { label: "Programs Overview", href: "/programs-overview" },
          { label: "BA LLB (Hons) - 5 Years", href: "/courses/ba-llb" },
          { label: "LLB - 3 Years", href: "/courses/llb" },
          { label: "LLM - 2 Years", href: "/courses/llm" },
          { label: "Certificate Programs", href: "/certificate-programs" },
        ],
      },
      {
        heading: "Admissions",
        icon: ArrowRight,
        links: [
          { label: "Admission Process", href: "/admissions" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "Internship & Externship", href: "/internship-externship" },
          { label: "Fee Structure", href: "/fee-payment" },
        ],
      },
    ],
  },
  {
    label: "Learning",
    featured: {
      img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg",
      title: "Clinical Legal Education",
      desc: "Beyond textbooks: Moot courts, legal aid clinics, and direct court exposure.",
      href: "/moot-court",
    },
    columns: [
      {
        heading: "Clinical Training",
        icon: Microscope,
        links: [
          { label: "Moot Court Sessions", href: "/moot-court" },
          { label: "Legal Aid Cell", href: "/legal-aid-cell" },
          { label: "Court & Jail Visits", href: "/court-jail-visits" },
          { label: "Skill Development", href: "/skill-development" },
        ],
      },
      {
        heading: "Faculty",
        icon: Users,
        links: [
          { label: "Faculty Directory", href: "/faculty" },
          { label: "Visiting Faculty", href: "/visiting-faculty" },
        ],
      },
      {
        heading: "Events",
        icon: Camera,
        links: [
          { label: "News & Events", href: "/news-events" },
          { label: "Debates & GD", href: "/debates-gd" },
          { label: "Cultural Activities", href: "/cultural-activities" },
          { label: "Guest Lectures", href: "/guest-lectures" },
        ],
      },
    ],
  },
  {
    label: "Campus",
    featured: {
      img: "https://law.ishan.ac/static/gallery/infra/infra-16.jpg",
      title: "World-Class Infrastructure",
      desc: "Purpose-designed campus with specialized legal library and IT facilities.",
      href: "/infrastructure",
    },
    columns: [
      {
        heading: "Facilities",
        icon: Building2,
        links: [
          { label: "Infrastructure", href: "/infrastructure" },
          { label: "Legal Library", href: "/library" },
          { label: "IT Lab", href: "/it-lab" },
          { label: "Auditorium", href: "/auditorium" },
          { label: "Hostel Facilities", href: "/hostel" },
          { label: "Sports", href: "/sports" },
        ],
      },
      {
        heading: "Gallery",
        icon: Camera,
        links: [
          { label: "Photo Gallery", href: "/photo-gallery" },
          { label: "Video Gallery", href: "/video-gallery" },
          { label: "Press Coverage", href: "/press-coverage" },
        ],
      },
    ],
  },
  {
    label: "Student Zone",
    featured: {
      img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-8.jpg",
      title: "Student Resources",
      desc: "One-stop access to academic materials, portals, and professional placements.",
      href: "/student-portal",
    },
    columns: [
      {
        heading: "Academic Hub",
        icon: FileText,
        links: [
          { label: "Downloads", href: "/downloads" },
          { label: "Past Exam Papers", href: "/past-papers" },
          { label: "Code of Conduct", href: "/code-of-conduct" },
          { label: "Student Portal", href: "/student-portal" },
        ],
      },
      {
        heading: "Career & Research",
        icon: Briefcase,
        links: [
          { label: "Placements", href: "/placements" },
          { label: "Research Journal", href: "/research-journal" },
          { label: "Publications", href: "/publications" },
          { label: "Alumni Network", href: "/alumni-network" },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    featured: {
      img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-7.jpg",
      title: "Get in Touch",
      desc: "Reach out to Ishan Law for admissions, career opportunities, and feedback.",
      href: "/contact",
    },
    columns: [
      {
        heading: "Connect",
        icon: Phone,
        links: [
          { label: "Contact Us", href: "/contact" },
          { label: "Careers", href: "/careers" },
          { label: "Feedback", href: "/feedback" },
        ],
      },
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Navbar({ isNotFound = false }: { isNotFound?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Searchable items
  const searchableItems = [
    { name: "BA LLB (Hons)", href: "/courses/ba-llb" },
    { name: "LLB (3 Years)", href: "/courses/llb" },
    { name: "LLM (2 Years)", href: "/courses/llm" },
    { name: "Moot Court", href: "/moot-court" },
    { name: "Legal Aid Cell", href: "/legal-aid-cell" },
    { name: "Admissions", href: "/admissions" },
    { name: "Placements", href: "/placements" },
    { name: "Faculty", href: "/faculty" },
    { name: "Contact Us", href: "/contact" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "News & Events", href: "/news-events" },
  ];

  const filteredItems = searchQuery.trim().length > 0 
    ? searchableItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  useEffect(() => { 
    setMobileOpen(false); 
    setOpenDropdown(null); 
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const adjustFont = (amount: number) => {
    const root = document.documentElement;
    // Default to 16 if not set
    const currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--base-font-size') || "16");
    const newSize = Math.max(12, Math.min(24, currentSize + amount));
    root.style.setProperty('--base-font-size', `${newSize}px`);
    localStorage.setItem('ishan_law_font_size', newSize.toString());
  };

  const resetFont = () => {
    document.documentElement.style.setProperty('--base-font-size', '16px');
    localStorage.setItem('ishan_law_font_size', '16');
  };

  useEffect(() => {
    const savedSize = localStorage.getItem('ishan_law_font_size');
    if (savedSize) {
      document.documentElement.style.setProperty('--base-font-size', `${savedSize}px`);
    }
  }, []);

  const activeLink = navLinks.find((l) => l.label === openDropdown) ?? null;
  const textCls = (scrolled || isNotFound)
    ? "text-navy/80 hover:text-navy hover:bg-muted"
    : "text-white hover:text-white hover:bg-white/10 drop-shadow-lg";

  return (
    <>
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      {/* Must be `relative` so absolute mega-panel child is positioned from header bottom */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${(scrolled || isNotFound) ? "bg-card shadow-lg" : "bg-transparent"}`}
        onMouseLeave={closeMenu}
      >

        {/* ── Top info bar ── */}
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
              {/* Font controls */}
              <div className="flex items-center gap-1.5 opacity-80 border-r border-white/20 pr-4">
                <span className="text-[10px] uppercase tracking-wider opacity-60">Text:</span>
                <button onClick={() => adjustFont(-1)} className="w-5 h-5 flex items-center justify-center hover:bg-white/10 rounded transition-colors" title="Decrease font size" aria-label="Decrease font size">A-</button>
                <button onClick={resetFont} className="w-5 h-5 flex items-center justify-center hover:bg-white/10 rounded transition-colors" title="Reset font size" aria-label="Reset font size">A</button>
                <button onClick={() => adjustFont(1)} className="w-5 h-5 flex items-center justify-center hover:bg-white/10 rounded transition-colors" title="Increase font size" aria-label="Increase font size">A+</button>
              </div>
              <Link to="/fee-payment" className="opacity-80 hover:opacity-100 transition-opacity">Fee Payment</Link>
              <span className="opacity-30">|</span>
              <Link to="/student-portal" className="opacity-80 hover:opacity-100 transition-opacity">Student Portal</Link>
              <span className="opacity-30">|</span>
              <Link to="/news-events" className="opacity-80 hover:opacity-100 transition-opacity">News</Link>
            </div>
          </div>
        </div>

        {/* ── Main nav bar ── */}
        <div className={`container-wide flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 md:h-[64px]" : "h-16 md:h-20"}`}>

          {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-white overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 border border-gold/20 p-1">
              <img 
                src="/favicon.png" 
                alt="Ishan Law Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-navy"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>';
                }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors duration-500 ${(scrolled || isNotFound) ? "text-navy" : "text-white drop-shadow-lg"}`}>
                ISHAN
              </span>
              <span className={`text-[9px] uppercase font-bold tracking-[0.15em] leading-none transition-colors duration-500 ${(scrolled || isNotFound) ? "text-muted-foreground" : "text-white/90 drop-shadow-md"}`}>
                Institute of Law
              </span>
            </div>
          </Link>

          {/* Desktop nav — only trigger buttons here */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className={`flex items-center gap-1 px-3 py-1.5 text-[13px] font-bold transition-all rounded-md ${textCls} ${openDropdown === link.label ? "bg-white/10" : ""}`}
                onMouseEnter={() => openMenu(link.label)}
              >
                {link.label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
              </button>
            ))}
          </nav>

          {/* Search + CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className={`hidden md:flex p-2 rounded-xl transition-all ${scrolled ? "hover:bg-muted text-navy" : "text-white hover:bg-white/10"}`}
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/admissions"
              className={`hidden md:inline-flex items-center px-5 py-2.5 text-[13px] font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] shimmer-btn ${scrolled ? "bg-gold text-navy hover:scale-[1.02]" : "bg-white text-navy hover:bg-gold hover:scale-[1.05]"}`}
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all ${scrolled ? "hover:bg-muted text-navy" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ═══════════════ FULL-WIDTH MEGA MENU PANEL ═══════════════
            Rendered as a DIRECT child of <header> so top:100% = bottom of header.
            left-0 right-0 makes it span the full viewport width.            */}
        {activeLink && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 animate-slide-in-nav shadow-[0_16px_64px_hsl(0,0%,0%,0.18)]"
            onMouseEnter={() => openMenu(activeLink.label)}
          >
            {/* Thin visual separator */}
            <div className="h-px w-full bg-border/60" />

            <div className="bg-card">
              {/* Inner centred content — uses same max-width as the rest of the site */}
              <div className="container-wide py-6">
                <div className="flex gap-6">

                  {/* Left: featured image card */}
                  <Link
                    to={activeLink.featured.href}
                    className="relative w-72 shrink-0 rounded-2xl overflow-hidden group"
                    style={{ minHeight: "240px" }}
                  >
                    <img
                      src={activeLink.featured.img}
                      alt={activeLink.featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Explore</p>
                      <h3 className="font-display font-bold text-base leading-tight mb-1">{activeLink.featured.title}</h3>
                      <p className="text-[12px] text-white/75 leading-snug">{activeLink.featured.desc}</p>
                      <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-bold text-gold group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>

                  {/* Right: columns + optional image tiles */}
                  <div className="flex-1 min-w-0">

                    {/* Link columns */}
                    <div
                      className="grid gap-6"
                      style={{ gridTemplateColumns: `repeat(${activeLink.columns.length}, minmax(0,1fr))` }}
                    >
                      {activeLink.columns.map((col) => {
                        const ColIcon = col.icon;
                        return (
                          <div key={col.heading}>
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                              <div className="w-5 h-5 rounded bg-gold/10 flex items-center justify-center shrink-0">
                                <ColIcon className="w-3 h-3 text-gold" />
                              </div>
                              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-foreground/50">
                                {col.heading}
                              </p>
                            </div>
                            <ul className="space-y-0.5">
                              {col.links.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    to={item.href}
                                    className="block px-2 py-[5px] text-[13px] font-medium text-foreground/70 rounded-md hover:text-navy hover:bg-muted transition-all hover:pl-3"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Extra image tiles (Student Zone & Contact) */}
                    {activeLink.extraImgs && activeLink.extraImgs.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 mt-5 pt-4 border-t border-border/40">
                        {activeLink.extraImgs.map((tile) => (
                          <Link
                            key={tile.href}
                            to={tile.href}
                            className="relative rounded-xl overflow-hidden group h-[80px]"
                          >
                            <img
                              src={tile.img}
                              alt={tile.caption}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/60 transition-colors" />
                            <span className="absolute bottom-2 left-3 text-[11px] font-bold text-white drop-shadow">
                              {tile.caption}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-card animate-fade-up max-h-[80vh] overflow-y-auto">
            <div className="container-wide py-4 space-y-1">
              <Link to="/" className="block px-3 py-2.5 text-sm font-bold text-navy">🏠 Home</Link>
              {navLinks.map((link) => {
                const allChildren = link.columns.flatMap((c) => c.links);
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-foreground/80 rounded-md hover:bg-muted"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-0.5 pb-2">
                        {allChildren.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link to="/admissions" className="block mx-3 mt-3 text-center px-5 py-2.5 text-sm font-semibold bg-gold text-foreground rounded-lg">
                Apply Now
              </Link>
            </div>
          </div>
        )}

        {/* ── Global Search Overlay ── */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex flex-col p-6 md:p-20"
            >
              <div className="w-full max-w-4xl mx-auto flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Institutional Search</span>
                  <button 
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="relative mb-12">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gold w-8 h-8" />
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Search courses, pages, faculty..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white/10 pb-6 pl-12 text-3xl md:text-5xl font-display font-bold text-white outline-none focus:border-gold transition-all placeholder:text-white/10"
                  />
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
                  {searchQuery.trim().length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                          <Link 
                            key={item.href}
                            to={item.href}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex items-center justify-between"
                          >
                            <div>
                              <p className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1">Result</p>
                              <h4 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{item.name}</h4>
                            </div>
                            <ArrowRight className="text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))
                      ) : (
                        <div className="col-span-full py-20 text-center">
                          <p className="text-white/40 text-xl italic">No matches found for "{searchQuery}"</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Popular Searches</p>
                      <div className="flex flex-wrap gap-3">
                        {["BA LLB", "LLB", "Moot Court", "Admissions", "Placements", "Contact"].map(tag => (
                          <button 
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="px-6 py-3 rounded-xl bg-white/5 text-white/80 hover:bg-gold hover:text-navy transition-all font-bold text-sm"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
}
