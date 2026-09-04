import { Phone, MapPin } from "lucide-react";

export default function ContactDetails({
  phone,
  phoneLink,
  address,
  heading,
  callUsLabel,
  visitUsLabel,
}) {
  const mapsUrl = address
    ? `https://maps.google.com/?q=${encodeURIComponent(address)}`
    : undefined;

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">
        {heading}
      </p>

      <a
        href={phoneLink}
        className="mt-5 flex items-center gap-3 rounded-2xl bg-mist/60 p-4 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
        <span>
          <span className="block text-xs text-muted-foreground">
            {callUsLabel}
          </span>
          <span className="font-semibold">{phone}</span>
        </span>
      </a>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex items-center gap-3 rounded-2xl bg-mist/60 p-4 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <span className="block text-xs text-muted-foreground">
            {visitUsLabel}
          </span>
          <span className="font-semibold">{address}</span>
        </span>
      </a>
    </div>
  );
}
