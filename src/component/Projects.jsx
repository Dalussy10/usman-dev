
import { Link } from "react-router-dom";
import {
  ExternalLink,
  GitBranch,
  FolderGit2,
  Sparkles,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blue Homes",
      year: "2026",
      category: "Real Estate Platform",
      description:
        "A modern real estate platform for exploring, buying, selling, and renting properties through a clean and responsive user interface.",
      image: "/IMG/BH1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://bluehomes.netlify.app",
      githubUrl: "https://github.com/dalussy10/bluehomes",
    },
    {
      title: "FUDNEWS",
      year: "2026",
      category: "Full-Stack News Platform",
      description:
        "A full-stack news platform for publishing and presenting articles and breaking news through a structured and responsive interface.",
      image: "/IMG/FN1.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Express.js",
        "Node.js",
        "PostgreSQL",
      ],
      liveUrl: "https://fudnews.onrender.com",
      githubUrl: "https://github.com/dalussy10/Fudnews",
    },
    {
      title: "Bakery Delight",
      year: "2026",
      category: "Bakery Website",
      description:
        "A responsive bakery website designed to showcase products and provide customers with a clean and engaging browsing experience.",
      image: "/IMG/BD1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://bakery-delight10.netlify.app",
      githubUrl: "https://github.com/dalussy10/bakerydelight",
    },
    {
      title: "DalussyWears",
      year: "2026",
      category: "E-Commerce Platform",
      description:
        "A fashion e-commerce platform featuring product browsing, shopping functionality, and an administrative interface for managing an online clothing store.",
      image: "/IMG/DW1.png",
      technologies: [
        "Express.js",
        "EJS",
        "JavaScript",
        "Tailwind CSS",
      ],
      liveUrl: "https://dalussywears.netlify.app",
      githubUrl: "https://github.com/dalussy10/dalussywears",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            <Sparkles size={15} />
            My Work
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="text-indigo-600">Projects</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects I've built while developing my skills in
            frontend development, responsive design, backend development, and
            full-stack applications.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-950">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                    <FolderGit2 size={19} />
                  </div>
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-7 flex flex-wrap gap-3 border-t border-gray-100 pt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600"
                      >
                        Live Demo

                        <ExternalLink
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                      >
                        <GitBranch size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
            Let's discuss your idea and explore how I can help turn it into a
            functional web experience.
          </p>

          <Link
            to="/schedule"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Let's work together
            <ExternalLink size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;

