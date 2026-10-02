import Container from "../components/Container";
import { ArrowRight } from "lucide-react";
import {
  GraduationCap,
  Clock3,
  BadgeCheck,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { WHATSAPP_TRAINING } from "../lib/whatsapp";

const requirements = [
  "SSCE Certificate",
  "18 Years and Above",
  "15 Weeks Duration",
  "Admission Forms Available",
];

const benefits = [
  {
    title: "Practical Healthcare Training",
    description:
      "Develop practical home-care and patient-support skills through structured classroom learning and hands-on training.",
    icon: GraduationCap,
  },
  {
    title: "15-Week Structured Program",
    description:
      "Follow a focused training program designed to build your knowledge, confidence, and practical care skills.",
    icon: Clock3,
  },
  {
    title: "Certificate Upon Completion",
    description:
      "Successfully complete the training program and receive a certificate from DE-INES.",
    icon: BadgeCheck,
  },
  {
    title: "Career-Ready Skills",
    description:
      "Build practical skills that can prepare you for opportunities in home care and other healthcare support environments.",
    icon: UserCheck,
  },
];

const Training = () => {
  return (
    <section id='training' className='bg-slate-50 py-10 md:py-20'>
      <Container>
        <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]'>
          <div className='grid items-center gap-0 lg:grid-cols-2'>
            <div className='relative min-h-[360px] overflow-hidden bg-slate-950 sm:min-h-[440px]'>
              <img
                src='/images/training.png'
                alt='Home Care Assistant Training at DE-INES'
                className='absolute inset-0 h-full w-full object-cover object-top'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-slate-950/5' />

              <div className='relative z-10 flex min-h-[360px] items-end p-6 sm:min-h-[440px] sm:p-10 md:p-12'>
                <div className='max-w-md text-white'>
                  <span className='inline-flex items-center rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 text-xs font-semibold text-blue-100 backdrop-blur-sm sm:text-sm'>
                    DE-INES Training Program
                  </span>
                  <h1 className='mt-4 text-3xl font-bold leading-[1.08] tracking-tight sm:mt-5 sm:text-5xl'>
                    Professional Home Care Assistant Training
                  </h1>
                </div>
              </div>
            </div>

            <div className='p-6 sm:p-8 md:p-12'>
              <p className='text-sm font-bold uppercase tracking-[0.18em] text-blue-700'>
                Program Information
              </p>

              <p className='mt-4 text-base leading-7 text-slate-600 md:mt-6 md:text-lg md:leading-8'>
                Build practical healthcare skills through structured classroom
                learning, hands-on sessions, and professional supervision with
                DE-INES Physiotherapy and Sports Consults.
              </p>

              <ul className='mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-4'>
                {requirements.map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3'
                  >
                    <CheckCircle2 className='h-5 w-5 shrink-0 text-blue-700' />
                    <span className='text-sm font-semibold text-slate-700 md:text-base'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className='mt-7 flex flex-col gap-3 sm:flex-row md:mt-9'>
                <a
                  href={WHATSAPP_TRAINING}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-12 items-center justify-center rounded-full bg-blue-700 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200'
                >
                  Apply for Training
                  <ArrowRight className='ml-2 h-4 w-4' />
                </a>

                <a
                  href='#training-benefits'
                  className='inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-center text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            Benefits
        ───────────────────────────── */}
        <div id='training-benefits' className='mt-16 scroll-mt-28 md:mt-24'>
          <div className='mx-auto max-w-3xl text-center'>
            <span className='text-sm font-semibold uppercase tracking-[0.2em] text-blue-700'>
              Why Train With DE-INES?
            </span>

            <h2 className='mt-5 text-3xl font-bold text-slate-900 md:text-4xl'>
              Learn Practical Skills With Professional Guidance
            </h2>

            <p className='mt-4 text-lg leading-8 text-slate-600'>
              Our training is designed to give aspiring care professionals
              practical knowledge, confidence, and the skills needed to support
              patients with professionalism and compassion.
            </p>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 xl:mt-12 xl:grid-cols-4'>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className='group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl md:p-7'
                >
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-700'>
                    <Icon className='h-7 w-7 text-blue-700 transition-colors duration-300 group-hover:text-white' />
                  </div>

                  <h3 className='mt-6 text-xl font-bold text-slate-900'>
                    {benefit.title}
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────
            Application CTA
        ───────────────────────────── */}
        <div className='mt-14 overflow-hidden rounded-[2rem] bg-[radial-gradient(ellipse_at_12%_8%,rgba(37,99,235,0.45),transparent_54%),radial-gradient(ellipse_at_92%_86%,rgba(6,182,212,0.24),transparent_42%),linear-gradient(145deg,#0b1224_0%,#111c38_56%,#080f1e_100%)] px-6 py-10 text-center text-white md:mt-20 md:px-14 md:py-16'>
          <h2 className='text-3xl font-bold md:text-4xl'>
            Ready to Start Your Training?
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100'>
            Admission details may change from one training cycle to another.
            Contact DE-INES to confirm the latest dates, requirements, and
            application information.
          </p>

          <a
            href={WHATSAPP_TRAINING}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 md:mt-8 md:text-base'
          >
            Enquire About Admission
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Training;
