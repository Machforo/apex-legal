import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AntiRaggingPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Anti-Ragging Zone" subtitle="Zero tolerance policy — BCI & UGC mandate for student safety" breadcrumbs={[{ label: "Governance" }, { label: "Anti-Ragging" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide"><div className="max-w-3xl mx-auto reveal space-y-6">
          <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
            <p className="text-sm font-semibold text-destructive mb-2">24x7 Anti-Ragging Helpline</p>
            <p className="text-2xl font-display font-bold text-foreground">1800-180-5522</p>
            <p className="text-xs text-muted-foreground mt-1">Toll-free | National Helpline available round the clock</p>
          </div>
          <p className="text-foreground/70 leading-relaxed">As per the directions of the Hon'ble Supreme Court of India and the Bar Council of India (BCI) / UGC Regulations, Ishan Institute of Law maintains an absolute zero-tolerance policy against ragging in any form. Ragging is a criminal offence and can lead to immediate expulsion, criminal prosecution, and permanent debarment from legal practice.</p>
          <h2 className="text-lg font-display font-bold text-foreground">Anti-Ragging Committee</h2>
          <p className="text-foreground/70 leading-relaxed text-sm">Our committee comprises senior faculty advocates, administrative officers, and student representatives who maintain 24/7 vigil across the campus and hostels. The committee ensures that every new student feels secure and welcomed into the legal fraternity.</p>
          <h2 className="text-lg font-display font-bold text-foreground">How to Report</h2>
          <ol className="space-y-2 text-sm text-foreground/70 list-decimal pl-5">
            <li>Call the National Anti-Ragging Helpline: 1800-180-5522 (toll-free, 24x7)</li>
            <li>Email: registrar@ishan.ac</li>
            <li>Submit a written complaint to the Anti-Ragging Committee (Strictly Confidential)</li>
            <li>Visit the Principal's office during working hours</li>
            <li>Report online at www.antiragging.in</li>
          </ol>
          <h2 className="text-lg font-display font-bold text-foreground">The Legal Fraternity Pledge</h2>
          <p className="text-foreground/70 leading-relaxed text-sm">Every student at Ishan Law is required to sign an undertaking at the time of admission. This pledge confirms the student's commitment to maintaining the dignity of the profession and ensuring a safe, respectful environment for all peers.</p>
        </div></div>
      </section>
    </Layout>
  );
}
