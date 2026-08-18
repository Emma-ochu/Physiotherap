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
    name: "Clinical Lead / Founder",
    role: "Physiotherapist & Director",
    credentials: "B.Sc. Physiotherapy | Professional Membership",
    bio: "Our clinical director brings years of experience in physiotherapy and rehabilitation. Passionate about evidence-based care, they've built DE-INES on a foundation of thorough assessment, honest communication, and genuine patient-centred care.",
    secondBio:
      "Outside the clinic, they're driven by the same belief that shapes every session here: that recovery is a partnership, not something done to you.",
  },
  {
    name: "Senior Physiotherapist",
    role: "Specialised Therapist",
    credentials: "B.Sc. Physiotherapy | Professional Membership",
    bio: "A dedicated clinician with deep expertise in helping patients overcome movement limitations and chronic pain. They believe every patient deserves to understand their condition and have an active role in recovery.",
    secondBio:
      "Their focus areas include women's health, post-surgical rehab, and sports performance — always with an emphasis on long-term, independent wellbeing.",
  },
  {
    name: "Therapist",
    role: "Clinical Team",
    credentials: "B.Sc. Physiotherapy | Professional Membership",
    bio: "Committed to delivering compassionate, evidence-based care. They work closely with each patient to develop realistic recovery goals and celebrate the progress made along the way.",
    secondBio:
      "Areas of interest include orthopaedic care, neurological rehab, and functional training for everyday life.",
  },
];

const About = () => {
  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      {/* {BackGround Image} */}
      <img
    src="/images/team-outside.png" // Replace with your team photo path
    alt="DE-INES Physiotherapy Team"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />
        <div className="absolute inset-0 bg-blue-950/30" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 mx-auto max-w-4xl text-white"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Story
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              About DE-INES
            </h1>
            <p className="mt-8 text-lg leading-8 text-white/80">
              DE-INES Physiotherapy was founded on a simple belief: that
              everyone deserves access to high-quality, compassionate
              physiotherapy care. We combine thorough assessment,
              evidence-based treatment, and genuine partnership to help you
              recover stronger, move better, and return to the activities
              that matter most.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/what-we-treat"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
              >
                What We Treat
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-600"
              >
                Services
              </a>
            </div>
          </motion.div>
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
                src="/images/dei-lady.jpg"
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
              Meet the professionals behind DE-INES Physiotherapy.
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
                <div className="h-64 overflow-hidden">
                  <img
                    src="/images/staff-single.png"
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
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