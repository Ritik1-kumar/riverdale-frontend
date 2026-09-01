export default function Story({
  eyebrow,
  title,
  titleHighlight,
  timeline = [],
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
          {title}
          <span className="block text-gradient">{titleHighlight}</span>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <div
              key={item.id ?? item.year}
              className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
            >
              <p className="font-display text-sm font-semibold text-accent">
                {item.year}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
