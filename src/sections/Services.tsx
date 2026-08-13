import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";
import { services } from "./Services/servicesData";

const Services = () => {
  return (
    <main className="bg-white">
      {/* Page Hero */}
      <section
        id="services"
        className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-blue-950/30" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Clinical Physiotherapy Services
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Treatment, Rehabilitation,
              <br className="hidden md:block" />
              Exercise & Education
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
              Professional physiotherapy care focused on helping you reduce
              pain, restore movement, build strength, and return to the
              activities that matter to you.
            </p>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Our Services
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Physiotherapy Designed Around You
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every person and every condition is different. Our physiotherapy
              services are designed around your symptoms, goals, lifestyle,
              physical needs, and stage of recovery.
            </p>
          </div>

          {/* Service Packages */}
          <div className="mt-16 space-y-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
              >
                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                  {/* Service heading */}
                  <div className="bg-slate-950 p-8 text-white md:p-10">
                    <span className="text-sm font-bold text-blue-300">
                      {service.number}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-7 text-white/70">
                      {service.shortDescription}
                    </p>

                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-blue-200"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Conditions */}
                  <div className="p-8 md:p-10">
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                      Conditions & Areas We Treat
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {service.conditions.map((condition) => (
                        <div
                          key={condition}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                          <span className="font-medium text-slate-700">
                            {condition}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Recovery CTA */}
      <section className="bg-blue-700 py-20 md:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-3xl text-white">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
                Start Your Recovery
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Not sure which service is right for you?
              </h2>

              <p className="mt-4 text-lg leading-8 text-white/80">
                Speak with the DE-INES team about your condition and goals. We
                can help you understand the most appropriate next step.
              </p>
            </div>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Services;