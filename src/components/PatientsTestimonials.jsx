import { Star } from "lucide-react";

export default function PatientsTestimonials({
  eyebrow,
  title,
  titleHighlight,
  testimonials = [],
}) {
  return (
    <section className="surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
            {eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.05]">
            {title}
            <span className="block text-gradient">{titleHighlight}</span>
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <div key={t.id ?? t.authorName} className="mb-6 break-inside-avoid">
              <figure className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform duration-500 hover:-translate-y-2">
                <div
                  className="flex items-center gap-1 text-accent"
                  aria-label={`${t.rating ?? 5} out of 5 stars`}
                >
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-sm font-semibold">
                    {t.authorName}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.authorMeta}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
