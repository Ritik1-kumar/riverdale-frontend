import { Clock, Siren } from "lucide-react";

export default function ClinicHours({
  clinicHours = [],
  emergencyBold,
  emergencyRest,
  heading,
  closedLabel,
}) {
  return (
    <div className="rounded-3xl surface-deep p-8 shadow-float">
      <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sky">
        <Clock className="h-4 w-4" aria-hidden="true" /> {heading}
      </p>
      <ul className="mt-6 space-y-3">
        {clinicHours.map((row) => (
          <li
            key={row.id ?? row.day}
            className="flex items-center justify-between border-b border-white/10 pb-3 text-sm last:border-0"
          >
            <span className="text-white/80">{row.day}</span>
            <span
              className={
                row.closed ? "font-semibold text-sky" : "font-semibold"
              }
            >
              {row.closed ? closedLabel : row.hours}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/10 p-4">
        <Siren
          className="mt-0.5 h-5 w-5 shrink-0 text-sky"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-white/85">
          <strong className="text-white">{emergencyBold}</strong>{" "}
          {emergencyRest}
        </p>
      </div>
    </div>
  );
}
