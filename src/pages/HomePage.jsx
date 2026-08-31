import { useEffect, useState } from "react";
import { getHomepage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import HospitalAffiliation from "../components/HospitalAffiliation";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import Doctors from "../components/Doctors";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    Promise.all([getHomepage(), getGlobal()]).then(([home, glob]) => {
      setData(home);
      setGlobal(glob);
    });
  }, []);

  if (!data || !global) return <div className="p-10 text-center">Loading…</div>;

  return (
    <>
      <Header global={global} />
      <main>
        <Hero hero={data.hero} stats={data.stats} />
        <Marquee items={data.marqueeItems} />
        <About
          eyebrow={data.aboutEyebrow}
          title={data.aboutTitle}
          description={data.aboutDescription}
          description2={data.aboutDescription2}
          image={data.aboutImage}
          features={data.aboutFeatures}
        />
        <Services
          eyebrow={data.servicesEyebrow}
          title={data.servicesTitle}
          description={data.servicesDescription}
          services={data.services}
          affiliation={{
            title: data.hospitalAffiliationTitle,
            text: data.hospitalAffiliationText,
            link: data.hospitalAffiliationLink,
            linkText: data.hospitalAffiliationLinkText,
            image: data.hospitalAffiliationImage,
          }}
        />
        <Doctors
          eyebrow={data.doctorsEyebrow}
          title={data.doctorsTitle}
          description={data.doctorsDescription}
          doctors={data.doctors}
        />
        <Faq
          eyebrow={data.faqEyebrow}
          title={data.faqTitle}
          description={data.faqDescription}
          cardTitle={data.faqCardTitle}
          cardText={data.faqCardText}
          faqs={data.faqs}
          phone={global.phone}
          phoneLink={global.phoneLink}
        />
        <Testimonials
          eyebrow={data.testimonialsEyebrow}
          title={data.testimonialsTitle}
          testimonials={data.testimonials}
        />
        <FinalCta cta={data.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
