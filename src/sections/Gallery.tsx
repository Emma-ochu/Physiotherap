import { motion } from "framer-motion";
import Container from "../components/Container";

const images = [
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    alt: "Massage Therapy",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    alt: "Sports Rehabilitation",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    alt: "Home Care",
  },
  {
    src: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&q=80",
    alt: "Patient Consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    alt: "Aerobics Session",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    alt: "Stretching & Mobility",
  },
];

const Gallery = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            See Our Clinic & Treatments
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Take a look inside DE-INES Physiotherapy. From rehabilitation and
            massage therapy to home care and wellness programs, our gallery
            showcases the care and professionalism we provide every day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg ${
                image.large ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-slate-900/0 transition duration-300 group-hover:bg-slate-900/40" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold text-white">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-blue-700 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready to Begin Your Recovery?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Book an appointment with our experienced physiotherapists and let
            us help you regain strength, mobility, and confidence.
          </p>

          <a
            href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Book Appointment
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
