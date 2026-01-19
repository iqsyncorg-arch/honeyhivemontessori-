interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee = ({ text, className }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-8 font-heading text-lg md:text-xl font-medium"
          >
            {text} <span className="mx-4">|</span>
          </span>
        ))}
        {[...Array(4)].map((_, i) => (
          <span
            key={`dup-${i}`}
            className="mx-8 font-heading text-lg md:text-xl font-medium"
          >
            {text} <span className="mx-4">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
