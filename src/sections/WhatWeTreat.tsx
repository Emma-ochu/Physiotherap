import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const treatments = [
  {
    title: "Low Back Pain",
    image: "/images/low-back-pain.jpg",
    to: "/services/musculoskeletal",
  },
  {
    title: "Neck & Head Pain",
    image: "/images/neck-head-pain.jpg",
    to: "/services/musculoskeletal",
  },
  {
    title: "Shoulder Pain",
    image: "/images/shoulder-pain.jpg",
    to: "/services/orthopaedic-rehabilitation",
  },
  {
    title: "Ankle & Foot Pain",
    image: "/images/ankle-foot-pain.jpg",
    to: "/services/sports",
  },
  {
    title: "Knee Pain",
    image: "/images/knee-pain.jpg",
    to: "/services/orthopaedic-rehabilitation",
  },
  {
    title: "Muscle Pain",
    image: "/images/muscle-pain.jpg",
    to: "/services/sports",
  },
];

const WhatWeTreatPage = () => {
  return (
    <>
      {/* Hero */}
      <section className='relative min-h-[560px] overflow-hidden'>
        <div className='absolute inset-y-0 right-0 w-full md:w-[62%]'>
          <img
            src='/images/deines1.png'
            alt='DE-INES physiotherapy clinic'
            className='h-full w-full object-cover object-center md:object-right'
          />
        </div>

        <div className='absolute inset-0 bg-slate-950/75' />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25' />

        <div className='relative z-10 flex min-h-[560px] items-center'>
          <Container>
            <div className='max-w-3xl text-white'>
              <p className='text-sm font-bold uppercase tracking-[0.22em] text-blue-200'>
                Clinical Physiotherapy
              </p>

              <h1 className='mt-5 text-5xl font-bold leading-tight md:text-6xl'>
                What We Treat
              </h1>

              <p className='mt-7 max-w-2xl text-base leading-7 text-slate-200 md:text-lg'>
                At DE-INES, we support people with a wide range of
                musculoskeletal, sports, neurological, orthopaedic, and
                rehabilitation needs. We tailor treatment to your condition,
                lifestyle, and recovery goals.
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-4'>
                <a
                  href={WHATSAPP_BOOK}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-full bg-red-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-600'
                >
                  Book Appointment
                </a>

                <div className='rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm'>
                  Recovery-focused care for real life
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className='bg-slate-50 py-7'>
        <Container>
          <div className='flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm md:gap-8 md:px-10'>
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

      {/* Treatment Cards */}
      <section className='bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 md:py-24'>
        <Container>
          <div className='mb-12 text-center'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
              Common Conditions
            </p>

            <h2 className='mt-3 text-3xl font-bold text-slate-900 md:text-4xl'>
              We Help People Recover, Move Better, and Feel Stronger
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {treatments.map((treatment) => (
              <NavLink
                key={treatment.title}
                to={treatment.to}
                className='group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
              >
                <div className='relative aspect-[4/3]'>
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    loading='lazy'
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-105'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent' />

                  <div className='absolute inset-x-0 bottom-0 p-6'>
                    <h3 className='text-2xl font-bold text-white'>
                      {treatment.title}
                    </h3>

                    <div className='mt-3 flex items-center gap-2 text-sm font-semibold text-blue-100 opacity-0 transition duration-300 group-hover:opacity-100'>
                      Learn more
                      <ArrowRight className='h-4 w-4' />
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
