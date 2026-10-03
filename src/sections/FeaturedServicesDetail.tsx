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
    "neurological-rehabilitation": "/images/physio-2.jpg",
    "functional-specialist-rehabilitation": "/images/physio-3.jpg",
    "mobile-exercise-rehabilitation": "/images/training.jpg",
  };

  return (
    <section className='bg-slate-50 py-20 md:py-28'>
      <Container>
        <div className='mb-14 text-center md:mb-16'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
            Our Services
          </p>
          <h2 className='mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl'>
            Rehabilitation built around your goals
          </h2>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-slate-600'>
            From pain relief and mobility restoration to post-surgical recovery
            and performance support, we design care that fits your body,
            routine, and recovery journey.
          </p>
        </div>

        <div className='space-y-8 md:space-y-10'>
          {featuredServices.map((service, index) => (
            <article
              key={service.slug}
              className='overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]'
            >
              <div
                className={`grid gap-0 ${
                  index % 2 === 0 ?
                    "lg:grid-cols-[1.15fr_0.85fr]"
                  : "lg:grid-cols-[0.85fr_1.15fr]"
                }`}
              >
                <div
                  className={`relative min-h-[280px] overflow-hidden md:min-h-[420px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={serviceImages[service.slug] ?? "/images/deines.jpg"}
                    alt={service.title}
                    loading='lazy'
                    decoding='async'
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent' />

                  <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                    <span className='inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-100 backdrop-blur-sm'>
                      {service.number}
                    </span>
                    <p className='mt-4 text-2xl font-bold text-white md:text-3xl'>
                      {service.title}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-7 md:p-10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <span className='inline-flex w-fit rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-700'>
                    Featured Care
                  </span>

                  <h3 className='mt-5 text-2xl font-bold text-slate-900 md:text-4xl'>
                    {service.title}
                  </h3>

                  <p className='mt-5 text-base leading-7 text-slate-600 md:text-lg'>
                    {service.heroDescription}
                  </p>

                  <div className='mt-6 flex flex-wrap gap-2'>
                    {service.conditions.slice(0, 3).map((condition) => (
                      <span
                        key={condition}
                        className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700'
                      >
                        {condition}
                      </span>
                    ))}
                  </div>

                  <div className='mt-7 space-y-3'>
                    {service.treatmentApproach
                      .slice(0, 3)
                      .map((approach, i) => (
                        <div key={i} className='flex items-start gap-3'>
                          <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-blue-700' />
                          <span className='text-sm leading-6 text-slate-700 md:text-base'>
                            {approach}
                          </span>
                        </div>
                      ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className='mt-8 inline-flex items-center gap-2 self-start rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_26px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-800'
                  >
                    View Service Details
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Link
            to='/services'
            className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800'
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
