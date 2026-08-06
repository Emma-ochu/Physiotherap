import {
  Activity,
  Accessibility,
  PersonStanding,
  Brain,
  Bone,
  HeartPulse,
  HandHelping,
  Dumbbell,
} from "lucide-react";

import Container from "../components/Container";

const Services = () => {
  const services = [
    {
      title: "Sports Injury Rehabilitation",
      description:
        "Expert assessment and treatment for sports injuries, strains, sprains, and return-to-play programs.",
      icon: Dumbbell,
    },
    {
      title: "Back, Neck & Waist Pain",
      description:
        "Targeted care for sciatica, lower back pain, neck stiffness, and postural problems.",
      icon: Activity,
    },
    {
      title: "Stroke & Neurological Rehab",
      description:
        "Comprehensive rehabilitation after stroke, brain injury, spinal cord and nerve injuries.",
      icon: Brain,
    },
    {
      title: "Shoulder, Knee & Joint Care",
      description:
        "Treatment for rotator cuff issues, arthritis, post-surgical recovery, and joint mobility.",
      icon: Bone,
    },
    {
      title: "Elderly & Home Care",
      description:
        "Physiotherapy at home or in-clinic to improve balance, strength, and independence for seniors.",
      icon: PersonStanding,
    },
    {
      title: "Pregnancy & Postpartum",
      description:
        "Safe exercise programs and pelvic floor support during pregnancy and after labour.",
      icon: HeartPulse,
    },
    {
      title: "Children with Special Needs",
      description:
        "Personalized programs supporting movement, coordination, and developmental goals, including club foot care.",
      icon: Accessibility,
    },
    {
      title: "Pain & Headache Management",
      description:
        "Manual therapy and corrective exercises for tension headaches, chronic pain, and muscle tension.",
      icon: HandHelping,
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Helping You Recover, Move Better & Live Pain-Free
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From sports injuries and musculoskeletal pain to stroke recovery and
            home care, our team provides personalized physiotherapy tailored to
            your goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="leading-7 text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
