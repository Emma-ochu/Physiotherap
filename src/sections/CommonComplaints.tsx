import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../components/Container";

interface Complaint {
  title: string;
  icon: string;
  slug: string;
}

const CommonComplaints = () => {
  const complaints: Complaint[] = [
    {
      title: "Knee Pain",
      icon: "🦵",
      slug: "knee-pain",
    },
    {
      title: "Low Back Pain",
      icon: "🔙",
      slug: "low-back-pain",
    },
    {
      title: "Neck & Head Pain",
      icon: "🧠",
      slug: "neck-pain",
    },
    {
      title: "Shoulder Pain",
      icon: "💪",
      slug: "shoulder-pain",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Common Conditions
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Most Common Complaints We Treat
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Experiencing pain or movement difficulties? Here are the most common
            conditions we help people recover from.
          </p>
        </div>

        {/* Complaint Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {complaints.map((complaint) => (
            <Link
              key={complaint.slug}
              to="/what-we-treat"
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{complaint.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                  {complaint.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition group-hover:gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            to="/what-we-treat"
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-700 px-8 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            View All Conditions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CommonComplaints;
