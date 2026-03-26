import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const hiddenLinks: Record<string, string> = {
    "/register": "Register",
    "/login": "Login",
  };

  const path = location.pathname;

  if (hiddenLinks[path]) {
    return null;
  }

  return (
    <header className="border-b z-1000 border-gray-200 sticky top-0 bg-white">
      <div className="max-w-480 mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="w-50.25 h-max"
            aria-label="home page header link"
          >
            <img src={logo} alt="Logo" className="w-full h-max" aria-hidden />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              aria-label="Log in"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log In
            </Link>
            <Link
              to="/register"
              type="button"
              aria-label="Register"
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              id="mobile-menu"
              aria-label="Mobile Toggle menu"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <menu className="bg-white absolute left-0 w-full px-4 border-b border-gray-200 md:hidden">
            <div
              aria-label="mobile menu links"
              className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#800020] border-l-2 border-[#800020] pl-2"
                          : "text-gray-700 hover:text-gray-900"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="flex gap-3 mt-4">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    type="button"
                    aria-label="Log in"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 flex-1"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Register"
                    className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded"
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          </menu>
        )}
      </div>
    </header>
  );
}

export default Header;
