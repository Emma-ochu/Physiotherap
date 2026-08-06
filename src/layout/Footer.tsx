import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-xl font-bold text-white">DE-INES</span>
              <p className="text-xs tracking-wider text-slate-400">
                PHYSIOTHERAPY
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Expert physiotherapy and rehabilitation care in Benin City.
              Helping you move better and live pain-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" className="hover:text-blue-400 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-blue-400 transition"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/training"
                  className="hover:text-blue-400 transition"
                >
                  Training
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="hover:text-blue-400 transition"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-blue-400 transition"
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
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=No+41+Oko-Central+Road,+Off+Airport+Road,+By+NEPA+Office,+Benin+City,+Edo+State,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  No 41 Oko-Central Road, Off Airport Road, By NEPA Office,
                  Benin City, Edo State.
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <a href="tel:+2349160803314" className="hover:text-blue-400">
                  0916 080 3314
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <a
                  href="https://wa.me/2348174636276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  0817 463 6276 (WhatsApp)
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
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-slate-300">8am – 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-slate-300">9am – 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-slate-300">Closed</span>
              </li>
            </ul>
            <a
              href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Book Appointment
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DE-INES Physiotherapy. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
