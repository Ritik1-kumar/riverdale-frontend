import { mediaUrl } from "../lib/strapi";

export default function About({
  eyebrow,
  title,
  description,
  description2,
  image,
  features = [],
}) {
  const img = image;

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.05]">
            {title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {description}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {description2}
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={mediaUrl(img?.url)}
              alt={img?.alternativeText || ""}
              loading="lazy"
              width="1024"
              height="768"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div className="" key={feature.id ?? feature.title}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-soft">
                <span className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
                  {feature.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
