import Image from "./utils/Image";
import { projects } from "../data";

export default function Project() {
  return (
    <section className="min-h-screen bg-[#e7e7e7] px-6 py-36">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-5xl md:text-7xl font-Fugaz text-gray-900 tracking-tight">
            Projects
          </h2>
          <div className="h-px w-72 bg-linear-to-r from-gray-900 to-transparent"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <Image
                  alt={project.title}
                  src={project.image}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-orange-600">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
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
