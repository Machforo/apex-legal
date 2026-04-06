import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Monitor, Wifi, Clock, Shield } from "lucide-react";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultSpecs = [
  { label: "Computers", value: "120+ desktops" },
  { label: "Internet Speed", value: "100 Mbps dedicated" },
  { label: "Student:Computer", value: "1:1 during lab hours" },
  { label: "Operating Systems", value: "Windows 11, Ubuntu" },
  { label: "Software", value: "MS Office, VS Code, Eclipse, MySQL, Python, Tally" },
  { label: "Timings", value: "8:30 AM – 5:30 PM (Mon-Sat)" },
];

export default function ITLabPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("campuslife");
  const itLab = data?.itLab;
  const content = itLab?.content;
  const specs = itLab?.specs?.length > 0 ? itLab.specs : defaultSpecs;

  return (
    <Layout>
      <PageHeader
        title="IT Lab"
        subtitle="Well-equipped computer labs supporting BCA, BBA, B.Com and certificate programs"
        breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "IT Lab" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal space-y-5 mb-12">
              {content ? (
                <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{content}</p>
              ) : (
                <>
                  <p className="text-foreground/70 leading-relaxed">
                    The IT labs at IIMT are designed to provide hands-on computing experience for students across all programs. Equipped with the latest hardware and licensed software, the labs support practical sessions in programming, database management, web development, and accounting software.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    The lab infrastructure includes 100 Mbps dedicated internet connectivity, networked printers, UPS backup, and professional IT support.
                  </p>
                </>
              )}
            </div>

            <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {specs.map((s: any, i: number) => (
                <div key={s.label || i} className="p-4 rounded-xl border bg-card">
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <p className="text-sm font-semibold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="reveal delay-200 rounded-xl border bg-section-alt p-6">
              <h3 className="font-semibold text-foreground mb-3">Lab Rules</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Students must carry their ID card to access the lab</li>
                <li>• No food or beverages inside the lab area</li>
                <li>• Personal USB drives require prior scanning approval</li>
                <li>• Report any hardware/software issues to the lab attendant immediately</li>
                <li>• Save work regularly — the institute is not responsible for data loss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
