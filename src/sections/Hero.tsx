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
      <div className='relative mx-auto flex min-h-[min(72svh,520px)] max-w-[1620px] items-center overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:min-h-[560px] lg:min-h-[640px]'>
        <div className='absolute inset-0'>
          <video
            ref={videoRef}
            className='absolute inset-0 h-full w-full object-cover object-top lg:object-contain lg:object-right'
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
          <div className='absolute inset-0 bg-slate-950/35' />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/5' />
          <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/45 to-transparent' />
        </div>

        <div className='relative z-10 w-full px-6 py-16 sm:px-10 md:px-14 lg:px-20'>
            <div className='max-w-[760px] text-white'>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-[11px] font-bold uppercase tracking-[0.22em] text-blue-200 md:text-sm'
              >
                Benin City’s trusted physiotherapy & rehabilitation clinic
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className='mt-5 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-white drop-shadow-[0_10px_24px_rgba(15,23,42,0.18)] sm:text-5xl md:mt-6 md:text-6xl lg:text-[5rem]'
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
                className='mt-5 max-w-[590px] text-base font-medium leading-7 text-white/85 sm:text-lg md:mt-7 md:text-xl md:leading-8'
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
                  className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_18px_35px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 sm:min-w-[220px] md:px-8'
                >
                  Physiotherapy Services
                  <ArrowRight className='h-4 w-4' />
                </Link>

                <Link
                  to='/contact#contact-form'
                  className='inline-flex min-h-12 items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold tracking-wide text-blue-700 shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:min-w-[220px] md:px-8'
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
