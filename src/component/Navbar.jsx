import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    

<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-lg">

    <nav className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex items-center justify-between h-20">

            {/* ================= LOGO ================= */}
            <Link
                to="/"
                onClick={closeMenu}
                className="group flex items-center gap-3 no-underline"
            >

                <div className="relative">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-indigo-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                    <img
                        src="/IMG/uDev.jpg"
                        alt="U-Dev Logo"
                        className="relative w-11 h-11 rounded-full object-cover border-2 border-indigo-500 group-hover:border-purple-400 transition-colors duration-300"
                    />

                </div>

                <div className="hidden sm:block">

                    <span className="block text-lg font-bold tracking-tight text-white">
                        U<span className="text-indigo-500">-</span>Dev
                    </span>

                    <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Frontend Developer
                    </span>

                </div>

            </Link>


            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden md:flex items-center gap-2 ">

                <Link
                    to="/"
                    className="relative px-4 py-2 text-sm font-medium text-gray-300! hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 no-underline group"
                >
                    Home

                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 -translate-x-1/2 transition-all duration-300"></span>
                </Link>


                <Link
                    to="/about"
                    className="relative px-4 py-2 text-sm font-medium !text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 no-underline group"
                >
                    About

                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 -translate-x-1/2 transition-all duration-300"></span>
                </Link>


                <Link
                    to="/project"
                    className="relative px-4 py-2 text-sm font-medium text-gray-300! hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 no-underline group"
                >
                    Projects

                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 -translate-x-1/2 transition-all duration-300"></span>
                </Link>


                <Link
                    to="/contact"
                    className="relative px-4 py-2 text-sm font-medium text-gray-300! hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 no-underline group"
                >
                    Contact

                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 -translate-x-1/2 transition-all duration-300"></span>
                </Link>


                {/* CTA */}
                <Link
                    to="/schedule"
                    className="group ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 no-underline"
                >
                    Schedule Call

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                    </span>

                </Link>

            </div>


            {/* ================= MOBILE BUTTON ================= */}
            <div className="md:hidden">

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >

                    {isOpen ? (

                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>

                    ) : (

                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>

                    )}

                </button>

            </div>

        </div>

    </nav>


    {/* ================= MOBILE MENU ================= */}
    <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
        }`}
    >

        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-5">

            <div className="flex flex-col gap-2">

                <Link
                    to="/"
                    onClick={closeMenu}
                    className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 no-underline"
                >
                    <span>Home</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                    </span>
                </Link>


                <Link
                    to="/about"
                    onClick={closeMenu}
                    className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 no-underline"
                >
                    <span>About</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                    </span>
                </Link>


                <Link
                    to="/project"
                    onClick={closeMenu}
                    className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 no-underline"
                >
                    <span>Projects</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                    </span>
                </Link>


                <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 no-underline"
                >
                    <span>Contact</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                    </span>
                </Link>


                {/* Mobile CTA */}
                <Link
                    to="/schedule"
                    onClick={closeMenu}
                    className="mt-3 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 no-underline"
                >
                    Schedule a Call
                    <span>→</span>
                </Link>

            </div>

        </div>

    </div>

</header>


  );
};

export default Navbar;
