export default function Insurance({
  eyebrow,
  title,
  description,
  plans = [],
  phone,
  phoneLink,
}) {
  return (
    <section id="insurance" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 rounded-3xl bg-mist p-6">
            <p className="text-sm font-semibold">Questions about coverage?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact us to verify your insurance before your visit.
            </p>
            <a
              href={phoneLink}
              className="mt-4 inline-block font-display text-lg text-primary"
            >
              {phone}
            </a>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-wrap gap-2.5">
            {plans.map((plan) => (
              <li
                key={plan}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-primary"
              >
                {plan}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
