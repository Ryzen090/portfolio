"use client";

import { useState } from "react";
import { PROJECTS } from "../data";
import Image from "../utils/Image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Project() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto   text-black">
      <header className="mb-24 relative flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-black pb-16">
        <div className="relative group">
          <div className="absolute -top-12 left-0 bg-black text-white px-2 py-0.5 font-mono text-[10px] uppercase font-black italic">
            Report_ID: #8829-X
          </div>
          <h2 className="text-8xl font-black uppercase tracking-tighter leading-none italic">
            PROJECTS
          </h2>
          <p className="mt-4 font-mono text-xs font-bold max-w-sm border-l-4 border-cyan-400 pl-4">
            Multi-threaded proficiency analysis. System stability verified
            across modules.
          </p>
        </div>

        <div className="flex gap-2 font-mono text-xs">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-1 border-2 border-black ${viewMode === "grid" ? "bg-black text-white" : ""}`}
          >
            GRID
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-1 border-2 border-black ${viewMode === "list" ? "bg-black text-white" : ""}`}
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
                className={`border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#ec4899] transition-all group ${
                  viewMode === "list" ? "flex items-center gap-6 py-4" : ""
                }`}
              >
                <div
                  className={`${viewMode === "grid" ? "h-48 w-full mb-6" : "h-16 w-16"} bg-gray-200 border-2 border-black overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="flex items-center justify-center h-full font-black text-gray-400">
                    <Image
                      alt={project.title}
                      src={project.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-pink-500 transition-colors">
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
                        className="px-2 py-0.5 border border-black text-[10px] font-bold"
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

      <div className="mt-20 border-l-16 border-black pl-8 max-w-xl">
        <p className="font-mono text-xs font-black uppercase italic leading-relaxed text-gray-500">
          Technical modules verified for cross-platform integration. Core
          architecture supports scalable micro-frontend deployments and
          high-performance rendering.
        </p>
      </div>
    </section>
  );
}
