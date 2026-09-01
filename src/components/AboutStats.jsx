export default function AboutStats({ stats = [] }) {
  return (
    <section className="surface-deep py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id ?? stat.label} className="">
            <p className="font-display text-4xl font-semibold md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-sky/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
