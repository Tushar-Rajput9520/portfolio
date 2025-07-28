import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // You can use any icon library

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = ["Home", "About", "Projects", "Skills", "Certifications", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-[var(--color-navbar-scrolled)] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]">
          <h2><b>TUSHAR</b></h2>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-navbar-scrolled)] text-white px-6 py-4 space-y-4">
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="block hover:text-[var(--color-primary)]"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
