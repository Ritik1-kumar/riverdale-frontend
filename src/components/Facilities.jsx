import { mediaUrl } from "../lib/strapi";

export default function Facilities({
  eyebrow,
  title,
  titleHighlight,
  facilities = [],
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
          {title}
          <span className="block text-gradient">{titleHighlight}</span>
        </h2>

        <div className="mt-16 grid gap-8 md:gap-3 lg:gap-8 md:grid-cols-3">
          {facilities.map((facility) => {
            const img = facility.image;
            return (
              <div
                key={facility.id ?? facility.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-float"
              >
                <div className="overflow-hidden">
                  <img
                    src={mediaUrl(img?.url)}
                    alt={facility.title}
                    width="1280"
                    height="960"
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
