import Container from "../components/Container";
import {
  GraduationCap,
  Clock3,
  BadgeCheck,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

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
    <section id="training" className="bg-slate-50 py-24">
      <Container>
        {/* ─────────────────────────────
            Training Hero
        ───────────────────────────── */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              DE-INES Training Program
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Professional Home Care Assistant Training
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              Build practical healthcare skills through structured classroom
              learning, hands-on sessions, and professional supervision with
              DE-INES Physiotherapy and Sports Consults.
            </p>

            {/* Requirements */}
            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
                Program Information
              </h2>

              <ul className="mt-5 space-y-4">
                {requirements.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-700" />

                    <span className="text-base font-medium text-slate-700 md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/2348174636276?text=Hello%2C%20I%20am%20interested%20in%20the%20Home%20Care%20Assistant%20training%20program%20at%20DE-INES."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Apply for Training
              </a>

              <a
                href="#training-benefits"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 text-center text-lg font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
              <img
                src="/images/training.jpg"
                alt="Home Care Assistant Training at DE-INES"
                className="h-[400px] w-full object-cover object-top sm:h-[500px] lg:h-[580px]"
              />
            </div>

            {/* Small information card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-blue-700">
                Admissions Open
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Contact DE-INES for current admission dates, fees, and
                available training slots.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            Benefits
        ───────────────────────────── */}
        <div id="training-benefits" className="mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why Train With DE-INES?
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Learn Practical Skills With Professional Guidance
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our training is designed to give aspiring care professionals
              practical knowledge, confidence, and the skills needed to
              support patients with professionalism and compassion.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-700">
                    <Icon className="h-7 w-7 text-blue-700 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
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
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-blue-700 px-8 py-12 text-center text-white md:px-14 md:py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Start Your Training?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Admission details may change from one training cycle to another.
            Contact DE-INES to confirm the latest dates, requirements, and
            application information.
          </p>

          <a
            href="https://wa.me/2348174636276?text=Hello%2C%20I%20am interested%20in the Home Care Assistant training program at DE-INES."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Enquire About Admission
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Training;