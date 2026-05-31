function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Vite, and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      title: "Task Management App",
      description:
        "A modern task manager with responsive UI and local storage.",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application using public APIs.",
      tech: ["React", "API", "Tailwind"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      {/* Background Transition */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-50 via-white to-white"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of projects I've built while learning and
            exploring modern web development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                bg-white
                border border-slate-200
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Thumbnail */}
              <div className="h-52 bg-linear-to-br from-indigo-500 to-purple-500"></div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        rounded-full
                        bg-slate-100
                        text-slate-700
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className="
                    text-indigo-600
                    font-semibold
                    group-hover:translate-x-1
                    transition-transform
                  "
                >
                  View Project →
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;