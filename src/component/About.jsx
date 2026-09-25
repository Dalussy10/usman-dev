
import {
  Code2,
  Database,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";

const About = () => {
  const coreStack = [
    {
      name: "React",
      description: "Component-based interfaces",
      icon: Code2,
    },
    {
      name: "JavaScript",
      description: "Interactive web experiences",
      icon: Sparkles,
    },
    {
      name: "Tailwind CSS",
      description: "Responsive UI development",
      icon: Palette,
    },
    {
      name: "Express.js",
      description: "Backend and API development",
      icon: Server,
    },
  ];

  const exploring = [
    {
      name: "Node.js",
      icon: Server,
    },
    {
      name: "PostgreSQL",
      icon: Database,
    },
    {
      name: "Web Performance",
      icon: Gauge,
    },
    {
      name: "Design Systems",
      icon: Layers3,
    },
  ];

  return (
    <main className="relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            <Sparkles size={15} />
            About Me
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="text-indigo-600">Experience</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Building modern, responsive, and high-performance web experiences
            with clean, maintainable, and scalable code.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* About card */}
          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <Code2 size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Frontend Developer
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-950">
                  React-focused Developer
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Hey, I'm{" "}
                <strong className="font-semibold text-gray-900">
                  Usman Dalhat
                </strong>
                , a React-focused Frontend Developer based in Kaduna. I enjoy
                building responsive, maintainable, and user-friendly
                interfaces that work smoothly across different devices.
              </p>

              <p>
                My focus is on turning ideas and designs into functional web
                experiences while paying close attention to performance,
                accessibility, responsive design, and clean code.
              </p>

              <p>
                I'm also expanding beyond frontend development by working with
                backend technologies, APIs, databases, and the tools required
                to build complete web applications.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-gray-50">
              <div className="px-3 py-5 text-center">
                <p className="text-2xl font-extrabold text-indigo-600">
                  4+
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Projects
                </p>
              </div>

              <div className="px-3 py-5 text-center">
                <p className="text-2xl font-extrabold text-indigo-600">
                  React
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Primary Stack
                </p>
              </div>

              <div className="px-3 py-5 text-center">
                <p className="text-2xl font-extrabold text-indigo-600">
                  Full-Stack
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Growing Focus
                </p>
              </div>
            </div>
          </article>

          {/* Skills */}
          <div className="space-y-8">
            {/* Core stack */}
            <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                    Technologies
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-950">
                    Core Stack
                  </h2>
                </div>

                <MonitorSmartphone
                  size={28}
                  className="text-indigo-500"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {coreStack.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {technology.name}
                          </h3>

                          <p className="mt-0.5 text-xs text-gray-500">
                            {technology.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            {/* Currently exploring */}
            <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
                    Learning & Growth
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-950">
                    Currently Exploring
                  </h2>
                </div>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                I'm continuously expanding my development toolkit and learning
                technologies that help me build more scalable and complete
                applications.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {exploring.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <span
                      key={technology.name}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      <Icon size={15} />
                      {technology.name}
                    </span>
                  );
                })}
              </div>
            </article>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-purple-50 p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            Focused on building better web experiences.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            I care about writing clean code, creating intuitive interfaces,
            learning continuously, and delivering products that are useful to
            the people who use them.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;

