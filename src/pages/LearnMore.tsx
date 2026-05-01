import { useEffect, useState } from "react";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";

const LearnMore = () => {
  const [storyOpen, setStoryOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setStoryOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = storyOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [storyOpen]);

  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between bg-[rgba(250,248,245,0.92)] backdrop-blur-[14px] border-b border-[rgba(229,231,235,0.7)]" style={{ padding: "0 clamp(24px,5vw,80px)" }}>
        <a href="/" className="flex items-baseline gap-[5px]" aria-label="Seamless Events home">
          <Wordmark />
        </a>
        <div className="flex items-center gap-1.5">
          <a
            href="https://calendly.com/james-ruleyproductions/seamless-events"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-[7px] text-sm font-semibold text-[#4e5ca6] border-[1.5px] border-[#c8cde8] rounded-[7px] hover:bg-[#eef0f9] hover:border-[#4e5ca6] transition-all duration-150"
          >
            Book a Demo
          </a>
          <a
            href="http://app.seamlessevents.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[5px] px-[18px] py-2 bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white rounded-[7px] font-semibold text-sm hover:-translate-y-px active:translate-y-0 transition-all duration-150"
          >
            Try Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>

      <Features />
      <CTA />
      <Benefits onOpenStory={() => setStoryOpen(true)} />
      <Footer />

      {/* Founder modal */}
      {storyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,24,39,0.5)] backdrop-blur-sm p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-title"
          onClick={(e) => { if (e.target === e.currentTarget) setStoryOpen(false); }}
        >
          <div className="bg-white rounded-[20px] w-full max-w-[580px] shadow-[0_24px_64px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden animate-[modal-in_0.2s_ease]">
            <div className="flex items-center justify-between px-6 pt-5">
              <a href="/" className="flex items-baseline gap-[5px]" aria-label="Seamless Events">
                <Wordmark size={18} />
              </a>
              <button
                onClick={() => setStoryOpen(false)}
                aria-label="Close"
                className="w-8 h-8 flex items-center justify-center rounded-[6px] text-[#6b7280] hover:bg-[#eef0f9] hover:text-[#4e5ca6] transition-all duration-150"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 id="story-title" className="text-[22px] font-extrabold tracking-[-0.02em] text-[#111827] mb-4">
                20 years of hacks.
              </h2>
              <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-3.5">
                Our co-founder James spent two decades in the events industry building workarounds for problems that good software should have solved long ago.
              </p>
              <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-3.5">Every year it was the same:</p>
              <ul className="flex flex-col gap-1.5 mb-3.5 list-none">
                {[
                  "Websites with no pricing",
                  "Demos with no clarity",
                  "Quotes too large to justify, with no ability to tailor",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[15px] text-[#111827] font-semibold">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#4e5ca6] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-3.5">
                After years of building custom fixes for clients, he teamed up with another James and Catherine to build Seamless Events from scratch. Starting with Speaker and Content Management.
              </p>
              <p className="text-[15px] text-[#6b7280] leading-[1.7]">
                If any of that sounds familiar, James is always happy to chat (and swap some event war stories).
              </p>
              <div className="flex flex-col gap-2.5 mt-5">
                <a
                  href="https://calendly.com/james-ruleyproductions/seamless-events"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setStoryOpen(false)}
                  className="group inline-flex items-center justify-center gap-[7px] px-[26px] py-[13px] rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white text-[15px] font-semibold shadow-[0_2px_8px_rgba(78,92,166,0.3)] hover:shadow-[0_4px_14px_rgba(78,92,166,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                >
                  Book a Demo with James
                  <svg className="transition-transform duration-150 group-hover:translate-x-[3px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnMore;
