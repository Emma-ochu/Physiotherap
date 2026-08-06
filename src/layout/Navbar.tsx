import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../components/Container";

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

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col leading-none" onClick={handleNavClick}>
            <span className="text-xl font-bold text-blue-700">DE-INES</span>
            <span className="text-[11px] tracking-wider text-slate-500">
              PHYSIOTHERAPY
            </span>
          </NavLink>

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
            href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
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
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleNavClick}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <span className="text-lg font-bold text-blue-700">Menu</span>
          <button
            onClick={handleNavClick}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

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

          <a
            href="https://wa.me/2348174636276?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20DE-INES%20Physiotherapy."
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