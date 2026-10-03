import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import PageHero from "../components/PageHero";

const treatments = [
  {
    title: "Low Back Pain",
    image: "/images/low-back-pain.png",
    to: "/services/musculoskeletal",
  },
  {
    title: "Neck & Head Pain",
    image: "/images/neck-head-pain.png",
    to: "/services/musculoskeletal",
  },
  {
    title: "Shoulder Pain",
    image: "/images/shoulder-pain.png",
    to: "/services/orthopaedic-rehabilitation",
  },
  {
    title: "Ankle & Foot Pain",
    image: "/images/ankle-pain.png",
    to: "/services/sports",
  },
  {
    title: "Knee Pain",
    image: "/images/knee-pain.png",
    to: "/services/orthopaedic-rehabilitation",
  },
  {
    title: "Muscle Pain",
    image: "/images/muscle-pain.png",
    to: "/services/sports",
  },
];

const WhatWeTreatPage = () => {
  return (
    <>
      <PageHero
        eyebrow='Clinical Physiotherapy'
        title='What We Treat'
        description='At DE-INES, we support people with a wide range of musculoskeletal, sports, neurological, orthopaedic, and rehabilitation needs. We tailor treatment to your condition, lifestyle, and recovery goals.'
        actions={[
          { label: "Book Appointment", to: "/contact#contact-form" },
          { label: "Our Services", to: "/services", secondary: true },
        ]}
      />

      <section className='bg-slate-50 py-7'>
        <Container>
          <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm md:gap-8 md:px-10'>
            {[
              "Pain management",
              "Mobility support",
              "Strength rebuilding",
              "Return to activity",
            ].map((item) => (
              <span key={item} className='text-sm font-semibold text-slate-600'>
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className='bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 md:py-24'>
        <Container>
          <div className='mx-auto mb-10 max-w-3xl text-center md:mb-14'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
              Common Conditions
            </p>

            <h2 className='mt-3 text-3xl font-bold text-slate-900 md:text-4xl'>
              We Help People Recover, Move Better, and Feel Stronger
            </h2>

            <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg'>
              Explore common pain areas and find the physiotherapy service
              related to your recovery needs.
            </p>
          </div>

          <div className='grid gap-5 sm:grid-cols-2 lg:gap-7 xl:grid-cols-3'>
            {treatments.map((treatment) => (
              <NavLink
                key={treatment.title}
                to={treatment.to}
                className='group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200'
              >
                <div
                  data-cursor='View'
                  className='relative aspect-[4/3] overflow-hidden [@media(hover:hover)_and_(pointer:fine)]:cursor-none md:aspect-[16/10]'
                >
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    loading='lazy'
                    decoding='async'
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-105'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-70 transition-opacity group-hover:opacity-100' />
                </div>

                <div className='flex items-center justify-between gap-4 px-5 py-5 md:px-6'>
                  <div>
                    <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700'>
                      Pain area
                    </p>
                    <h3 className='mt-1.5 text-lg font-bold text-slate-900 group-hover:text-blue-700 md:text-xl'>
                      {treatment.title}
                    </h3>
                  </div>
                  <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white'>
                    <ArrowRight className='h-4 w-4' />
                  </span>
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
