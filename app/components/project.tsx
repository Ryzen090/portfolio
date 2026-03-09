"use client";

import { useState } from "react";
import { PROJECTS } from "../data";
import Image from "../utils/Image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Project() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto text-[#0B1C2F]">
      <header className="mb-24 relative flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#0B1C2F] pb-16">
        <div className="relative group">
          <div className="absolute -top-12 left-0 bg-[#0B1C2F] text-[#FFD966] px-2 py-0.5 font-mono text-[10px] uppercase font-black italic">
            System_Report: #8829-X
          </div>
          <h2 className="text-8xl font-black uppercase tracking-tighter leading-none italic">
            SYSTEM PROJECTS
          </h2>
          <p className="mt-4 font-mono text-xs font-bold max-w-sm border-l-4 border-[#2E8B57] pl-4">
            A collection of production-ready projects built with modern frontend
            technologies, focusing on performance, scalability, and clean
            architecture.
          </p>
        </div>

        <div className="flex gap-2 font-mono text-xs">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-1 border-2 border-[#0B1C2F] ${viewMode === "grid" ? "bg-[#0B1C2F] text-[#FFD966]" : ""}`}
          >
            GRID
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-1 border-2 border-[#0B1C2F] ${viewMode === "list" ? "bg-[#0B1C2F] text-[#FFD966]" : ""}`}
          >
            LIST
          </button>
        </div>
      </header>

      <LayoutGroup>
        <motion.div
          layout
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              : "flex flex-col gap-4"
          }
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`border-4 border-[#0B1C2F] p-6 bg-white shadow-[8px_8px_0px_0px_#0B1C2F] hover:shadow-[12px_12px_0px_0px_#E23636] transition-all group ${
                  viewMode === "list" ? "flex items-center gap-6 py-4" : ""
                }`}
              >
                <div
                  className={`${viewMode === "grid" ? "h-48 w-full mb-6" : "h-16 w-16"} bg-gray-200 border-2 border-[#0B1C2F] overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-[#FFD966] opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="flex items-center justify-center h-full font-black text-gray-400">
                    <Image
                      alt={project.title}
                      src={project.image}
                      className="w-full h-full object-cover grayscale-0 transition-all duration-500 opacity-80"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-[#E23636] transition-colors">
                    {project.title}
                  </h3>
                  {viewMode === "grid" && (
                    <p className="text-sm font-mono mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  )}
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 border border-[#0B1C2F] text-[10px] font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <div className="mt-20 border-l-16 border-[#0B1C2F] pl-8 max-w-xl">
        <p className="font-mono text-xs font-black uppercase italic leading-relaxed text-gray-500">
          Projects built with a focus on real-world usability, clean
          architecture, and scalable frontend systems.
        </p>
      </div>
    </section>
  );
}
