import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/de-ines.jpeg"
                alt="DE-INES logo"
                className="h-12 w-12 object-contain"
              />

              <div className="leading-tight">
                <div className="text-xl font-bold text-white">
                  DE-INES
                </div>

                <div className="text-sm font-medium text-slate-400">
                  PHYSIOTHERAPY
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Expert physiotherapy and rehabilitation care in Benin City.
              Helping you move better and live pain-free.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition hover:bg-blue-700 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
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
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition hover:bg-blue-700 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition hover:bg-blue-700 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="mailto:consultdeinesphysiotherapy@gmail.com"
                aria-label="Email DE-INES"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition hover:bg-blue-700 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="transition hover:text-blue-400"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="transition hover:text-blue-400"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/training"
                  className="transition hover:text-blue-400"
                >
                  Training
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className="transition hover:text-blue-400"
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="transition hover:text-blue-400"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              {/* Head Office */}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=41+Oko+Central+Road+Off+Airport+Road+Benin+City+Edo+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-6 transition hover:text-blue-400"
                >
                  41, Oko Central Road, Off Airport Road,
                  <br />
                  Benin City, Edo State.
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />

                <a
                  href="tel:+2349160803314"
                  className="transition hover:text-blue-400"
                >
                  0916 080 3314
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />

                <a
                  href="https://wa.me/2348036125717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  0803 612 5717 (WhatsApp)
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                <a
                  href="mailto:consultdeinesphysiotherapy@gmail.com"
                  className="break-all transition hover:text-blue-400"
                >
                  consultdeinesphysiotherapy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours / CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h3>

            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-slate-300">8am – 6pm</span>
              </li>

              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-slate-300">9am – 4pm</span>
              </li>

              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-slate-300">Closed</span>
              </li>
            </ul>

            <a
              href="https://wa.me/2348036125717?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DE-INES Physiotherapy. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;