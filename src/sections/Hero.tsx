import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const Hero = () => {
  return (
    <section className="relative min-h-[820px] overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/gallery/clinic-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay (similar strength to Tangible) */}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[820px] items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center text-white">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90"
          >
            Benin City’s trusted physiotherapy & rehabilitation clinic
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            We help people
            <br />
            move better and
            <br />
            recover stronger
          </motion.h1>

          {/* Short supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-lg text-white/85 md:text-xl"
          >
            Professional physiotherapy care for pain, injury, sports
            rehabilitation and lasting recovery.
          </motion.p>

          {/* Buttons – Tangible style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#services"
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-700"
            >
              Physiotherapy Services
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-900"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;