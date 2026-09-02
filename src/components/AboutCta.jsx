export default function AboutCta({ cta }) {
  if (!cta) return null;

  return (
    <section className="relative overflow-hidden surface-deep py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-aqua/20 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          {cta.title}
          {cta.titleHighlight && (
            <span className="block text-sky">{cta.titleHighlight}</span>
          )}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sky/85">
          {cta.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={cta.primaryButtonLink}
            className="rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground shadow-float transition-transform duration-300 hover:-translate-y-1"
          >
            {cta.primaryButtonLabel}
          </a>
          <a
            href={cta.secondaryButtonLink}
            className="rounded-full border border-sky/40 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:border-sky hover:text-sky"
          >
            {cta.secondaryButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
