export default function ServicesHero({ hero, services = [] }) {
  return (
    <section className="relative overflow-hidden surface-soft pb-24 pt-36 md:pb-32 md:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-112 w-md rounded-full bg-sky/50 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-aqua/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
          {hero.badge}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {hero.title}
          <span className="block text-gradient">{hero.titleHighlight}</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {services.map((service) => (
            <a
              key={service.id ?? service.anchorId}
              href={`#${service.anchorId}`}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua hover:text-primary"
            >
              {service.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
