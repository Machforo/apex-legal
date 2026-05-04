import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Building2, Users2, Star } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultRecruiters = [
  { name: "Shardul Amarchand Mangaldas", logo: "" },
  { name: "AZB & Partners", logo: "" },
  { name: "Khaitan & Co.", logo: "" },
  { name: "JSA Law", logo: "" },
  { name: "Trilegal", logo: "" },
  { name: "Luthra and Luthra", logo: "" },
  { name: "Dua Associates", logo: "" },
  { name: "Fox Mandal", logo: "" },
  { name: "HDFC Legal", logo: "" },
  { name: "ICICI Legal", logo: "" },
];

export default function PlacementsSection() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("homepage");
  const placementsCfg = data?.placements || { title: "Career Outcomes & Placements", description: "Our alumni practice in top-tier firms and judicial courts across India." };
  const recruiters = data?.recruitingPartners?.length > 0 ? data.recruitingPartners : defaultRecruiters;

  return (
    <section id="placements" className="py-12 md:py-20" ref={ref}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">{placementsCfg.description}</p>
          <h2 className="reveal delay-100 text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
             {placementsCfg.title}
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
              <div className="flex animate-marquee">
              {[...recruiters, ...recruiters].map((rec: any, i) => (
                <div
                  key={`${rec.name}-${i}`}
                  className="shrink-0 mx-6 px-8 py-4 rounded-lg border bg-card text-sm font-semibold text-foreground/60 flex items-center justify-center whitespace-nowrap min-w-[140px]"
                >
                  {rec.logo ? <img src={rec.logo} alt={rec.name} className="h-8 object-contain" /> : rec.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
