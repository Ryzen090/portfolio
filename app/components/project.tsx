import Image from "./utils/Image";
import { projects } from "../data";

export default function Project() {
  return (
    <section className="min-h-screen bg-[#f5efe7] px-6 py-48">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl md:text-7xl font-Fugaz text-gray-900 mb-6">
            Projects
          </h2>
          <div className="h-px w-72 bg-linear-to-r from-gray-900 to-transparent"></div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-3"
            >
              <div className="overflow-hidden">
                <Image
                  alt={project.title}
                  src={project.image}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
