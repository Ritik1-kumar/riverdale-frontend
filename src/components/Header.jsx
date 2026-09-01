import { useEffect, useState } from "react";
import { mediaUrl } from "../lib/strapi";

export default function Header({ global }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = global.navLinks || [];
  const img = global.Logo;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route/hash change or resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="http://localhost:5173/" className="flex items-center gap-3">
          <img
            src={mediaUrl(img?.url)}
            alt={img?.alternativeText || ""}
            loading="lazy"
            width="1452"
            height="723"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
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

        <div className="flex items-center gap-3">
          <a
            href={global.phoneLink}
            className="hidden rounded-full surface-deep px-5 py-2.5 text-sm font-semibold shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block"
          >
            {global.bookAVisitLabel}
          </a>

          {/* Hamburger toggle - mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full surface-deep md:hidden cursor-pointer"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center gap-1 bg-background/95 backdrop-blur-xl px-6 pb-6 pt-2 shadow-soft">
          {links.map((link) => (
            <a
              key={link.id ?? link.url}
              href={link.url}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base text-center font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={global.phoneLink}
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-full surface-deep px-5 py-3 text-center text-sm font-semibold shadow-soft"
          >
            {global.bookAVisitLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
