import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const values = [
  {
    title: "Compassion",
    text: "We respect your decision in choosing us as your care provider. We listen to your story and make sure every visit is friendly, efficient and effective — and we bring that same respect into how we treat each other as a team.",
  },
  {
    title: "Collaboration",
    text: "We work with you toward goals that are realistic and achievable. We're committed to meeting your expectations and equipping you to look after yourself. The best outcomes come from genuine teamwork.",
  },
  {
    title: "Excellence",
    text: "We stay current with evidence-based physiotherapy practice and invest in our team, our facilities, and our commitment to your lasting recovery. We believe being part of your progress matters.",
  },
];

const painPoints = [
  "…what's wrong, or if it's serious?",
  "…if and how we can help?",
  "…how long recovery might take?",
  "…when we can get you in?",
  "…how much it will cost?",
];

const reasons = [
  "Open and honest communication from the get-go, including direct feedback on your progress",
  "We see recoveries through — not just a couple of sessions and \"see how you go\"",
  "Flexible, generous appointment slots that work around you",
  "A modern, welcoming, custom-fitted clinic",
  "A committed local team who know the community they serve",
  "Trusted by patients for thorough, evidence-based care",
];

const approach = [
  "We actively listen to your story",
  "We provide a thorough, expert assessment",
  "We explain your diagnosis clearly",
  "We use modern, effective treatment backed by evidence",
  "We give clear advice and the right exercises for you",
  "We collaborate with you toward realistic, shared goals",
  "We help restore your confidence in your body",
  "We educate you in strategies to prevent it happening again",
];

const team = [
  {
    name: "Founder Name",
    role: "Founder & Clinical Director",
    image: "/images/director-clinic.png",
    bgColor: "bg-blue-600",
  },
  {
    name: "Manager Name",
    role: "Manager",
    image: "/images/manager.jpg",
    bgColor: "bg-blue-600",
  },
  {
    name: "Physiotherapist One",
    role: "Senior Physiotherapist",
    image: "/images/physio-1.jpg",
    bgColor: "bg-cyan-500",
  },
  {
    name: "Physiotherapist Two",
    role: "Physiotherapist",
    image: "/images/physio-2.jpg",
    bgColor: "bg-teal-500",
  },
  {
    name: "Physiotherapist Three",
    role: "Physiotherapist",
    image: "/images/physio-3.jpg",
    bgColor: "bg-slate-600",
  },
  {
    name: "Secretary Name",
    role: "Practice Manager",
    image: "/images/secretary.jpg",
    bgColor: "bg-blue-800",
  },
];

const About = () => {
  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">
        <img
          src="/images/deines.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full object-contain object-right opacity-70 md:w-[60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />
        <div className="absolute inset-0 bg-slate-950/35 md:hidden" />
        <Container>
          <div className="relative z-10 flex min-h-[620px] items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl py-24 text-white"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Our Story
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                About DE-INES
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/85 md:text-lg md:leading-9">
                DE-INES Physiotherapy was founded on a simple belief: that everyone
                deserves access to high-quality, compassionate physiotherapy care.
                We combine thorough assessment, evidence-based treatment, and
                genuine partnership to help you recover stronger, move better, and
                return to the activities that matter most.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/what-we-treat"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  What We Treat
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== INTRO / STORY ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>
              DE-INES Physiotherapy began with a straightforward goal: bring
              honest, personalised, evidence-based physiotherapy care to
              people who need it — delivered with the kind of clear
              communication that makes recovery feel achievable, not
              overwhelming.
            </p>
            <p>
              From musculoskeletal rehabilitation and sports injuries to pain
              management and post-surgical recovery, our team combines
              hands-on treatment, therapeutic exercise, and patient education
              in a program built around your goals — not a generic template.
            </p>
            <p>
              We measure success not by how many times you visit us, but by
              how well-equipped you are to manage your own health once
              treatment ends.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Our Values
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              A values-driven approach to physiotherapy
            </h2>
            <p className="mt-4 text-lg font-medium text-blue-700">
              Compassion &nbsp;|&nbsp; Collaboration &nbsp;|&nbsp; Excellence
            </p>
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

      {/* ===== WE UNDERSTAND ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-96 overflow-hidden rounded-3xl lg:h-[460px]"
            >
              <img
                src="/images/You.jpg"
                alt="DE-INES Physiotherapy team at the clinic"
                className="h-full w-full object-cover"
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
                You're in pain and you want to know…
              </h2>

              <div className="mt-8 space-y-5 text-lg text-slate-600">
                {painPoints.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>

              <p className="mt-8 leading-7 text-slate-600">
                These are normal questions. Our job is to help you understand
                what's happening, what your options are, and what steps you
                can take toward recovery.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
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
              className="h-[420px] overflow-hidden rounded-3xl lg:h-[520px]"
            >
              <img
                src="/images/secretary-2.jpg"
                alt="Inside DE-INES Physiotherapy clinic"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[420px] overflow-hidden rounded-3xl lg:h-[500px]"
            >
              <img
                src="/images/massage.jpg"
                alt="DE-INES Physiotherapy team"
                className="h-full w-full object-fill"
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

      {/* ===== MEET THE TEAM ===== */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Our People
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              Meet our team
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This is our team — the people who work hard to empower your recovery.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group cursor-default"
              >
                <div className={`aspect-[4/5] w-full overflow-hidden ${member.bgColor}`}>
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.15, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.1 + 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.08 }}
                  />
                </div>
                <motion.div
                  className="mt-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.35 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500">
                    {member.role}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
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
    </main>
  );
};

export default About;