import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { toast } from "sonner";

export default function FeedbackPage() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", userType: "", programme: "", subject: "", message: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.userType || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiBase}/legal/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Feedback submission failed");
      }
      toast.success("Feedback submitted successfully. Thank you!");
      setSubmitted(true);
      setForm({ name: "", userType: "", programme: "", subject: "", message: "", rating: 5 });
    } catch (err) {
      toast.error("Unable to submit feedback. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader title="Feedback" subtitle="Help us improve — share your experience as a student, parent, or visitor" breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Feedback" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed text-lg">
                Ishan Law values feedback from students, parents, and visitors — assessment of academic quality, faculty, facilities, and administrative support helps us improve. All responses are carefully reviewed by the Quality Assurance Cell and reach the Principal's office directly. Your inputs remain private and confidential.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg" alt="Ishan Law Campus" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 bg-card rounded-2xl p-8 shadow-sm border">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-navy">✓</span>
                  </div>
                  <p className="font-semibold text-foreground mb-2">Feedback Submitted!</p>
                  <p className="text-sm text-muted-foreground">Thank you for your valuable response.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 text-sm text-navy underline">Submit another feedback</button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name (optional)"
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow"
                    />
                    <select
                      required
                      value={form.userType}
                      onChange={(e) => setForm((prev) => ({ ...prev, userType: e.target.value }))}
                      className="w-full px-4 py-3 text-sm rounded-lg border bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow"
                    >
                      <option value="">I am a...*</option>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                      <option value="Visitor">Visitor</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <select
                      value={form.programme}
                      onChange={(e) => setForm((prev) => ({ ...prev, programme: e.target.value }))}
                      className="w-full px-4 py-3 text-sm rounded-lg border bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow"
                    >
                      <option value="">Programme (Optional)</option>
                      <option value="BA LLB">BA LLB</option>
                      <option value="LLB">LLB</option>
                      <option value="None">None</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Subject*"
                      required
                      value={form.subject}
                      onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-4 py-3 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow"
                    />
                  </div>
                  <textarea
                    placeholder="Your Message*"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow resize-none"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-t mt-4 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-foreground">Rating:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <label key={star} className="cursor-pointer">
                            <input
                              type="radio"
                              name="rating"
                              value={star}
                              checked={form.rating === star}
                              onChange={() => setForm((prev) => ({ ...prev, rating: star }))}
                              className="sr-only"
                            />
                            <span
                              className={`text-2xl transition-colors ${
                                form.rating >= star ? "text-gold" : "text-muted hover:text-gold-light"
                              }`}
                            >
                              ★
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg shadow-lg hover:bg-navy/90 transition-all active:scale-[0.97] disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
