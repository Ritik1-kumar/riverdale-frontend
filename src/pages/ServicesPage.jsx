import { useEffect, useState } from "react";
import { getServicesPage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServicesList from "../components/ServicesList";
import FinalCta from "../components/FinalCta";

export default function ServicesPage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getServicesPage(), getGlobal()])
      .then(([services, glob]) => {
        setData(services);
        setGlobal(glob);
      })
      .catch((err) => {
        console.error(err);
        setError("Couldn't load page content. Is Strapi running?");
      });
  }, []);

  if (error) {
    return <div className="p-10 text-center text-red-600">{error}</div>;
  }

  if (!data || !global) {
    return <div className="p-10 text-center">Loading…</div>;
  }

  return (
    <>
      <Header global={global} />
      <main id="top">
        <ServicesHero hero={data.hero} services={data.services} />
        <ServicesList
          services={data.services}
          bookAVisitLabel={global.bookAVisitLabel}
          bookAVisitLink={global.bookAVisitLink}
        />
        <FinalCta cta={data.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
