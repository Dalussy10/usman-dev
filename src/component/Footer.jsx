import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* CTA */}
        <div className="py-20 text-center">
          <span className="mb-5 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
            Let's work together
          </span>

          <h2 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              exceptional.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
            Have an idea, project, or business that needs a modern web
            experience? Let's turn it into reality.
          </p>

          <Link
            to="/schedule"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-600/20 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Get in touch

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Footer Main */}
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-2xl font-bold text-white no-underline"
            >
              U<span className="text-indigo-500">-</span>Dev
            </Link>

            <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
              React-focused frontend developer building fast, accessible, and
              beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <nav aria-label="Footer navigation">
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-gray-400 no-underline transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-gray-400 no-underline transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  About
                </Link>

                <Link
                  to="/project"
                  className="text-gray-400 no-underline transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Projects
                </Link>

                <Link
                  to="/schedule"
                  className="text-gray-400 no-underline transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <div className="flex flex-wrap gap-3">
              {/* X */}
              <a
                href="https://x.com/Dal_ussy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my X profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                𝕏
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/usman.dalhat.142"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Facebook profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600"
              >
                f
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ussman-dalhat-b7b4b1270"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700"
              >
                in
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349014755133"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact me on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-600"
              >
                WA
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm md:flex-row">
          <p className="text-center text-gray-500 md:text-left">
            © {currentYear} U-Dev. All rights reserved.
          </p>

          <p className="text-center text-gray-500">
            Built with
            <span className="mx-1 text-gray-300">React</span>
            &
            <span className="mx-1 text-gray-300">Tailwind CSS</span>
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-gray-400 no-underline transition-colors duration-300 hover:text-white"
          >
            Back to top

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;