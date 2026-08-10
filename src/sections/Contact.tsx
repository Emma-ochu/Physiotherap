import Container from "../components/Container";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const HEAD_OFFICE =
  "41, Oko Central Road, Off Airport Road, Benin City, Edo State, Nigeria";

const BRANCH_OFFICE =
  "35 Egun Street, Off Orubor Road, Agbor, Delta State, Nigeria";

const MAPS_QUERY = HEAD_OFFICE;

const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY
)}&output=embed`;

const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY
)}`;

const contactInfo = [
  {
    title: "Head Office",
    value: HEAD_OFFICE,
    href: MAPS_LINK,
    icon: MapPin,
  },
  {
    title: "Branch Office",
    value: BRANCH_OFFICE,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      BRANCH_OFFICE
    )}`,
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
    value: "0803 612 5717",
    href: WHATSAPP_BOOK,
    icon: MessageCircle,
  },
  {
    title: "Email",
    value: "consultdeinesphysiotherapy@gmail.com",
    href: "mailto:consultdeinesphysiotherapy@gmail.com",
    icon: Mail,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Book Your Appointment Today
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ready to begin your recovery journey? Contact DE-INES
            Physiotherapy & Sports Injury Consult to book an appointment,
            inquire about our services, or enroll in our Home Care Assistant
            Training program.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={
                    item.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 leading-7 text-slate-600">
                        {item.value}
                      </p>
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

              const form = e.currentTarget;

              const name = (
                form.elements.namedItem("name") as HTMLInputElement
              ).value;

              const phone = (
                form.elements.namedItem("phone") as HTMLInputElement
              ).value;

              const message = (
                form.elements.namedItem("message") as HTMLTextAreaElement
              ).value;

              const whatsappMessage = encodeURIComponent(
                `Hello, I would like to book an appointment at DE-INES Physiotherapy.

Name: ${name}
Phone: ${phone}

Message:
${message}`
              );

              window.open(
                `https://wa.me/2348036125717?text=${whatsappMessage}`,
                "_blank"
              );
            }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-slate-600">
                Fill in your details and continue the conversation on
                WhatsApp.
              </p>
            </div>

            <div className="grid gap-5">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us how we can help..."
                required
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
          <div className="border-b border-slate-200 bg-white px-6 py-5">
            <h3 className="text-lg font-semibold text-slate-900">
              Find Our Head Office
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              {HEAD_OFFICE}
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full bg-slate-100 sm:aspect-[21/9]">
            <iframe
              title="DE-INES Physiotherapy Head Office location"
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
              Open Head Office in Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;