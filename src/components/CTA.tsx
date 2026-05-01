import Wordmark from "@/components/Wordmark";

const featureList = [
  "Call for Speakers",
  "Intake forms direct to your speakers",
  "Speaker & Social Card templates",
  "Update once, live everywhere, for everyone",
  "Content hub with version history",
];

const CTA = () => (
  <section
    className="bg-white border-t border-[#e5e7eb] flex flex-col items-center py-12 sm:py-20"
    style={{ paddingLeft: "clamp(24px,5vw,80px)", paddingRight: "clamp(24px,5vw,80px)" }}
  >
    <div className="w-full max-w-[520px] bg-white border-2 border-[#4e5ca6] rounded-[16px] p-8 md:p-10 text-center animate-border-glow">

      <div className="flex items-baseline justify-center gap-[5px] mb-5">
        <Wordmark size={18} />
      </div>

      <p className="text-[11px] font-bold text-[#4e5ca6] uppercase tracking-[0.1em] mb-4">
        Speaker &amp; Content Management
      </p>

      {/* Price */}
      <div className="flex items-baseline justify-center gap-1 mb-1">
        <span className="text-[24px] font-bold text-[#111827]">$</span>
        <span className="text-[64px] font-extrabold text-[#111827] leading-none tracking-[-0.03em]">950</span>
        <span className="text-[15px] font-medium text-[#6b7280] self-end pb-2">/ event</span>
      </div>
      <div className="flex justify-center gap-5 mt-4 flex-wrap">
        <span className="text-[13px] text-[#4e5ca6] font-medium">Unlimited speakers</span>
        <span className="text-[13px] text-[#4e5ca6] font-medium">Unlimited content</span>
        <span className="text-[13px] text-[#4e5ca6] font-medium">Unlimited lead time</span>
      </div>

      <hr className="border-0 border-t border-[#c8cde8] my-5" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-6 text-left">
        {featureList.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[#111827]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4e5ca6] flex-shrink-0" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex flex-col gap-2.5">
        <a
          href="http://app.seamlessevents.io/"
          target="_blank"
          rel="noreferrer"
          className="group w-full inline-flex items-center justify-center gap-[7px] px-[26px] py-[13px] rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white text-[15px] font-semibold shadow-[0_2px_8px_rgba(78,92,166,0.3)] hover:shadow-[0_4px_14px_rgba(78,92,166,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-150"
        >
          Start Free Trial
          <svg className="transition-transform duration-150 group-hover:translate-x-[3px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-[#6b7280]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          14-day free trial · No credit card required
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
