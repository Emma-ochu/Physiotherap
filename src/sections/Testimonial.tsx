import Container from "../components/Container";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Osa B.",
    role: "Sports Injury Patient",
    review:
      "After tearing my ACL during training with my local side in Benin, I thought my season was finished. The sports rehab team at Oko Central was strict but very professional. Today I am back on the pitch with full knee strength. God bless the physios.",
  },
  {
    name: "Efe I.",
    role: "Stroke Recovery Caregiver",
    review:
      "We brought our papa here after his stroke on the advice of the doctors at UBTH. The physiotherapists showed real patience and skill. His walking has improved a lot and he can now move around the house with less help. We are very grateful.",
  },
  {
    name: "Blessing O.",
    role: "Sciatica & Back Pain Client",
    review:
      "I suffered from severe sciatica and lower back pain for over a year. Sitting in traffic or standing in the market was torture. After a few sessions of targeted therapy and the home exercises they gave me, the pain reduced drastically. I can finally work without constant pain.",
  },
  {
    name: "Chukwudi N.",
    role: "Post-Accident Rehabilitation",
    review:
      "After a serious road accident on the Benin-Lagos road, my leg and hip were badly affected. The team at Oko Central designed a proper recovery plan for me. Progress was slow but steady. I can now walk without crutches. Highly recommend them.",
  },
  {
    name: "Osasere A.",
    role: "Chronic Knee Pain Patient",
    review:
      "I had been managing knee pain for years until it became unbearable. The physiotherapists here took time to understand my condition and created a personalised programme. The improvement has been clear. I no longer rely on painkillers every day.",
  },
  {
    name: "Ivie E.",
    role: "Postpartum Physiotherapy",
    review:
      "After delivery I struggled with back pain and weak core muscles. The postpartum physiotherapy sessions at Oko Central helped me regain strength and confidence. The therapists were understanding and professional. I feel like myself again.",
  },
];

const Testimonials = () => {
  // Helper to get initials
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

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
            patient achieve the best possible recovery at our Benin City clinic.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
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
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-slate-100" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white ring-2 ring-white">
                  {getInitials(testimonial.name)}
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