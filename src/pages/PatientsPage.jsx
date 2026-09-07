import { useEffect, useState } from "react";
import { getPatientsPage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutStats from "../components/AboutStats";
import Transformations from "../components/Transformations";
import PatientsTestimonials from "../components/PatientsTestimonials";
import FinalCta from "../components/FinalCta";

export default function PatientsPage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getPatientsPage(), getGlobal()])
      .then(([patients, glob]) => {
        setData(patients);
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
        <Hero hero={data.hero} stats={[]} />
        <AboutStats stats={data.stats} />
        <Transformations
          eyebrow={data.transformationsEyebrow}
          title={data.transformationsTitle}
          titleHighlight={data.transformationsTitleHighlight}
          description={data.transformationsDescription}
          transformations={data.transformations}
        />
        <PatientsTestimonials
          eyebrow={data.testimonialsEyebrow}
          title={data.testimonialsTitle}
          titleHighlight={data.testimonialsTitleHighlight}
          testimonials={data.testimonials}
        />
        <FinalCta cta={data.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
