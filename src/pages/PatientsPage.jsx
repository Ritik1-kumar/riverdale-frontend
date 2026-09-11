import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutStats from "../components/AboutStats";
import Transformations from "../components/Transformations";
import PatientsTestimonials from "../components/PatientsTestimonials";
import FinalCta from "../components/FinalCta";

export default function PatientsPage() {
  const { data } = useSiteData();
  const { global, patients } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <Hero hero={patients.hero} stats={[]} />
        <AboutStats stats={patients.stats} />
        <Transformations
          eyebrow={patients.transformationsEyebrow}
          title={patients.transformationsTitle}
          titleHighlight={patients.transformationsTitleHighlight}
          description={patients.transformationsDescription}
          transformations={patients.transformations}
        />
        <PatientsTestimonials
          eyebrow={patients.testimonialsEyebrow}
          title={patients.testimonialsTitle}
          titleHighlight={patients.testimonialsTitleHighlight}
          testimonials={patients.testimonials}
        />
        <FinalCta cta={patients.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
