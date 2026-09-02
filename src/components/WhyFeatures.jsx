import { mediaUrl } from "../lib/strapi";

export default function WhyFeatures({ features = [] }) {
  return (
    <>
      {features.map((feature, index) => {
        const isDark = index % 2 === 1;
        const img = feature.image;

        return (
          <section
            key={feature.id ?? feature.number}
            className={
              isDark
                ? "relative overflow-hidden surface-soft py-24 md:py-28"
                : "bg-background py-24 md:py-28"
            }
          >
            {isDark && (
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-aqua/15 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky/10 blur-3xl"
                />
              </>
            )}

            <div className={isDark ? "relative" : undefined}>
              <div className="mx-auto grid max-w-7xl items-center gap-12 md:gap-8 lg:gap-16 px-6 md:grid-cols-2">
                {/* Image */}
                <div className={isDark ? "md:order-2" : undefined}>
                  <div className="group relative">
                    <div
                      aria-hidden="true"
                      className={
                        isDark
                          ? "absolute -inset-4 rounded-[2rem] bg-ocean/25 blur-2xl"
                          : "absolute -inset-4 rounded-[2rem] bg-sky/40 blur-2xl"
                      }
                    />
                    <div className="relative overflow-hidden rounded-[1.75rem] shadow-float">
                      <img
                        src={mediaUrl(img?.url)}
                        alt={feature.title}
                        loading="lazy"
                        width="1024"
                        height="768"
                        className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-5 top-5 rounded-full bg-background/85 px-4 py-1.5 font-display text-sm font-semibold text-primary backdrop-blur">
                        {feature.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
                    {feature.eyebrow}
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-foreground lg:text-[2.6rem] md:leading-[1.1]">
                    {feature.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {feature.description}
                  </p>
                  <ul className="mt-8 space-y-3.5">
                    {(feature.checklist ?? []).map((item) => (
                      <li
                        key={item.id ?? item.label}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-[0.6rem] font-bold text-primary">
                          ✓
                        </span>
                        <span className="text-sm font-medium text-foreground/80 md:text-base">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
