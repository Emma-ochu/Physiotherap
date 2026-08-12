import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const values = [
  {
    title: "Patient First",
    text: "We listen carefully to your story, understand what matters to you, and build your care around your goals — not just your diagnosis.",
  },
  {
    title: "Evidence-Based Care",
    text: "We use modern physiotherapy approaches supported by clinical knowledge and tailor them to your individual needs and lifestyle.",
  },
  {
    title: "Recovery That Lasts",
    text: "Our goal is not only to reduce symptoms, but to help you regain confidence, strength, function, and independence.",
  },
];

const reasons = [
  "Thorough assessment before treatment begins",
  "Personalised treatment plans built around your goals",
  "Clear, honest communication throughout recovery",
  "Evidence-based physiotherapy care",
  "Progressive rehabilitation and practical exercise",
  "Education to help prevent future problems",
  "Support focused on the activities that matter to you",
];

const approach = [
  "We actively listen to your story",
  "We provide a thorough clinical assessment",
  "We explain our findings clearly",
  "We develop a treatment plan around your goals",
  "We use appropriate evidence-based treatment",
  "We prescribe exercises and practical strategies",
  "We monitor your progress and adjust your care",
  "We help you rebuild confidence in your recovery",
];

const team = [
  {
    name: "Dr. Example Name",
    role: "Principal Physiotherapist & Director",
    credentials:
      "B.Sc. Physiotherapy | M.Sc. Physiotherapy | Professional Membership",
    image: "/images/director-clinic.png",
    bio: "Dr. Example Name is the principal physiotherapist and director of DE-INES Physiotherapy and Sports Consults. With extensive experience in physiotherapy and rehabilitation, they are passionate about helping people return to the activities and lifestyles that matter most to them.",
    secondBio:
      "Their clinical interests include musculoskeletal rehabilitation, sports injuries, pain management, and functional recovery. They believe every patient deserves to understand their condition and have an active role in their recovery.",
  },
  {
    name: "Example Physiotherapist",
    role: "Senior Physiotherapist",
    credentials: "B.Sc. Physiotherapy | Professional Membership",
    image: "/images/staff-single.png",
    bio: "Example Physiotherapist is a dedicated member of the DE-INES clinical team with a strong interest in helping patients overcome pain, injury, and movement limitations.",
    secondBio:
      "Their approach combines hands-on treatment, therapeutic exercise, patient education, and progressive rehabilitation to help patients return to the activities they value.",
  },
  {
    name: "Example Team Member",
    role: "Practice Manager",
    credentials: "",
    image: "/images/team-indoor.png",
    bio: "Example Team Member helps create a welcoming and supportive experience for patients from their first interaction with DE-INES.",
    secondBio:
      "They play an important role in keeping the clinic organised and ensuring patients receive the information and support they need throughout their experience.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">
        <img
          src="/images/team-outside.png"
          alt="DE-INES Physiotherapy Team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />

        <Container>
          <div className="relative z-10 flex min-h-[620px] items-center justify-center py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                About DE-INES Physiotherapy
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Professional care.
                <br />
                <span className="text-blue-300">Personal recovery.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                We provide personalised physiotherapy and rehabilitation care
                designed to help you move better, feel stronger, and return to
                the things that matter most to you.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#why-choose-us"
                  className="rounded-full bg-blue-700 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
                >
                  Why Choose Us
                </a>
                <a
                  href={WHATSAPP_BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Physiotherapy built around{" "}
              <span className="text-blue-700">people</span>, not just conditions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              DE-INES Physiotherapy and Sports Consults provides professional
              physiotherapy and rehabilitation services for people experiencing
              pain, injury, reduced mobility, neurological conditions, and other
              physical challenges.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We believe good physiotherapy begins with listening. By
              understanding your story, your goals, and the things you want to
              get back to doing, we create a treatment approach that is
              meaningful to you.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-20 md:py-24">
        <Container>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Our Values
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              A values-driven approach to physiotherapy
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <CheckCircle2 className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* WE UNDERSTAND */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl bg-slate-100"
            >
              <img
                src="/images/team-indoor.png"
                alt="DE-INES Physiotherapy clinic"
                className="h-[460px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                We Understand
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                You’re in pain and you want to know…
              </h2>

              <div className="mt-8 space-y-5 text-lg text-slate-600">
                <p>What’s wrong, and is it serious?</p>
                <p>Can physiotherapy actually help?</p>
                <p>How long might recovery take?</p>
                <p>What can you do to feel better?</p>
                <p>When can you get back to normal activities?</p>
                <p>What will treatment involve?</p>
              </div>

              <p className="mt-8 leading-7 text-slate-600">
                These are normal questions. Our job is to help you understand
                what is happening, what your options are, and what steps you
                can take toward recovery.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Why Choose DE-INES?
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Care that goes beyond the treatment room
              </h2>

              <div className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="text-lg text-slate-600">{reason}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src="/images/director-clinic.png"
                alt="DE-INES Physiotherapy"
                className="h-[520px] w-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src="/images/staff-single.png"
                alt="DE-INES physiotherapy care"
                className="h-[500px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                How do we solve your problem?
              </h2>

              <div className="mt-8 space-y-4">
                {approach.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="text-lg leading-7 text-slate-600">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* MEET THE TEAM */}
<section className="bg-slate-50 py-20 md:py-28">
  <Container>
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
        Our People
      </p>
      <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
        Meet our team
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        Meet the professionals behind DE-INES Physiotherapy and Sports
        Consults.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {team.map((member, index) => (
        <motion.article
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="overflow-hidden rounded-3xl bg-white shadow-sm"
        >
          {/* Initials Placeholder */}
          <div className="flex h-64 items-center justify-center bg-blue-50 text-5xl font-bold text-blue-700">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div className="p-7">
            <h3 className="text-2xl font-bold text-slate-900">
              {member.name}
            </h3>
            <p className="mt-2 text-lg font-medium text-blue-700">
              {member.role}
            </p>
            {member.credentials && (
              <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-wide text-slate-400">
                {member.credentials}
              </p>
            )}
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p>{member.bio}</p>
              <p>{member.secondBio}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Container>
</section>

      {/* LIFE AT DE-INES */}
      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Life at DE-INES
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              See the people behind the care
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Get a glimpse of our team, our environment, and the work we do
              at DE-INES Physiotherapy and Sports Consults.
            </p>
          </motion.div>

          {/* Gallery Strip */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                src: "/images/team-outside.png",
                alt: "DE-INES team outside the clinic",
                label: "Our Team",
              },
              {
                src: "/images/team-indoor.png",
                alt: "DE-INES team inside the clinic",
                label: "Inside DE-INES",
              },
              {
                src: "/images/director-clinic.png",
                alt: "DE-INES director",
                label: "Our Leadership",
              },
            ].map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[320px] overflow-hidden rounded-3xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-xl font-bold text-white">
                  {image.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Videos */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl bg-slate-950 p-4 shadow-xl md:p-6"
            >
              <div className="mb-5 flex items-center gap-3 text-white">
                <PlayCircle className="h-6 w-6 text-blue-300" />
                <div>
                  <h3 className="font-bold">Life at DE-INES</h3>
                  <p className="text-sm text-slate-400">Our team and outreach</p>
                </div>
              </div>
              <video
                className="mx-auto max-h-[620px] w-full rounded-2xl object-contain"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/gallery/outreach.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl bg-slate-950 p-4 shadow-xl md:p-6"
            >
              <div className="mb-5 flex items-center gap-3 text-white">
                <PlayCircle className="h-6 w-6 text-blue-300" />
                <div>
                  <h3 className="font-bold">Meet Our Leadership</h3>
                  <p className="text-sm text-slate-400">A message from DE-INES</p>
                </div>
              </div>
              <video
                className="h-full max-h-[620px] min-h-[350px] w-full rounded-2xl object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/images/director-clinic.png"
              >
                <source src="/gallery/director-video-web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-700 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to start your recovery?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Take the first step toward better movement, improved function,
              and a stronger recovery.
            </p>
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Container>
      </section>
    </section>
  );
};

export default About;

