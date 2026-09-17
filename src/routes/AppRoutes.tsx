import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Services from "../pages/Services";
import TrainingPage from "../pages/TrainingPage";
import Contact from "../pages/Contact";
import WhatWeTreatPage from "../pages/WhatWeTreat";
import PatientInfo from "../pages/PatientInfo";
import FAQ from "../pages/FAQ";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/ScrollToTop";

import ServicesDetails from "../sections/Services/ServicesDetails";
import { services } from "../sections/Services/servicesData";

const ServicesDetailsRoute = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <NotFound
        title='Service not found'
        message='The service you are looking for does not exist.'
      />
    );
  }

  return <ServicesDetails service={service} />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />

          <Route
            path='services/functional-rehabilitation'
            element={
              <Navigate
                to='/services/functional-specialist-rehabilitation'
                replace
              />
            }
          />
          <Route path='services/:slug' element={<ServicesDetailsRoute />} />

          <Route path='training' element={<TrainingPage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='what-we-treat' element={<WhatWeTreatPage />} />
          <Route path='patient-info' element={<PatientInfo />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
