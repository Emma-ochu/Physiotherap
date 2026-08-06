import Container from "../components/Container";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Sports Injury Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review:
      "The physiotherapists at DE-INES helped me recover from my knee injury much faster than I expected. Their professionalism and care were outstanding.",
  },
  {
    name: "Michael Adams",
    role: "Home Care Client",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review:
      "Excellent home care service. The team was punctual, compassionate, and very knowledgeable. I highly recommend DE-INES.",
  },
  {
    name: "Grace Williams",
    role: "Massage Therapy Client",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    review:
      "The massage therapy sessions relieved my chronic back pain. The environment was clean, calm, and welcoming.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are committed to delivering compassionate care and helping every
            patient achieve the best possible recovery.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote icon */}
              <Quote
                className="absolute right-8 top-8 h-10 w-10 text-slate-100 transition group-hover:text-blue-50"
                strokeWidth={1.5}
              />

              {/* Stars */}
              <div className="mb-6 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="relative z-10 flex-1 text-lg leading-8 text-slate-600">
                {testimonial.review}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-slate-100" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-200 ring-2 ring-white">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      target.parentElement!.textContent = testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("");
                      target.parentElement!.classList.add(
                        "flex",
                        "items-center",
                        "justify-center",
                        "text-sm",
                        "font-bold",
                        "text-slate-500"
                      );
                    }}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;