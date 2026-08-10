import { ShieldCheck, HeartPulse, Users } from "lucide-react";
import Container from "../components/Container";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description:
      "Qualified physiotherapy professionals focused on safe, patient-centred rehabilitation.",
  },
  {
    icon: HeartPulse,
    title: "Evidence-Based Practice",
    description:
      "Professional assessment and treatment tailored to each patient's needs and recovery goals.",
  },
  {
    icon: Users,
    title: "Patient-Centred Approach",
    description:
      "Individual attention and ongoing support throughout your rehabilitation journey.",
  },
];

const TrustBar = () => {
  return (
    <section className="border-y border-slate-100 bg-white">
      <Container>
        <div className="grid divide-y divide-slate-100 py-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-8">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex items-start gap-4 px-4 py-5 transition duration-300 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition duration-300 group-hover:bg-blue-700">
                  <Icon
                    className="h-6 w-6 text-blue-700 transition duration-300 group-hover:text-white"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TrustBar;