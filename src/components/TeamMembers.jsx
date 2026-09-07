import { mediaUrl } from "../lib/strapi";

export default function TeamMembers({ teamMembers = [] }) {
  return (
    <>
      {teamMembers.map((member, index) => {
        const isReversed = index % 2 === 1;
        const img = member.image;
        const paragraphs = (member.bio ?? "")
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean);

        return (
          <section
            key={member.id ?? member.name}
            className={
              isReversed
                ? "border-b border-border bg-background py-16 last:border-0 md:py-20"
                : "border-b border-border surface-soft py-16 last:border-0 md:py-20"
            }
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
              <div className={isReversed ? "md:order-2" : undefined}>
                <div className="overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={mediaUrl(img?.url)}
                    alt={member.name}
                    loading="lazy"
                    width="1024"
                    height="1024"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>

              <div className={isReversed ? "md:order-1" : undefined}>
                {/* <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
                  {member.specialty}
                </p> */}
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  {member.heading}
                </h2>
                <p className="mt-3 font-display text-lg leading-snug text-accent">
                  {member.subheading}
                </p>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  {paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {/* <p className="mt-6 font-display text-sm font-semibold text-foreground">
                  {member.name}
                </p> */}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
