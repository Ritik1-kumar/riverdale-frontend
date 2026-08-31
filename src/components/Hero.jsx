import { mediaUrl } from "../lib/strapi";

export default function Hero({ hero, stats }) {
  const image = hero.image; // Strapi v5: media fields are flat (no data.attributes wrapper)

  return (
    <section className="relative overflow-hidden surface-soft pb-24 pt-36 md:pb-32 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky/50 blur-3xl animate-float"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-mist blur-3xl"
      ></div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
            {hero.eyebrow}
          </span>
          <h1 className="mt-7 text-[clamp(2.75rem,6.4vw,5.25rem)] font-semibold leading-[0.95]">
            {hero.title}
            <span className="block text-gradient">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryButtonLink}
              className="rounded-full surface-deep px-7 py-3.5 text-sm font-semibold shadow-float transition-transform duration-300 hover:-translate-y-1"
            >
              {hero.primaryButtonLabel}
            </a>
            <a
              href={hero.secondaryButtonLink}
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-primary"
            >
              {hero.secondaryButtonLabel}
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-1 xs:grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.id}>
                <dt className="font-display text-2xl font-semibold text-primary">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-float">
            <img
              src={mediaUrl(image?.url)}
              alt={image?.alternativeText || ""}
              width="1280"
              height="1600"
              className="h-[30rem] w-full object-cover md:h-[38rem]"
            />
            <div class="absolute -bottom-6 -left-4 lg:-left-6 max-w-[15rem] rounded-3xl bg-background p-5 shadow-soft">
              <p class="font-display text-sm font-semibold">{hero.imageText}</p>
              <p class="mt-1 text-xs text-muted-foreground">
                {hero.ImageSubText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
