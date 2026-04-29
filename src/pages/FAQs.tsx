import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIIMTData } from "@/hooks/useIIMTData";

const defaultFaqCategories = [
  {
    category: "Admissions",
    faqs: [
      { q: "What is the CUET/entrance process for UG admissions?", a: "UG admissions at IIMT for BBA, BCA, and B.Com are primarily based on CUET scores followed by CCS University counselling. Candidates must register on the university portal and participate in the seat allotment process based on their entrance merit." },
      { q: "What are the application deadlines for the current session?", a: "Application deadlines typically align with CCS University notifications. We recommend completing the online enquiry form on our website to receive real-time updates on registration dates and merit list schedules." },
      { q: "How is the merit list prepared?", a: "The merit list is prepared based on your CUET scores or 10+2 marks as per the guidelines issued by CCS University. Top-ranking candidates are invited for counselling and document verification at the institute." },
      { q: "Can I apply for admission online?", a: "Yes, you can initiate the process by filling out the enquiry form on our website. Our counsellors will guide you through the online and offline documentation requirements and the subsequent university registration steps." },
      { q: "What documents are required during counselling?", a: "Essential documents include 10th and 12th marksheets, CUET scorecard, character certificate, transfer certificate, category certificate (if applicable), and recent passport-size photographs." },
      { q: "Is counselling mandatory for all programs?", a: "Yes, for B.Ed and M.Ed, state-level counselling is mandatory. For UG programs like BBA and BCA, admission follows the CCS University centralized counselling and allotment process." },
      { q: "What is the difference between online and offline application?", a: "Online application allows for initial registration and tracking, while offline visits to the campus are necessary for document verification, interaction with faculty, and finalized admission formalities." },
      { q: "How do I contact an admissions counsellor?", a: "You can reach our admissions helpline at +91 8448797700 or use the WhatsApp button on the website for immediate assistance during working hours." },
    ],
  },
  {
    category: "Programmes",
    faqs: [
      { q: "What is the difference between BBA and B.Com?", a: "BBA focuses on general management principles, leadership, and entrepreneurship, while B.Com is more specialized in accounting, taxation, and financial management. Both are 3-year programmes offering diverse career paths." },
      { q: "What is the scope of BCA at IIMT?", a: "BCA graduates at IIMT are trained in programming, web development, and database management. The scope includes roles as software developers, system analysts, and IT consultants, with a strong foundation for higher studies like MCA." },
      { q: "How does M.Com differ from an MBA?", a: "M.Com is an academic-oriented master's degree focusing on commerce and research, ideal for teaching and banking careers. MBA is a professional management degree focused on business operations and leadership." },
      { q: "What are the eligibility criteria for B.Ed?", a: "Candidates must have a bachelor's or master's degree with at least 50% marks (45% for reserved categories) and must qualify for the UP B.Ed Joint Entrance Examination." },
      { q: "What is the duration and structure of the M.Ed programme?", a: "The M.Ed programme is a 2-year (4-semester) advanced educational degree approved by NCTE. It focuses on educational research, administration, and pedagogy at the higher education level." },
      { q: "Does IIMT offer part-time or distance learning?", a: "No, all programmes at IIMT are full-time, regular courses affiliated with CCS University to ensure high academic standards and continuous student development." },
    ],
  },
  {
    category: "Fees & Scholarships",
    faqs: [
      { q: "Can you provide a fee overview for the programmes?", a: "The fee structure varies by programme and is designed to be affordable. It covers tuition, development, and standard examination fees. For a detailed breakdown, please request a brochure or contact the accounts office." },
      { q: "Are installment options available for fee payment?", a: "Yes, students can pay their annual fees in two semester-wise installments. For specific financial constraints, parents can meet the administration to discuss personalized payment plans." },
      { q: "What is the SC/ST fee waiver policy?", a: "IIMT supports government scholarship policies. Eligible SC/ST students can apply for fee concessions and reimbursements through the UP Social Welfare Department portal, subject to government verification." },
      { q: "Does IIMT offer merit-based scholarships?", a: "Yes, we offer scholarships to top performers in entrance exams and university examinations. These awards are aimed at encouraging academic excellence and supporting deserving students." },
      { q: "What are the payment modes accepted for fees?", a: "Fees can be paid online via our fee portal (fee.ishan.ac), through bank demand drafts, or via direct bank transfers. We prioritize digital transactions for transparency and convenience." },
    ],
  },
  {
    category: "Campus Life",
    faqs: [
      { q: "What are the hostel facilities like?", a: "IIMT provides separate, secure hostels for boys and girls. Facilities include 24/7 security, Wi-Fi, laundry, common rooms, and a dedicated warden team to ensure student safety and well-being." },
      { q: "Is there a mess facility, and what is the menu like?", a: "The campus mess serves nutritious and hygienic vegetarian meals. The menu is planned weekly with input from student committees to ensure variety and quality." },
      { q: "Is Wi-Fi available throughout the campus?", a: "Yes, the entire IIMT campus is Wi-Fi enabled, allowing students to access digital resources, research journals, and online learning platforms from classrooms, labs, and common areas." },
      { q: "What sports facilities are available?", a: "We have facilities for cricket, football, basketball, badminton, and table tennis. An annual sports meet is organized to encourage physical fitness and competitive spirit among students." },
      { q: "Are there extracurricular activities beyond academics?", a: "Absolutely. Students participate in the 'Kshitiz' annual fest, NSS activities, debates, and cultural clubs, ensuring a well-rounded personality development alongside academic growth." },
    ],
  },
  {
    category: "Career Outcomes",
    faqs: [
      { q: "How does the placement cell support students?", a: "The placement cell provides end-to-end support, including resume building, mock interviews, communication workshops, and organizing campus recruitment drives with corporate partners." },
      { q: "What kind of career assistance is available for M.Ed students?", a: "M.Ed students receive guidance for UGC NET/JRF preparation, academic research opportunities, and placement support for roles in colleges, schools, and educational administration." },
      { q: "Which companies regularly recruit from IIMT?", a: "Our recruiters span diverse sectors, including BFSI (HDFC, ICICI), IT services, retail, and education. We maintain long-term corporate tie-ups to ensure consistent career opportunities." },
      { q: "Does IIMT have an alumni network for career growth?", a: "Yes, our strong alumni network of 30+ years provides mentorship, industry insights, and referral opportunities to current students and recent graduates." },
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
