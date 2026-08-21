import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
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
    name: "Inegbenejie Sylvester Bamidele",
    role: "Clinic Medical Director",
    category: "Executive & Management",
    description: "Oversees clinical standards and patient care strategy, ensuring every treatment meets the highest professional benchmarks.",
    image: "/images/Bamidele.png",
    bgColor: "bg-blue-600",
  },
  {
    name: "Nwoba Kelechi Igwon",
    role: "Chief Physiotherapist",
    category: "Clinical Staff",
    description: "Leads the clinical team with advanced musculoskeletal expertise and evidence-based rehabilitation protocols.",
    image: "/images/physio-1.jpg",
    bgColor: "bg-cyan-600",
  },
  {
    name: "Oyaluna Joshua Oseojie",
    role: "Senior Physiotherapist",
    category: "Clinical Staff",
    description: "Specialises in sports injury recovery and post-surgical rehabilitation with a focus on restoring full function.",
    image: "/images/physio-4.jpg",
    bgColor: "bg-teal-600",
  },
  {
    name: "Obamedo Celestina Osayamen",
    role: "Intern Physiotherapist",
    category: "Clinical Staff",
    description: "Supports patient care under senior supervision, bringing fresh energy and up-to-date academic knowledge to treatment sessions.",
    image: "/images/physio-2.jpg",
    bgColor: "bg-emerald-600",
  },
  {
    name: "Blessing Modupe Jacob-Ogenah",
    role: "Clinic Manager",
    category: "Administration & Technical Support",
    description: "Coordinates day-to-day operations, staff, and patient experience to keep the clinic running smoothly and efficiently.",
    image: "/images/manager.jpg",
    bgColor: "bg-blue-700",
  },
  {
    name: "Ighomuaye Mamuzo Blessing",
    role: "Clinic Administrator",
    category: "Administration & Technical Support",
    description: "Manages appointments, records, and patient flow so your visit is seamless from check-in to checkout.",
    image: "/images/blessing.jpg",
    bgColor: "bg-slate-600",
  },
  {
    name: "Onyemachi Confidence Ifeoma",
    role: "Clinic Secretary",
    category: "Administration & Technical Support",
    description: "Your first point of contact — friendly, organised, and ready to help with scheduling and enquiries.",
    image: "/images/secretary.jpg",
    bgColor: "bg-blue-800",
  },
  {
    name: "Osayande John Ikponmwosa",
    role: "IT Specialist",
    category: "Administration & Technical Support",
    description: "Maintains our digital systems and patient data security, keeping everything behind the scenes working flawlessly.",
    image: "/images/uncle-ik.jpg",
    bgColor: "bg-indigo-700",
  },
];

const teamCategories = [
  "Executive & Management",
  "Clinical Staff",
  "Administration & Technical Support",
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
      <section className="bg-slate-50 py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
              Our People
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Meet the team
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Dedicated professionals committed to your recovery.
            </p>
          </motion.div>

          <div className="mt-20 space-y-20">
            {teamCategories.map((category) => {
              const members = team.filter((m) => m.category === category);
              const isExecutive = category === "Executive & Management";

              return (
                <div key={category}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 flex items-center gap-4"
                  >
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                      {category}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </motion.div>

                  {/* Featured Leadership Spotlight for single executive */}
                  {isExecutive && members.length === 1 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden rounded-3xl bg-white shadow-lg"
                    >
                      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="relative h-80 lg:h-auto">
                          <img
                            src={members[0].image}
                            alt={members[0].name}
                            className="h-full w-full object-cover"
                          />
                          <div className={`absolute left-0 top-0 h-1.5 w-full ${members[0].bgColor}`} />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 lg:hidden">
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                              {members[0].role}
                            </p>
                            <h3 className="mt-1 text-2xl font-bold text-white">
                              {members[0].name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center p-8 md:p-12">
                          <div className="max-w-lg">
                            <div className="hidden lg:block">
                              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                                {members[0].role}
                              </p>
                              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                                {members[0].name}
                              </h3>
                            </div>

                            <p className="mt-6 text-lg leading-8 text-slate-600 lg:mt-8">
                              {members[0].description}
                            </p>

                            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                              <Quote className="h-8 w-8 text-blue-200" />
                              <p className="mt-3 text-lg italic leading-8 text-slate-700">
                                "Every patient who walks through our doors deserves not just treatment, but a genuine partnership in their recovery journey. That is the standard we live by."
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className={`grid gap-6 sm:grid-cols-2 
                      ${members.length < 3 ? "mx-auto max-w-4xl lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                      {members.map((member, index) => (
                        <motion.article
                          key={member.name}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                        >
                          <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className={`absolute left-0 top-0 h-1 w-full ${member.bgColor}`} />
                          </div>

                          <div className="p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                              {member.role}
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-slate-900">
                              {member.name}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                              {member.description}
                            </p>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== VIDEOS ===== */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Inside DE-INES
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              See Our Clinic in Action
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Take a look at our facility, our outreach work, and the environment
              where we provide professional physiotherapy care.
            </p>
          </motion.div>

          {/* Outreach Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
              Community Outreach
            </h3>
            <div className="flex justify-center overflow-hidden rounded-[28px] bg-slate-950 p-4 shadow-xl md:p-8">
              <video
                className="h-auto max-h-[720px] w-full max-w-[430px] rounded-2xl object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/images/team-outside.png"
              >
                <source src="/gallery/outreach.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Director Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-24 overflow-hidden rounded-[28px] bg-slate-50 shadow-xl"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex min-h-[420px] items-center justify-center bg-black lg:min-h-[560px]">
                <video
                  className="h-full max-h-[560px] w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/director-clinic.png"
                >
                  <source src="/gallery/director-video-web.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

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
                      At DE-INES Physiotherapy and Sports Consults, our leadership
                      is committed to providing professional, compassionate, and
                      patient-focused physiotherapy services.
                    </p>
                    <p>
                      With a focus on rehabilitation, mobility, sports injuries,
                      pain management, and wellness, our team works to help every
                      patient achieve better movement and quality of life.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20the%20Director%20of%20DE-INES%20Physiotherapy%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                  >
                    Talk to the Director
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
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