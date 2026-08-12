import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Services from "../pages/Services";
import TrainingPage from "../pages/TrainingPage";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import WhatWeTreatPage from "../pages/WhatWeTreat";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="what-we-treat" element={<WhatWeTreatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;