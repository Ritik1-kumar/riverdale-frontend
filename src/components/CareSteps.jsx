export default function CareSteps({
  eyebrow,
  title,
  titleHighlight,
  careSteps = [],
}) {
  return (
    <section className="surface-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-sky">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
          {title}
          <span className="block text-sky">{titleHighlight}</span>
        </h2>

        <div className="mt-16 grid gap-8 md:gap-3 lg:gap-8 md:grid-cols-3">
          {careSteps.map((step) => (
            <div
              key={step.id ?? step.number}
              className="glass-card h-full rounded-3xl p-9 transition-transform duration-500 hover:-translate-y-2"
            >
              <p className="font-display text-5xl font-semibold text-sky/40">
                {step.number}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sky/85">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
