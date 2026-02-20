import { projects } from "../data";

export default function Project() {
  return (
    <div
      className="min-h-screen p-4 flex items-center"
      style={{ backgroundColor: "#f5efe7" }}
    >
      <section className="max-w-7xl mx-auto w-full py-12 md:py-20">
        <div className="mb-12">
          <h2 className="text-5xl font-Fugaz md:text-7xl text-gray-900">
            Never Say Never
          </h2>
          <div className="h-px w-44 bg-linear-to-r from-gray-900 to-transparent"></div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 cursor-pointer"
          style={{ alignContent: "center" }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-gray-800 rounded-lg text-sm font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/0 via-yellow-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:via-yellow-500/5 group-hover:to-red-500/5 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
