import { useEffect, useState } from "react";
import { mediaUrl } from "../lib/strapi";

export default function Header({ global }) {
  const [scrolled, setScrolled] = useState(false);
  const links = global.navLinks || [];
  const img = global.Logo;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
        <div className="hidden items-center gap-9 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.id ?? link.url}
              href={link.url}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={global.phoneLink}
          className="rounded-full surface-deep px-5 py-2.5 text-sm font-semibold shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          {global.bookAVisitLabel}
        </a>
      </nav>
    </header>
  );
}
