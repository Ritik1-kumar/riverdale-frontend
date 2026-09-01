export default function FinalCta({ cta }) {
  if (!cta) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-32">
      <div className="">
        <div className="relative overflow-hidden rounded-[2.5rem] surface-deep px-8 py-20 text-center shadow-float md:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl animate-float"
          ></div>
          <h2 className="relative mx-auto max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.03]">
            {cta.title}
          </h2>
          <p className="relative mt-5 text-sky">{cta.subtitle}</p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={cta.primaryButtonLink}
              className="rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              {cta.primaryButtonLabel}
            </a>
            <a
              href={cta.secondaryButtonLink}
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {cta.secondaryButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
