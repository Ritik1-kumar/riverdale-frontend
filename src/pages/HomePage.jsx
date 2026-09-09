import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Faq from "../components/Faq";
import Insurance from "../components/Insurance";
import Testimonials from "../components/Testimonials";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function HomePage() {
  const { data } = useSiteData();
  const { global, homepage: home, insurancePlans: plans } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <Hero hero={home.hero} stats={home.stats} />
        <Marquee items={home.marqueeItems} />
        <About
          eyebrow={home.aboutEyebrow}
          title={home.aboutTitle}
          description={home.aboutDescription}
          description2={home.aboutDescription2}
          image={home.aboutImage}
          features={home.aboutFeatures}
        />
        <Services
          eyebrow={home.servicesEyebrow}
          title={home.servicesTitle}
          description={home.servicesDescription}
          services={home.services}
          affiliation={{
            title: home.hospitalAffiliationTitle,
            text: home.hospitalAffiliationText,
            link: home.hospitalAffiliationLink,
            image: home.hospitalAffiliationImage,
          }}
        />
        <Doctors
          eyebrow={home.doctorsEyebrow}
          title={home.doctorsTitle}
          description={home.doctorsDescription}
          doctors={home.doctors}
        />
        <Insurance
          eyebrow={home.insuranceEyebrow}
          title={home.insuranceTitle}
          description={home.insuranceDescription}
          plans={plans}
          phone={global.phone}
          phoneLink={global.phoneLink}
        />
        <Faq
          eyebrow={home.faqEyebrow}
          title={home.faqTitle}
          description={home.faqDescription}
          cardTitle={home.faqCardTitle}
          cardText={home.faqCardText}
          faqs={home.faqs}
          phone={global.phone}
          phoneLink={global.phoneLink}
        />
        <Testimonials
          eyebrow={home.testimonialsEyebrow}
          title={home.testimonialsTitle}
          testimonials={home.testimonials}
        />
        <FinalCta cta={home.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
