import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const treatments = [
  {
    title: "Low Back Pain",
    image: "/images/low-back-pain.jpg",
  },
  {
    title: "Neck & Head Pain",
    image: "/images/neck-head-pain.jpg",
  },
  {
    title: "Shoulder Pain",
    image: "/images/shoulder-pain.jpg",
  },
  {
    title: "Ankle & Foot Pain",
    image: "/images/ankle-foot-pain.jpg",
  },
  {
    title: "Knee Pain",
    image: "/images/knee-pain.jpg",
  },
  {
    title: "Muscle Pain",
    image: "/images/muscle-pain.jpg",
  },
];

const WhatWeTreatPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden">
        <img
          src="/images/main.jpg"
          alt="Physiotherapy treatment"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative z-10 flex min-h-[520px] items-center justify-center px-6 py-20 text-center">
          <div className="max-w-5xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
              Clinical Physiotherapy
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              What We Treat
            </h1>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-red-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-red-600"
            >
              Book Appointment
            </a>

            <p className="mx-auto mt-9 max-w-4xl text-base leading-7 text-white/95 md:text-lg">
              At DE-INES, we see a wide range of injuries and conditions.
              From neck and back pain to sports injuries, orthopaedic
              conditions and rehabilitation needs, our physiotherapy team
              provides personalised care to help you move better and recover
              with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="bg-cyan-500 py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              What We Treat
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Common Conditions We Treat
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {treatments.map((treatment) => (
              <NavLink
                key={treatment.title}
                to="/services"
                className="group relative overflow-hidden bg-slate-900"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {treatment.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/90 opacity-0 transition duration-300 group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhatWeTreatPage;