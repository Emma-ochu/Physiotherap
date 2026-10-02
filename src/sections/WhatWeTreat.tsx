import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";

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
      <section className='px-3 py-4 md:px-5 md:py-6 lg:px-6'>
        <div className='mx-auto grid max-w-[1600px] overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.14)] lg:grid-cols-2'>
          <div className='relative flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_12%_8%,rgba(37,99,235,0.4),transparent_54%),radial-gradient(ellipse_at_92%_86%,rgba(6,182,212,0.24),transparent_42%),linear-gradient(145deg,#0b1224_0%,#111c38_56%,#080f1e_100%)] px-6 py-12 text-white sm:px-10 md:px-14 lg:min-h-[560px] lg:px-16'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-blue-500/25 blur-[90px]'
            />
            <div className='relative z-10 max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-[0.22em] text-blue-200 md:text-sm'>
                Clinical Physiotherapy
              </p>

              <h1 className='mt-4 text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl'>
                What We Treat
              </h1>

              <p className='mt-5 max-w-xl text-base leading-7 text-slate-200 md:mt-6 md:text-lg md:leading-8'>
                At DE-INES, we support people with a wide range of
                musculoskeletal, sports, neurological, orthopaedic, and
                rehabilitation needs. We tailor treatment to your condition,
                lifestyle, and recovery goals.
              </p>

              <div className='mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
                <NavLink
                  to='/contact#contact-form'
                  className='inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300'
                >
                  Book Appointment
                  <ArrowRight className='ml-2 h-4 w-4' />
                </NavLink>

                <span className='text-center text-sm font-medium text-blue-100/80 sm:px-3'>
                  Recovery-focused care for real life
                </span>
              </div>
            </div>
          </div>

          <div className='relative h-64 overflow-hidden bg-slate-900 sm:h-80 lg:h-auto lg:min-h-[560px]'>
            <img
              src='/images/deines1.png'
              alt='A physiotherapist supporting a patient during treatment at DE-INES'
              className='absolute inset-0 h-full w-full object-cover object-center'
              fetchPriority='high'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent' />
          </div>
        </div>
      </section>

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
                <div className='relative aspect-[16/10] overflow-hidden'>
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
