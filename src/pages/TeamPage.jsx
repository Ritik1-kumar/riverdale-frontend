import { useEffect, useState } from "react";
import { getTeamPage, getGlobal } from "../lib/strapi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import TeamMembers from "../components/TeamMembers";
import FinalCta from "../components/FinalCta";

export default function TeamPage() {
  const [data, setData] = useState(null);
  const [global, setGlobal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getTeamPage(), getGlobal()])
      .then(([team, glob]) => {
        setData(team);
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
        <TeamMembers teamMembers={data.teamMembers} />
        <FinalCta cta={data.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
