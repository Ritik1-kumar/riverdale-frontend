import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServicesList from "../components/ServicesList";
import FinalCta from "../components/FinalCta";

export default function ServicesPage() {
  const { data } = useSiteData();
  const { global, services } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <ServicesHero hero={services.hero} services={services.services} />
        <ServicesList
          services={services.services}
          bookAVisitLabel={global.bookAVisitLabel}
          bookAVisitLink={global.bookAVisitLink}
        />
        <FinalCta cta={services.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
