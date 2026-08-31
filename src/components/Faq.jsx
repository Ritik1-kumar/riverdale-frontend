import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({
  eyebrow,
  title,
  description,
  cardTitle,
  cardText,
  faqs = [],
  phone,
  phoneLink,
}) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 rounded-3xl bg-mist p-6">
            <p className="text-sm font-semibold">{cardTitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">{cardText}</p>
            <a
              href={phoneLink}
              className="mt-4 inline-block font-display text-lg text-primary"
            >
              {phone}
            </a>
          </div>
        </div>
        <div className="">
          <div className="space-y-4">
            {faqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id ?? item.question}
                  className="rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-accent"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <span className="font-display text-base font-semibold">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
