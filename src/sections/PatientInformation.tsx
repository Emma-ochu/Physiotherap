import { CheckCircle2 } from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";
import { Link } from "react-router-dom";

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
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
        <div className="absolute inset-0 bg-blue-950/30" />
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Patient Information
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Everything you need to know before, during, and after your physiotherapy appointment
            </p>
          </div>
        </Container>
      </section>

      {/* Before Your Visit */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Before Your Visit
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              To help us provide you with the best care, here's what you should know and prepare before your appointment.
            </p>
            <ul className="mt-8 space-y-4">
              {preVisitInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* During Your Visit */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              What to Expect During Your Visit
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Your first appointment is an opportunity to meet your physiotherapist and develop a treatment plan tailored to your needs.
            </p>
            <ul className="mt-8 space-y-4">
              {duringVisit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* After Your Visit */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              After Your Visit
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Your physiotherapy journey continues between appointments. Here's how to get the most from your treatment.
            </p>
            <ul className="mt-8 space-y-4">
              {afterVisit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Quick Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              For more detailed FAQs, visit our{" "}
              <Link to="/faq" className="font-semibold text-blue-700 hover:text-blue-800">
                FAQ page
              </Link>
              .
            </p>
            <div className="mt-8 space-y-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-slate-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Book Your Appointment?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Contact us today to schedule your physiotherapy session with our experienced team.
            </p>
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition hover:bg-slate-100"
            >
              Book an Appointment
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default PatientInformation;
