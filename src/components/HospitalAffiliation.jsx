import { mediaUrl } from "../lib/strapi";

export default function HospitalAffiliation({
  title,
  text,
  link,
  image,
  linkText,
}) {
  const img = image;

  return (
    <div className="mt-14">
      <div className="grid items-center gap-10 rounded-3xl glass-card p-8 md:grid-cols-[1fr_0.8fr] md:p-10">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-4 leading-relaxed text-sky">{text}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-accent"
            >
              {linkText} →
            </a>
          )}
        </div>
        <img
          src={mediaUrl(img?.url)}
          alt={img?.alternativeText || ""}
          loading="lazy"
          width="1024"
          height="768"
          className="h-52 w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
