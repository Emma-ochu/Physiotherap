import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// const stats = [
//   { value: "10+", label: "Years of experience" },
//   { value: "2,000+", label: "Patients treated" },
//   { value: "Same week", label: "Appointments" },
// ];

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Mobile video autoplay blocked:", error);
      });
    };

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo);
    }

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  return (
    <section className='relative overflow-hidden bg-slate-950 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[680px]'>
      {/* Text column — aligned to the top */}
      <div className='relative z-10 flex items-start px-6 pt-4 pb-12 sm:px-10 sm:pt-6 lg:px-14 lg:pt-8 lg:pb-10 xl:px-20'>
        {/* Soft glow behind content */}
        <div className='pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-700/20 blur-[120px]' />

        <div className='relative w-full max-w-[600px] text-white'>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-[11px] font-bold uppercase tracking-[0.22em] text-blue-200 md:text-xs'
          >
            Trusted physiotherapy in Benin City
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='mt-5 text-4xl font-black leading-[0.98] tracking-[-0.06em] drop-shadow-[0_10px_24px_rgba(15,23,42,0.35)] sm:text-5xl md:mt-6 md:text-6xl lg:text-[3.9rem] xl:text-[4.5rem]'
          >
            We help you
            <br />
            move better and
            <br />
            recover stronger
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='mt-5 max-w-[520px] text-base font-medium leading-7 text-white/90 sm:text-lg md:mt-6 md:text-xl md:leading-8 lg:text-lg lg:leading-7 xl:text-xl xl:leading-8'
          >
            Professional physiotherapy care for pain, injury, sports
            rehabilitation and lasting recovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className='mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-8'
          >
            <Link
              to='/services'
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_18px_35px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 sm:min-w-[220px] md:px-8'
            >
              Physiotherapy Services
              <ArrowRight className='h-4 w-4' />
            </Link>

            <Link
              to='/contact#contact-form'
              className='inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 sm:min-w-[220px] md:px-8'
            >
              Book Appointment
            </Link>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className='mt-10 flex gap-8 border-t border-white/10 pt-6 sm:gap-12 lg:mt-10'
          >
            {/* {stats.map((stat) => (
              <div key={stat.label}>
                <p className='text-2xl font-black tracking-tight text-white sm:text-3xl'>
                  {stat.value}
                </p>
                <p className='mt-1 text-xs font-medium text-white/60 sm:text-sm'>
                  {stat.label}
                </p>
              </div>
            ))} */}
          </motion.div>
        </div>
      </div>

      {/* Video column */}
      <div className='absolute inset-0 lg:relative lg:inset-auto lg:p-5 xl:p-6'>
        <video
          ref={videoRef}
          className='absolute inset-0 h-full w-full object-cover lg:relative lg:inset-auto lg:h-full lg:w-full lg:rounded-[24px] lg:object-left'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          poster='/images/deines.jpg'
        >
          <source src='/gallery/clinic-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/25 to-transparent lg:hidden' />
      </div>
    </section>
  );
};

export default Hero;
