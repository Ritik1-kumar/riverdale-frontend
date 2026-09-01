// import HospitalAffiliation from "./HospitalAffiliation";

export default function Services({
  eyebrow,
  title,
  description,
  services = [],
  affiliation,
}) {
  return (
    <section id="services" className="surface-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-sky">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 leading-relaxed text-sky">{description}</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div className="" key={service.id ?? service.title}>
              <article className="group relative h-full overflow-hidden p-9 transition-colors duration-500 surface-deep hover:bg-white/10">
                <span className="font-display text-xs tracking-[0.3em] text-sky/70">
                  {service.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sky/85">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="mt-6 inline-block text-sm font-semibold text-accent opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  Learn more →
                </a>
              </article>
            </div>
          ))}
        </div>

        {/* <HospitalAffiliation {...affiliation} /> */}
      </div>
    </section>
  );
}
