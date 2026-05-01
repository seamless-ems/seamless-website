import { useEffect, useRef, useState } from "react";

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

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [slideAspect, setSlideAspect] = useState<string>("16/9");

  useEffect(() => {
    // quick initial advance so motion is caught immediately
    const initial = window.setTimeout(
      () => setCurrent((c) => (c + 1) % slides.length),
      900,
    );
    timerRef.current = window.setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      3200,
    );
    return () => {
      clearTimeout(initial);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    // reset interval when current changes (user clicked dot)
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      3200,
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = slides[current].src;
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setSlideAspect(`${img.naturalWidth}/${img.naturalHeight}`);
      } else {
        setSlideAspect("16/9");
      }
    };
    img.onerror = () => setSlideAspect("16/9");
  }, [current]);

  return (
    <div className="h-screen bg-[color:var(--bg)]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-white/95 backdrop-blur border-b border-gray-200">
        <a
          href="https://seamlessevents.io"
          className="flex items-baseline gap-1"
          aria-label="Seamless Events home"
        >
          <span className="text-2xl font-semibold text-[#4e5ca6]">
            Seamless
          </span>
          <span className="text-2xl font-light text-gray-600">Events</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="http://app.seamlessevents.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-[#4e5ca6] border border-[#d5d9ee] rounded-md hover:bg-[#eef0f9]"
          >
            Log in
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-[#4e5ca6] border border-[#d5d9ee] rounded-md hover:bg-[#eef0f9]"
          >
            See Pricing
          </button>
          <a
            href="http://app.seamlessevents.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white rounded-md font-semibold text-sm"
          >
            Try Now
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="pt-16 h-screen flex items-center">
        <section className="w-full h-full">
          <div className="max-w-[2400px] w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[minmax(440px,640px)_minmax(720px,1fr)] gap-12 items-start h-full pt-[20vh]">
            {/* Copy */}
            <div className="flex flex-col justify-start gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-tight tracking-tight">
                Events are Hard.
                <br />
                <span className="text-[#4e5ca6]">
                  Speaker &amp; Content
                </span>{" "}
                Management
                <br />
                shouldn't be.
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href="http://app.seamlessevents.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white font-semibold"
                >
                  Try Now
                  <svg
                    className="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/learn-more"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#d5d9ee] text-[#4e5ca6] hover:bg-[#eef0f9] font-semibold"
                >
                  Learn More
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#d5d9ee] text-[#4e5ca6] hover:bg-[#eef0f9] font-semibold"
                >
                  See Pricing
                </button>
              </div>

              <p className="mt-3 text-sm text-gray-600 inline-flex items-center gap-2">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                No credit card required
              </p>
            </div>

            {/* Slideshow */}
            <div className="video-wrap flex flex-col mr-0 lg:mr-10 rounded-2xl overflow-hidden bg-[#e8eaf2] shadow-[0_30px_70px_-10px_rgba(78,92,166,0.28),0_10px_24px_-6px_rgba(78,92,166,0.16)] w-full">
  
  {/* Browser Chrome */}
  <div className="browser-chrome flex items-center gap-3 px-4 py-2 bg-[#f1f3f9] border-b border-[#dde0ee] flex-shrink-0">
    <div className="browser-dots flex gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
    </div>
    <div className="browser-url flex-1 bg-white border border-[#dde0ee] rounded text-xs text-gray-500 px-2 py-1 truncate">
      {slides[current].url || "app.seamlessevents.io"}
    </div>
  </div>

  {/* Image Container: No fixed height! */}
  <div className="relative w-full bg-white">
    {slides.map((s, i) => (
      <div
        key={s.src}
        className={`transition-opacity duration-500 ${
          i === current ? 'opacity-100' : 'opacity-0'
        } ${i === 0 ? 'relative' : 'absolute inset-0'}`} 
        /* ^ The first image (i===0) defines the height of the whole div */
      >
        <img 
          src={s.src} 
          alt={s.alt} 
          className="w-full h-auto block" 
        />
      </div>
    ))}

    {/* Navigation Dots - Switched to Brand Color for visibility on white */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            i === current 
              ? "bg-[#4e5ca6] scale-125" 
              : "bg-[#4e5ca6]/20 hover:bg-[#4e5ca6]/40"
          }`}
        ></button>
      ))}
    </div>

    {/* Badge - High contrast for visibility */}
    <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-[10px] font-bold uppercase tracking-wider text-white bg-[#4e5ca6] px-3 py-1.5 rounded-md shadow-lg">
      {slides[current].badge}
    </div>
  </div>
</div>
          </div>
        </section>
      </main>

      {/* Pricing modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 pt-6">
              <a
                href="https://seamlessevents.io"
                className="flex items-baseline gap-2"
              >
                <span className="text-lg font-semibold text-[#4e5ca6]">
                  Seamless
                </span>
                <span className="text-lg font-light text-gray-600">Events</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-md text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="border-2 border-[#4e5ca6] rounded-xl p-6 text-center mb-4">
                <div className="text-xs font-semibold text-[#4e5ca6] uppercase tracking-widest">
                  Speaker &amp; Content Management
                </div>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-5xl font-extrabold">950</span>
                  <span className="text-sm text-gray-500 self-end pb-1">
                    / event
                  </span>
                </div>
                <div className="flex gap-4 justify-center text-sm text-[#4e5ca6] mt-3 flex-wrap">
                  <span>Unlimited speakers</span>
                  <span>Unlimited content</span>
                  <span>Unlimited lead time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#4e5ca6]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Call for Speakers
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#4e5ca6]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Intake forms direct to your speakers
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#4e5ca6]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Speaker &amp; Social Card templates
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#4e5ca6]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Update once, live everywhere, for everyone
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#4e5ca6]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Content hub with version history
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <a
                  href="http://app.seamlessevents.io"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4e5ca6] hover:bg-[#3d4a8f] text-white font-semibold"
                >
                  Start Free Trial
                  <svg
                    className="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <p className="text-center text-sm text-gray-600">
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
