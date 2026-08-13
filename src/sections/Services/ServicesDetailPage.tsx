import { useParams, Navigate } from "react-router-dom";
import ServicesDetails from "./ServicesDetails";
import { services } from "./servicesData";
import type { Service } from "./servicesData";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  const service = services.find((item: Service) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServicesDetails service={service} />;
};

export default ServiceDetailPage;