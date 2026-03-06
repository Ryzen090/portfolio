"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col font-mono selection:bg-[#E23636] selection:text-[#FFD966]">
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border-2 border-dashed border-[#0B1C2F]/10 rounded-full animate-spin-slow pointer-events-none" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="bg-[#0B1C2F] text-[#FFD966] px-2 py-1 text-xs font-black uppercase tracking-widest">
              Fullstack_Creative
            </span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[13vw] font-[1000] text-[#0B1C2F] leading-[0.8] tracking-tighter uppercase italic select-none"
          >
            CHHAY
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #0B1C2F" }}
            >
              LY
            </span>
          </motion.h1>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center pointer-events-auto"
          >
            <div className="bg-white border-4 border-[#0B1C2F] p-6 shadow-[12px_12px_0px_0px_#E23636] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-crosshair">
              <p className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-[#0B1C2F]">
                Frontend Developer
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <aside className="absolute left-12 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-12">
        <div className="space-y-4">
          {["React", "Next.js", "Angular"].map((tech, i) => (
            <div key={tech} className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#0B1C2F]" />
              <p className="text-sm font-black uppercase tracking-tighter text-[#0B1C2F]">
                <span className="text-[#E23636] mr-2">0{i + 1}</span> {tech}
              </p>
            </div>
          ))}
        </div>

        <div className="rotate-90 origin-left translate-x-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0B1C2F]/30">
            Based_In_Phnom_Penh_KH
          </p>
        </div>
      </aside>
    </main>
  );
}
