import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
    <section className='px-3 py-4 md:px-5 md:py-6 lg:px-6'>
      <div className='relative mx-auto grid max-w-[1600px] overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:grid-cols-[0.9fr_1.1fr]'>
        <div className='relative order-2 h-[440px] overflow-hidden bg-slate-950 lg:order-none lg:col-start-2 lg:row-start-1 lg:h-auto lg:min-h-[680px]'>
          <video
            ref={videoRef}
            className='absolute inset-0 h-full w-full object-cover object-center'
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

          <div className='pointer-events-none absolute inset-0 bg-slate-950/10' />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent' />
        </div>

        <div className='relative isolate z-10 order-1 flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_12%_8%,rgba(37,99,235,0.4),transparent_54%),radial-gradient(ellipse_at_92%_86%,rgba(6,182,212,0.24),transparent_42%),linear-gradient(145deg,#0b1224_0%,#111c38_56%,#080f1e_100%)] px-6 py-10 text-white sm:px-10 md:px-14 lg:order-none lg:col-start-1 lg:row-start-1 lg:min-h-[680px] lg:px-16 lg:py-16'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-[90px]'
          />
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[80px]'
          />
          <div className='relative z-10 max-w-2xl'>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200 md:text-sm'
            >
              Benin City’s trusted physiotherapy & rehabilitation clinic
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_10px_24px_rgba(15,23,42,0.42)] sm:text-5xl md:mt-6 md:text-6xl lg:text-[4.5rem]'
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
              className='mt-5 max-w-xl text-base font-medium leading-7 text-white/80 sm:text-lg md:mt-7 md:text-xl md:leading-8'
            >
              Professional physiotherapy care for pain, injury, sports
              rehabilitation and lasting recovery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-10'
            >
              <Link
                to='/services'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_12px_25px_rgba(37,99,235,0.30)] transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 sm:min-w-[210px] md:px-8'
              >
                Physiotherapy Services
                <ArrowRight className='h-4 w-4' />
              </Link>

              <Link
                to='/contact#contact-form'
                className='inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 sm:min-w-[210px] md:px-8'
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>

        <div className='pointer-events-none absolute bottom-5 right-5 z-10 hidden rounded-full border border-white/25 bg-slate-950/45 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md lg:block'>
          Care in motion. Recovery in focus.
        </div>
      </div>
    </section>
  );
};

export default Hero;
