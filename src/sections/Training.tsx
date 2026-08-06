import Container from "../components/Container";
import {
  GraduationCap,
  Clock3,
  BadgeCheck,
  UserCheck,
} from "lucide-react";

const requirements = [
  "SSCE Certificate",
  "18 Years and Above",
  "15 Weeks Duration",
  "Admission Forms Available",
];

const benefits = [
  {
    title: "Professional Training",
    description:
      "Gain practical healthcare skills through hands-on learning.",
    icon: GraduationCap,
  },
  {
    title: "15 Weeks Program",
    description:
      "A structured training designed to prepare you for real-world care.",
    icon: Clock3,
  },
  {
    title: "Certification",
    description:
      "Complete the program and earn a recognized certificate.",
    icon: BadgeCheck,
  },
  {
    title: "Career Opportunities",
    description:
      "Build a rewarding career as a professional Home Care Assistant.",
    icon: UserCheck,
  },
];

const Training = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        {/* ── Hero Split ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Training Program
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Become a Certified Home Care Assistant
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              Join our professional Home Care Assistant training program and
              develop practical healthcare skills through classroom learning,
              hands-on practical sessions, and expert supervision that prepares
              you for employment in hospitals, home care services, and healthcare
              facilities.
            </p>

            <ul className="mt-8 space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <BadgeCheck className="h-6 w-6 shrink-0 text-blue-700" />
                  <span className="text-base text-slate-700 md:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="https://wa.me/2348174636276?text=Hello%2C%20I%20am%20interested%20in%20the%20Home%20Care%20Assistant%20training%20program%20at%20DE-INES."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-blue-700 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-800 shadow-lg shadow-blue-700/20"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Right Column — Fixed Image Wrapper */}
          <div className="w-full">
            <img
              src="/images/training.jpg"
              alt="Home Care Assistant Training"
              className="h-[400px] sm:h-[500px] lg:h-[580px] w-full rounded-3xl object-cover object-top shadow-xl"
            />
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Why Train With DE-INES?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Learn from experienced professionals in a supportive environment
              that prepares you for a successful healthcare career.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-3xl bg-white p-8 sm:p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 sm:h-20 sm:w-20 sm:rounded-3xl">
                    <Icon className="h-8 w-8 text-blue-700 sm:h-10 sm:w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Training;