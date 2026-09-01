export default function AboutHero({ hero }) {
  return (
    <section className="relative overflow-hidden surface-soft pb-24 pt-36 md:pb-32 md:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky/50 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-112 w-md rounded-full bg-mist blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center animate-rise">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.badge}
        </span>

        <h1 className="mt-7 text-[clamp(2.75rem,6.4vw,5.25rem)] font-semibold leading-[0.98]">
          {hero.title}
          <span className="block text-gradient">{hero.titleHighlight}</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
