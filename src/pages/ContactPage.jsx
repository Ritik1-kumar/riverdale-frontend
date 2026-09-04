import { useEffect, useState } from "react";
import { getContactPage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ContactForm from "../components/ContactForm";
import ClinicHours from "../components/ClinicHours";
import ContactDetails from "../components/ContactDetails";

export default function ContactPage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getContactPage(), getGlobal()])
      .then(([contact, glob]) => {
        setData(contact);
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
        <ServicesHero hero={data.hero} />

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <ContactForm
              doctors={data.doctors}
              confirmButtonLabel={data.confirmButtonLabel}
              copy={data}
            />

            <div className="space-y-8">
              <ClinicHours
                clinicHours={data.clinicHours}
                emergencyBold={data.emergencyBold}
                emergencyRest={data.emergencyRest}
                heading={data.clinicHoursHeading}
                closedLabel={data.closedLabel}
              />
              <ContactDetails
                phone={global.phone}
                phoneLink={global.phoneLink}
                address={global.address}
                heading={data.contactDetailsHeading}
                callUsLabel={data.callUsLabel}
                visitUsLabel={data.visitUsLabel}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer global={global} />
    </>
  );
}
