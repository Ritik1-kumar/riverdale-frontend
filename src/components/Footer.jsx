import { mediaUrl } from "../lib/strapi";

export default function Footer({ global }) {
  const img = global.Logo;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={mediaUrl(img?.url)}
            alt={img?.alternativeText || ""}
            loading="lazy"
            width="1452"
            height="723"
            className="h-12 w-auto object-contain"
          />
        </a>
        <p>{global.address}</p>
        <a href="tel:5616378383" className="text-primary">
          {global.phone}
        </a>
      </div>
    </footer>
  );
}
