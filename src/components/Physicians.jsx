import { mediaUrl } from "../lib/strapi";

export default function Physicians({
  eyebrow,
  title,
  titleHighlight,
  physicians,
  physicianslink,
  physicianslinkLabel = [],
}) {
  return (
    <section className="surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
          {title}
          <span className="text-gradient">{titleHighlight}</span>
        </h2>

        <div className="my-16 grid gap-12 lg:grid-cols-2">
          {physicians.map((doc) => {
            const img = doc.image;
            return (
              <div
                key={doc.id ?? doc.name}
                className="group grid overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-float sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="overflow-hidden">
                  <img
                    src={mediaUrl(img?.url)}
                    alt={`${doc.name}, ${doc.title}`}
                    width="768"
                    height="1024"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:py-12 sm:pr-10">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                    {doc.title}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                    {doc.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {doc.bio}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {(doc.highlights ?? []).map((h) => (
                      <li
                        key={h.id ?? h.label}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href={physicianslink}
          className="rounded-full surface-deep px-7 py-3.5 text-sm font-semibold shadow-float transition-transform duration-300 hover:-translate-y-1"
        >
          {physicianslinkLabel}
        </a>
      </div>
    </section>
  );
}
