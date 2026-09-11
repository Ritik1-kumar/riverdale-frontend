import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ContactForm from "../components/ContactForm";
import ClinicHours from "../components/ClinicHours";
import ContactDetails from "../components/ContactDetails";

export default function ContactPage() {
  const { data } = useSiteData();
  const { global, contact } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <ServicesHero hero={contact.hero} />

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <ContactForm
              doctors={contact.doctors}
              confirmButtonLabel={contact.confirmButtonLabel}
              copy={contact}
              phone={global.phone}
            />

            <div className="space-y-8">
              <ClinicHours
                clinicHours={contact.clinicHours}
                emergencyBold={contact.emergencyBold}
                emergencyRest={contact.emergencyRest}
                heading={contact.clinicHoursHeading}
                closedLabel={contact.closedLabel}
              />
              <ContactDetails
                phone={global.phone}
                phoneLink={global.phoneLink}
                address={global.address}
                heading={contact.contactDetailsHeading}
                callUsLabel={contact.callUsLabel}
                visitUsLabel={contact.visitUsLabel}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer global={global} />
    </>
  );
}
