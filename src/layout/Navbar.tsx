import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

/* Shared desktop-link classes */
const linkBase =
  "relative rounded-lg px-4 py-2 text-[15px] font-medium transition-all";

const linkInactive =
  "text-slate-600 hover:text-blue-700 hover:bg-blue-50/50";

const linkActive = "text-blue-700";

/* Physiotherapy services */
const physiotherapyServices = [
  {
    name: "Musculoskeletal Physiotherapy",
    path: "/services/musculoskeletal",
  },
  {
    name: "Sports Physiotherapy",
    path: "/services/sports",
  },
  {
    name: "Women's & Men's Pelvic Health",
    path: "/services/pelvic-health",
  },
  {
    name: "Orthopaedic & Post-Surgical Rehabilitation",
    path: "/services/orthopaedic-rehabilitation",
  },
  {
    name: "Neurological Rehabilitation",
    path: "/services/neurological-rehabilitation",
  },
  {
    name: "Functional & Specialist Rehabilitation",
    path: "/services/functional-rehabilitation",
  },
  {
    name: "Mobile Exercise Rehabilitation",
    path: "/services/mobile-exercise-rehabilitation",
  },
];

/* Conditions / areas we treat */
const treatments = [
  {
    name: "Low Back Pain",
    path: "/what-we-treat",
  },
  {
    name: "Neck & Head Pain",
    path: "/what-we-treat",
  },
  {
    name: "Shoulder Pain",
    path: "/what-we-treat",
  },
  {
    name: "Ankle & Foot Pain",
    path: "/what-we-treat",
  },
  {
    name: "Knee Pain",
    path: "/what-we-treat",
  },
  {
    name: "Muscle Pain",
    path: "/what-we-treat",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Mobile accordion states */
  const [mobilePhysioOpen, setMobilePhysioOpen] = useState(false);
  const [mobileTreatOpen, setMobileTreatOpen] = useState(false);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobilePhysioOpen(false);
    setMobileTreatOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div className="hidden bg-blue-800 md:block">
        <Container>
          <div className="flex h-11 items-center justify-between">
            <span className="text-xs font-medium text-blue-200">
              Benin City, Edo State
            </span>

            <div className="flex items-center gap-6">
              <NavLink
                to="/patient-info"
                className="text-xs font-medium text-blue-100 transition hover:text-white"
              >
                Patient Information
              </NavLink>

              <NavLink
                to="/faq"
                className="text-xs font-medium text-blue-100 transition hover:text-white"
              >
                FAQ
              </NavLink>

              <NavLink
                to="/contact"
                className="text-xs font-medium text-blue-100 transition hover:text-white"
              >
                Contact
              </NavLink>

              <a
                href="tel:+2349160803314"
                className="flex items-center gap-1.5 text-xs font-semibold text-white transition hover:text-blue-100"
              >
                <Phone className="h-3.5 w-3.5" />
                0916 080 3314
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <div
        className={`border-b border-slate-100 bg-white transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md"
            : "shadow-sm"
        }`}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                <img
                  src="/images/de-ines.jpeg"
                  alt="DE-INES Physiotherapy"
                  className="h-9 w-9 object-contain"
                />
              </div>

              <div className="leading-tight">
                <div className="text-xl font-bold tracking-tight text-blue-700">
                  DE-INES
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Physiotherapy
                </div>
              </div>
            </NavLink>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav className="hidden items-center gap-1 lg:flex">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? linkActive : linkInactive
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Home

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-700" />
                    )}
                  </>
                )}
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? linkActive : linkInactive
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    About

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-700" />
                    )}
                  </>
                )}
              </NavLink>

              {/* =================================================
                  PHYSIOTHERAPY DROPDOWN
              ================================================== */}
              <div className="group relative">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? linkActive : linkInactive
                    } inline-flex items-center gap-1.5`
                  }
                >
                  Physiotherapy
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>

                {/* Dropdown */}
                <div className="pointer-events-none invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
                    {/* Header */}
                    <div className="border-b border-slate-100 bg-slate-950 px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                        Physiotherapy
                      </p>

                      <p className="mt-1 text-sm text-white/60">
                        Clinical services & rehabilitation
                      </p>
                    </div>

                    {/* Services */}
                    <div className="p-2">
                      {physiotherapyServices.map((service) => (
                        <NavLink
                          key={service.path}
                          to={service.path}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                          {service.name}
                        </NavLink>
                      ))}

                      {/* All services */}
                      <NavLink
                        to="/services"
                        className="mt-1 flex items-center justify-between rounded-xl border-t border-slate-100 px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                      >
                        <span>View All Physiotherapy Services</span>

                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  WHAT WE TREAT DROPDOWN
              ================================================== */}
              <div className="group relative">
                <NavLink
                  to="/what-we-treat"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? linkActive : linkInactive
                    } inline-flex items-center gap-1.5`
                  }
                >
                  What We Treat
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>

                {/* Dropdown */}
                <div className="pointer-events-none invisible absolute left-1/2 top-full w-[300px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
                    <div className="border-b border-slate-100 bg-slate-950 px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                        What We Treat
                      </p>

                      <p className="mt-1 text-sm text-white/60">
                        Common conditions & pain areas
                      </p>
                    </div>

                    <div className="p-2">
                      {treatments.map((treatment) => (
                        <NavLink
                          key={treatment.name}
                          to={treatment.path}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                          {treatment.name}
                        </NavLink>
                      ))}

                      <NavLink
                        to="/what-we-treat"
                        className="mt-1 flex items-center justify-between rounded-xl border-t border-slate-100 px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                      >
                        <span>View All Conditions</span>

                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training */}
              <NavLink
                to="/training"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? linkActive : linkInactive
                  }`
                }
              >
                Training
              </NavLink>
            </nav>

            {/* Desktop CTA */}
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg lg:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-50 rounded-xl p-2.5 text-slate-700 transition hover:bg-slate-100 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 z-40 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl lg:hidden">
            {/* Drawer Header */}
            <div className="flex h-[72px] shrink-0 items-center justify-end border-b border-slate-100 px-6">
              <button
                onClick={closeMenu}
                className="rounded-xl p-2.5 text-slate-700 transition hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col px-5 py-4">
              {/* Home */}
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                Home
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                About
              </NavLink>

              {/* =================================================
                  MOBILE PHYSIOTHERAPY ACCORDION
              ================================================== */}
              <div className="border-b border-slate-100">
                <button
                  type="button"
                  onClick={() =>
                    setMobilePhysioOpen((open) => !open)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-base font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  <span>Physiotherapy</span>

                  {mobilePhysioOpen ? (
                    <Minus className="h-5 w-5 text-blue-700" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-600" />
                  )}
                </button>

                {mobilePhysioOpen && (
                  <div className="mb-3 ml-3 border-l-2 border-blue-100 pl-3">
                    {/* Main services page */}
                    <NavLink
                      to="/services"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                    >
                      All Physiotherapy Services
                    </NavLink>

                    {physiotherapyServices.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-3 text-sm leading-5 text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* =================================================
                  MOBILE WHAT WE TREAT ACCORDION
              ================================================== */}
              <div className="border-b border-slate-100">
                <button
                  type="button"
                  onClick={() =>
                    setMobileTreatOpen((open) => !open)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-base font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  <span>What We Treat</span>

                  {mobileTreatOpen ? (
                    <Minus className="h-5 w-5 text-blue-700" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-600" />
                  )}
                </button>

                {mobileTreatOpen && (
                  <div className="mb-3 ml-3 border-l-2 border-blue-100 pl-3">
                    {/* Main treatment page */}
                    <NavLink
                      to="/what-we-treat"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                    >
                      All Conditions We Treat
                    </NavLink>

                    {treatments.map((treatment) => (
                      <NavLink
                        key={treatment.name}
                        to={treatment.path}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
                      >
                        {treatment.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Training */}
              <NavLink
                to="/training"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                Training
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Patient Information */}
              <NavLink
                to="/patient-info"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                Patient Information
              </NavLink>

              {/* FAQ */}
              <NavLink
                to="/faq"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                FAQ
              </NavLink>

              {/* CTA */}
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-4 text-center font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;