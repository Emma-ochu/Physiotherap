import { motion } from "framer-motion";
import Container from "../components/Container";

const images = [
  {
    src: "/images/team-outside.png",
    alt: "The DE-INES Physiotherapy Team",
    caption: "The DE-INES Team",
    description: "Our physiotherapists, outside our Benin City clinic.",
    position: "center center",
    layout: "team",
  },
  {
    src: "/images/director-clinic.png",
    alt: "Director of DE-INES Physiotherapy",
    caption: "Our Director",
    description: "Leading DE-INES Physiotherapy and Sports Consults.",
    position: "center 25%",
    layout: "small",
  },
  {
    src: "/images/team-indoor.png",
    alt: "DE-INES Team Inside the Clinic",
    caption: "Inside DE-INES",
    description: "Our treatment room, set up for rehabilitation sessions.",
    position: "center 35%",
    layout: "small",
  },
  {
    src: "/images/staff-single.png",
    alt: "DE-INES Staff Member",
    caption: "At Our Clinic",
    description: "One-on-one care, every session.",
    position: "center 30%",
    layout: "large",
  },
];

const Gallery = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Our Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Meet the Team Behind DE-INES
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Take a look inside DE-INES Physiotherapy and Sports Consults.
            Meet our team, see our facility, and get a glimpse of the
            environment where we provide professional physiotherapy care.
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className={`
                group relative overflow-hidden rounded-[28px]
                bg-slate-100 shadow-md
                ${
                  image.layout === "team"
                    ? "md:col-span-2 lg:row-span-2"
                    : ""
                }
                ${
                  image.layout === "large"
                    ? "md:row-span-2"
                    : ""
                }
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{
                  objectPosition: image.position,
                }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {image.caption}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-white/90">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* CLINIC VIDEO — PORTRAIT VIDEO */}
        {/* ========================================================= */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Life at DE-INES
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Inside Our Physiotherapy Centre
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Get a glimpse of our team, our environment, and the work we do
              at DE-INES Physiotherapy and Sports Consults.
            </p>
          </div>

          {/* Portrait Video Frame */}
          <div className="flex justify-center overflow-hidden rounded-[28px] bg-slate-950 p-4 shadow-xl md:p-8">
            <video
              className="h-auto max-h-[720px] w-full max-w-[430px] rounded-2xl object-contain"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="/gallery/outreach.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>
        </motion.section>

        {/* ========================================================= */}
        {/* DIRECTOR FEATURE */}
        {/* ========================================================= */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-24 overflow-hidden rounded-[28px] bg-slate-50 shadow-xl"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Director Video */}
            <div className="flex min-h-[420px] items-center justify-center bg-black lg:min-h-[560px]">
              <video
                className="h-full max-h-[560px] w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/images/director-clinic.png"
              >
                <source
                  src="/gallery/director-video-web.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
            </div>

            {/* Director Content */}
            <div className="flex items-center p-8 md:p-12 lg:p-16">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  Leadership
                </span>

                <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                  Leading With Experience & Care
                </h3>

                <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
                  <p>
                    At DE-INES Physiotherapy and Sports Consults, our
                    leadership is committed to providing professional,
                    compassionate, and patient-focused physiotherapy services.
                  </p>

                  <p>
                    With a focus on rehabilitation, mobility, sports injuries,
                    pain management, and wellness, our team works to help every
                    patient achieve better movement and quality of life.
                  </p>
                </div>

                <a
                  href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Talk to the Director
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================= */}
        {/* BOTTOM CTA */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[28px] bg-blue-700 p-10 text-center text-white md:p-14"
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Ready to Begin Your Recovery?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Book an appointment with the DE-INES team and take the next step
            toward better movement, strength, and confidence.
          </p>

          <a
            href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Gallery;