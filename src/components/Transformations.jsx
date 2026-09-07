export default function Transformations({
  eyebrow,
  title,
  titleHighlight,
  description,
  transformations = [],
}) {
  return (
    <section id="transformations" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
            {eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.05]">
            {title}
            <span className="block text-gradient">{titleHighlight}</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((t) => (
            <article
              key={t.id ?? t.patientName}
              className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-float"
            >
              <div className="surface-deep px-6 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-sky">
                  {t.category}
                </p>
              </div>
              <div className="space-y-5 p-7">
                <div className="mb-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Before
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {t.before}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 left-0 h-px w-full bg-border" />
                  <div className="relative mx-auto grid w-10 place-items-center rounded-full bg-accent text-[0.65rem] font-bold uppercase tracking-wider text-ink">
                    To
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    After
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {t.after}
                  </p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="font-display text-sm font-semibold">
                    {t.patientName}
                  </p>
                  <p className="mt-1 text-[0.65rem] text-muted-foreground">
                    {t.patientMeta}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
