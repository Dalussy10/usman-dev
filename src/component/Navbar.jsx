import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white shadow-lg backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="!no-underline flex items-center gap-3"
        >
          <img
            src="/IMG/uDev.jpg"
            alt="U-Dev logo"
            className="h-10 w-10 rounded-xl object-cover"
          />

          <div className="hidden leading-tight sm:block">
            <span className="block text-lg font-bold tracking-tight !text-white">
              U<span className="text-indigo-500">-</span>Dev
            </span>

            <span className="text-xs !text-gray-400">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium !no-underline transition-colors duration-200 ${
                  isActive
                    ? "!text-white"
                    : "!text-gray-400 hover:!text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Schedule CTA */}
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold !no-underline transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600 !text-white"
                  : "bg-white !text-gray-900 hover:-translate-y-0.5 hover:bg-indigo-500 hover:!text-white"
              }`
            }
          >
            <span>Schedule a Call</span>

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg !text-gray-300 transition hover:bg-white/10 hover:!text-white md:hidden"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium !no-underline transition-colors ${
                    isActive
                      ? "bg-indigo-500/10 !text-indigo-400"
                      : "!text-gray-300 hover:bg-white/5 hover:!text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/schedule"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold !text-white !no-underline transition hover:from-indigo-500 hover:to-purple-500"
            >
              <span>Schedule a Call</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;