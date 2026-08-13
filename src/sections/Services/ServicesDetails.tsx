import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { WHATSAPP_BOOK } from "../../lib/whatsapp";
import type { Service } from "./servicesData";

interface ServicesDetailsProps {
  service: Service;
}

const ServicesDetails = ({ service }: ServicesDetailsProps) => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
        <div className="absolute inset-0 bg-blue-950/30" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Services
            </Link>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {service.heroDescription}
            </p>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-blue-800"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Overview
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {service.overview}
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Help */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Who We Help
            </h2>
            <ul className="mt-8 space-y-4">
              {service.whoWeHelp.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Conditions & Areas We Treat
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="font-medium text-slate-700">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Approach */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Our Treatment Approach
            </h2>
            <ul className="mt-8 space-y-4">
              {service.treatmentApproach.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Benefits
            </h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-lg text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Start Your Recovery?
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Contact the DE-INES team to book an appointment and start your
              physiotherapy journey.
            </p>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition hover:bg-slate-100"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ServicesDetails;