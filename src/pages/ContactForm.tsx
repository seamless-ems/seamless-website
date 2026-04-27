import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "@/components/Head";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

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

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <Head title={`Contact — Seamless`} description={`Contact Seamless support`} />

      <div className="w-full max-w-xl rounded-lg border bg-card p-6 shadow">
        <div className="mb-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/learn-more")} className="inline-flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </div>
        <h1 className="mb-2 text-2xl font-semibold">Contact us</h1>
        <p className="mb-6 text-sm text-muted-foreground">Send us a message and we'll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* form fields... */}
          <label className="block">
            <div className="mb-2 text-sm">Name</div>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>

          <label className="block">
            <div className="mb-2 text-sm">Email</div>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" type="email" />
          </label>

          <label className="block">
            <div className="mb-2 text-sm">Message</div>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" />
          </label>

          <div className="flex justify-end">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
