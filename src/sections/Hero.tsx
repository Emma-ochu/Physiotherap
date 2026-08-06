import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Subtle background decoration */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Side */}
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                Now Accepting New Patients
              </span>

              <h1 className="text-4xl font-bold leading-[1.15] text-slate-900 md:text-5xl lg:text-6xl">
                Move Better.{" "}
                <span className="text-blue-700">Live Pain-Free.</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl">
                Expert physiotherapy and sports injury care in Benin City.
                Restoring mobility and enhancing well-being through
                professional consultation and hands-on treatment.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800 hover:shadow-blue-700/40"
                >
                  Book Appointment
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Our Services
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Licensed Professionals
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Home Care Available
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Sports Injury Experts
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative mx-auto w-full max-w-md overflow-hidden lg:mx-0 lg:justify-self-end">
              <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-blue-200/50" />

              <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
                  alt="Physiotherapy session at DE-INES"
                  className="aspect-[4/5] w-full object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                  <p className="text-3xl font-bold text-blue-700">500+</p>
                  <p className="text-sm text-slate-600">Patients Treated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
