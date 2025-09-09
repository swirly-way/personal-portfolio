export default function Fade({ from, to, className = "" }) {
  return (
    <div
      aria-hidden
      className={`relative z-10 mt-0 h-60 w-full bg-gradient-to-b from-[var(--from)] to-[var(--to)] ${className}`}
      style={{
        "--from": from,
        "--to": to,
      }}
    />
  );
}
