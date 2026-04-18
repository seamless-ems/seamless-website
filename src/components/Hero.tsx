import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const productArray = [
    "schedule management",
    "speaker management",
    "content management",
    "partner management",
    "attendee management",
  ];
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!wordRef.current) return;

    let currentIndex = 0;

    const rotateWords = () => {
      if (!wordRef.current) return;
      wordRef.current.innerText = productArray[currentIndex];

      const split = new SplitText(wordRef.current, { type: "chars" });

      const tl = gsap.timeline();

      // 3. RANDOM FADE IN
      tl.from(split.chars, {
        opacity: 0,
        y: -10,
        filter: "blur(1px)", // Optional: adds a nice soft reveal
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          amount: 0.5, // Total time spent staggering (0.5s)
          from: "random",
        },
      })
        // 4. Pause
        .to({}, { duration: 3 })
        // 5. FADE OUT
        .to(split.chars, {
          opacity: 0,
          y: 10,
          filter: "blur(1px)",
          duration: 0.5,
          ease: "power2.in",
          stagger: {
            amount: 0.3,
            from: "random", // Random out looks cool too!
          },
          onComplete: () => {
            split.revert();
            currentIndex = (currentIndex + 1) % productArray.length;
            rotateWords();
          },
        });
    };

    rotateWords();

    return () => {
      gsap.killTweensOf(wordRef.current);
      gsap.globalTimeline.clear();
    };
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNsKDE4NSA2NSUgNDUlIC8gMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative z-10 px-6 py-24 w-full max-w-[2000px]">
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
          <div className="space-y-8">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight">
              Events are hard,
              <br />
              <span className="relative inline-block min-w-[280px] sm:min-w-[400px] max-w-full">
                <span
                  ref={wordRef}
                  className="text-primary inline-block break-words"
                >
                  {productArray[0]}
                </span>
              </span>{" "}
              doesn't have to be.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-300 group"
              >
                <a
                  href="https://calendly.com/james-ruleyproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-secondary/50 hover:text-primary transition-all duration-300"
              >
                <a href="/learn-more">Learn More</a>
              </Button>
            </div>
          </div>

          <div
            className="relative animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl"></div>
            <div className="relative rounded-xl shadow-2xl overflow-hidden w-full">
              <video
                src="https://pub-b745068ef20245579c265881d4aec883.r2.dev/website/seamless-hero-video-ultra-compressed.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ aspectRatio: "1304/818", maxHeight: "80vh" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
