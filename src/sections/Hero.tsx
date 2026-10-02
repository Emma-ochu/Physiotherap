import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

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
    <section className='px-3 py-3 md:px-5 lg:px-6'>
      <div className='relative mx-auto min-h-[620px] max-w-[1600px] overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:min-h-[720px]'>
        <div className='absolute inset-0'>
          <video
            ref={videoRef}
            className='h-full w-full scale-[1.08] object-cover object-center'
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
          >
            <source src='/gallery/clinic-video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>

          <div className='absolute inset-0 bg-slate-950/45' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.12),rgba(15,23,42,0.7))]' />
        </div>

        <div className='relative z-10 flex min-h-[620px] items-center justify-center px-4 sm:px-6 md:min-h-[720px] lg:px-10'>
          <div className='mx-auto max-w-4xl text-center text-white'>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 md:text-sm'
            >
              Benin City’s trusted physiotherapy & rehabilitation clinic
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:mt-6 md:text-6xl lg:text-[5rem]'
            >
              We help people
              <br />
              move better and
              <br />
              recover stronger
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg md:mt-7 md:text-xl'
            >
              Professional physiotherapy care for pain, injury, sports
              rehabilitation and lasting recovery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10'
            >
              <a
                href='/services'
                className='inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_12px_25px_rgba(37,99,235,0.30)] transition hover:bg-blue-700 md:px-8 md:py-4'
              >
                Physiotherapy Services
                <ArrowRight className='h-4 w-4' />
              </a>

              <a
                href={WHATSAPP_BOOK}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/60 bg-white/8 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900 md:px-8 md:py-4'
              >
                Book Appointment
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
