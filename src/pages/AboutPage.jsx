import { useEffect, useState } from "react";
import { getAboutPage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import Story from "../components/Story";
import Physicians from "../components/Physicians.jsx";
import CareSteps from "../components/CareSteps";
import Facilities from "../components/Facilities";
import AboutTestimonials from "../components/AboutTestimonials";
import FinalCta from "../components/FinalCta";

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getAboutPage(), getGlobal()])
      .then(([about, glob]) => {
        setData(about);
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
        <Story
          eyebrow={data.storyEyebrow}
          title={data.storyTitle}
          titleHighlight={data.storyTitleHighlight}
          timeline={data.timeline}
        />
        <Physicians
          eyebrow={data.physiciansEyebrow}
          title={data.physiciansTitle}
          titleHighlight={data.physiciansTitleHighlight}
          physicians={data.physicians}
          physicianslinkLabel={data.physicianslinkLabel}
          physicianslink={data.physicianslink}
        />
        <CareSteps
          eyebrow={data.careEyebrow}
          title={data.careTitle}
          titleHighlight={data.careTitleHighlight}
          careSteps={data.careSteps}
        />
        <Facilities
          eyebrow={data.facilitiesEyebrow}
          title={data.facilitiesTitle}
          titleHighlight={data.facilitiesTitleHighlight}
          facilities={data.facilities}
        />
        <AboutTestimonials
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
