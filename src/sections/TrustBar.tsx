import { ShieldCheck, HeartPulse, Users } from "lucide-react";
import Container from "../components/Container";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Licensed Professionals",
    description: "Certified physiotherapists with years of hands-on experience.",
  },
  {
    icon: HeartPulse,
    title: "Modern Techniques",
    description: "Evidence-based treatments tailored to your recovery goals.",
  },
  {
    icon: Users,
    title: "Patient First",
    description: "Compassionate care from your first visit to full recovery.",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl p-5 transition hover:bg-slate-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-700" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
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