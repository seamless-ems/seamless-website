interface BenefitsProps {
  onOpenStory: () => void;
}

const Benefits = ({ onOpenStory }: BenefitsProps) => (
  <section
    className="bg-[#faf8f5] text-center py-12 sm:py-20"
    style={{ paddingLeft: "clamp(24px,5vw,80px)", paddingRight: "clamp(24px,5vw,80px)" }}
  >
    <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.025em] text-[#111827] leading-[1.1] mb-4">
      20 years of hacks.
    </h2>
    <button
      onClick={onOpenStory}
      className="inline-flex items-center gap-2 text-[20px] font-semibold text-[#4e5ca6] underline decoration-[#c8cde8] underline-offset-4 hover:decoration-[#4e5ca6] transition-colors bg-transparent border-none p-0 cursor-pointer"
    >
      Read our story
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </section>
);

export default Benefits;
