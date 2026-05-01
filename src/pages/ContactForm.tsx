import { useState } from "react";
import Head from "@/components/Head";
import Wordmark from "@/components/Wordmark";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const API_BASE = typeof import.meta !== "undefined" ? (import.meta.env.VITE_API_URL ?? "") : "";
      const base = API_BASE.replace(/\/$/, "");
      const url = base ? `${base}/mail/contact` : "/mail/contact";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      toast({ title: "Message sent", description: "Thanks — we'll get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error("Contact form error:", err);
      toast({ title: "Failed to send", description: err?.message || "Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-3.5 py-2.5 text-[14px] text-[#111827] bg-white border border-[#e5e7eb] rounded-[8px] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#4e5ca6] focus:ring-2 focus:ring-[#4e5ca6]/10 transition-all duration-150";

  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6">
      <Head title="Contact — Seamless Events" description="Get in touch with the Seamless Events team." />

      <div className="w-full max-w-[480px] bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-[#e5e7eb]">
          <a href="/" className="flex items-baseline gap-[5px] mb-6" aria-label="Seamless Events home">
            <Wordmark />
          </a>
          <h1 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#111827]">Get in touch</h1>
          <p className="text-[14px] text-[#6b7280] mt-1 leading-relaxed">
            Send us a message and we'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 flex flex-col gap-4">
          <label className="block">
            <span className="block text-[13px] font-medium text-[#111827] mb-1.5">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="block text-[13px] font-medium text-[#111827] mb-1.5">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="block text-[13px] font-medium text-[#111827] mb-1.5">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              required
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="group w-full inline-flex items-center justify-center gap-[7px] px-[26px] py-[13px] rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[15px] font-semibold shadow-[0_2px_8px_rgba(78,92,166,0.3)] hover:shadow-[0_4px_14px_rgba(78,92,166,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-150 mt-1"
          >
            {submitting ? "Sending…" : (
              <>
                Send message
                <svg className="transition-transform duration-150 group-hover:translate-x-[3px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 pb-7 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-1.5 text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </a>
          <a href="mailto:contact@seamlessevents.io" className="text-[13px] text-[#6b7280] hover:text-[#4e5ca6] transition-colors duration-150">
            contact@seamlessevents.io
          </a>
        </div>

      </div>
    </main>
  );
};

export default ContactForm;
