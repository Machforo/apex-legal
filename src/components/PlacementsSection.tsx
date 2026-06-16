import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Building2, Users2, Star } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultRecruiters = [];

export default function PlacementsSection() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("homepage");
  const placementsCfg = data?.placements || { heading: "Career Outcomes & Placements", subheading: "Our alumni practice in top-tier firms and judicial courts across India." };
  const recruiters = data?.placements?.recruitingPartners?.length > 0 ? data.placements.recruitingPartners : [
    { name: "Khaitan & Co" }, { name: "Amarchand Mangaldas" }, { name: "Trilegal" }, { name: "Luthra & Luthra" }
  ];

  return (
    <section id="placements" className="py-12 md:py-20" ref={ref}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div 
            className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3 prose prose-sm prose-p:m-0 max-w-none"
            dangerouslySetInnerHTML={{ __html: placementsCfg.subheading || "" }}
          />
          <h2 className="reveal delay-100 font-bold text-foreground leading-tight">
             {placementsCfg.heading}
          </h2>
        </div>

        {/* Recruiters marquee */}
        <div className="reveal delay-300">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Our Recruiting Partners
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-marquee items-center">
              {[...recruiters, ...recruiters].map((rec: any, i) => (
                <div
                  key={`${rec.name}-${i}`}
                  className="shrink-0 mx-6 px-10 py-6 rounded-xl border bg-card text-sm font-semibold flex items-center justify-center whitespace-nowrap min-w-[180px] shadow-sm"
                >
                  {rec.logo ? <img src={rec.logo} alt={rec.name} className="h-14 md:h-16 w-auto object-contain" /> : rec.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
