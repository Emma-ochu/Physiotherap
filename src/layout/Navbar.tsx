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
import { PHONE_NUMBER, PHONE_DISPLAY } from "../lib/whatsapp";

/* Shared desktop-link classes */
const linkBase =
  "relative rounded-full px-4 py-2.5 text-[14px] font-medium transition-all duration-200";

const linkInactive = "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

const linkActive = "bg-blue-50 text-blue-700 shadow-sm";

/* Physiotherapy services */
const physiotherapyServices = [
  { name: "Musculoskeletal Physiotherapy", path: "/services/musculoskeletal" },
  { name: "Sports Physiotherapy", path: "/services/sports" },
  { name: "Women's & Men's Pelvic Health", path: "/services/pelvic-health" },
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
  { name: "Low Back Pain", path: "/what-we-treat" },
  { name: "Neck & Head Pain", path: "/what-we-treat" },
  { name: "Shoulder Pain", path: "/what-we-treat" },
  { name: "Ankle & Foot Pain", path: "/what-we-treat" },
  { name: "Knee Pain", path: "/what-we-treat" },
  { name: "Muscle Pain", path: "/what-we-treat" },
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
    <header className='sticky top-0 z-50 px-3 md:px-5 lg:px-6'>
      <div className='mx-auto hidden max-w-[1620px] overflow-hidden rounded-t-[24px] bg-[#0b548a] md:block'>
        <Container>
          <div className='flex h-11 items-center justify-between'>
            <span className='text-xs font-medium text-slate-300'>
              Benin City, Edo State
            </span>

            <div className='flex items-center gap-6'>
              <NavLink
                to='/patient-info'
                className='text-xs font-medium text-slate-300 transition hover:text-white'
              >
                Patient Information
              </NavLink>

              <NavLink
                to='/faq'
                className='text-xs font-medium text-slate-300 transition hover:text-white'
              >
                FAQ
              </NavLink>

              <NavLink
                to='/contact'
                className='text-xs font-medium text-slate-300 transition hover:text-white'
              >
                Contact
              </NavLink>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className='flex items-center gap-1.5 text-xs font-semibold text-white transition hover:text-blue-200'
              >
                <Phone className='h-3.5 w-3.5' />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={`mx-auto max-w-[1620px] rounded-t-[24px] border-x border-b border-slate-200/80 bg-white/95 transition-all duration-300 md:rounded-t-none md:rounded-b-[24px] ${
          scrolled ?
            "shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "shadow-[0_1px_0_rgba(15,23,42,0.04)]"
        }`}
      >
        <Container>
          <div className='flex h-[76px] items-center justify-between'>
            <NavLink
              to='/'
              onClick={closeMenu}
              className='group flex items-center gap-3'
            >
              <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 ring-1 ring-blue-100 transition group-hover:bg-blue-100'>
                <img
                  src='/images/de-ines.jpeg'
                  alt='DE-INES Physiotherapy'
                  className='h-9 w-9 object-contain'
                />
              </div>

              <div className='leading-tight'>
                <div className='text-xl font-black tracking-tight text-blue-700'>
                  DE-INES
                </div>

                <div className='text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500'>
                  Physiotherapy
                </div>
              </div>
            </NavLink>

            <nav className='hidden items-center gap-2 lg:flex'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                About
              </NavLink>

              <div className='group relative'>
                <NavLink
                  to='/services'
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? linkActive : linkInactive
                    } inline-flex items-center gap-1.5`
                  }
                >
                  Physiotherapy
                  <ChevronDown className='h-4 w-4 transition-transform duration-200 group-hover:rotate-180' />
                </NavLink>

                <div className='pointer-events-none invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                  <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]'>
                    <div className='border-b border-slate-200 bg-slate-950 px-5 py-4'>
                      <p className='text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300'>
                        Physiotherapy
                      </p>

                      <p className='mt-1 text-sm text-slate-300'>
                        Clinical services & rehabilitation
                      </p>
                    </div>

                    <div className='p-2'>
                      {physiotherapyServices.map((service) => (
                        <NavLink
                          key={service.path}
                          to={service.path}
                          className='block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700'
                        >
                          {service.name}
                        </NavLink>
                      ))}

                      <NavLink
                        to='/services'
                        className='mt-1 flex items-center justify-between rounded-xl border-t border-slate-200 px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50'
                      >
                        <span>View all services</span>
                        <ChevronDown className='h-4 w-4 -rotate-90' />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group relative'>
                <NavLink
                  to='/what-we-treat'
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? linkActive : linkInactive
                    } inline-flex items-center gap-1.5`
                  }
                >
                  What We Treat
                  <ChevronDown className='h-4 w-4 transition-transform duration-200 group-hover:rotate-180' />
                </NavLink>

                <div className='pointer-events-none invisible absolute left-1/2 top-full w-[300px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                  <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]'>
                    <div className='border-b border-slate-200 bg-slate-950 px-5 py-4'>
                      <p className='text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300'>
                        Conditions
                      </p>

                      <p className='mt-1 text-sm text-slate-300'>
                        Common pain areas & concerns
                      </p>
                    </div>

                    <div className='p-2'>
                      {treatments.map((treatment) => (
                        <NavLink
                          key={treatment.name}
                          to={treatment.path}
                          className='block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700'
                        >
                          {treatment.name}
                        </NavLink>
                      ))}

                      <NavLink
                        to='/what-we-treat'
                        className='mt-1 flex items-center justify-between rounded-xl border-t border-slate-200 px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50'
                      >
                        <span>View all conditions</span>
                        <ChevronDown className='h-4 w-4 -rotate-90' />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink
                to='/training'
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Training
              </NavLink>
            </nav>

            <NavLink
              to='/contact#contact-form'
              className='hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_25px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_16px_30px_rgba(37,99,235,0.32)] lg:inline-flex'
            >
              <Calendar className='h-4 w-4' />
              Book Appointment
            </NavLink>

            {!menuOpen && (
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className='relative z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white shadow-[0_12px_20px_rgba(29,78,216,0.25)] transition hover:bg-blue-800 lg:hidden'
                aria-label='Open menu'
                aria-expanded={false}
              >
                <Menu className='h-5 w-5' />
              </button>
            )}
          </div>
        </Container>
      </div>

      {menuOpen && (
        <>
          <div
            className='fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden'
            onClick={closeMenu}
          />

          <div className='fixed right-0 top-0 z-40 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl lg:hidden'>
            <div className='flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 bg-slate-950 px-5 text-white'>
              <div className='flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-white/10'>
                  <img
                    src='/images/de-ines.jpeg'
                    alt='DE-INES Physiotherapy'
                    className='h-7 w-7 object-contain'
                  />
                </div>
                <span className='text-sm font-bold tracking-wide'>DE-INES</span>
              </div>

              <button
                onClick={closeMenu}
                className='rounded-full p-2 text-slate-200 transition hover:bg-white/10'
                aria-label='Close menu'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <nav className='flex flex-col gap-2 px-4 py-5'>
              <NavLink
                to='/'
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-full px-4 py-3 text-base font-medium transition ${
                    isActive ?
                      "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to='/about'
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-full px-4 py-3 text-base font-medium transition ${
                    isActive ?
                      "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                About
              </NavLink>

              <div className='rounded-2xl border border-slate-200 bg-slate-50'>
                <button
                  type='button'
                  onClick={() => setMobilePhysioOpen((open) => !open)}
                  className='flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-semibold text-slate-800'
                >
                  <span>Physiotherapy</span>
                  {mobilePhysioOpen ?
                    <Minus className='h-5 w-5 text-blue-700' />
                  : <Plus className='h-5 w-5 text-slate-600' />}
                </button>

                {mobilePhysioOpen && (
                  <div className='border-t border-slate-200 px-3 pb-3 pt-2'>
                    <NavLink
                      to='/services'
                      onClick={closeMenu}
                      className='block rounded-xl px-3 py-3 text-sm font-semibold text-blue-700 hover:bg-white'
                    >
                      All services
                    </NavLink>

                    {physiotherapyServices.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={closeMenu}
                        className='block rounded-xl px-3 py-3 text-sm leading-5 text-slate-600 transition hover:bg-white hover:text-blue-700'
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <div className='rounded-2xl border border-slate-200 bg-slate-50'>
                <button
                  type='button'
                  onClick={() => setMobileTreatOpen((open) => !open)}
                  className='flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-semibold text-slate-800'
                >
                  <span>What We Treat</span>
                  {mobileTreatOpen ?
                    <Minus className='h-5 w-5 text-blue-700' />
                  : <Plus className='h-5 w-5 text-slate-600' />}
                </button>

                {mobileTreatOpen && (
                  <div className='border-t border-slate-200 px-3 pb-3 pt-2'>
                    <NavLink
                      to='/what-we-treat'
                      onClick={closeMenu}
                      className='block rounded-xl px-3 py-3 text-sm font-semibold text-blue-700 hover:bg-white'
                    >
                      All conditions
                    </NavLink>

                    {treatments.map((treatment) => (
                      <NavLink
                        key={treatment.name}
                        to={treatment.path}
                        onClick={closeMenu}
                        className='block rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-white hover:text-blue-700'
                      >
                        {treatment.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to='/training'
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-full px-4 py-3 text-base font-medium transition ${
                    isActive ?
                      "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                Training
              </NavLink>

              <NavLink
                to='/contact'
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-full px-4 py-3 text-base font-medium transition ${
                    isActive ?
                      "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to='/patient-info'
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-full px-4 py-3 text-base font-medium transition ${
                    isActive ?
                      "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                Patient Information
              </NavLink>

              <NavLink
                to='/faq'
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-full px-4 py-3 text-base font-medium transition ${
                    isActive ?
                      "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                FAQ
              </NavLink>

              <NavLink
                to='/contact#contact-form'
                onClick={closeMenu}
                className='mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-center text-sm font-bold text-white shadow-[0_12px_25px_rgba(37,99,235,0.28)] transition hover:bg-blue-700'
              >
                <Calendar className='h-4 w-4' />
                Book Appointment
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
