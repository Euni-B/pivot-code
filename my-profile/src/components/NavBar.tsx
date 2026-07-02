import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-accent/30 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--navbar-height)] max-w-[var(--container-width)] items-center justify-between px-6 md:px-20">
        {/* Simple diamond logo */}
        <Link
          to="/"
          aria-label="Home"
          onClick={() => setMenuOpen(false)}
          className="text-6xl text-text-primary p-20 transition-transform duration-300 hover:rotate-45"
        >
          ◆
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-base font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition duration-300 hover:text-accent ${
                location.pathname === link.path
                  ? "border-b-2 border-accent text-accent"
                  : "text-text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-text-primary transition duration-300 hover:text-accent md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-accent/20 bg-background px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`transition duration-300 hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;