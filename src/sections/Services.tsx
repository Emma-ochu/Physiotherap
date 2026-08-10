import {
  Activity,
  Brain,
  Bone,
  HeartPulse,
  Dumbbell,
  Accessibility,
} from "lucide-react";

import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const services = [
  {
    title: "Sports Injury & Rehabilitation",
    description:
      "Structured rehabilitation for sports injuries and movement-related conditions, from initial recovery through return to activity.",
    conditions:
      "ACL injuries • Ankle sprains • Running injuries • Muscle strains • Tendon injuries • Shoulder injuries",
    icon: Dumbbell,
  },
  {
    title: "Musculoskeletal & Pain Care",
    description:
      "Personalized physiotherapy for pain, stiffness, mobility limitations, and everyday musculoskeletal conditions.",
    conditions:
      "Back pain • Neck pain • Sciatica • Arthritis • Persistent pain • Headaches & migraines",
    icon: Activity,
  },
  {
    title: "Neurological Rehabilitation",
    description:
      "Specialized rehabilitation designed to improve movement, strength, balance, coordination, and independence.",
    conditions:
      "Stroke • Brain injury • Spinal cord injury • Nerve injuries • Post-concussion rehabilitation",
    icon: Brain,
  },
  {
    title: "Orthopaedic & Post-Surgical Rehab",
    description:
      "Progressive rehabilitation following injuries, fractures, orthopaedic procedures, and other surgeries.",
    conditions:
      "ACL reconstruction • Knee replacement • Hip replacement • Fractures • Shoulder repairs • Arthroscopic procedures",
    icon: Bone,
  },
  {
    title: "Women's Health & Pelvic Care",
    description:
      "Physiotherapy support through pregnancy, postpartum recovery, and pelvic-floor related conditions.",
    conditions:
      "Pregnancy exercise • Postpartum rehabilitation • Pelvic floor dysfunction • Incontinence",
    icon: HeartPulse,
  },
  {
    title: "Specialist & Functional Rehabilitation",
    description:
      "Rehabilitation support for complex conditions affecting mobility, physical function, and quality of life.",
    conditions:
      "Amputation rehabilitation • Post-burn contractures • Club-foot management • Falls prevention • Mobility training",
    icon: Accessibility,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-50 py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Comprehensive Physiotherapy & Rehabilitation Care
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            DE-INES provides professional physiotherapy and rehabilitation
            services across a broad range of sports, musculoskeletal,
            neurological, orthopaedic, and functional conditions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-blue-700">
                  <Icon className="h-7 w-7 text-blue-700 transition duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Conditions */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-sm font-medium leading-6 text-slate-500">
                    {service.conditions}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Broader Care Statement */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Care Across Every Stage of Recovery
              </h3>

              <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
                Our physiotherapy approach supports people of different ages
                and needs, from children and young adults to working
                professionals, athletes, and older adults. Treatment is
                tailored to the individual's condition, goals, and stage of
                recovery.
              </p>
            </div>

            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Not Sure Which Service You Need?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            Speak with the DE-INES team about your condition and find out
            which physiotherapy approach may be appropriate for you.
          </p>

          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Book an Appointment
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;