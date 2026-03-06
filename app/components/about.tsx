"use client";

import {
  motion,
  useSpring,
  LayoutGroup,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { SKILLS } from "../data";
import { useEffect } from "react";

const PixelGrid = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), 
                          linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

export default function About() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <main className="bg-white border-y-12 border-black text-black min-h-screen selection:bg-pink-500 selection:text-white overflow-x-hidden font-sans">
      <PixelGrid />

      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed w-8 h-8 border-4 border-black bg-pink-500 pointer-events-none z-50 mix-blend-multiply hidden md:block"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto border-black">
        <header className="mb-24 flex items-start justify-between">
          <div className="relative group">
            <h2 className="text-9xl font-black uppercase tracking-tighter leading-[0.75]">
              SYSTEM
              <br />
              <span className="text-pink-500 italic">CAPABILITIES</span>
            </h2>
          </div>

          <div className="hidden lg:block border-4 border-black p-4 bg-yellow-400 shadow-[4px_4px_0px_0px_#000] rotate-3 hover:rotate-0 transition-transform cursor-help">
            <p className="font-mono text-[10px] font-black uppercase max-w-37.5">
              Profile Analysis: Experienced across multiple modern frontend
              frameworks and technologies.
            </p>
          </div>
        </header>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 p-4 md:p-10"
          >
            <AnimatePresence mode="popLayout">
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-200" />

                  <div className="relative bg-white border-4 border-black p-6 flex flex-col min-h-80 z-10">
                    <div className="flex justify-between items-center mb-6 border-b-2 border-black/10 pb-2">
                      <span className="font-mono text-[9px] font-black bg-black text-white px-1.5 py-0.5">
                        NODE::{skill.name.substring(0, 3).toUpperCase()}
                      </span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                      </div>
                    </div>

                    <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-2 group-hover:text-pink-500 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] font-mono font-bold opacity-40 uppercase mb-8">
                      Technical_Capability_Matrix
                    </p>

                    <div className="mt-auto space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="font-mono text-[10px] font-black uppercase text-cyan-500">
                          Power_Level
                        </span>
                        <span className="text-4xl font-black leading-none tracking-tighter">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-10 w-full border-4 border-black bg-black relative p-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className="h-full bg-pink-500 flex items-center justify-end overflow-hidden"
                        >
                          <div
                            className="w-full h-full opacity-30 bg-[linear-gradient(90deg,transparent_0%,#fff_50%,transparent_100%)] bg-size-[200%_100%] animate-[shimmer_2s_infinite]"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 10px)",
                            }}
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-2 border-t-4 border-black pt-2 mt-4">
                        <div className="border-r-2 border-black/20">
                          <p className="text-[8px] font-black opacity-40 uppercase">
                            Deployments
                          </p>
                          <p className="font-mono text-xs font-black">
                            {skill.projects}+
                          </p>
                        </div>
                        <div className="pl-4">
                          <p className="text-[8px] font-black opacity-40 uppercase">
                            Module
                          </p>
                          <p className="font-mono text-xs font-black">STABLE</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-0 h-0 border-t-20 border-t-transparent border-r-20 border-r-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-24 border-8 border-black p-10 bg-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-[12px_12px_0px_0px_#ec4899]">
          <div className="text-5xl font-black uppercase italic leading-none max-w-xl">
            Precision
            <span className="text-cyan-400 underline decoration-black">
              Built
            </span>
            <br />
            Frontend Architecture.
          </div>
          <div className="flex flex-col items-end gap-2 text-right font-mono text-[10px] font-black uppercase">
            <span>Build: Portfolio_V1.0</span>
            <span>Env: Frontend_Engineering</span>
            <div className="w-20 h-4 bg-black flex items-center px-1 gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
