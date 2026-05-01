import { useEffect, useRef, useState } from "react";
import Wordmark from "@/components/Wordmark";

const slides = [
  {
    src: "/08-welcome-page.png",
    alt: "Events dashboard",
    url: "app.seamlessevents.io/organizer",
    badge: "Multi-Event Dashboard",
  },
  {
    src: "/06-applications.png",
    alt: "Speaker applications",
    url: "app.seamlessevents.io/organizer/event/…/speakers/applications",
    badge: "Call for Speakers",
  },
  {
    src: "/07-intake-form.png",
    alt: "Sending speaker intake form",
    url: "app.seamlessevents.io/organizer/event/…/speakers",
    badge: "Speaker Intake",
  },
  {
    src: "/01-speaker-list.png",
    alt: "Speaker list",
    url: "app.seamlessevents.io/organizer/event/…/speakers",
    badge: "Speaker Management",
  },
  {
    src: "/03-card-builder.png",
    alt: "Card builder",
    url: "app.seamlessevents.io/organizer/event/…/website-card-builder",
    badge: "Card Builder",
  },
  {
    src: "/04-speaker-wall.png",
    alt: "Speaker wall",
    url: "app.seamlessevents.io/organizer/event/…/speakers/embed",
    badge: "Speaker Wall",
  },
  {
    src: "/05-content.png",
    alt: "Content management",
    url: "app.seamlessevents.io/organizer/event/…/speakers",
    badge: "Content Management",
  },
];

const CALENDLY = "https://calendly.com/james-ruleyproductions/seamless-events";

const MODAL_FEATURES = [
  "Call for Speakers",
  "Intake forms direct to your speakers",
  "Speaker & Social Card templates",
  "Update once, live everywhere, for everyone",
  "Content hub with version history",
];

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    className="transition-transform duration-150 group-hover:translate-x-[3px]"
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      4200,
    );
  }

  useEffect(() => {
    const initial = window.setTimeout(() => {
      setCurrent(1);
      startTimer();
    }, 900);
    return () => {
      clearTimeout(initial);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(n: number) {
    setCurrent((n + slides.length) % slides.length);
    if (!paused) startTimer();
  }

  function togglePause() {
    if (paused) {
      setPaused(false);
      startTimer();
    } else {
      setPaused(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between bg-[rgba(250,248,245,0.92)] backdrop-blur-[14px] border-b border-[rgba(229,231,235,0.7)]" style={{ padding: "0 clamp(24px,5vw,64px)" }}>
        <a
          href="https://seamlessevents.io"
          className="flex items-baseline gap-[5px]"
          aria-label="Seamless Events home"
        >
          <Wordmark />
        </a>

        {/* Desktop nav items */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center px-4 py-[7px] text-sm font-semibold text-[#4e5ca6] border-[1.5px] border-[#c8cde8] rounded-[7px] hover:bg-[#eef0f9] hover:border-[#4e5ca6] transition-all duration-150"
          >
            See Pricing
          </button>
          <a
            href="http://app.seamlessevents.io/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-[5px] px-[18px] py-2 bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white rounded-[7px] font-semibold text-sm hover:-translate-y-px active:translate-y-0 transition-all duration-150"
          >
            Try Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden w-9 h-9 flex items-center justify-center rounded-[7px] text-[#4e5ca6] hover:bg-[#eef0f9] transition-colors duration-150"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          className="sm:hidden fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden fixed top-16 left-0 right-0 z-40 bg-[rgba(250,248,245,0.98)] backdrop-blur-[14px] border-b border-[rgba(229,231,235,0.8)] flex flex-col">
          <button
            onClick={() => { setIsOpen(true); setMenuOpen(false); }}
            className="flex items-center justify-between px-6 py-4 text-[15px] font-semibold text-[#111827] hover:bg-[rgba(0,0,0,0.03)] transition-colors border-b border-[#f3f4f6]"
          >
            Pricing
            <ChevronRight />
          </button>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between px-6 py-4 text-[15px] font-semibold text-[#4e5ca6] hover:bg-[rgba(0,0,0,0.03)] transition-colors"
          >
            Book a Demo
            <ChevronRight />
          </a>
        </div>
      )}

      {/* Hero */}
      <main className="min-h-screen pt-16 flex items-center">
        <section className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[minmax(360px,560px)_1fr] gap-[clamp(32px,5vw,72px)] items-stretch py-10 lg:py-12">

            {/* Copy */}
            <div className="flex flex-col">
              <h1 className="text-[clamp(36px,4.8vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#111827]">
                Events are Hard.<br />
                <span className="text-[#4e5ca6]">Speaker &amp; Content Management</span><br />
                shouldn't be.
              </h1>

              {/* Mobile CTA */}
              <div className="flex flex-col items-start mt-8 sm:hidden">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-[7px] px-[26px] py-[13px] rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white text-[15px] font-semibold shadow-[0_2px_8px_rgba(78,92,166,0.3)] hover:shadow-[0_4px_14px_rgba(78,92,166,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                >
                  Book a Demo
                  <ArrowIcon />
                </a>
                <p className="flex items-center gap-1.5 text-[12px] font-medium text-[#6b7280] mt-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free 30-min walkthrough
                </p>
                <a
                  href="/learn-more"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#4e5ca6] hover:text-[#3d4a8f] group transition-colors duration-150 mt-5"
                >
                  Learn More
                  <ArrowIcon size={15} />
                </a>
              </div>

              {/* Desktop CTA */}
              <div className="hidden sm:flex flex-col items-start mt-10">
                <a
                  href="http://app.seamlessevents.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-[7px] px-[26px] py-[13px] rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white text-[15px] font-semibold shadow-[0_2px_8px_rgba(78,92,166,0.3)] hover:shadow-[0_4px_14px_rgba(78,92,166,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                >
                  Try Now
                  <ArrowIcon />
                </a>
                <p className="flex items-center gap-1.5 text-[12px] font-medium text-[#6b7280] mt-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No credit card required
                </p>
                <a
                  href="/learn-more"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#4e5ca6] hover:text-[#3d4a8f] group transition-colors duration-150 mt-6"
                >
                  Learn More
                  <ArrowIcon size={15} />
                </a>
              </div>
            </div>

            {/* Slideshow */}
            <div className="relative mr-0 lg:mr-10" aria-label="Product screenshots slideshow">

              <div className="relative">
                <div className="rounded-[20px] overflow-hidden bg-[#e8eaf2] animate-border-pulse">

                  {/* Browser chrome */}
                  <div className="flex items-center gap-2.5 px-3.5 py-[9px] bg-[#f1f3f9] border-b border-[#dde0ee] flex-shrink-0">
                    <div className="flex gap-[5px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] block"></span>
                    </div>
                    <div className="flex-1 bg-white border border-[#dde0ee] rounded-[5px] px-2.5 py-1 text-[11px] text-[#6b7280] truncate">
                      {slides[current].url}
                    </div>
                  </div>

                  {/* Slides */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    {slides.map((s, i) => (
                      <img
                        key={s.src}
                        src={s.src}
                        alt={s.alt}
                        className={`absolute inset-0 w-full h-full object-cover object-left-top transition-[opacity,transform] duration-[750ms] ease-in-out ${
                          i === current ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute bottom-[-16px] right-7 z-10 text-[13px] font-bold uppercase tracking-[0.08em] text-[#4e5ca6] bg-[#eef0f9] border-[1.5px] border-[#c8cde8] px-4 py-[7px] rounded-[6px] shadow-[0_2px_10px_rgba(78,92,166,0.15)] pointer-events-none">
                  {slides[current].badge}
                </div>
              </div>

              {/* Carousel controls */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => goTo(current - 1)}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full border-[1.5px] border-[#c8cde8] bg-transparent text-[#4e5ca6] flex items-center justify-center hover:bg-[#eef0f9] hover:border-[#4e5ca6] hover:scale-[1.08] active:scale-100 transition-all duration-150"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={togglePause}
                  aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                  className="w-8 h-8 rounded-full border-[1.5px] border-[#c8cde8] bg-transparent text-[#4e5ca6] flex items-center justify-center hover:bg-[#eef0f9] hover:border-[#4e5ca6] hover:scale-[1.08] active:scale-100 transition-all duration-150"
                >
                  {paused ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => goTo(current + 1)}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full border-[1.5px] border-[#c8cde8] bg-transparent text-[#4e5ca6] flex items-center justify-center hover:bg-[#eef0f9] hover:border-[#4e5ca6] hover:scale-[1.08] active:scale-100 transition-all duration-150"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Pricing modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,24,39,0.5)] backdrop-blur-sm p-6"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-[20px] w-full max-w-[580px] shadow-[0_24px_64px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden animate-[modal-in_0.2s_ease]">
            <div className="flex items-center justify-between px-6 pt-5">
              <a href="https://seamlessevents.io" className="flex items-baseline gap-[5px]" aria-label="Seamless Events">
                <Wordmark size={18} />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="w-8 h-8 flex items-center justify-center rounded-[6px] text-[#6b7280] hover:bg-[#eef0f9] hover:text-[#4e5ca6] transition-all duration-150"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="border-2 border-[#4e5ca6] rounded-[14px] p-6 text-center mb-6 animate-border-glow">
                <p className="text-[12px] font-semibold text-[#4e5ca6] uppercase tracking-[0.08em] mb-3">
                  Speaker &amp; Content Management
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-[28px] font-bold text-[#111827]">$</span>
                  <span className="text-[64px] font-extrabold text-[#111827] leading-none tracking-[-0.03em]">950</span>
                  <span className="text-[15px] font-medium text-[#6b7280] self-end pb-2">/ event</span>
                </div>
                <div className="flex justify-center gap-5 mt-3 flex-wrap">
                  <span className="text-[13px] text-[#4e5ca6] font-medium">Unlimited speakers</span>
                  <span className="text-[13px] text-[#4e5ca6] font-medium">Unlimited content</span>
                  <span className="text-[13px] text-[#4e5ca6] font-medium">Unlimited lead time</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-6">
                {MODAL_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#111827]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4e5ca6] flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2.5">
                <a
                  href="http://app.seamlessevents.io"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center justify-center gap-[7px] px-[26px] py-[13px] rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white text-[15px] font-semibold shadow-[0_2px_8px_rgba(78,92,166,0.3)] hover:shadow-[0_4px_14px_rgba(78,92,166,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                >
                  Start Free Trial
                  <ArrowIcon />
                </a>
                <p className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-[#6b7280]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  14-day free trial · No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
