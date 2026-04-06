import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Award, GraduationCap, Send, User, Phone as PhoneIcon, BookOpen } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";
import heroImg from "@/assets/hero-campus.jpg";

export default function HeroSection() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("homepage");
  const defaultImage = heroImg;
  const banner = data?.banners?.[0] || {
    title: "Shaping Tomorrow's Leaders Since 1994",
    subtitle: "Affiliated to CCS University, Meerut & recognized by UGC. Offering BBA, B.Com, BCA, M.Com, B.Ed & M.Ed programs with industry-driven curriculum.",
    image: defaultImage
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background image & Overlays */}
      <div className="absolute inset-0">
        <img
          src={banner.image || defaultImage}
          alt={banner.title}
          className="w-full h-full object-cover"
        />
        {/* Main Side Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] via-[hsl(var(--navy-dark)/0.6)] to-transparent" />
        {/* Strong Top Gradient for Header Visibility */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-28 pb-12 md:pt-32 md:pb-20 z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* NAAC Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">NAAC Accredited Institution</span>
            </div>

            <h1 className="reveal delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              {banner.title.split("'s").map((part, i) => i === 0 ? <span key={i}>{part}'s </span> : <span key={i} className="text-gold block">{part}</span>)}
            </h1>

            <p className="reveal delay-200 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-medium drop-shadow-md">
              {banner.subtitle}
            </p>

            <div className="reveal delay-300 flex flex-wrap gap-4 pt-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold bg-gold text-navy rounded-xl shadow-[0_8px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                Virtual Tour
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="reveal delay-400 lg:block">
            <div className="bg-card/95 backdrop-blur-md p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/10 max-w-md ml-auto">
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-navy mb-2">Quick Enquiry</h3>
                <p className="text-sm text-muted-foreground">Start your professional journey with us today.</p>
              </div>
              
              <form className="space-y-4">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-gold transition-colors">
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    className="w-full pl-12 pr-4 py-3.5 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-gold transition-colors">
                    <PhoneIcon size={18} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number *" 
                    className="w-full pl-12 pr-4 py-3.5 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-gold transition-colors">
                    <BookOpen size={18} />
                  </div>
                  <select className="w-full pl-12 pr-4 py-3.5 bg-muted/50 border rounded-xl outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none transition-all cursor-pointer">
                    <option>Select Course *</option>
                    <option>BBA</option>
                    <option>BCA</option>
                    <option>B.Com</option>
                    <option>M.Com</option>
                    <option>B.Ed</option>
                    <option>M.Ed</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-navy text-white font-bold rounded-xl shadow-lg hover:bg-navy-dark transition-all transform hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2 group"
                >
                  Apply for Admission
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-[10px] text-center text-muted-foreground mt-4 leading-relaxed">
                  By clicking, you agree to our privacy policy and authorize our counselor to contact you.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave SVG (The Curvy Design) */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100V40C240 10 480 10 720 40C960 70 1200 70 1440 40V100H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
