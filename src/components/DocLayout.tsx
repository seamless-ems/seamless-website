import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";

interface DocLayoutProps {
  children: React.ReactNode;
}

const DocLayout = ({ children }: DocLayoutProps) => (
  <div className="min-h-screen bg-[#faf8f5]">
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between bg-[rgba(250,248,245,0.92)] backdrop-blur-[14px] border-b border-[rgba(229,231,235,0.7)]"
      style={{ padding: "0 clamp(24px,5vw,64px)" }}
    >
      <a href="/" className="flex items-baseline gap-[5px]" aria-label="Seamless Events home">
        <Wordmark />
      </a>
      <div className="flex items-center gap-1.5">
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

    <main>
      <div style={{ padding: "calc(64px + 56px) clamp(24px,5vw,64px) 80px" }}>
        <div className="doc-wrap max-w-[800px] mx-auto">
          {children}
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default DocLayout;
