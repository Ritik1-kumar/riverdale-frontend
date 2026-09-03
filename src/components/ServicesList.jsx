import { Check, ArrowRight } from "lucide-react";
import { mediaUrl } from "../lib/strapi";

export default function ServicesList({
  services = [],
  bookAVisitLabel,
  bookAVisitLink,
}) {
  return (
    <>
      {services.map((service, index) => {
        const isDark = index % 2 === 1;
        const img = service.image;

        return (
          <section
            key={service.id ?? service.anchorId}
            id={service.anchorId}
            className={
              isDark
                ? "scroll-mt-24 surface-deep py-20 md:py-28"
                : "scroll-mt-24 bg-background py-20 md:py-28"
            }
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
              {/* Image with giant number watermark */}
              <div className={isDark ? "md:order-2" : undefined}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className={
                      isDark
                        ? "absolute -left-2 -top-10 font-display text-8xl font-semibold text-white/10 md:-left-8 md:text-9xl"
                        : "absolute -left-2 -top-10 font-display text-8xl font-semibold text-mist md:-left-8 md:text-9xl"
                    }
                  >
                    {service.number}
                  </span>
                  <div className="relative overflow-hidden rounded-3xl shadow-float">
                    <img
                      src={mediaUrl(img?.url)}
                      alt={service.title}
                      loading="lazy"
                      width="1024"
                      height="1024"
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={isDark ? "md:order-1" : undefined}>
                <p
                  className={
                    isDark
                      ? "mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-sky"
                      : "mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary"
                  }
                >
                  {service.anchorId}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {service.title}
                </h2>
                <p
                  className={
                    isDark
                      ? "mt-4 font-display text-xl leading-snug text-sky md:text-2xl"
                      : "mt-4 font-display text-xl leading-snug text-primary md:text-2xl"
                  }
                >
                  {service.tagline}
                </p>
                <p
                  className={
                    isDark
                      ? "mt-5 leading-relaxed text-white/75"
                      : "mt-5 leading-relaxed text-muted-foreground"
                  }
                >
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3.5">
                  {(service.checklist ?? []).map((item) => (
                    <li
                      key={item.id ?? item.label}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={
                          isDark
                            ? "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua/25 text-sky"
                            : "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mist text-primary"
                        }
                      >
                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className={
                          isDark ? "text-white/85" : "text-foreground/85"
                        }
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={bookAVisitLink}
                  className={
                    isDark
                      ? "mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-float transition-transform duration-300 hover:-translate-y-0.5"
                      : "mt-10 inline-flex items-center gap-2 rounded-full surface-deep px-6 py-3 text-sm font-semibold shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                  }
                >
                  {bookAVisitLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
