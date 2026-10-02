import { ShieldCheck, HeartPulse, Users } from "lucide-react";
import Container from "../components/Container";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description:
      "Safe, accountable rehabilitation led by clinicians focused on real recovery outcomes.",
  },
  {
    icon: HeartPulse,
    title: "Evidence-Based Practice",
    description:
      "Personalized treatment plans shaped by assessment, progress, and patient goals.",
  },
  {
    icon: Users,
    title: "Patient-Centred Support",
    description:
      "Guidance, encouragement, and continuity throughout every stage of your healing journey.",
  },
];

const TrustBar = () => {
  return (
    <section className='bg-white py-3'>
      <Container>
        <div className='overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-[0_18px_35px_rgba(15,23,42,0.04)]'>
          <div className='grid gap-0 md:grid-cols-3'>
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className='group flex items-start gap-4 border-b border-slate-200 px-5 py-6 transition duration-300 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-8 md:last:border-r-0'
                >
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-700'>
                    <Icon
                      className='h-5 w-5 text-blue-700 transition duration-300 group-hover:text-white'
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3 className='text-base font-bold text-slate-900'>
                      {item.title}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-slate-600'>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustBar;
