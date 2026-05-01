interface WordmarkProps {
  size?: number;
}

const Wordmark = ({ size = 22 }: WordmarkProps) => (
  <>
    <span style={{ fontSize: size }} className="font-semibold text-[#4e5ca6] tracking-[-0.01em]">Seamless</span>
    <span style={{ fontSize: size }} className="font-light text-[#6b7280]">Events</span>
  </>
);

export default Wordmark;
