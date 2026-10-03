import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

type PageHeroAction = {
  label: string;
  secondary?: boolean;
} & (
  | { to: string; href?: never }
  | { href: string; to?: never }
);

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageOverlay?: "dark" | "subtle";
  actions?: PageHeroAction[];
};

const PageHero = ({
  eyebrow,
  title,
  description,
  image = "/images/deines1.png",
  imageOverlay = "subtle",
  actions = [],
}: PageHeroProps) => (
  <section className='px-3 py-4 md:px-5 md:py-6 lg:px-6'>
    <div className='relative mx-auto flex min-h-[430px] max-w-[1620px] items-center overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:min-h-[500px] lg:min-h-[560px]'>
      <img
        src={image}
        alt=''
        aria-hidden='true'
        fetchPriority='high'
        className='absolute inset-0 h-full w-full object-cover object-top'
      />
      <div
        className={`absolute inset-0 ${
          imageOverlay === "subtle" ? "bg-slate-950/10" : "bg-slate-950/55"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          imageOverlay === "subtle" ?
            "from-slate-950/60 via-slate-950/28 to-slate-950/5"
          : "from-slate-950/90 via-slate-950/65 to-slate-950/15"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${
          imageOverlay === "subtle" ?
            "from-slate-950/15 to-transparent"
          : "from-slate-950/45 to-transparent"
        }`}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='relative z-10 max-w-3xl py-16 text-white md:py-24'
        >
          <p className='text-xs font-bold uppercase tracking-[0.22em] text-blue-200 md:text-sm'>
            {eyebrow}
          </p>
          <h1 className='mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl'>
            {title}
          </h1>
          <p className='mt-5 max-w-2xl text-base leading-7 text-white/85 md:mt-7 md:text-lg md:leading-8'>
            {description}
          </p>

          {actions.length > 0 && (
            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10'>
              {actions.map((action) => (
                action.href ?
                  <a
                    key={`${action.href}-${action.label}`}
                    href={action.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={
                      action.secondary ?
                        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                      : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_rgba(29,78,216,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                    }
                  >
                    {action.label}
                    <ArrowRight className='h-4 w-4' />
                  </a>
                : <Link
                    key={`${action.to}-${action.label}`}
                    to={action.to ?? "/"}
                    className={
                      action.secondary ?
                        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                      : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_rgba(29,78,216,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                    }
                  >
                    {action.label}
                    <ArrowRight className='h-4 w-4' />
                  </Link>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </div>
  </section>
);

export default PageHero;
