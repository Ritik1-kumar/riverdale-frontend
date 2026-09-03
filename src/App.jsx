import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WhyUsPage from "./pages/WhyUsPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* add one Route + one Strapi Single Type per new page */}
      </Routes>
    </BrowserRouter>
  );
}
