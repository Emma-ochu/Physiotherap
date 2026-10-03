import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import PageHero from "../../components/PageHero";
import { serviceImages, type Service } from "./servicesData";

interface ServicesDetailsProps {
  service: Service;
}

const ServicesDetails = ({ service }: ServicesDetailsProps) => {
  return (
    <>
      <PageHero
        eyebrow={`Physiotherapy Service ${service.number}`}
        title={service.title}
        description={service.heroDescription}
        image={serviceImages[service.slug] ?? "/images/deines1.png"}
        imageOverlay={
          service.slug === "neurological-rehabilitation" ||
          service.slug === "functional-specialist-rehabilitation" ?
            "subtle"
          : "dark"
        }
        actions={[
          { label: "Book an Appointment", to: "/contact#contact-form" },
          { label: "Back to Services", to: "/services", secondary: true },
        ]}
      />

      {/* Overview */}
      <section className='py-20 md:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
              Overview
            </h2>
            <p className='mt-6 text-lg leading-8 text-slate-600'>
              {service.overview}
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Help */}
      <section className='bg-slate-50 py-20 md:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
              Who We Help
            </h2>
            <ul className='mt-8 space-y-4'>
              {service.whoWeHelp.map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-blue-700' />
                  <span className='text-lg text-slate-700'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Conditions We Treat */}
      <section className='py-20 md:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
              Conditions & Areas We Treat
            </h2>
            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              {service.conditions.map((condition, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-blue-700' />
                  <span className='font-medium text-slate-700'>
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Approach */}
      <section className='bg-slate-50 py-20 md:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
              Our Treatment Approach
            </h2>
            <ul className='mt-8 space-y-4'>
              {service.treatmentApproach.map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-blue-700' />
                  <span className='text-lg text-slate-700'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className='py-20 md:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>
              Benefits
            </h2>
            <ul className='mt-8 space-y-4'>
              {service.benefits.map((benefit, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-blue-700' />
                  <span className='text-lg text-slate-700'>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className='bg-blue-700 py-20 md:py-24'>
        <Container>
          <div className='mx-auto max-w-3xl text-center text-white'>
            <h2 className='text-3xl font-bold md:text-4xl'>
              Ready to Start Your Recovery?
            </h2>

            <p className='mt-6 text-lg leading-8 text-white/80'>
              Contact the DE-INES team to book an appointment and start your
              physiotherapy journey.
            </p>

            <Link
              to='/contact#contact-form'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition hover:bg-slate-100'
            >
              Book Now
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServicesDetails;
