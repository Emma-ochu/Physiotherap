import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const services = [
  {
    title: "Musculoskeletal Physiotherapy",
    description:
      "Treatment for pain, stiffness, joint problems, muscle injuries, and movement restrictions.",
    image: "/images/musculoskeletal.jpg",
  },
  {
    title: "Sports Physiotherapy",
    description:
      "Specialist rehabilitation to help athletes and active people recover safely and return to sport.",
    image: "/images/sports-physiotherapy.jpg",
  },
  {
    title: "Pelvic Health",
    description:
      "Professional physiotherapy support for pelvic health, pregnancy, postpartum recovery, and related conditions.",
    image: "/images/pelvic-health.jpg",
  },
  {
    title: "Orthopaedic Rehabilitation",
    description:
      "Structured rehabilitation following surgery, fractures, joint injuries, and orthopaedic procedures.",
    image: "/images/orthopaedic-rehabilitation.jpg",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Physiotherapy Care Built Around You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From everyday pain and sports injuries to post-surgical and
            neurological rehabilitation, our services are designed around your
            condition, goals, and recovery.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <NavLink
              key={service.title}
              to="/services"
              className="group overflow-hidden rounded-3xl bg-slate-950 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <NavLink
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-800"
          >
            View All Physiotherapy Services
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;