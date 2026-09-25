import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

const Cont = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />

      {/* Main content */}
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-14 px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-24">
        {/* Left content */}
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <span
              aria-hidden="true"
              className="relative flex h-2.5 w-2.5"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            Available for freelance work
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            I build fast,
            <span className="block text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text">
              beautiful &
            </span>
            accessible interfaces.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            React · JavaScript · Tailwind CSS · Express.js — building
            performance-focused web experiences that turn ideas into
            polished, responsive interfaces.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/project"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gray-950 px-7 py-4 font-semibold text-white no-underline shadow-lg shadow-gray-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View my work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/schedule"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-900 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Let's collaborate
            </Link>
          </div>

          {/* Technology badges */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-400">
              Working with
            </span>

            {["React", "JavaScript", "Tailwind CSS", "Express.js"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          {/* Main image glow */}
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-blue-500/20 blur-3xl"
          />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 p-2 shadow-2xl shadow-gray-900/10">
            <img
              src="/IMG/PROFILE.jpg"
              alt="Usman Dalhat - Frontend Developer"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          {/* Building badge */}
          <div className="absolute -left-3 bottom-10 flex max-w-[210px] items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl shadow-gray-900/10 backdrop-blur-md sm:-left-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Code2 size={20} />
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500">
                Currently building
              </p>
              <p className="text-sm font-bold text-gray-900">
                Web Experiences
              </p>
            </div>
          </div>

          {/* Sparkle badge */}
          <div className="absolute -right-3 top-10 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-xl shadow-gray-900/10 backdrop-blur-md sm:-right-8">
            <Sparkles size={18} className="text-indigo-500" />
            <span>Clean & scalable code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cont;