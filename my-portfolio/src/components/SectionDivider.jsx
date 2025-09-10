export default function SectionDivider({ label, className = "" }) {
  return (
    <div className="relative w-full bg-brand-beige">
      <svg
        className="absolute top-0 left-0 w-full h-12"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/*It needs some fixing for mobile devices as resolution creates a strip tracing where divider and previous section meet.*/}
        <polygon
          points="0,-1000 100,-1000 60,100 40,100"
          className={className}
        />
      </svg>

      <div className="relative z-10 flex items-center justify-center h-12 text-white text-2xl font-semibold">
        {label}
      </div>
    </div>
  );
}
