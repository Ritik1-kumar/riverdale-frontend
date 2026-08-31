export default function Marquee({ items = [] }) {
  // Render the list twice back-to-back so the CSS marquee animation
  // (translateX 0 -> -50%) loops seamlessly.
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-mist/60 py-4">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">
        {track.map((item, i) => (
          <span key={`${item.id ?? item.label}-${i}`}>{item.label}</span>
        ))}
      </div>
    </div>
  );
}
