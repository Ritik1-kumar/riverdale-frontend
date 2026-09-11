import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import WhyFeatures from "../components/WhyFeatures";
import FinalCta from "../components/FinalCta";

export default function WhyUsPage() {
  const { data } = useSiteData();
  const { global, whyUs } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <AboutHero hero={whyUs.hero} />
        <AboutStats stats={whyUs.stats} />
        <WhyFeatures features={whyUs.features} />
        <FinalCta cta={whyUs.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
