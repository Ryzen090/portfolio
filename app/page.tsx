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
    <div className="bg-white min-h-screen selection:bg-black selection:text-white overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-100 hidden lg:block"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <Page />
    </div>
  );
}
