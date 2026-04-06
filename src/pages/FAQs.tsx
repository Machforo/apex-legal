import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultFaqCategories = [
  {
    category: "Admissions & Eligibility",
    faqs: [
      { q: "What are the eligibility criteria for BBA?", a: "Candidates must have passed 10+2 from any recognized board with any stream. There is no minimum percentage requirement, but admission is based on merit and CUET score." },
      { q: "Is CUET mandatory for admission?", a: "CUET is the primary entrance exam for UG admissions under CCS University. Candidates are allotted seats through UP state counselling based on CUET scores." },
      { q: "Can I apply for BCA without Mathematics in 10+2?", a: "While PCM is preferred, students from other streams can also apply. Specific eligibility requirements are determined by CCS University norms and may vary each year." },
      { q: "What is the admission process for B.Ed?", a: "B.Ed admissions are conducted through UP Joint B.Ed Entrance Examination followed by state counselling. Candidates must be graduates with a minimum of 50% marks." },
      { q: "Is there direct admission without entrance exam?", a: "All admissions are processed through the respective state counselling portals (CUET for UG, Joint B.Ed for Education programs). IIMT does not offer direct admissions outside this process." },
      { q: "When do admissions typically open?", a: "Admissions for the upcoming academic session generally open in May-June each year, after CUET and B.Ed entrance exam results are declared." },
    ],
  },
  {
    category: "Fees & Scholarships",
    faqs: [
      { q: "What is the fee structure for BBA/BCA?", a: "The annual fee for BBA and BCA is approximately ₹50,000 per year. This includes tuition, library, lab, and examination fees. Exact fees may be revised annually." },
      { q: "Are there any scholarships available?", a: "Yes, IIMT offers merit-based scholarships (up to 25% fee waiver for top 10%), sibling discounts, sports scholarships, and supports government scholarships for SC/ST/OBC students through the UP Scholarship Portal." },
      { q: "Can I pay fees in installments?", a: "Yes, semester-wise fee payment is the standard structure. For any further installment requests, contact the accounts office directly." },
      { q: "How do I pay fees online?", a: "Fees can be paid online through the fee portal at fee.ishan.ac. Select IIMT, choose your program, and complete payment via net banking, UPI, or credit/debit card." },
    ],
  },
  {
    category: "Campus & Facilities",
    faqs: [
      { q: "Does IIMT have hostel facilities?", a: "Yes, IIMT provides separate hostel facilities for boys and girls within close proximity to the campus. Hostels include mess facility, CCTV surveillance, and warden supervision." },
      { q: "What IT facilities are available for BCA students?", a: "IIMT has well-equipped computer labs with modern hardware, licensed software (including development environments), high-speed internet, and a student-to-computer ratio of approximately 1:1 during lab sessions." },
      { q: "Is the campus Wi-Fi enabled?", a: "Yes, the campus has Wi-Fi connectivity. Students can access the internet in classrooms, library, and common areas for academic purposes." },
      { q: "Is there a library?", a: "Yes, the IIMT library has 15,000+ books, national and international journals, and INFLIBNET N-LIST access for digital resources. The reading room is open from 8 AM to 6 PM." },
    ],
  },
  {
    category: "Placements & Career",
    faqs: [
      { q: "What is the placement record at IIMT?", a: "IIMT consistently achieves a 90%+ placement rate for eligible students. Over 150 companies visit campus annually, with roles spanning banking, IT, finance, marketing, and education." },
      { q: "What was the highest package offered?", a: "The highest package offered in recent years was ₹8 LPA. Average packages range between ₹2.5–4 LPA depending on the program and industry." },
      { q: "Which companies recruit from IIMT?", a: "Major recruiters include HDFC Bank, ICICI Bank, Infosys, TCS, Wipro, Barclays, Amazon, Kotak Mahindra, Byju's, and several other national companies across sectors." },
      { q: "Does IIMT provide internship opportunities?", a: "Yes, the placement cell facilitates internship placements for students during their final year. Industry projects and summer internships are integral to BBA, B.Com, and BCA programs." },
    ],
  },
  {
    category: "Approvals & Recognition",
    faqs: [
      { q: "Is IIMT approved by AICTE?", a: "Yes, BBA and BCA programs at IIMT are approved by AICTE. B.Ed and M.Ed programs are approved by NCTE. All programs are affiliated to CCS University, Meerut." },
      { q: "Is IIMT NAAC accredited?", a: "Yes, IIMT holds NAAC accreditation — a national quality benchmark. This accreditation validates the institution's teaching quality, infrastructure, governance, and student outcomes." },
      { q: "Are IIMT degrees valid for government jobs?", a: "Absolutely. All degrees awarded by IIMT are through CCS University, Meerut, which is a state university established by Act. The degrees are recognized by UGC and valid for all government and private employment." },
    ],
  },
];

export default function FAQsPage() {
  const ref = useScrollReveal();
  const { data } = useIIMTData("admissions");

  // If API provides faqs array, group them into a single category; otherwise fall back to default
  const faqCategories = data?.faq?.length > 0
    ? [{ category: "Frequently Asked Questions", faqs: data.faq.map((f: any) => ({ q: f.question, a: f.answer })) }]
    : defaultFaqCategories;

  return (
    <Layout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about admissions, fees, campus life, and career outcomes"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "FAQs" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-10">
            {faqCategories.map((cat, ci) => (
              <div key={cat.category} className={`reveal delay-${Math.min(ci, 4)}00`}>
                <h2 className="text-xl font-display font-bold text-foreground mb-4">{cat.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${ci}-${i}`} className="border rounded-lg bg-card px-5">
                      <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
