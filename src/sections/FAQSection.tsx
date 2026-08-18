import { motion } from "framer-motion";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      id: "about-01",
      category: "About Physiotherapy",
      question: "Can I choose my own physiotherapist??",
      answer:
        "Physiotherapy is a healthcare profession focused on helping people improve and maintain movement, function, and quality of life. Physiotherapists assess, treat, and educate people to help manage pain, prevent injury, and support recovery from illness or injury.",
    },
    {
      id: "about-02",
      category: "About Physiotherapy",
      question: "Do I need a referral from my doctor?",
      answer:
        "In many cases, you can self-refer directly to our physiotherapy services. However, some health insurance plans may require a referral. We recommend checking with your insurance provider or contacting us to confirm eligibility.",
    },
    {
      id: "about-03",
      category: "About Physiotherapy",
      question: "What qualifications do physiotherapists have?",
      answer:
        "Our physiotherapists hold university degrees in physiotherapy and are registered with relevant professional bodies. Many have additional specialist qualifications in areas such as sports physiotherapy, women's health, or neurological rehabilitation.",
    },

    {
      id: "treatment-01",
      category: "Treatment & Services",
      question: "How long is each physiotherapy session?",
      answer:
        "Standard sessions are typically 45-60 minutes. Your physiotherapist will discuss the appropriate session length for your specific condition and needs.",
    },
    {
      id: "treatment-02",
      category: "Treatment & Services",
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies depending on your condition, injury severity, and recovery goals. Your physiotherapist will provide an estimated timeframe after your initial assessment and review progress regularly.",
    },
    {
      id: "treatment-03",
      category: "Treatment & Services",
      question: "What happens in a physiotherapy session?",
      answer:
        "Sessions typically include assessment, hands-on treatment (if appropriate), exercise instruction, and education about your condition. Your physiotherapist will explain what they're doing and why, and discuss your progress toward your goals.",
    },
    {
      id: "treatment-04",
      category: "Treatment & Services",
      question: "Can you treat my condition?",
      answer:
        "We treat a wide range of conditions affecting movement and function. To find out whether we can help with your specific condition, please contact us or book a consultation. Our physiotherapists can assess your needs and recommend the best approach.",
    },

    {
      id: "practical-01",
      category: "Practical Information",
      question: "What should I wear to my appointment?",
      answer:
        "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. You may be asked to change into comfortable clothing for your session.",
    },
    {
      id: "practical-02",
      category: "Practical Information",
      question: "What do I need to bring?",
      answer:
        "Bring a valid form of ID, any insurance or health coverage information, and a list of current medications or health conditions if available. Completed intake forms can often be done online before your appointment.",
    },
    {
      id: "practical-03",
      category: "Practical Information",
      question: "Do you offer online or telehealth appointments?",
      answer:
        "Yes, we offer telehealth services for certain conditions and follow-ups. Telehealth appointments are available for consultations, program reviews, and exercise guidance. Contact us to discuss whether telehealth is appropriate for your needs.",
    },
    {
      id: "practical-04",
      category: "Practical Information",
      question: "Can I claim my physiotherapy through insurance?",
      answer:
        "Many insurance plans cover physiotherapy. We recommend checking your coverage before your appointment. Our team can help with any documentation needed for insurance claims.",
    },

    {
      id: "exercise-01",
      category: "Home Exercises & Recovery",
      question: "Why do I need to do exercises at home?",
      answer:
        "Home exercises are a crucial part of your recovery. They help reinforce what you learn in sessions, build strength and flexibility between appointments, and empower you to take an active role in your recovery.",
    },
    {
      id: "exercise-02",
      category: "Home Exercises & Recovery",
      question: "How often should I do my home exercises?",
      answer:
        "Your physiotherapist will recommend a specific exercise schedule based on your condition. Most people benefit from doing exercises 3-5 times per week, but this may vary. Consistency is more important than intensity.",
    },
    {
      id: "exercise-03",
      category: "Home Exercises & Recovery",
      question: "What if I'm experiencing pain during exercises?",
      answer:
        "Some discomfort during exercise is normal, but sharp or increasing pain is not. Stop the exercise and contact your physiotherapist. Pain during rehabilitation should be mild to moderate—your physiotherapist can adjust your program if needed.",
    },

    {
      id: "other-01",
      category: "Other Questions",
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by contacting us via WhatsApp, email, or phone. Our team will work with you to find a time that suits your schedule.",
    },
    {
      id: "other-02",
      category: "Other Questions",
      question: "What if I need to cancel or reschedule?",
      answer:
        "We understand that things come up. Please contact us as soon as possible if you need to cancel or reschedule. We typically ask for 24 hours notice to avoid cancellation fees.",
    },
  ];

  const categories = [
    "About Physiotherapy",
    "Treatment & Services",
    "Practical Information",
    "Home Exercises & Recovery",
    "Other Questions",
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
        <div className="absolute inset-0 bg-blue-950/30" />
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Find answers to common questions about our services, treatment, and how to get started
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-5xl">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter((faq) => faq.category === category);
              return (
                <div key={category} className="mb-16">
                  <h2 className="mb-8 text-2xl font-bold text-slate-900">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {categoryFaqs.map((faq) => (
                      <motion.div
                        key={faq.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                      >
                        <h3 className="text-lg font-semibold text-slate-900">
                          {faq.question}
                        </h3>
                        <p className="mt-3 leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Didn't find what you're looking for? Our team is here to help. Get in touch with us directly.
            </p>
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default FAQSection;