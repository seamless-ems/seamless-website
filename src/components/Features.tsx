const sections = [
  {
    label: "Speaker Management",
    heading: ["All your speakers.", "All in one place."],
    img: "/01-speaker-list.png",
    imgAlt: "Speaker management table showing all speakers with status, headshots, and actions",
    url: "app.seamlessevents.io",
    white: true,
    first: true,
  },
  {
    label: "Speaker Portal",
    heading: ["Their own space to manage.", "Accessible to everyone who needs it."],
    img: "/02-speaker-portal.png",
    imgAlt: "Speaker portal showing speaker details and content management",
    url: "app.seamlessevents.io",
    white: false,
    first: false,
  },
  {
    label: "Speaker & Social Cards",
    heading: ["Design it once.", "Auto-filled for every speaker."],
    img: "/03-card-builder.png",
    imgAlt: "Speaker card builder showing a template with live preview",
    url: "app.seamlessevents.io",
    white: true,
    first: false,
  },
  {
    label: "Speaker Wall",
    heading: ["Publish once.", "Every change, live instantly."],
    img: "/04-speaker-wall.png",
    imgAlt: "Speaker Wall showing a grid of published speaker cards",
    url: "app.seamlessevents.io",
    white: false,
    first: false,
  },
  {
    label: "Content Management",
    heading: ["All content. Every speaker.", "Accessible to everyone who needs it."],
    img: "/05-content.png",
    imgAlt: "Content tab showing all speakers and their uploaded files",
    url: "app.seamlessevents.io",
    white: true,
    first: false,
  },
];

const Features = () => (
  <>
    {sections.map((s) => (
      <section
        key={s.label}
        className={s.white ? "bg-white" : "bg-[#faf8f5]"}
        style={{
          paddingTop: s.first ? "calc(64px + 64px)" : "80px",
          paddingBottom: "80px",
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">

          {/* Label + heading */}
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <span className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-[#4e5ca6] bg-[#eef0f9] px-2.5 py-1 rounded-[4px] mb-4">
              {s.label}
            </span>
            {s.first
              ? <h1 className="text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-0.025em] text-[#111827] leading-[1.1]">{s.heading[0]}<br />{s.heading[1]}</h1>
              : <h2 className="text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-0.025em] text-[#111827] leading-[1.1]">{s.heading[0]}<br />{s.heading[1]}</h2>
            }
          </div>

          {/* Screenshot */}
          <div className="rounded-[16px] overflow-hidden bg-white shadow-[0_0_0_1px_rgba(78,92,166,0.08),0_4px_6px_-1px_rgba(0,0,0,0.06),0_20px_60px_-10px_rgba(78,92,166,0.18)]">
            <div className="h-9 bg-[#f3f4f6] border-b border-[#e5e7eb] flex items-center px-3.5 gap-[7px] flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#34d399]"></div>
              <div className="ml-2.5 h-5 bg-white rounded-[4px] border border-[#e5e7eb] max-w-[340px] flex items-center px-2">
                <span className="text-[11px] text-[#9ca3af]">{s.url}</span>
              </div>
            </div>
            <div className="aspect-[16/9] overflow-hidden">
              <img src={s.img} alt={s.imgAlt} className="w-full h-full object-cover object-left-top block" />
            </div>
          </div>

        </div>
      </section>
    ))}
  </>
);

export default Features;
