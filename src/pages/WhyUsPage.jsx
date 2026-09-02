import { useEffect, useState } from "react";
import { getWhyUsPage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import WhyFeatures from "../components/WhyFeatures";
import AboutCta from "../components/AboutCta";

export default function WhyUsPage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getWhyUsPage(), getGlobal()])
      .then(([whyUs, glob]) => {
        setData(whyUs);
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
        <AboutHero hero={data.hero} />
        <AboutStats stats={data.stats} />
        <WhyFeatures features={data.features} />
        <AboutCta cta={data.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
