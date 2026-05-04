import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultStats = [
  { value: "BCI", label: "Approved Programs" },
  { value: "Sem 1", label: "Court Exposure" },
  { value: "2000+", label: "Legal Alumni" },
  { value: "100%", label: "Practical Training" },
];

function AnimatedCounter({ rawValue }: { rawValue: string }) {
  const numMatch = typeof rawValue === 'string' ? rawValue.match(/^[\d,.]+/) : null;
  const target = numMatch ? parseFloat(numMatch[0].replace(/,/g, '')) : parseFloat(rawValue as any) || 0;
  const suffix = typeof rawValue === 'string' ? rawValue.replace(/^[\d,.]+/, '') : "";

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isNaN(target)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-value">
      {isNaN(target) ? rawValue : (count.toLocaleString() + suffix)}
    </span>
  );
}

export default function StatsBar() {
  const ref = useScrollReveal();
  const { data, isLoading } = useIIMTData("homepage");
  
  // Use a ref to keep the stats stable once they are loaded or if using defaults
  const [statsList, setStatsList] = useState(defaultStats);

  useEffect(() => {
    if (data?.numbers?.length > 0) {
      setStatsList(data.numbers);
    }
  }, [data]);

  const brands = [
    { name: "Bar Council of India", logo: "https://law.ishan.ac/all-law/home-page/Logo_of_Bar_Council_of_India.png" },
    { name: "CCS University", logo: "https://law.ishan.ac/images/home/regulatory-4.png" },
    { name: "NAAC", logo: "https://law.ishan.ac/all-law/home-page/naac-2.png" },
    { name: "UGC", logo: "https://law.ishan.ac/static/about/approvals/UGC_India_Logo.png" },
  ];

  return (
    <section className="bg-navy relative z-10 overflow-hidden" ref={ref}>
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16 md:mb-24">
          {statsList.map((stat: any, i: number) => (
            <div
              key={stat.label || i}
              className="text-center"
            >
              <AnimatedCounter rawValue={stat.value?.toString() || "0"} />
              <p className="stat-label text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logos Marquee */}
        <div className="reveal delay-500 pt-8 border-t border-white/10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-8">
            Approved By & Partnered With
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...brands, ...brands].map((brand, i) => (
                <div key={`${brand.name}-${i}`} className="mx-8 md:mx-12 shrink-0 group">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
