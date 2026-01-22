import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
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
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Log In
            </button>
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              id="mobile-menu"
              aria-label="Mobile Toggle menu"
              className="text-gray-700 hover:text-gray-900"
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
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-red-600 border-l-2 border-red-600 pl-2"
                      : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                aria-label="Log in"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 flex-1"
              >
                Log In
              </button>
              <button
                type="button"
                aria-label="Register"
                className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
