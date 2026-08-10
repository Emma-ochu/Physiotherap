import { motion } from "framer-motion";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <Container>
        <div className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Left Side */}
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>

                Now Accepting New Patients
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold leading-[1.12] text-slate-900 md:text-5xl lg:text-6xl"
              >
                Move Better.{" "}
                <span className="text-blue-700">Live Pain-Free.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                Expert physiotherapy and rehabilitation care in Benin City.
                Supporting recovery, mobility, strength, and independence
                through professional physiotherapy and rehabilitation
                services.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href={WHATSAPP_BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
                >
                  Book Appointment
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Our Services
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
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
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    Licensed Professionals
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
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
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    Home Care Available
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
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
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    Sports Injury Experts
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Side — Real DE-INES Clinic Video */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Clean media frame */}
                <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-2 shadow-2xl">
                  <video
                    className="h-auto max-h-[680px] w-[min(82vw,430px)] rounded-[1.5rem] object-contain"
                    controls
                    playsInline
                    preload="metadata"

                  >
                    <source
                      src="/gallery/clinic-video.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Small information card */}
                <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-slate-100">
                  <p className="text-sm font-semibold text-slate-900">
                    Inside DE-INES
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Physiotherapy & Rehabilitation Centre
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;