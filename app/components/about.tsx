"use client";

import { useEffect } from "react";
import Image from "../utils/Image";
import { motion, useSpring, useMotionValue } from "framer-motion";

const SKILLS = [
  { name: "HTML", icon: "/icon/html.png", level: 88, projects: 12 },
  { name: "CSS", icon: "/icon/css.png", level: 90, projects: 15 },
  {
    name: "JavaScript",
    icon: "/icon/javascript.png",
    level: 82,
    projects: 10,
  },
  {
    name: "typescript",
    icon: "/icon/typescript.png",
    level: 82,
    projects: 10,
  },
  {
    name: "Tailwind",
    icon: "/icon/tailwind.png",
    level: 82,
    projects: 10,
  },
  { name: "React", icon: "/icon/react.png", level: 82, projects: 10 },
  {
    name: "Angular",
    icon: "/icon/angular.png",
    level: 95,
    projects: 20,
  },
  { name: "vue", icon: "/icon/vue.png", level: 82, projects: 10 },
];

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

export default function PortfolioPage() {
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
    <main className="bg-[#f3f3f3] text-black min-h-screen selection:bg-pink-500 selection:text-white overflow-x-hidden font-sans">
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
              <span className="text-pink-500 italic">CORES</span>
            </h2>
          </div>

          <div className="hidden lg:block border-4 border-black p-4 bg-yellow-400 shadow-[4px_4px_0px_0px_#000] rotate-3 hover:rotate-0 transition-transform cursor-help">
            <p className="font-mono text-[10px] font-black uppercase max-w-37.5">
              Warning: High-level proficiency detected in 8+ modules. Proceed
              with deployment.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ x: -4, y: -4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-pink-500 translate-x-2 translate-y-2 border-4 border-black" />

              <div className="relative border-4 border-black bg-white p-6 transition-all group-hover:bg-cyan-50">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-16 h-16 border-2 border-black p-2 bg-white grayscale group-hover:grayscale-0 group-hover:rotate-12 transition-all duration-300">
                    <Image alt={skill.name} src={skill.icon} />
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-[10px] font-black uppercase leading-none">
                      Proficiency
                    </span>
                    <span className="text-2xl font-black font-mono leading-none">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter group-hover:text-pink-500 transition-colors">
                  {skill.name}
                </h3>

                <div className="relative w-full h-8 bg-black border-2 border-black overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)`,
                      backgroundSize: "10px 10px",
                    }}
                  />

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="relative h-full bg-cyan-400 border-r-4 border-black flex items-center justify-end px-2"
                  >
                    <div className="absolute inset-0 bg-white/20 h-0.5 top-1/2 -translate-y-1/2" />
                  </motion.div>
                </div>

                <div className="mt-4 flex justify-between font-mono text-[10px] font-black uppercase">
                  <span>Core_Module</span>
                  <span className="text-pink-500">v{skill.projects}.0</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 border-8 border-black p-10 bg-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-[12px_12px_0px_0px_#ec4899]">
          <div className="text-5xl font-black uppercase italic leading-none max-w-xl">
            High{" "}
            <span className="text-cyan-400 underline decoration-black">
              Precision
            </span>{" "}
            <br />
            Technical Architecture.
          </div>
          <div className="flex flex-col items-end gap-2 text-right font-mono text-[10px] font-black uppercase">
            <span>Build: Prod_V1.02</span>
            <span>Env: Dark_Ether</span>
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
