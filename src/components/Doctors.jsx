import { mediaUrl } from "../lib/strapi";

export default function Doctors({
  eyebrow,
  title,
  description,
  doctors,
  link,
  linkLabel = [],
}) {
  return (
    <section id="doctors" className="py-24 md:py-32 surface-soft">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-5 max-w-lg font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05]">
          {title}
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="my-12 grid gap-8 md:grid-cols-2">
          {doctors.map((doctor) => {
            const img = doctor.image;
            return (
              <article
                key={doctor.id ?? doctor.name}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-float"
              >
                <img
                  src={mediaUrl(img?.url)}
                  alt={`Portrait of ${doctor.name}, ${doctor.role}`}
                  loading="lazy"
                  className="h-auto md:h-72 lg:h-85 w-full object-cover object-top"
                />
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {doctor.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {doctor.bio}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {(doctor.specialties ?? []).map((s) => (
                      <li
                        key={s.id ?? s.label}
                        className="rounded-full bg-mist px-3 py-1 text-[11px] font-medium text-primary"
                      >
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <a
          href={link}
          className="rounded-full surface-deep px-7 py-3.5 text-sm font-semibold shadow-float transition-transform duration-300 hover:-translate-y-1"
        >
          {linkLabel}
        </a>
      </div>
    </section>
  );
}
