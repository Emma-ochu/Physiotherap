import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const highlights = [
  "Sports injury rehabilitation",
  "Musculoskeletal and pain management",
  "Neurological rehabilitation",
  "Orthopaedic and post-surgical rehabilitation",
  "Home and functional rehabilitation",
  "Women's health and pelvic care",
];

const About = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              About DE-INES
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Professional Physiotherapy Care Built Around{" "}
              <span className="text-blue-700">Your Recovery</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              DE-INES Physiotherapy and Sports Consults provides professional
              physiotherapy and rehabilitation care for people dealing with
              injury, pain, reduced mobility, neurological conditions, and
              other physical challenges.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our approach is centered on assessment, targeted treatment, and
              progressive rehabilitation — helping patients work toward
              improved movement, strength, function, and independence.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* RIGHT — REAL PHOTOS */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Main team image */}
              <div className="col-span-8 overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                <img
                  src="/images/team-outside.png"
                  alt="The DE-INES Physiotherapy Team"
                  className="h-[430px] w-full object-cover"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              {/* Director */}
              <div className="col-span-4 overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                <img
                  src="/images/director-clinic.png"
                  alt="Director of DE-INES Physiotherapy"
                  className="h-[210px] w-full object-cover"
                  style={{ objectPosition: "center 25%" }}
                />

                <div className="bg-white p-4">
                  <p className="text-sm font-bold text-slate-900">
                    DE-INES Leadership
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Experience and clinical leadership.
                  </p>
                </div>
              </div>

              {/* Indoor team */}
              <div className="col-span-4 overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                <img
                  src="/images/team-indoor.png"
                  alt="DE-INES Team Inside the Clinic"
                  className="h-[200px] w-full object-cover"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>

              {/* Staff image */}
              <div className="col-span-8 overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                <img
                  src="/images/staff-single.png"
                  alt="DE-INES Staff Member"
                  className="h-[200px] w-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
            </div>

            {/* Small location card */}
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-xl">
              <p className="text-sm font-semibold text-slate-900">
                DE-INES Physiotherapy
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Benin City, Edo State
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;