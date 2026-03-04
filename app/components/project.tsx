"use client";

import Image from "./utils/Image";
import { PROJECTS } from "../data";

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

        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <Image
                  alt={project.title}
                  src={project.image}
                  className="h-48 sm:h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-orange-600 line-clamp-1">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
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
