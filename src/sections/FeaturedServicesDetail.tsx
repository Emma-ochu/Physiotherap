import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { services } from "./Services/servicesData";

const FeaturedServicesDetail = () => {
  // Show only first 4 services for home page (featured ones)
  const featuredServices = services.slice(0, 4);

  const serviceImages: Record<string, string> = {
    musculoskeletal: "/images/musculoskeletal.jpg",
    sports: "/images/sports-physiotherapy.jpg",
    "pelvic-health": "/images/pelvic-health.jpg",
    "orthopaedic-rehabilitation": "/images/orthopaedic-rehabilitation.jpg",
    "neurological-rehabilitation": "/images/massage.jpg",
    "functional-specialist-rehabilitation": "/images/deines.jpg",
    "mobile-exercise-rehabilitation": "/images/training.jpg",
  };

  return (
    <section className='bg-white py-20 md:py-28'>
      <Container>
        {/* Header */}
        <div className='mb-16 text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
            Our Services
          </p>
          <h2 className='mt-4 text-3xl font-bold text-slate-900 md:text-5xl'>
            Physiotherapy Tailored to You
          </h2>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-slate-600'>
            From everyday pain to complex rehabilitation, we provide specialized
            physiotherapy designed around your unique needs and recovery goals.
          </p>
        </div>

        {/* Featured Services Cards */}
        <div className='space-y-12'>
          {featuredServices.map((service, index) => (
            <article
              key={service.slug}
              className='overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-lg transition hover:shadow-2xl'
            >
              <div
                className={`grid gap-8 lg:gap-12 ${
                  index % 2 === 0 ?
                    "lg:grid-cols-[1.2fr_0.8fr]"
                  : "lg:grid-cols-[0.8fr_1.2fr]"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`flex flex-col justify-center p-8 md:p-12 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div>
                    <span className='inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700'>
                      {service.number}
                    </span>

                    <h3 className='mt-6 text-3xl font-bold text-slate-900 md:text-4xl'>
                      {service.title}
                    </h3>

                    <p className='mt-6 text-lg leading-8 text-slate-600'>
                      {service.heroDescription}
                    </p>

                    <p className='mt-6 text-base leading-7 text-slate-600'>
                      {service.overview}
                    </p>

                    {/* Quick highlights */}
                    <div className='mt-8 space-y-3'>
                      {service.treatmentApproach
                        .slice(0, 3)
                        .map((approach, i) => (
                          <div key={i} className='flex items-start gap-3'>
                            <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-blue-700' />
                            <span className='text-sm text-slate-700'>
                              {approach}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/services/${service.slug}`}
                      className='mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800 hover:-translate-y-0.5'
                    >
                      View Service Details
                      <ArrowRight className='h-4 w-4' />
                    </Link>
                  </div>
                </div>

                {/* Service image */}
                <div
                  className={`relative min-h-[300px] overflow-hidden md:min-h-[400px] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={serviceImages[service.slug] ?? "/images/deines.jpg"}
                    alt={service.title}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <p className='text-sm font-semibold uppercase tracking-[0.2em] text-blue-100'>
                      {service.number}
                    </p>
                    <p className='mt-2 text-2xl font-bold text-white'>
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Services */}
        <div className='mt-16 text-center'>
          <Link
            to='/services'
            className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-0.5'
          >
            View All Services
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServicesDetail;
