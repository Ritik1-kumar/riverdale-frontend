export default function AboutTestimonials({
  eyebrow,
  title,
  titleHighlight,
  testimonials = [],
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

        <div className="mt-16 grid gap-8 md:gap-3 lg:gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id ?? t.authorName}
              className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-9 shadow-soft transition-transform duration-500 hover:-translate-y-2"
            >
              <div>
                <p className="font-display text-4xl text-accent">"</p>
                <blockquote className="mt-2 text-base leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-display text-sm font-semibold">
                  {t.authorName}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.authorMeta}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
