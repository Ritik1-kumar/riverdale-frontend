export default function Testimonials({ eyebrow, title, testimonials = [] }) {
  return (
    <section id="patients" className="surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05]">
            {title}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div className="" key={t.id ?? t.authorName}>
              <figure className="h-full rounded-3xl bg-card p-9 shadow-soft">
                <div
                  className="text-accent"
                  aria-label={`${t.rating ?? 5} out of 5 stars`}
                >
                  {"★".repeat(t.rating ?? 5)}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-snug">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.authorName}</span>
                  <span className="mt-1 block text-muted-foreground">
                    {t.authorMeta}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
