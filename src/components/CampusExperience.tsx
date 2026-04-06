import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import auditoriumImg from "@/assets/auditorium.jpg";
import heroImg from "@/assets/hero-campus.jpg";
import libraryImg from "@/assets/students-library.jpg";

const galleryImages = [
  { title: "Smart Classrooms", img: heroImg, category: "Academic" },
  { title: "Advanced IT Labs", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800", category: "Technical" },
  { title: "Central Library", img: libraryImg, category: "Research" },
  { title: "Hostel Life", img: "https://images.unsplash.com/photo-1555854816-808226a3f5a7?auto=format&fit=crop&w=800", category: "Residential" },
  { title: "Grand Auditorium", img: auditoriumImg, category: "Events" },
  { title: "Sports Complex", img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800", category: "Sports" },
  { title: "Student Lounge", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800", category: "Social" },
  { title: "Science Labs", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800", category: "Science" },
  { title: "Cafeteria", img: "https://images.unsplash.com/photo-1565706482630-1439442b66cb?auto=format&fit=crop&w=800", category: "Lifestyle" },
  { title: "Green Spaces", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800", category: "Environment" },
  { title: "Computer Center", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800", category: "Technical" },
  { title: "Medical Room", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800", category: "Facilities" },
  { title: "Gymnasium", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800", category: "Fitness" },
  { title: "Convocation", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800", category: "Life" },
  { title: "Digital Library", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800", category: "Research" },
];

export default function CampusExperience() {
  const ref = useScrollReveal();
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Subtle rotation of images in specific tiles to keep it "dynamic"
  useEffect(() => {
    const interval = setInterval(() => {
      const tileToChange = Math.floor(Math.random() * 10);
      const nextImage = Math.floor(Math.random() * galleryImages.length);
      setActiveIndices(prev => {
        const next = [...prev];
        next[tileToChange] = nextImage;
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 bg-navy text-white overflow-hidden min-h-screen flex flex-col justify-center snap-start" ref={ref}>
      <div className="container-wide">
        <div className="mb-10 md:mb-12">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 opacity-80">Life at IIMT</p>
          <h2 className="reveal delay-100 text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl">
            Experience the <span className="text-gold">Holistic</span> Campus Ecosystem
          </h2>
        </div>

        {/* High-Density Masonry Collage Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[140px] lg:auto-rows-[160px]">
          {/* Main Hero Tile */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndices[0]}
                src={galleryImages[activeIndices[0]].img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest">{galleryImages[activeIndices[0]].category}</span>
              <h3 className="text-lg md:text-xl font-display font-bold mt-1">{galleryImages[activeIndices[0]].title}</h3>
            </div>
          </div>

          {/* Medium/Small Tiles */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[1]} src={galleryImages[activeIndices[1]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[2]} src={galleryImages[activeIndices[2]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[3]} src={galleryImages[activeIndices[3]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[4]} src={galleryImages[activeIndices[4]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[5]} src={galleryImages[activeIndices[5]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[6]} src={galleryImages[activeIndices[6]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[7]} src={galleryImages[activeIndices[7]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[8]} src={galleryImages[activeIndices[8]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>

          <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[9]} src={galleryImages[activeIndices[9]].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
