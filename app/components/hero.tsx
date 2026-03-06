"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-[#fafafa] overflow-hidden flex flex-col font-mono selection:bg-cyan-400">
      <div className="absolute inset-0 z-50 pointer-events-none border-16 border-black flex flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <div className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_#ec4899]">
            System_Protocol: v.2.0.6
          </div>
          <div className="text-black text-[10px] font-black text-right uppercase bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Status: Active <br />
            Auth: Admin_Chhayly
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="bg-black text-white p-4 border-2 border-white outline outline-black">
            <p className="text-[10px] font-black mb-2 uppercase">
              Core_Metrics
            </p>
            <div className="flex gap-1">
              {[40, 70, 45, 90, 65].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: h / 4 }}
                  className="w-2 bg-cyan-400"
                />
              ))}
            </div>
          </div>
          <div className="bg-pink-500 text-black px-4 py-2 text-xs font-[1000] uppercase italic border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Ready_For_Deployment
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <div className="text-[60vh] font-black">X</div>
        </div>
      </div>

      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border-2 border-dashed border-black/10 rounded-full animate-spin-slow pointer-events-none" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="bg-black text-cyan-400 px-2 py-1 text-xs font-black uppercase tracking-widest">
              Fullstack_Creative
            </span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[13vw] font-[1000] text-black leading-[0.8] tracking-tighter uppercase italic select-none"
          >
            CHHAY
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px black" }}
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
            <div className="bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-crosshair">
              <p className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-black">
                Frontend Developer
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <aside className="absolute left-12 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-12">
        <div className="space-y-4">
          {["React", "Next.js", "TypeScript"].map((tech, i) => (
            <div key={tech} className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-black" />
              <p className="text-sm font-black uppercase tracking-tighter">
                <span className="text-pink-500 mr-2">0{i + 1}</span> {tech}
              </p>
            </div>
          ))}
        </div>

        <div className="rotate-90 origin-left translate-x-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">
            Based_In_Phnom_Penh_KH
          </p>
        </div>
      </aside>
    </main>
  );
}
