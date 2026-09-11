import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteDataProvider, useSiteData } from "./context/SiteDataContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WhyUsPage from "./pages/WhyUsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PatientsPage from "./pages/PatientsPage";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  const { data, error } = useSiteData();

  if (error) {
    return <div className="p-10 text-center text-red-600">{error}</div>;
  }

  // One loading screen, shown only once, before the very first paint —
  // every page after this renders instantly from data already in memory.
  if (!data) {
    return <div className="p-10 text-center">Loading…</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/why-us" element={<WhyUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/patients" element={<PatientsPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteDataProvider>
        <AppRoutes />
      </SiteDataProvider>
    </BrowserRouter>
  );
}
