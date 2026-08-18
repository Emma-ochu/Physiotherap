import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";
import { Link } from "react-router-dom";

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};
const PatientInformation = () => {
  const preVisitInfo = [
    "Bring a valid form of ID and any insurance or health coverage information",
    "Complete any required intake forms (these can often be done online before your appointment)",
    "Wear comfortable, loose-fitting clothing that allows easy movement",
    "Arrive 5-10 minutes early to allow time for check-in",
    "Bring a list of current medications or health conditions",
    "Note any recent injuries or medical procedures",
  ];

  const duringVisit = [
    "Your physiotherapist will conduct a thorough assessment of your condition",
    "They will ask about your symptoms, medical history, and lifestyle",
    "You will be assessed for movement, strength, and functional ability",
    "A personalised treatment plan will be developed based on your needs",
    "Your first session may focus more on assessment than treatment",
    "Expect to discuss your goals and recovery timeframe",
  ];

  const afterVisit = [
    "You may receive exercises or stretches to do at home",
    "Follow any advice given about activity and movement",
    "Attend follow-up appointments as recommended",
    "Track your progress and report any changes",
    "Communicate with your physiotherapist about what's working",
    "Don't hesitate to ask questions about your treatment",
  ];

  const faqs = [
    {
      q: "Do I need a referral from my doctor?",
      a: "In many cases, you can self-refer directly to our physiotherapy services. However, some health insurance plans may require a referral. We recommend checking with your insurance provider or contacting us to confirm.",
    },
    {
      q: "How long is each physiotherapy session?",
      a: "Standard sessions are typically 45-60 minutes. Your physiotherapist will discuss the appropriate session length for your specific condition and needs.",
    },
    {
      q: "How many sessions will I need?",
      a: "The number of sessions varies depending on your condition, injury severity, and recovery goals. Your physiotherapist will provide an estimated timeframe after your initial assessment.",
    },
    {
      q: "What should I wear to my appointment?",
      a: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. You may be asked to change into comfortable clothing for your session.",
    },
    {
      q: "Can I claim my physiotherapy through my insurance?",
      a: "Many insurance plans cover physiotherapy. We recommend checking your coverage before your appointment. Our team can help with any documentation needed for insurance claims.",
    },
  ];

  return (
    <main className="bg-slate-100 min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
        <img
          src="/images/clinic-waiting.jpg"
          alt="Patient Information Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300 md:text-sm">
              Appointments & Guidelines
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
              Patient Information
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Everything you need to know before, during, and after your physiotherapy appointment
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-red-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-red-600"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CARD STACK CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Before Your Visit */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl bg-white p-8 shadow-sm md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                Before Your Visit
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                To help us provide you with the best care, here's what you should know and prepare before your appointment.
              </p>
              <ul className="mt-6 space-y-4">
                {preVisitInfo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <span className="leading-relaxed text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* During Your Visit */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl bg-white p-8 shadow-sm md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                What to Expect During Your Visit
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Your first appointment is an opportunity to meet your physiotherapist and develop a treatment plan tailored to your needs.
              </p>
              <ul className="mt-6 space-y-4">
                {duringVisit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <span className="leading-relaxed text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After Your Visit */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl bg-white p-8 shadow-sm md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                After Your Visit
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Your physiotherapy journey continues between appointments. Here's how to get the most from your treatment.
              </p>
              <ul className="mt-6 space-y-4">
                {afterVisit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <span className="leading-relaxed text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Questions */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl bg-white p-8 shadow-sm md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                Quick Questions
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                For more detailed FAQs, visit our{" "}
                <Link to="/faq" className="font-semibold text-red-500 underline hover:text-red-600">
                  FAQ page
                </Link>
                .
              </p>
              <div className="mt-6 space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-slate-700">
                      {faq.q}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== CYAN CTA BANNER ===== */}
      <section className="bg-cyan-500 py-16 text-white md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              Ready to Book Your Appointment?
            </h2>
            <p className="mt-4 text-lg text-cyan-50">
              Contact us today to schedule your physiotherapy session with our experienced team.
            </p>
            <div className="mt-8">
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-red-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-red-600"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default PatientInformation;