import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Services from "../pages/Services";
import TrainingPage from "../pages/TrainingPage";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import WhatWeTreatPage from "../pages/WhatWeTreat";
import PatientInfo from "../pages/PatientInfo";
import FAQ from "../pages/FAQ";

import ServicesDetails from "../sections/Services/ServicesDetails";
import { services } from "../sections/Services/servicesData";

const ServicesDetailsRoute = () => {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

 if (!service) {
  return <div>Service not found: {slug}</div>;
}
  return <ServicesDetails service={service} />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="services" element={<Services />} />

          <Route
            path="services/:slug"
            element={<ServicesDetailsRoute />}
          />

          <Route path="training" element={<TrainingPage />} />

          <Route path="gallery" element={<Gallery />} />

          <Route path="contact" element={<Contact />} />

          <Route
            path="what-we-treat"
            element={<WhatWeTreatPage />}
          />

          <Route path="patient-info" element={<PatientInfo />} />

          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;