import { motion, type Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "../components/Container";

const features = [
  "Sports Injury Rehabilitation",
  "Home Care Physiotherapy",
  "Musculoskeletal & Pain Management",
  "Stroke & Neurological Rehab",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 180, damping: 18 },
  },
};

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About DE-INES
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Trusted Physiotherapy Care in{" "}
              <span className="text-blue-700">Benin City</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              At DE-INES Physiotherapy and Sports Consults, we restore mobility
              and enhance well-being through expert physiotherapy consultation.
              From sports injuries and chronic pain to post-surgical and
              neurological rehab, our team helps you move better and live
              pain-free.
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 shrink-0 text-blue-600" />
                  <span className="text-lg font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Book an Appointment
            </a>
          </div>

          {/* Right — Animated Circles */}
          <motion.div
            className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[430px] lg:h-[500px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <svg
              className="absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 520 500"
              fill="none"
            >
              <motion.path
                variants={lineVariants}
                d="M145 125 C205 120,275 155,315 185"
                stroke="#22D3EE"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <motion.path
                variants={lineVariants}
                d="M190 365 C255 350,315 320,355 305"
                stroke="#22D3EE"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            <motion.div
              variants={circleVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              className="absolute right-0 top-1/2 z-10 h-[190px] w-[190px] -translate-y-1/2 overflow-hidden rounded-full border-[8px] border-cyan-400 shadow-2xl sm:h-[240px] sm:w-[240px] lg:h-[290px] lg:w-[290px]"
            >
              <img
                src="/images/main.jpg"
                alt="Physiotherapy treatment"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={circleVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              className="absolute left-4 top-4 z-10 h-[90px] w-[90px] overflow-hidden rounded-full border-[6px] border-cyan-400 shadow-xl sm:left-6 sm:top-6 sm:h-[100px] sm:w-[100px] lg:left-8 lg:top-8 lg:h-[120px] lg:w-[120px]"
            >
              <img
                src="/images/top.jpg"
                alt="Sports rehabilitation"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={circleVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              className="absolute bottom-6 left-10 z-10 h-[95px] w-[95px] overflow-hidden rounded-full border-[6px] border-cyan-400 shadow-xl sm:bottom-8 sm:left-12 sm:h-[110px] sm:w-[110px] lg:bottom-10 lg:left-16 lg:h-[130px] lg:w-[130px]"
            >
              <img
                src="/images/bottom.jpg"
                alt="Patient consultation"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;