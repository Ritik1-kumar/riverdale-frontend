import { createContext, useContext, useEffect, useState } from "react";
import {
  getGlobal,
  getHomepage,
  getAboutPage,
  getWhyUsPage,
  getServicesPage,
  getContactPage,
  getTeamPage,
  getPatientsPage,
  getInsurancePlans,
} from "../lib/strapi";

const SiteDataContext = createContext(null);

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      getGlobal(),
      getHomepage(),
      getAboutPage(),
      getWhyUsPage(),
      getServicesPage(),
      getContactPage(),
      getTeamPage(),
      getPatientsPage(),
      getInsurancePlans(),
    ])
      .then(
        ([
          global,
          homepage,
          about,
          whyUs,
          services,
          contact,
          team,
          patients,
          insurancePlans,
        ]) => {
          setData({
            global,
            homepage,
            about,
            whyUs,
            services,
            contact,
            team,
            patients,
            insurancePlans,
          });
        },
      )
      .catch((err) => {
        console.error(err);
        setError(
          "Couldn't load site content. Is Strapi running and reachable?",
        );
      });
  }, []);

  return (
    <SiteDataContext.Provider value={{ data, error }}>
      {children}
    </SiteDataContext.Provider>
  );
}

// Throws if used outside the provider — makes misuse obvious during development.
export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) {
    throw new Error("useSiteData must be used inside <SiteDataProvider>");
  }
  return ctx;
}
