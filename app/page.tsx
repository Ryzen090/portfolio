"use client";

import Page from "./components";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const xSpring = useSpring(cursorX, springConfig);
  const ySpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="bg-[#FEFBF4] min-h-screen selection:bg-[#E23636] selection:text-[#FFD966] overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#0B1C2F 1px, transparent 1px), linear-gradient(90deg, #0B1C2F 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
          <div className="text-[60vh] font-black select-none text-[#0B1C2F]">
            X
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none border-12 md:border-20 border-[#0B1C2F] p-4 md:p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-[#0B1C2F] text-[#FFD966] px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_#E23636] pointer-events-auto">
            System: v.0.1.6
          </div>
          <div className="text-[#0B1C2F] text-[10px] font-black text-right uppercase bg-white border-2 border-[#0B1C2F] p-2 shadow-[4px_4px_0px_0px_#E23636] pointer-events-auto">
            Status: Active <br />
            Auth: Chhayly
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black bg-[#0B1C2F] text-[#FFD966] px-2 py-0.5 w-fit">
              CORE_UPTIME
            </span>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-4 h-4 border-2 border-[#0B1C2F] bg-[#E03A3C]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#E03A3C] border-4 border-[#0A1A2F] text-white font-black text-xl shadow-[4px_4px_0px_0px_#0A1A2F] z-50 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
      >
        ↑
      </motion.button>

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#E23636] rounded-full pointer-events-none z-100 hidden lg:block"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <div className="relative z-10">
        <Page />
      </div>
    </div>
  );
}
