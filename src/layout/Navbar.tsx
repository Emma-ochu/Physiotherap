import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../components/Container";
import { WHATSAPP_BOOK } from "../lib/whatsapp";

const routeLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/de-ines.jpeg"
              alt="DE-INES logo"
              className="h-12 w-12 object-contain"
            />

            <div className="leading-tight">
              <div className="text-xl font-bold text-blue-700">
                DE-INES
              </div>

              <div className="text-sm font-medium text-slate-500">
                Physiotherapy
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {routeLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              About
            </button>
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 md:block"
          >
            Book Appointment
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity md:hidden ${
          menuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={handleNavClick}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-2">
            <img
              src="/images/de-ines.jpeg"
              alt="DE-INES logo"
              className="h-9 w-9 object-contain"
            />

            <span className="text-lg font-bold text-blue-700">
              DE-INES
            </span>
          </div>

          <button
            onClick={handleNavClick}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col gap-1 p-4">
          {routeLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={() => scrollToSection("about")}
            className="rounded-xl px-4 py-3 text-left text-base font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
          >
            About
          </button>

          {/* Mobile CTA */}
          <a
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-xl bg-blue-700 px-4 py-3 text-center text-base font-medium text-white transition hover:bg-blue-800"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;