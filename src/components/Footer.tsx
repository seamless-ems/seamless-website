import Wordmark from "@/components/Wordmark";

const Footer = () => (
  <footer
    className="border-t border-[#e5e7eb] bg-[#faf8f5] flex items-center justify-between flex-wrap gap-3"
    style={{ padding: "32px clamp(24px,5vw,80px)" }}
  >
    <a href="https://seamlessevents.io" className="flex items-baseline gap-[5px]" aria-label="Seamless Events home">
      <Wordmark size={18} />
    </a>
    <div className="flex items-center gap-5 flex-wrap">
      <a href="/contact" className="text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors">Contact</a>
      <a href="http://app.seamlessevents.io/" target="_blank" rel="noreferrer" className="text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors">Log in</a>
      <a href="/privacy-policy" className="text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors">Privacy Policy</a>
      <a href="/terms" className="text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors">Terms &amp; Conditions</a>
      <span className="text-[13px] text-[#6b7280]">&copy; {new Date().getFullYear()} Seamless Events</span>
    </div>
  </footer>
);

export default Footer;
