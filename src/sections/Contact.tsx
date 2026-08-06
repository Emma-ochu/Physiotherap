import Container from "../components/Container";
import { MapPin, Phone } from "lucide-react";

const MAPS_QUERY =
  "No 41 Oko-Central Road, Off Airport Road, By NEPA Office, Benin City, Edo State, Nigeria";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

const contactInfo = [
  {
    title: "Visit Our Clinic",
    value:
      "No 41 Oko-Central Road, Off Airport Road, By NEPA Office, Benin City, Edo State.",
    href: MAPS_LINK,
    icon: MapPin,
  },
  {
    title: "Call Us",
    value: "0916 080 3314",
    href: "tel:+2349160803314",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "0817 463 6276",
    href: "https://wa.me/2348174636276",
    icon: Phone,
  },
  {
    title: "Facebook",
    value: "Deinesphysiotherapy",
    href: "https://facebook.com/Deinesphysiotherapy",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    value: "de_inesphysiotherapy",
    href: "https://instagram.com/de_inesphysiotherapy",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Book Your Appointment Today
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ready to begin your recovery journey? Contact DE-INES Physiotherapy
            & Sports Injury Consult to book an appointment, inquire about our
            services, or enroll in our Home Care Assistant Training program.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={
                    item.href?.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-slate-600">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <form
            className="rounded-3xl bg-white p-8 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                "https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy.",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Send Message on WhatsApp
              </button>
            </div>
          </form>
        </div>

        {/* Google Maps */}
        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">
          <div className="border-b border-slate-200 bg-white px-6 py-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Find Us on the Map
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              No 41 Oko-Central Road, Off Airport Road, By NEPA Office, Benin
              City
            </p>
          </div>
          <div className="relative aspect-[16/9] w-full bg-slate-100 sm:aspect-[21/9]">
            <iframe
              title="DE-INES Physiotherapy location"
              src={MAPS_EMBED}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="bg-white px-6 py-4 text-center">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
