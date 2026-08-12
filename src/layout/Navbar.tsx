import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

/* shared desktop-link classes */
const linkBase =
  "relative rounded-lg px-4 py-2 text-[15px] font-medium transition-all";
const linkInactive =
  "text-slate-600 hover:text-blue-700 hover:bg-blue-50/50";
const linkActive = "text-blue-700";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
      return;
    }
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50">
      {/* ═══════════════════════════════════════
          TOP BAR  →  dark, premium, compact
         ═══════════════════════════════════════ */}
      <div className="hidden bg-blue-800 md:block">
        <Container>
          <div className="flex h-11 items-center justify-between">
            <span className="text-xs font-medium text-blue-200">
              Benin City, Edo State
            </span>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("patient-information")}
                className="text-xs font-medium text-blue-100 transition hover:text-white"
              >
                Patient Information
              </button>

              <button
                onClick={() => scrollToSection("faq")}
                className="text-xs font-medium text-blue-100 transition hover:text-white"
              >
                FAQ
              </button>

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

      {/* ═══════════════════════════════════════
          MAIN NAV  →  frosted glass on scroll
         ═══════════════════════════════════════ */}
      <div
        className={`border-b border-slate-100 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-lg backdrop-blur-md bg-white/95"
            : "shadow-sm"
        }`}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between">
            {/* ── Logo ── */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
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

            {/* ── Desktop Links ── */}
            <nav className="hidden items-center gap-1 lg:flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
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

              {/* About — restored to desktop, consistent with mobile */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
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

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                {({ isActive }) => (
                  <>
                    Physiotherapy
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-700" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink
                to="/what-we-treat"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                {({ isActive }) => (
                  <>
                    What We Treat
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-700" />
                    )}
                  </>
                )}
              </NavLink>
            </nav>

            {/* ── Desktop CTA ── */}
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg lg:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
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

      {/* ═══════════════════════════════════════
          MOBILE DRAWER  →  slide-in from right
         ═══════════════════════════════════════ */}
      {menuOpen && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          />

          {/* drawer */}
          <div className="fixed right-0 top-0 z-40 flex h-full w-[80%] max-w-sm flex-col bg-white shadow-2xl lg:hidden">
            <div className="flex h-[72px] items-center justify-end px-6">
              <button
                onClick={closeMenu}
                className="rounded-xl p-2.5 text-slate-700 transition hover:bg-slate-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-6 py-2">
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


              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                Physiotherapy
              </NavLink>

              <NavLink
                to="/what-we-treat"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                What We Treat
              </NavLink>

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