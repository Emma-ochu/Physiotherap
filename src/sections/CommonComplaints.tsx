import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../components/Container";

interface Complaint {
  title: string;
  image: string;
  summary: string;
  slug: string;
}

const CommonComplaints = () => {
  const complaints: Complaint[] = [
    {
      title: "Knee Pain",
      image: "/images/knee-pain.jpg",
      summary: "Affecting walking, stairs, squatting, and active movement.",
      slug: "knee-pain",
    },
    {
      title: "Low Back Pain",
      image: "/images/low-back-pain.jpg",
      summary: "Often linked to posture, strain, or long sitting and lifting.",
      slug: "low-back-pain",
    },
    {
      title: "Neck & Head Pain",
      image: "/images/neck-head-pain.jpg",
      summary: "Common from tension, posture, and nerve irritation.",
      slug: "neck-pain",
    },
    {
      title: "Shoulder Pain",
      image: "/images/shoulder-pain.jpg",
      summary: "Often caused by overuse, stiffness, or rotator cuff strain.",
      slug: "shoulder-pain",
    },
    {
      title: "Muscle Pain",
      image: "/images/muscle-pain.jpg",
      summary: "Usually tied to tightness, recovery, or exercise overload.",
      slug: "muscle-pain",
    },
    {
      title: "Ankle & Foot Pain",
      image: "/images/ankle-foot-pain.jpg",
      summary: "Can slow walking, standing, and sports participation.",
      slug: "ankle-foot-pain",
    },
  ];

  return (
    <section className='bg-slate-50 py-20 md:py-28'>
      <Container>
        <div className='mb-14 text-center md:mb-16'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
            Common Conditions
          </p>
          <h2 className='mt-4 text-3xl font-bold text-slate-900 md:text-5xl'>
            Pain areas we help people recover from
          </h2>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-slate-600'>
            Whether it is a recurring ache or a recent injury, we help restore
            movement, reduce pain, and improve quality of life.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {complaints.map((complaint) => (
            <Link
              key={complaint.slug}
              to='/what-we-treat'
              className='group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]'
            >
              <div className='relative h-52 overflow-hidden'>
                <img
                  src={complaint.image}
                  alt={complaint.title}
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent' />
              </div>

              <div className='p-6'>
                <p className='text-xs font-bold uppercase tracking-[0.18em] text-blue-700'>
                  Pain area
                </p>

                <h3 className='mt-3 text-2xl font-bold text-slate-900 group-hover:text-blue-700'>
                  {complaint.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-slate-600'>
                  {complaint.summary}
                </p>

                <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700'>
                  Learn More
                  <ArrowRight className='h-4 w-4 transition group-hover:translate-x-1' />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            to='/what-we-treat'
            className='inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 font-semibold text-white shadow-[0_12px_25px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-800'
          >
            View All Conditions
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CommonComplaints;
