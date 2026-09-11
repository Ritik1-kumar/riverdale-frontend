import { useSiteData } from "../context/SiteDataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import TeamMembers from "../components/TeamMembers";
import FinalCta from "../components/FinalCta";

export default function TeamPage() {
  const { data } = useSiteData();
  const { global, team } = data;

  return (
    <>
      <Header global={global} />
      <main id="top">
        <AboutHero hero={team.hero} />
        <TeamMembers teamMembers={team.teamMembers} />
        <FinalCta cta={team.finalCta} />
      </main>
      <Footer global={global} />
    </>
  );
}
