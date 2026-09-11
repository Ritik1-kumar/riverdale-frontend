import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import Story from "../components/Story";
import Physicians from "../components/Physicians";
import CareSteps from "../components/CareSteps";
import Facilities from "../components/Facilities";
import AboutTestimonials from "../components/AboutTestimonials";
import FinalCta from "../components/FinalCta";

export default function AboutPage() {
  const { data } = useSiteData();
  const { global, about: data_ } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <AboutHero hero={data_.hero} />
        <AboutStats stats={data_.stats} />
        <Story
          eyebrow={data_.storyEyebrow}
          title={data_.storyTitle}
          titleHighlight={data_.storyTitleHighlight}
          timeline={data_.timeline}
        />
        <Physicians
          eyebrow={data_.physiciansEyebrow}
          title={data_.physiciansTitle}
          titleHighlight={data_.physiciansTitleHighlight}
          physicians={data_.physicians}
          physicianslink={data_.physicianslink}
          physicianslinkLabel={data_.physicianslinkLabel}
        />
        <CareSteps
          eyebrow={data_.careEyebrow}
          title={data_.careTitle}
          titleHighlight={data_.careTitleHighlight}
          careSteps={data_.careSteps}
        />
        <Facilities
          eyebrow={data_.facilitiesEyebrow}
          title={data_.facilitiesTitle}
          titleHighlight={data_.facilitiesTitleHighlight}
          facilities={data_.facilities}
        />
        <AboutTestimonials
          eyebrow={data_.testimonialsEyebrow}
          title={data_.testimonialsTitle}
          titleHighlight={data_.testimonialsTitleHighlight}
          testimonials={data_.testimonials}
        />
        <FinalCta cta={data_.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
