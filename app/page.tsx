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
    <div className="bg-white min-h-screen selection:bg-black selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
          <div className="text-[60vh] font-black select-none">X</div>
        </div>
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none border-12 md:border-20 border-black p-4 md:p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_#ec4899] pointer-events-auto">
            System_Protocol: v.2.0.6
          </div>
          <div className="text-black text-[10px] font-black text-right uppercase bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Status: Active <br />
            Auth: Admin_Chhayly
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 w-fit">
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
                  className="w-4 h-4 border-2 border-black bg-pink-500"
                />
              ))}
            </div>
          </div>
          <div className="bg-cyan-400 text-black px-6 py-2 text-xs font-[1000] uppercase italic border-4 border-black shadow-[6px_6px_0px_0px_#000]">
            Ready_For_Deployment
          </div>
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-100 hidden lg:block"
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
